import { Check } from 'lucide-react';
import { clsx } from 'clsx';
import { FadeIn } from './FadeIn';

const planos = [
  {
    name: 'Individual',
    price: 'R$19,90',
    period: '/mês',
    description: 'Acesso total para você atingir seus objetivos com precisão.',
    features: [
      'Acesso a todos os recursos',
      'Análises de refeição ilimitadas',
      'Suporte prioritário via WhatsApp',
    ],
    buttonText: 'Assinar Agora',
    isFeatured: true,
  },
  {
    name: 'Profissional',
    price: 'R$99',
    period: '/mês',
    description:
      'Para nutricionistas e personal trainers acompanharem seus clientes.',
    features: [
      'Até 100 análises/mês',
      'Painel de acompanhamento',
      'Relatórios de progresso',
    ],
    buttonText: 'Falar com Vendas',
    isFeatured: false,
  },
  {
    name: 'Academia',
    price: 'R$190',
    period: '/mês',
    description: 'Para academias que desejam oferecer um diferencial aos seus membros.',
    features: [
      'Até 300 análises/mês',
      'Painel de gestão de membros',
      'Personalização com a marca',
    ],
    buttonText: 'Falar com Vendas',
    isFeatured: false,
  },
];

export default function PlanosSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background py-16 sm:py-10 lg:py-18"
    >
      {/* Círculos decorativos de fundo */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full border-[2px] border-primary/10" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full border-[3px] border-primary/15" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 h-[400px] w-[400px] rounded-full border-[3px] border-primary/15" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Planos flexíveis para cada necessidade
            </h2>
            <p className="mt-4 text-lg text-foreground/70 md:text-xl">
              Seja para uso pessoal ou profissional, temos a solução ideal para
              você.
            </p>
          </div>
        </FadeIn>

        {/* Grid com os Planos */}
        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {planos.map((plano, index) => (
            <FadeIn
              key={plano.name}
              delay={index * 150}
              className="h-full"
            >
              <div
                className={clsx(
                  'relative flex h-full flex-col rounded-3xl p-8 shadow-xl',
                  'bg-background/50 backdrop-blur-sm',
                  plano.isFeatured
                    ? 'ring-2 ring-primary'
                    : 'ring-1 ring-white/10',
                )}
              >
                {plano.isFeatured && (
                  <div className="absolute top-0 -translate-y-1/2 self-center rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground shadow-md">
                    Mais Popular
                  </div>
                )}
                <h3 className="font-montserrat text-2xl font-bold text-foreground">
                  {plano.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">
                  {plano.description}
                </p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-foreground">
                    {plano.price}
                  </span>
                  <span className="text-sm font-semibold text-foreground/70">
                    {plano.period}
                  </span>
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm text-foreground/80">
                  {plano.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={clsx('mt-auto rounded-md px-4 py-2.5 text-sm font-semibold transition-colors', plano.isFeatured ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-primary/10 text-primary hover:bg-primary/20')}>
                  {plano.buttonText}
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}