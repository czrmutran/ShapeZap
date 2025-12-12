import Header from '../../components/header-section';
import { FadeIn } from '../../components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Termos de Serviço",
  description: "Leia os Termos de Serviço do ShapeZap para entender as regras de uso, direitos e responsabilidades ao utilizar nossa plataforma.",
};

export default function Terms() {
  return (
    <>
      <Header />
      <div className="bg-background min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="font-montserrat text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
                Termos de Serviço
              </h1>
              
              <div className="prose prose-lg text-foreground/80 space-y-8">
                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">1. Objetivo da Plataforma</h2>
                  <p>
                    O ShapeZap oferece ferramentas de comunicação, automação e conexão entre usuários e serviços disponibilizados dentro do WhatsApp. Nosso papel é facilitar o acesso, agilizar processos e melhorar a experiência do usuário final.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">2. Uso Permitido</h2>
                  <p>
                    Você se compromete a utilizar o ShapeZap de maneira lícita, responsável e alinhada à finalidade da plataforma. É proibido utilizar o serviço para atividades fraudulentas, enganosas, abusivas ou que violem leis aplicáveis.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">3. Cadastro e Dados</h2>
                  <p>
                    Ao fornecer seus dados, você declara que as informações são verdadeiras e autoriza o uso conforme nossa Política de Privacidade. Seus dados serão utilizados exclusivamente para operar a plataforma, melhorar sua experiência e cumprir obrigações legais.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">4. Responsabilidade do Usuário</h2>
                  <p>
                    O usuário é responsável pelas informações enviadas, pelo conteúdo compartilhado no WhatsApp e por qualquer ação realizada a partir do seu acesso.
                  </p>
                  <p className="mt-2">
                    O ShapeZap não se responsabiliza por perdas causadas por mau uso da ferramenta ou por compartilhamento indevido de informações pelo próprio usuário.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">5. Responsabilidade da Plataforma</h2>
                  <p>
                    O ShapeZap se compromete a oferecer serviços estáveis, seguros e atualizados, mas não garante funcionamento ininterrupto.
                  </p>
                  <p className="mt-2">
                    A plataforma não é responsável por falhas de terceiros, como WhatsApp, operadoras de internet, equipamentos do usuário ou integrações externas.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">6. Contratação de Serviços e Pagamentos</h2>
                  <p>
                    Se o usuário optar por serviços pagos, assinaturas ou recursos premium, concorda com os valores e condições apresentados no momento da contratação.
                  </p>
                  <p className="mt-2">
                    Pagamentos não reembolsáveis poderão se aplicar em planos de assinatura conforme descrito nas ofertas comerciais.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">7. Limitação de Responsabilidade</h2>
                  <p>
                    O ShapeZap não atua como intermediário financeiro, garantidor de resultados ou responsável por relações comerciais entre usuários e prestadores de serviço.
                  </p>
                  <p className="mt-2">
                    Nosso papel é disponibilizar a tecnologia; resultados dependem da boa utilização da plataforma.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">8. Propriedade Intelectual</h2>
                  <p>
                    Todos os conteúdos, fluxos, sistemas, textos e materiais do ShapeZap são protegidos por direitos autorais e não podem ser copiados, distribuídos ou modificados sem autorização.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">9. Cancelamento e Encerramento</h2>
                  <p>
                    O usuário pode cancelar o uso a qualquer momento.
                  </p>
                  <p className="mt-2">
                    O ShapeZap poderá suspender ou encerrar acessos em caso de violação destes termos, uso inadequado da plataforma ou por decisão comercial, mediante aviso prévio quando aplicável.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">10. Alterações dos Termos</h2>
                  <p>
                    Os Termos de Serviço podem ser atualizados periodicamente. O uso contínuo da plataforma após alterações representa concordância com as novas condições.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">11. Contato</h2>
                  <p>
                    Dúvidas e solicitações podem ser enviadas via canais oficiais de atendimento informados no site do ShapeZap.
                  </p>
                </section>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </>
  );
}
