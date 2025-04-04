import type { Metadata } from "next";
import "./globals.css";
import cn from "@/utils/cn";
import localFont from 'next/font/local'



const ggSans = localFont({
  src: [
    { path: '../../public/fonts/ggSans-regular.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/ggSans-medium.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/ggSans-semibold.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/ggSans-bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-ggsans',
  display: 'swap',
});


export const metadata: Metadata = {
  metadataBase: new URL("https://thischord.vercel.app"),
  title: {
    default: "ThisChord - Chat, Talk, and Build Communities",
    template: "ThisChord | %s",
  },
  description:
    "ThisChord is your place to talk, hang out, and build communities. Join servers, chat via text or voice, and stay connected with your people — anytime, anywhere.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ThisChord - Chat, Talk, and Build Communities",
    description:
      "Connect with friends and communities through ThisChord — the ultimate real-time chat and voice app. Whether it's gaming, school, or hobbies, there's a place for you.",
    images: ["/thischord-og.jpg"],
  },
  keywords: [
    "ThisChord",
    "Discord Clone",
    "Real-time Chat App",
    "Voice Chat",
    "Text Chat",
    "Online Community",
    "Team Communication",
    "Gaming Chat App",
    "Server-based Chat",
    "Group Messaging",
    "Open Source Discord",
    "Community Platform",
    "Slack Alternative",
    "Social Chat App",
  ],
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
          ggSans.variable, 
          ggSans.className, 
          'antialiased bg-primary text-text font-ggsans'
        )}
      >
        {children}
      </body>
    </html>
  );
}
