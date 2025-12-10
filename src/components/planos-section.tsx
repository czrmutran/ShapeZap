import { Check } from "lucide-react";
import { clsx } from "clsx";
import { FadeIn } from "./FadeIn";
import { INDIVIDUAL_LINK } from "./constants";
import { CASAL_LINK } from "./constants";
import { FAMILIAR_LINK } from "./constants";

const planos = [
  {
    name: "Individual",
    description: "Para quem quer acompanhar a alimentação de forma prática, sozinho.",
    price: "R$87,00",
    installment: "ou 3x de R$29,00",
    periodLabel: "Pagamento único anual",
    period: "/ano",
    features: [
      "Acesso a todos os recursos da plataforma",
      "Análises de refeição ilimitadas",
      "Suporte prioritário via WhatsApp",
    ],
    buttonText: "Assinar agora",
    isFeatured: true,
    whatsappMessage:
      "Olá! Tenho interesse no plano Individual. Gostaria de saber como assinar.",
    link: INDIVIDUAL_LINK,
  },
  {
    name: "Familiar",
    description: "Para famílias que desejam monitorar a alimentação de todos em um só lugar.",
    price: "R$226,00",
    installment: "ou 3x de R$75,00",
    periodLabel: "Até 4 pessoas no mesmo plano",
    period: "/ano",
    features: [
      "Análises de refeição ilimitadas para todos os membros",
      "Painel de acompanhamento dos membros",
      "Relatórios de progresso mensais",
    ],
    buttonText: "Assinar agora",
    isFeatured: false,
    whatsappMessage:
      "Olá! Tenho interesse no plano Familiar. Gostaria de falar com a equipe de vendas.",
    link: FAMILIAR_LINK,
  },
  {
    name: "Casal",
    description: "Para casais que querem evoluir juntos na alimentação.",
    price: "R$147,00",
    installment: "ou 3x de R$49,00",
    periodLabel: "2 pessoas no mesmo plano",
    period: "/ano",
    features: [
      "Análises de refeição ilimitadas para todos os membros",
      "Painel compartilhado para os dois perfis",
      "Acompanhamento de metas em conjunto",
    ],
    buttonText: "Assinar agora",
    isFeatured: false,
    whatsappMessage:
      "Olá! Tenho interesse no plano Casal. Gostaria de falar com a equipe de vendas.",
    link: CASAL_LINK,
  },
];

export default function PlanosSection() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-background py-16 sm:py-10 lg:py-18"
    >
      {/* Círculos decorativos de fundo */}
      <div className="pointer-events-none absolute -top-20 left-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 rounded-full border-[2px] border-primary/10 lg:block" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 hidden h-[400px] w-[400px] rounded-full border-[3px] border-primary/15 lg:block" />
      <div className="pointer-events-none absolute -bottom-40 -left-20 hidden h-[400px] w-[400px] rounded-full border-[3px] border-primary/15 lg:block" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Planos flexíveis para cada necessidade
            </h2>
            <p className="mt-4 text-lg text-foreground/70 md:text-xl">
              Escolha o plano que combina com a sua rotina e deixe a ShapeZap cuidar do resto.
            </p>
          </div>
        </FadeIn>

        {/* Grid com os Planos */}
        <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {planos.map((plano, index) => (
            <FadeIn
              key={plano.name}
              delay={index * 150}
              className={clsx(
                "h-full",
                plano.name === "Individual"
                  ? "lg:order-2"
                  : index === 1
                  ? "lg:order-1"
                  : "lg:order-3"
              )}
            >
              <div
                className={clsx(
                  "relative flex h-full flex-col rounded-3xl p-8 transition-all duration-300",
                  "bg-background/60 backdrop-blur-sm shadow-[0_18px_45px_rgba(15,23,42,0.08)]",
                  plano.isFeatured
                    ? "ring-2 ring-primary lg:-translate-y-2 lg:scale-[1.04] lg:shadow-[0_24px_70px_rgba(12,148,136,0.35)]"
                    : "ring-1 ring-white/10 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)]"
                )}
              >
                {plano.isFeatured && (
                  <div className="absolute top-0 -translate-y-1/2 self-center rounded-full bg-primary px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow-md">
                    Mais popular
                  </div>
                )}

                {/* Título + descrição curta */}
                <h3 className="font-montserrat text-2xl font-bold text-foreground">
                  {plano.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/70">
                  {plano.description}
                </p>

                {/* Bloco de preço organizado */}
                <div className="mt-6 space-y-1">
                  <div className="flex items-baseline gap-x-1">
                    <span className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                      {plano.price}
                    </span>
                    <span className="text-sm font-semibold text-foreground/70">
                      {plano.period}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground/80">
                    {plano.installment}
                  </p>
                  <p className="text-xs text-foreground/60">
                    {plano.periodLabel}
                  </p>
                </div>

                {/* Lista de benefícios */}
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm text-foreground/80"
                >
                  {plano.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="mt-[2px] h-5 w-5 flex-none text-primary"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão */}
                <a
                  href={plano.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "mt-8 rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-all",
                    plano.isFeatured
                      ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  )}
                >
                  {plano.buttonText}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
