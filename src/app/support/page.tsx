import OneScrollPage from "@/components/OneScrollPage";

// No page-specific metadata here, matching the original support/page.tsx
// (it was a "use client" component and couldn't export metadata) — this
// route falls back to the root layout's default title/description, exactly
// as it did before.
export default function SupportPage() {
  return <OneScrollPage />;
}
