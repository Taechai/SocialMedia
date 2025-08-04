'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PostTemplate {
  id: string
  name: string
  description: string
}

const postTypes: PostTemplate[] = [
  {
    id: 'motivational',
    name: 'Motivational Post',
    description: 'Inspirational content to motivate your audience'
  },
  {
    id: 'educational',
    name: 'Educational Post',
    description: 'Share knowledge and teach your audience'
  },
  {
    id: 'promotional',
    name: 'Promotional Post',
    description: 'Promote a product, service, or event'
  },
  {
    id: 'engagement',
    name: 'Engagement Post',
    description: 'Ask questions and encourage interaction'
  },
  {
    id: 'storytelling',
    name: 'Story Post',
    description: 'Share personal stories or case studies'
  },
  {
    id: 'news',
    name: 'News/Update',
    description: 'Share industry news or company updates'
  }
]

const platforms = [
  { id: 'twitter', name: 'Twitter/X', limit: 280 },
  { id: 'linkedin', name: 'LinkedIn', limit: 2200 },
  { id: 'facebook', name: 'Facebook', limit: 2200 },
  { id: 'instagram', name: 'Instagram', limit: 2200 }
]

const tones = [
  'professional', 'casual', 'enthusiastic', 'informative', 
  'inspiring', 'humorous', 'authoritative', 'friendly'
]

const imageStyles = [
  'digital art', 'photorealistic', 'minimalist', 'abstract', 
  'illustration', 'modern', 'vintage', 'corporate'
]

export default function SocialMediaGenerator() {
  const [selectedPostType, setSelectedPostType] = useState<PostTemplate>(postTypes[0])
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0])
  const [prompt, setPrompt] = useState('')
  const [tone, setTone] = useState('professional')
  const [includeHashtags, setIncludeHashtags] = useState(true)
  const [generatedText, setGeneratedText] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  
  // Image generation states
  const [imagePrompt, setImagePrompt] = useState('')
  const [imageStyle, setImageStyle] = useState('digital art')
  const [generatedImage, setGeneratedImage] = useState('')
  const [isGeneratingImage, setIsGeneratingImage] = useState(false)

  const generateText = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt for your post')
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate-text', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          platform: selectedPlatform.id,
          postType: selectedPostType.id,
          tone,
          includeHashtags,
        }),
      })

      const data = await response.json()
      
      if (data.error) {
        alert(`Error: ${data.error}`)
        return
      }

      setGeneratedText(data.text)
    } catch (error) {
      console.error('Error generating text:', error)
      alert('Failed to generate text. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const generateImage = async () => {
    if (!imagePrompt.trim()) {
      alert('Please enter a prompt for your image')
      return
    }

    setIsGeneratingImage(true)
    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: imagePrompt,
          style: imageStyle,
          size: '1024x1024',
        }),
      })

      const data = await response.json()
      
      if (data.error) {
        alert(`Error: ${data.error}`)
        return
      }

      setGeneratedImage(data.imageUrl)
    } catch (error) {
      console.error('Error generating image:', error)
      alert('Failed to generate image. Please try again.')
    } finally {
      setIsGeneratingImage(false)
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedText)
    alert('Text copied to clipboard!')
  }

  const downloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a')
      link.href = generatedImage
      link.download = 'social-media-image.png'
      link.click()
    }
  }

  const clearAll = () => {
    setPrompt('')
    setImagePrompt('')
    setGeneratedText('')
    setGeneratedImage('')
  }

  return (
    <div className="space-y-8">
      {/* Text Generation Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Text Generation</h2>
        
        {/* Post Type Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">Post Type</label>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {postTypes.map((type) => (
              <div
                key={type.id}
                className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                  selectedPostType.id === type.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedPostType(type)}
              >
                <h3 className="font-medium text-gray-800">{type.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Platform and Settings */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Platform</label>
            <select
              value={selectedPlatform.id}
              onChange={(e) => setSelectedPlatform(platforms.find(p => p.id === e.target.value) || platforms[0])}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {platforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {tones.map((t) => (
                <option key={t} value={t}>
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={includeHashtags}
                onChange={(e) => setIncludeHashtags(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-600">Include hashtags</span>
            </label>
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-medium">Character limit:</span> {selectedPlatform.limit}
          </div>
        </div>

        {/* Prompt Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            What do you want to post about?
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., I want to share tips about productivity and time management for remote workers..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={generateText}
          disabled={isGenerating || !prompt.trim()}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-colors font-medium"
        >
          {isGenerating ? 'Generating...' : 'Generate AI Text'}
        </button>
      </div>

      {/* Image Generation Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">AI Image Generation</h2>
        
        <div className="grid gap-4 md:grid-cols-2 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image Description
            </label>
            <textarea
              value={imagePrompt}
              onChange={(e) => setImagePrompt(e.target.value)}
              placeholder="e.g., A modern workspace with a laptop, coffee, and plants, representing productivity..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Style</label>
            <select
              value={imageStyle}
              onChange={(e) => setImageStyle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {imageStyles.map((style) => (
                <option key={style} value={style}>
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={generateImage}
          disabled={isGeneratingImage || !imagePrompt.trim()}
          className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400 transition-colors font-medium"
        >
          {isGeneratingImage ? 'Generating Image...' : 'Generate AI Image'}
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={clearAll}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Clear All
        </button>
      </div>

      {/* Generated Content Display */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Generated Text */}
        {generatedText && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Generated Text</h2>
              <button
                onClick={copyToClipboard}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
              >
                Copy Text
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <p className="text-gray-800 whitespace-pre-wrap">{generatedText}</p>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              <p>Character count: {generatedText.length}</p>
              <p className="mt-1">
                <span className={generatedText.length <= selectedPlatform.limit ? 'text-green-600' : 'text-red-600'}>
                  {selectedPlatform.name}: {generatedText.length <= selectedPlatform.limit ? '✓' : '✗'}
                </span>
              </p>
            </div>
          </div>
        )}

        {/* Generated Image */}
        {generatedImage && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold text-gray-800">Generated Image</h2>
              <button
                onClick={downloadImage}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium"
              >
                Download Image
              </button>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <Image 
                src={generatedImage} 
                alt="Generated social media image" 
                width={1024}
                height={1024}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
