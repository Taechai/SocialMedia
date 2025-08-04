'use client'

import { useState } from 'react'
import SocialMediaGenerator from '@/components/SocialMediaGenerator'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            AI Social Media Generator
          </h1>
          <p className="text-lg text-gray-600">
            Create engaging content and stunning images for your social media platforms using AI
          </p>
        </header>
        
        <SocialMediaGenerator />
      </div>
    </main>
  )
}
