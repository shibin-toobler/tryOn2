import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "TryOn2", description: "Personalized shopping with virtual try-on" };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
