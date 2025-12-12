import { FadeIn } from "./FadeIn";
import { WHATSAPP_LINK } from "./constants";

const destaques = [
  {
    title: "Venda em poucos dias",
    text: "Lance seu programa sem gastar meses em desenvolvimento, testes e integrações.",
  },
  {
    title: "Tudo com a sua marca",
    text: "Logo, cores e comunicação adaptadas ao seu posicionamento, sem parecer “genérico”.",
  },
  {
    title: "Programas prontos",
    text: "Modelos de desafios, planos e jornadas para você apenas adaptar ao seu público.",
  },
  {
    title: "Monetização completa",
    text: "Ganhe com desafios, assinaturas, kits físicos, serviços e upsells automatizados.",
  },
];

export default function VersaoComercialSection() {
  return (
    <section
      id="versao-comercial"
      className="relative overflow-hidden bg-background py-16 sm:py-10 lg:py-18"
    >
      {/* Círculos decorativos de fundo - consistentes com outras seções */}
      <div className="pointer-events-none absolute -top-20 left-1/2 hidden h-[500px] w-[500px] -translate-x-1/2 rounded-full border-[2px] border-primary/10 lg:block" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 hidden h-[400px] w-[400px] rounded-full border-[3px] border-primary/15 lg:block" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center lg:text-left lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-start lg:gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/80">
                Versão Popular / Comercial
              </p>
              <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Transforme o ShapeZap na sua própria marca.
              </h2>
              <p className="mt-4 text-lg text-foreground/70 md:text-xl">
                O ShapeZap White Label é a forma mais rápida e acessível de
                lançar seu próprio programa de emagrecimento e desafios no
                WhatsApp, usando uma plataforma pronta, validada e
                personalizável com a sua identidade.
              </p>
              <p className="mt-3 text-lg text-foreground/70 md:text-xl">
                Você cria uma nova fonte de receita recorrente vendendo
                desafios, planos, treinos e kits de produtos — com tudo
                funcionando de forma automatizada, 24 horas por dia.
              </p>
            </div>

            {/* Destaques em colunas no desktop, empilhados no mobile */}
            <div className="mt-10 lg:mt-0">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {destaques.map((item, index) => (
                  <FadeIn key={item.title} delay={100 * (index + 1)}>
                    <li className="h-full rounded-2xl bg-primary/5 px-5 py-4 text-left shadow-sm">
                      <p className="text-sm font-semibold text-primary mb-1">
                        {item.title}
                      </p>
                      <p className="text-sm text-foreground/80">{item.text}</p>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={500}>
          <div className="mx-auto mt-12 max-w-3xl text-center">
            <p className="text-base text-foreground/70 md:text-lg">
              Ideal para academias, lojas de suplementos, profissionais de
              saúde, personal trainers e criadores de conteúdo que querem
              transformar audiência em faturamento — sem complicação.
            </p>

            <a
              href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                "Olá! Tenho interesse na versão comercial do ShapeZap White Label. Gostaria de saber mais sobre como posso começar a vender."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-10 py-3 text-base font-semibold text-primary-foreground shadow-[0_12px_30px_rgba(117,192,151,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(117,192,151,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Quero minha versão White Label
              <span className="text-xl leading-none">→</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
