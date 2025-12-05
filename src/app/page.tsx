import BeneficiosSection from '../components/beneficios-section';
import ComoFuncionaSection from '../components/comofunciona-section';
import Header from '../components/header-section';
import HeroSection from '../components/hero-section';
import FuncionalidadesSection from '../components/funcionalidades-section';
import ParaquemSection from '../components/paraquem-section';
import PlanosSection from '../components/planos-section';
import ChamadaFinalSection from '../components/chamadafinal-section';

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
      <ChamadaFinalSection />
    </>
  );
}
