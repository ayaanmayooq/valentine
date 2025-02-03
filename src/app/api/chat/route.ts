// src/app/api/chat/route.ts

import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();

  try {
    // Call OpenAI API for chat completion
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Use the appropriate model version
      messages: messages,
    });

    // Return the assistant's response
    return NextResponse.json({
      content: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error with OpenAI:", error);
    return NextResponse.json({ content: "Sorry, something went wrong." });
  }
}
