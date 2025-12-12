import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Montserrat } from "next/font/google"
import Footer from "../components/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://shapezap.com.br'), // Substituir pelo domínio real quando houver
  title: {
    default: "ShapeZap IA - Nutricionista no WhatsApp",
    template: "%s | ShapeZap IA"
  },
  description: "ShapeZap IA - A primeira ferramenta de apoio à dieta no WhatsApp que calcula calorias automaticamente com uma simples foto. Rápida, prática e acessível.",
  keywords: [
    "nutricionista whatsapp", 
    "contador de calorias ia", 
    "dieta whatsapp", 
    "emagrecer com ia", 
    "shapezap", 
    "inteligencia artificial nutrição", 
    "foto calorias", 
    "diario alimentar whatsapp",
    "saúde",
    "bem-estar",
    "reeducação alimentar"
  ],
  authors: [{ name: "ShapeZap Team" }],
  creator: "ShapeZap",
  publisher: "ShapeZap",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ShapeZap IA - Nutricionista no WhatsApp",
    description: "Transforme sua alimentação com o poder da IA diretamente no seu WhatsApp.",
    url: 'https://shapezap.com.br',
    siteName: 'ShapeZap IA',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/logo_1.png', // Usando o logo como imagem de fallback
        width: 800,
        height: 600,
        alt: 'ShapeZap IA Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ShapeZap IA - Nutricionista no WhatsApp",
    description: "Transforme sua alimentação com o poder da IA diretamente no seu WhatsApp.",
    images: ['/logo_1.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#16a34a", // Cor primária (verde)
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`
          flex flex-col 
          ${inter.variable} 
          ${montserrat.variable}
        `}
      >
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
