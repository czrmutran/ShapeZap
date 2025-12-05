import {
  Dumbbell,
  HeartPulse,
  Briefcase,
  ListChecks,
  Smartphone,
} from 'lucide-react';
import { FadeIn } from './FadeIn';

const publicoAlvo = [
  {
    icon: <HeartPulse className="h-7 w-7 text-primary" />,
    title: 'Pessoas que querem emagrecer',
    description:
      'Controle calorias e macros de forma simples para atingir seu objetivo de perda de peso sem dietas restritivas e complicadas.',
  },
  {
    icon: <HeartPulse className="h-7 w-7 text-primary" />,
    title: 'Pessoas com diabetes',
    description:
      'Monitore a ingestão de carboidratos e outros nutrientes essenciais com facilidade, mantendo sua saúde sempre em primeiro lugar.',
  },
  {
    icon: <Dumbbell className="h-7 w-7 text-primary" />,
    title: 'Frequentadores de academia',
    description:
      'Otimize sua performance com um controle preciso de macros, garantindo que sua nutrição esteja alinhada aos seus treinos e metas.',
  },
  {
    icon: <ListChecks className="h-7 w-7 text-primary" />,
    title: 'Quem não consegue manter dieta por falta de organização',
    description:
      'Receba lembretes e mantenha um histórico claro de suas refeições, tornando a organização da sua rotina alimentar algo simples e automático.',
  },
  {
    icon: <Smartphone className="h-7 w-7 text-primary" />,
    title: 'Quem não quer baixar mais um aplicativo',
    description:
      'Tudo funciona dentro do WhatsApp, um app que você já usa todos os dias. Sem ocupar mais espaço no seu celular ou exigir novas senhas.',
  },
];

export default function ParaquemSection() {
  return (
    <section
      id="para-quem"
      className="relative overflow-hidden bg-background py-16 sm:py-10 lg:py-18"
    >
      {/* Círculos decorativos de fundo */}
      <div className="pointer-events-none absolute -right-20 top-1/4 h-[400px] w-[400px] rounded-full border-[2px] border-primary/10" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[500px] w-[500px] rounded-full border-[3px] border-primary/15" />

      <div className="relative z-10 container mx-auto grid grid-cols-1 items-center gap-y-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-x-16 lg:px-8">
        {/* Coluna da Esquerda: Cabeçalho da seção */}
        <FadeIn direction="right">
          <div className="text-center lg:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
              Para Quem É
            </p>
            <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Perfeito para sua jornada de bem-estar
            </h2>
            <p className="mt-4 text-lg text-foreground/70 md:text-xl">
              O ShapeZap foi desenhado para se adaptar a diferentes estilos de
              vida e objetivos, tornando o controle nutricional acessível a
              todos.
            </p>
          </div>
        </FadeIn>

        {/* Coluna da Direita: Cards com os perfis */}
        <FadeIn direction="left" delay={200} className="flex flex-col gap-8">
          {publicoAlvo.map((perfil, index) => (
            <FadeIn
              key={perfil.title}
              delay={index * 150}
            >
              <div
                tabIndex={0}
                className="
                  group/card relative cursor-pointer rounded-2xl bg-background/50 p-5 shadow-lg backdrop-blur-sm
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1 hover:shadow-primary/20 focus-within:-translate-y-1 focus-within:shadow-primary/20
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                "
              >
                <div className="flex items-center gap-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    {perfil.icon}
                  </div>
                  <h3 className="font-montserrat text-base font-bold text-foreground">
                    {perfil.title}
                  </h3>
                </div>
                <p className="max-h-0 overflow-hidden pt-0 text-sm text-foreground/70 opacity-0 transition-all duration-300 ease-in-out group-hover/card:max-h-40 group-hover/card:pt-3 group-hover/card:opacity-100 group-focus-within/card:max-h-40 group-focus-within/card:pt-3 group-focus-within/card:opacity-100">
                  {perfil.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}