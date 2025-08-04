# AI Social Media Generator

A powerful Next.js application that uses OpenAI's ChatGPT and DALL-E to generate engaging text content and stunning images for social media posts. This tool helps content creators, marketers, and social media managers create compelling posts with AI assistance.

## 🚀 Features

### AI Text Generation
- **ChatGPT Integration**: Generate high-quality, engaging text using OpenAI's ChatGPT
- **Multiple Post Types**: Motivational, educational, promotional, engagement, storytelling, and news posts
- **Platform Optimization**: Tailored content for Twitter, LinkedIn, Facebook, and Instagram
- **Tone Customization**: Choose from 8 different tones (professional, casual, enthusiastic, etc.)
- **Smart Character Limits**: Real-time validation for different platform requirements

### AI Image Generation
- **DALL-E Integration**: Create unique images using OpenAI's DALL-E 3
- **Style Options**: Multiple artistic styles (digital art, photorealistic, minimalist, etc.)
- **High Quality**: 1024x1024 resolution images perfect for social media
- **Download Support**: Save generated images directly to your device

### User Experience
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Copy to Clipboard**: Instantly copy generated text
- **Real-time Feedback**: Loading states and error handling
- **TypeScript Support**: Fully typed for better development experience

## Available Templates

- **Motivational Quote**: Inspirational content for motivating your audience
- **Quick Tip**: Share helpful tips and advice
- **Engagement Question**: Ask questions to boost engagement
- **Announcement**: Share important updates and news
- **Educational Post**: Share educational content and facts

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun
- OpenAI API key (get one at [platform.openai.com](https://platform.openai.com/api-keys))

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd social_media
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up environment variables:
```bash
# Copy the example file
copy .env.local.example .env.local

# Edit .env.local and add your OpenAI API key:
OPENAI_API_KEY=your_openai_api_key_here
DEMO_MODE=false
```

**⚠️ Security Note**: Never commit your `.env.local` file to GitHub. It's already included in `.gitignore` to protect your API keys.

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

### Text Generation
1. **Select Post Type**: Choose from motivational, educational, promotional, engagement, storytelling, or news
2. **Choose Platform**: Select Twitter, LinkedIn, Facebook, or Instagram
3. **Set Tone**: Pick from 8 different tone options
4. **Enter Prompt**: Describe what you want to post about
5. **Generate**: Click "Generate AI Text" to create your content
6. **Copy**: Use the "Copy Text" button to copy to clipboard

### Image Generation
1. **Describe Image**: Enter a detailed description of the image you want
2. **Choose Style**: Select from various artistic styles
3. **Generate**: Click "Generate AI Image" to create your image
4. **Download**: Save the image to your device

## Custom Templates

You can create custom templates using placeholder variables:
- `{topic}` - Will be replaced with your topic
- `{message}` - Will be replaced with your main message

Example custom template:
```
🚀 New blog post about {topic}! {message} Check it out: [link] #blog #content
```

## Platform Character Limits

- **Twitter/X**: 280 characters
- **LinkedIn**: 2,200 characters  
- **Facebook**: 2,200 characters

The application automatically validates your generated text against these limits.

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    └── SocialMediaGenerator.tsx
```

## Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **OpenAI API**: ChatGPT for text generation and DALL-E for image generation
- **React**: UI library

## API Costs

This application uses OpenAI's paid APIs:
- **ChatGPT (gpt-3.5-turbo)**: ~$0.002 per 1K tokens (very affordable for text generation)
- **DALL-E 3**: ~$0.04 per image (1024x1024 resolution)

Monitor your usage at [platform.openai.com/usage](https://platform.openai.com/usage)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Roadmap

- [x] AI text generation with ChatGPT
- [x] AI image generation with DALL-E
- [x] Multiple post types and tones
- [x] Platform-specific optimization
- [ ] Batch content generation
- [ ] Content scheduling integration
- [ ] Social media analytics
- [ ] Custom brand voice training
- [ ] Multi-language support
- [ ] Integration with social media APIs for direct posting
- [ ] Content performance tracking
- [ ] Team collaboration features

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/your-username/social-media-text-generator/issues) on GitHub.
