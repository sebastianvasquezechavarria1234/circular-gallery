import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "✨ Circular Gallery",
  description: "Circular Gallery by Sebastian Vasquez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" style={{ '--font-inter': '"Inter", sans-serif' } as React.CSSProperties}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
          <div
            className="absolute rounded-full opacity-25"
            style={{
              width: '700px', height: '700px',
              top: '-15%', left: '-10%',
              background: 'radial-gradient(circle, #6366f1 0%, #8b5cf6 50%, transparent 70%)',
              filter: 'blur(100px)',
              animation: 'blob1 28s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full opacity-20"
            style={{
              width: '600px', height: '600px',
              bottom: '-20%', right: '-5%',
              background: 'radial-gradient(circle, #ec4899 0%, #f43f5e 50%, transparent 70%)',
              filter: 'blur(100px)',
              animation: 'blob2 24s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full opacity-20"
            style={{
              width: '500px', height: '500px',
              top: '40%', right: '-8%',
              background: 'radial-gradient(circle, #06b6d4 0%, #0284c7 50%, transparent 70%)',
              filter: 'blur(100px)',
              animation: 'blob3 30s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full opacity-15"
            style={{
              width: '450px', height: '450px',
              top: '20%', left: '30%',
              background: 'radial-gradient(circle, #a855f7 0%, #7c3aed 50%, transparent 70%)',
              filter: 'blur(90px)',
              animation: 'blob4 22s ease-in-out infinite',
            }}
          />
          <div
            className="absolute rounded-full opacity-15"
            style={{
              width: '550px', height: '550px',
              bottom: '10%', left: '15%',
              background: 'radial-gradient(circle, #f59e0b 0%, #d97706 40%, transparent 70%)',
              filter: 'blur(100px)',
              animation: 'blob5 26s ease-in-out infinite',
            }}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
