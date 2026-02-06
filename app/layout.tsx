import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Link Shortener",
  description: "Shorten your links with ease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: undefined,
        variables: {
          colorPrimary: "hsl(0 0% 9%)",
          colorBackground: "hsl(0 0% 9%)",
          colorInputBackground: "hsl(0 0% 14%)",
          colorInputText: "hsl(0 0% 98%)",
          colorText: "hsl(0 0% 98%)",
          colorTextSecondary: "hsl(0 0% 78%)",
          colorDanger: "hsl(0 84.2% 60.2%)",
          borderRadius: "0.5rem",
          fontFamily: "var(--font-geist-sans)",
        },
        elements: {
          card: "bg-card border border-border shadow-lg",
          headerTitle: "text-foreground font-semibold",
          headerSubtitle: "text-foreground/70",
          socialButtonsBlockButton: "bg-secondary text-secondary-foreground border border-input hover:bg-secondary/80",
          socialButtonsBlockButtonText: "font-medium text-foreground",
          formButtonPrimary: "bg-black text-white hover:bg-gray-800 font-medium",
          formFieldInput: "bg-input border-input text-foreground placeholder:text-muted-foreground/50",
          formFieldLabel: "text-foreground font-medium",
          footerActionLink: "text-foreground hover:text-foreground/80 font-medium",
          identityPreviewText: "text-foreground",
          identityPreviewEditButton: "text-foreground/70 hover:text-foreground",
          formFieldInputShowPasswordButton: "text-foreground/70 hover:text-foreground",
          otpCodeFieldInput: "border-input bg-input text-foreground",
          formResendCodeLink: "text-foreground hover:text-foreground/80",
          badge: "bg-secondary text-secondary-foreground",
          userButtonPopoverCard: "bg-card border border-border",
          userButtonPopoverActionButton: "hover:bg-accent",
          userButtonPopoverActionButtonText: "text-foreground",
          userButtonPopoverActionButtonIcon: "text-foreground",
          userButtonPopoverFooter: "hidden",
          formHeaderTitle: "text-foreground",
          formHeaderSubtitle: "text-foreground/70",
          formFieldErrorText: "text-destructive",
          formFieldSuccessText: "text-foreground",
          formFieldHintText: "text-foreground/60",
          dividerLine: "bg-border",
          dividerText: "text-foreground/60",
          alternativeMethodsBlockButton: "border-input hover:bg-accent",
          alternativeMethodsBlockButtonText: "text-foreground",
        },
      }}
    >
      <html lang="en" className="dark">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="border-b bg-card">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-xl font-bold">Link Shortener</h1>
              <div className="flex gap-4 items-center">
                <SignedOut>
                  <SignInButton mode="modal">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button className="bg-black text-white hover:bg-gray-800">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
