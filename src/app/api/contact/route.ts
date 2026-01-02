import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactEmail } from "@/components/emails/ContactEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, city, requirementType, date, message } = body;

    // Validate required fields
    if (!name || !email || !requirementType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <no-reply@contact.chitraraman.co>",
      to: ["chitraraman2008@gmail.com"],
      replyTo: email,
      subject: `New Inquiry: ${requirementType} - ${name}`,
      react: React.createElement(ContactEmail, {
        name,
        email,
        phone,
        city,
        requirementType,
        date,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
