# 🔒 GitHub Security Setup Guide

## ✅ Your API Keys Are Already Protected

Your project is already configured to keep your API keys safe:

### Files That Are Protected (Won't Be Pushed):
- `.env.local` - Contains your OpenAI API key
- `node_modules/` - Dependencies
- `.next/` - Build files

### Files That WILL Be Pushed (Safe):
- `.env.local.example` - Template without real keys
- All source code files
- Configuration files

## 🚀 Steps to Push to GitHub

### 1. Create a New Repository on GitHub
1. Go to [github.com](https://github.com)
2. Click the "+" in the top right corner
3. Select "New repository"
4. Name it: `ai-social-media-generator`
5. Make it **Public** or **Private** (your choice)
6. Don't initialize with README (we already have one)
7. Click "Create repository"

### 2. Initialize Git and Push Your Code

Run these commands in your terminal:

```bash
# Initialize git repository
git init

# Add all files (except those in .gitignore)
git add .

# Make your first commit
git commit -m "Initial commit: AI Social Media Generator"

# Add your GitHub repository as origin
git remote add origin https://github.com/YOUR_USERNAME/ai-social-media-generator.git

# Push to GitHub
git push -u origin main
```

### 3. Set Up Environment Variables for Deployment

When you deploy to Vercel, Netlify, or other platforms:

1. **Don't** commit your `.env.local` file
2. **Do** add environment variables in the platform's dashboard:
   - `OPENAI_API_KEY=your_actual_key`
   - `DEMO_MODE=false` (when you want real AI)

## 🛡️ Security Best Practices

### ✅ What's Already Secure:
- API keys are in `.env.local` (git ignored)
- Example file shows the format without real keys
- Code doesn't hard-code any secrets

### 🚨 Never Do This:
- Don't put API keys directly in code
- Don't commit `.env.local` files
- Don't share API keys in issues/comments

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Next.js)
1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Add environment variables in dashboard
5. Deploy!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com)
2. Connect GitHub account
3. Choose your repository
4. Add environment variables
5. Deploy!

## 📋 Pre-Push Checklist

- [x] `.env.local` is in `.gitignore`
- [x] No API keys in source code
- [x] `.env.local.example` exists for others
- [x] README.md has setup instructions
- [ ] Test that the app works without your local `.env.local`

## 🔄 For Team Members

When someone clones your repository:

1. They copy `.env.local.example` to `.env.local`
2. They add their own OpenAI API key
3. They run `npm install` and `npm run dev`

Your API key stays private! 🔒
