import { Resend } from "resend";
import { getResendApiKey } from "@/lib/secrets";

export interface ContactSubmissionPayload {
  name: string;
  email: string;
  category?: string;
  subject?: string;
  message: string;
}

export interface SendContactResult {
  success: boolean;
  id?: string;
  error?: string;
}

/**
 * Renders HTML email template for contact form submissions.
 */
function renderContactEmailHtml(payload: ContactSubmissionPayload): string {
  const { name, email, category, subject, message } = payload;
  const submittedAt = new Date().toUTCString();
  const displaySubject = subject || category || "General Website Contact Form Submission";

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ImmunoTrack Contact Form Submission</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f6f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color:#1a202c;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:#f4f6f8; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); max-width:600px; width:100%;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#0b1d33; padding: 28px 32px; text-align:left;">
              <h1 style="color:#2dd6e5; margin:0; font-size:22px; font-weight:700; letter-spacing: -0.5px;">ImmunoTrack</h1>
              <p style="color:#94a3b8; margin:4px 0 0 0; font-size:13px;">${escapeHtml(displaySubject)}</p>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 32px;">
              <h2 style="font-size:18px; margin:0 0 20px 0; color:#0b1d33; border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">
                New Message Received
              </h2>

              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; font-size: 14px;">
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 600;">Name:</td>
                  <td style="padding: 8px 0; color: #0b1d33; font-weight: 600;">${escapeHtml(name)}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 600;">Email:</td>
                  <td style="padding: 8px 0; color: #0b1d33;">
                    <a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email)}</a>
                  </td>
                </tr>
                ${category ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 600;">Category:</td>
                  <td style="padding: 8px 0; color: #0b1d33;">${escapeHtml(category)}</td>
                </tr>` : ""}
                ${subject ? `
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 600;">Subject:</td>
                  <td style="padding: 8px 0; color: #0b1d33;">${escapeHtml(subject)}</td>
                </tr>` : ""}
                <tr>
                  <td style="padding: 8px 0; color: #64748b; width: 120px; font-weight: 600;">Submitted At:</td>
                  <td style="padding: 8px 0; color: #64748b;">${submittedAt}</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border-left: 4px solid #2dd6e5; border-radius: 4px; padding: 20px; margin-top: 16px;">
                <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.5px;">Message:</p>
                <div style="font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${escapeHtml(message)}</div>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 32px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
              <p style="margin: 0;">This email was sent automatically via ImmunoTrack Website Contact Form.</p>
              <p style="margin: 4px 0 0 0;">Replying directly to this email will send your response to <strong>${escapeHtml(email)}</strong>.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Sends contact form submission email using Resend API.
 */
export async function sendContactEmail(payload: ContactSubmissionPayload): Promise<SendContactResult> {
  try {
    const apiKey = await getResendApiKey();
    const resend = new Resend(apiKey);

    const recipientEmail = process.env.CONTACT_FORM_TO_EMAIL || "contact@immunotrack.ai";
    const senderEmail = process.env.CONTACT_FORM_FROM_EMAIL || "ImmunoTrack Contact Form <contact@immunotrack.ai>";

    const emailSubject = payload.subject || payload.category
      ? `Contact Form [${payload.category || "Inquiry"}]: ${payload.subject || payload.name}`
      : `New Contact Form Submission from ${payload.name}`;

    const data = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: payload.email,
      subject: emailSubject,
      html: renderContactEmailHtml(payload),
      text: `New Contact Form Submission\n\nName: ${payload.name}\nEmail: ${payload.email}\nCategory: ${payload.category || "N/A"}\nSubject: ${payload.subject || "N/A"}\n\nMessage:\n${payload.message}`,
    });

    if (data.error) {
      console.error("[Resend API Error]:", data.error);
      return {
        success: false,
        error: data.error.message || "Failed to send email via Resend API",
      };
    }

    return {
      success: true,
      id: data.data?.id,
    };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal Server Error";
    console.error("[sendContactEmail Exception]:", err);
    return {
      success: false,
      error: errorMsg,
    };
  }
}
