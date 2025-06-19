import { cn } from "@/lib/utils";
import { StepProvider } from "@/providers/step-provider";
import { SubscriptionProvider } from "@/providers/subscription-provider";
import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Multi-Step Form",
  description: "Solution for Frontend Mentor's Multi-Step Form challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${ubuntu.variable} antialiased`,
          "lg:center min-h-screen max-h-screen"
        )}
      >
        <StepProvider>
          <SubscriptionProvider>{children}</SubscriptionProvider>
        </StepProvider>
      </body>
    </html>
  );
}
