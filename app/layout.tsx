import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Zabi Ullah Badini | Computer Systems Engineer & Software Developer',
  description: 'Portfolio of Zabi Ullah Badini — Computer Systems Engineer specializing in Python, React Native, TypeScript, and high-performance software architectures.',
  keywords: [
    'Zabi Ullah',
    'Zabi Ullah Badini',
    'Computer Systems Engineer',
    'Software Engineer Pakistan',
    'Python Developer',
    'React Native Developer'
  ],
  authors: [{ name: 'Zabi Ullah Badini' }],
  creator: 'Zabi Ullah Badini',
  openGraph: {
    title: 'Zabi Ullah Badini | Computer Systems Engineer',
    description: 'Portfolio and engineering projects by Zabi Ullah Badini.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} scroll-smooth dark`}>
      <body className="bg-[#0b0f19] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}