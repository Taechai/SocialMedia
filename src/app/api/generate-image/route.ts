import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { prompt, style = 'digital art', size = '1024x1024' } = await request.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    // Demo mode - remove this when you have API credits
    const isDemoMode = process.env.DEMO_MODE === 'true'
    
    if (isDemoMode) {
      // Return a placeholder image URL
      const demoImageUrl = `https://via.placeholder.com/1024x1024/3B82F6/FFFFFF?text=Demo+Mode%0A%0A${encodeURIComponent(style)}%0Aimage%0Awould%0Aappear%0Ahere%0A%0AAdd+billing+to+OpenAI%0Ato+enable+AI+generation`
      
      return NextResponse.json({ imageUrl: demoImageUrl })
    }

    // Enhance the prompt for better social media images
    const enhancedPrompt = `Create a ${style} image for social media: ${prompt}. The image should be eye-catching, professional, and suitable for social media platforms. High quality, vibrant colors, modern design.`

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: size as "1024x1024" | "1792x1024" | "1024x1792",
      quality: "standard",
    })

    const imageUrl = response.data?.[0]?.url

    if (!imageUrl) {
      return NextResponse.json(
        { error: 'Failed to generate image' },
        { status: 500 }
      )
    }

    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error('Error generating image:', error)
    
    // Check if it's a quota error
    if (error instanceof Error && error.message.includes('quota')) {
      return NextResponse.json({
        error: 'OpenAI quota exceeded. Please check your billing at platform.openai.com/account/billing'
      }, { status: 429 })
    }
    
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    )
  }
}
