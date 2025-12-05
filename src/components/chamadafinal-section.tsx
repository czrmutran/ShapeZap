import { FadeIn } from './FadeIn';

export default function ChamadaFinalSection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-primary/5 py-16 sm:py-24 lg:py-32"
    >
      {/* Círculos decorativos de fundo */}
      <div className="pointer-events-none absolute top-5 -right-20 hidden h-[400px] w-[400px] rounded-full border-[2px] border-primary/10 lg:block" />
      <div className="pointer-events-none absolute top-5 right-50 hidden h-[250px] w-[250px] rounded-full border-[2px] border-primary/10 lg:block" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 top-20 hidden h-[400px] w-[400px] rounded-full border-[3px] border-primary/15 lg:block" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-montserrat text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Pronto para transformar sua nutrição?
            </h2>
            <p className="mt-4 text-lg text-foreground/70 md:text-xl">
              Chega de adiar seus objetivos. Comece a usar o ShapeZap hoje mesmo
              e veja como é fácil ter o controle da sua alimentação na palma da
              mão.
            </p>
            <button
              className="
                mt-10 inline-flex items-center gap-2 rounded-full
                bg-primary px-10 py-3 text-base font-semibold text-primary-foreground
                shadow-[0_12px_30px_rgba(117,192,151,0.35)]
                transition-all duration-300
                hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-[0_18px_40px_rgba(117,192,151,0.45)]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                focus-visible:ring-offset-2 focus-visible:ring-offset-background
              "
            >
              Quero Começar Agora
              <span className="text-xl leading-none">→</span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}