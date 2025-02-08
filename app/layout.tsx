import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata: Metadata = {
  title: "RogerCiv Portfolio",
  description: "Portfolio of RogerCiv, a Software Developer based in Spain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={jetBrainsMono.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
