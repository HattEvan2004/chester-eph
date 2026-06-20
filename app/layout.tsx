import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chester Electrical, Plumbing and Heating | Chester, Nova Scotia",
  description:
    "Family owned electrical, plumbing, and heating services in Chester and surrounding areas since 1988.",
  metadataBase: new URL("https://ceph.ca"),
  openGraph: {
    title: "Chester Electrical, Plumbing and Heating | Chester, Nova Scotia",
    description:
      "Family owned electrical, plumbing, and heating services in Chester and surrounding areas since 1988.",
    type: "website",
    locale: "en_CA",
  },
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1815",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
