import Header from '../../components/header-section';
import { FadeIn } from '../../components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sobre Nós",
  description: "Conheça o ShapeZap, seu assistente nutricional no WhatsApp. Nossa missão é simplificar a nutrição e o bem-estar através da tecnologia.",
};

export default function About() {
  return (
    <>
      <Header />
      <div className="bg-background min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="font-montserrat text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
                Sobre o ShapeZap
              </h1>
              
              <div className="prose prose-lg text-foreground/80">
                <p className="text-xl leading-relaxed">
                  O ShapeZap facilita sua vida conectando você aos melhores serviços de forma rápida, simples e segura — tudo direto pelo WhatsApp.
                </p>
                
                <p className="mt-6 leading-relaxed">
                  Aqui você encontra praticidade, atendimento imediato e soluções pensadas para economizar seu tempo. Nosso compromisso é entregar uma experiência ágil, transparente e confiável, para que você resolva o que precisa sem complicações.
                </p>
                
                <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Nossa Missão</h3>
                  <p className="text-foreground/80">
                    Simplificar a nutrição e o bem-estar através da tecnologia, tornando o acompanhamento profissional acessível a todos através de ferramentas que já fazem parte do dia a dia das pessoas.
                  </p>
                </div>

                <div className="mt-12 border-t border-primary/10 pt-8 text-sm text-foreground/60 text-center">
                  <p className="font-semibold">ShapeZap — uma marca da Atenndo.IA</p>
                  <p>Cond. Jardim Botânico VI / S2, Brasília - DF</p>
                  <p>Contato: (61) 99157-9339</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
