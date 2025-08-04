import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { prompt, platform, postType, tone, includeHashtags } = await request.json()

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OpenAI API key not configured' },
        { status: 500 }
      )
    }

    // Demo mode - remove this when you have API credits
    const isDemoMode = process.env.DEMO_MODE === 'true'
    
    if (isDemoMode) {
      // Return a demo response
      const demoText = `🚀 Demo Mode: This is a sample ${postType} post for ${platform}! 

${prompt} 

In real mode, ChatGPT would generate amazing, engaging content tailored to your ${tone} tone. 

${includeHashtags ? '#demo #socialmedia #content #ai' : ''}

To enable AI generation, add billing to your OpenAI account at platform.openai.com/account/billing`

      return NextResponse.json({ text: demoText })
    }

    // Character limits for different platforms
    const platformLimits = {
      twitter: 280,
      linkedin: 2200,
      facebook: 2200,
      instagram: 2200,
    }

    const limit = platformLimits[platform as keyof typeof platformLimits] || 2200

    // Build the system prompt based on parameters
    const systemPrompt = `You are an expert social media content creator. Create engaging ${postType} content for ${platform}. 

    Guidelines:
    - Keep within ${limit} characters
    - Use a ${tone} tone
    - Make it engaging and authentic
    - ${includeHashtags ? 'Include relevant hashtags' : 'Do not include hashtags'}
    - Use emojis appropriately
    - Make it shareable and likely to get engagement
    - If it's for LinkedIn, make it more professional
    - If it's for Twitter, make it concise and punchy
    - If it's for Instagram, make it visually descriptive
    - If it's for Facebook, make it conversational and community-oriented`

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 500,
      temperature: 0.7,
    })

    const generatedText = completion.choices[0]?.message?.content || ''

    return NextResponse.json({ text: generatedText })
  } catch (error) {
    console.error('Error generating text:', error)
    
    // Check if it's a quota error
    if (error instanceof Error && error.message.includes('quota')) {
      return NextResponse.json({
        error: 'OpenAI quota exceeded. Please check your billing at platform.openai.com/account/billing'
      }, { status: 429 })
    }
    
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    )
  }
}
