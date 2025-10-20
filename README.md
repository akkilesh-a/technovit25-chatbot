# TechnoVIT 2025 Chatbot

A modern AI-powered chatbot for TechnoVIT 2025, India's biggest technical fest with the theme "Healing with Intelligence".

## 🎯 Features

- **AI-Powered Responses**: Powered by Google's Gemini 2.5 Flash model
- **Real-time Streaming**: Live streaming responses for better user experience
- **Persistent Chat History**: Messages saved in localStorage
- **Modern UI**: Built with AI SDK UI components and Tailwind CSS
- **TechnoVIT Branding**: Custom theme with festival colors and branding
- **Smart Suggestions**: Pre-defined suggestions for common queries
- **Error Handling**: Robust error handling with user-friendly messages

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **AI**: AI SDK with Google Gemini integration
- **Styling**: Tailwind CSS
- **UI Components**: AI SDK UI elements
- **State Management**: React hooks with localStorage persistence

## 📅 Event Information

- **Theme**: "Healing with Intelligence"
- **Dates**: October 31st - November 2nd, 2025
- **Venue**: VIT Chennai
- **Contact**: technovit@vit.ac.in
- **Instagram**: [@technovit_25](https://www.instagram.com/technovit_25/)

## 🛠️ Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Set up Environment Variables**

   ```bash
   # Add your Google AI API key
   GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
   ```

3. **Run Development Server**

   ```bash
   npm run dev
   ```

4. **Open in Browser**
   ```
   http://localhost:3000
   ```

## 🎨 Customization

### System Prompt

The chatbot's behavior is defined in `src/app/api/chat/route.ts`. You can modify the `SYSTEM_PROMPT` to change how the AI responds.

### Styling

The UI uses Tailwind CSS with custom gradients. Main styling is in `src/app/page.tsx`.

### Suggestions

Pre-defined suggestions can be modified in the `suggestions` array in `src/app/page.tsx`.

## 📱 Usage

1. **Ask Questions**: Type any question about TechnoVIT 2025
2. **Use Suggestions**: Click on pre-defined suggestion buttons
3. **Chat History**: Your conversation is automatically saved
4. **Real-time Responses**: Watch responses stream in real-time

## 🤖 AI Capabilities

The chatbot can help with:

- Event information and schedules
- Registration details
- Workshop and competition information
- VIT Chennai campus details
- Organizing team information
- General festival queries

## 🔧 API Endpoints

- `POST /api/chat` - Main chat endpoint for AI responses

## 📦 Dependencies

- `@ai-sdk/google` - Google AI integration
- `@ai-sdk/react` - React hooks for AI
- `ai` - Core AI SDK
- `next` - Next.js framework
- `react` - React library
- `tailwindcss` - CSS framework
- `lucide-react` - Icons
- `sonner` - Toast notifications

## 🎪 About TechnoVIT

TechnoVIT is VIT Chennai's flagship technical festival, where visionary technical clubs converge to push the boundaries of innovation and creativity. Over three days, it hosts hackathons, robotics battles, workshops, exhibitions and keynote talks, drawing over 20,000 participants including students from more than 19 countries.

## 📄 License

This project is created for TechnoVIT 2025. All rights reserved.
