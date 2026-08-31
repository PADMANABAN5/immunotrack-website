import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, category, subject, message, website_hp } = body;

    // Bot / Honeypot protection
    if (website_hp) {
      return NextResponse.json({ success: true, message: "Submission received" });
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid name (at least 3 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { success: false, error: "Please provide a message (at least 5 characters)." },
        { status: 400 }
      );
    }

    // Send email via Resend
    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      category: category ? String(category).trim() : undefined,
      subject: subject ? String(subject).trim() : undefined,
      message: message.trim(),
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to process contact submission." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      id: result.id,
    });
  } catch (error: unknown) {
    console.error("[Contact API Route Error]:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while submitting your message." },
      { status: 500 }
    );
  }
}
