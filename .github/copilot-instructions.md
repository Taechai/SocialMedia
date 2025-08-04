# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a Next.js project for generating AI-powered social media content. The project uses:

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **OpenAI API** for ChatGPT text generation and DALL-E image generation
- **React hooks** for state management

## Project Structure
- `src/app/` - Contains the main application pages, layout, and API routes
- `src/app/api/` - API routes for OpenAI integration
- `src/components/` - Reusable React components
- The main component is `SocialMediaGenerator` which handles AI text and image generation

## Key Features
- AI text generation using ChatGPT with customizable post types and tones
- AI image generation using DALL-E 3 with multiple artistic styles
- Platform-specific content optimization (Twitter, LinkedIn, Facebook, Instagram)
- Character count validation for different platforms
- Copy to clipboard and image download functionality
- Real-time generation with loading states and error handling

## Development Guidelines
- Use TypeScript for all new components and API routes
- Follow Next.js App Router conventions
- Use Tailwind CSS classes for styling
- Implement proper error handling for API calls
- Keep components modular and reusable
- Handle loading states appropriately
- Validate user inputs before API calls

## API Integration
- OpenAI ChatGPT for text generation (`/api/generate-text`)
- OpenAI DALL-E for image generation (`/api/generate-image`)
- Requires OPENAI_API_KEY environment variable
- Handle API rate limits and errors gracefully

## Social Media Platforms Support
- Twitter/X (280 character limit)
- LinkedIn (2200 character limit)
- Facebook (2200 character limit)
- Instagram (2200 character limit)

## Post Types
- Motivational posts
- Educational content
- Promotional posts
- Engagement posts
- Storytelling posts
- News/Updates

When adding new features:
- Consider API costs and rate limits
- Implement proper TypeScript types
- Use semantic HTML and accessibility features
- Follow React best practices for state management
- Add appropriate loading and error states
- Test with different content types and lengths
