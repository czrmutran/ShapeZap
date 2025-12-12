import BeneficiosSection from '../components/beneficios-section';
import ComoFuncionaSection from '../components/comofunciona-section';
import Header from '../components/header-section';
import HeroSection from '../components/hero-section';
import FuncionalidadesSection from '../components/funcionalidades-section';
import ParaquemSection from '../components/paraquem-section';
import PlanosSection from '../components/planos-section';
import VersaoComercialSection from '../components/versaocomercial-section';
import ChamadaFinalSection from '../components/chamadafinal-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "ShapeZap IA - Seu Nutricionista Pessoal no WhatsApp",
  description: "Transforme sua alimentação com o ShapeZap. Tire fotos das suas refeições e receba contagem de calorias e macros instantaneamente no WhatsApp.",
  keywords: [
    "calcular calorias foto", 
    "app de dieta whatsapp", 
    "plano alimentar ia", 
    "assinatura nutricionista ia", 
    "shapezap funciona", 
    "emagrecimento rapido", 
    "controle alimentar",
    "nutrição prática"
  ]
};

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ComoFuncionaSection />
      <BeneficiosSection />
      <FuncionalidadesSection />
      <ParaquemSection />
      <PlanosSection />
      <VersaoComercialSection />
      <ChamadaFinalSection />
    </>
  );
}
