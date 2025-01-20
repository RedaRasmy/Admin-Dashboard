import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
    });

    const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
    });

    export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "",
    };

    export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
            <Navbar/>
            <div className="flex">
            <div className="md:block hidden w-[350px] h-[100dvh]">
                <Sidebar />
            </div>
            <div className="p-5 w-full md:max-w-[1000px]">
                {children}  
            </div>
            </div>
        </body>
        </html>
    );
}
