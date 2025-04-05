import type { Metadata } from "next";
import styles from "./auth.global.module.css";



export const metadata: Metadata = {
  metadataBase: new URL("https://thischord.vercel.app"),
  title: {
    default: "Login or Sign Up",
    template: "ThisChord | %s",
  },
  description:
    "Join ThisChord today. Create an account or sign in to chat, talk, and build communities with friends and like-minded people.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ThisChord - Login or Sign Up",
    description:
      "Join millions of people on ThisChord. Sign up or log in to start connecting with your communities and friends.",
    images: ["/thischord-og.jpg"],
  },
  keywords: [
    "ThisChord",
    "Login",
    "Sign Up",
    "Register",
    "Authentication",
    "Discord Clone",
    "Join Community",
    "Create Account",
    "Chat App Login",
    "Voice Chat Sign Up",
    "Community Platform Login",
    "Messaging App Registration",
  ],
};


export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-screen flex items-center justify-center w-screen text-text ${styles["bg-image"]}`}>
      <div className="bg-primary h-fit w-fit flex items-center justify-center rounded-md">
        {children}
      </div>
    </div>
  );
}