import Header from '../../components/header-section';
import { FadeIn } from '../../components/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Entenda como o ShapeZap coleta, utiliza e protege seus dados pessoais. Sua privacidade e segurança são nossa prioridade.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="bg-background min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <h1 className="font-montserrat text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-8">
                Política de Privacidade
              </h1>
              
              <div className="prose prose-lg text-foreground/80 space-y-8">
                <section>
                  <p className="lead">
                    A proteção dos seus dados é prioridade para nós. Esta Política de Privacidade explica como o ShapeZap coleta, utiliza, armazena e protege suas informações. Ao utilizar nossos serviços, você declara que leu e concorda com as práticas descritas abaixo.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">1. Informações que Coletamos</h2>
                  <p>Coletamos dados necessários para oferecer uma experiência eficiente, segura e personalizada.</p>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1.1. Dados fornecidos pelo usuário</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Nome, telefone e e-mail.</li>
                    <li>Informações inseridas em formulários, WhatsApp e canais de atendimento.</li>
                    <li>Dados relacionados ao uso dos serviços (preferências, dúvidas, solicitações).</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1.2. Dados coletados automaticamente</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Informações técnicas: tipo de dispositivo, navegador, IP, data e hora de acesso.</li>
                    <li>Dados de navegação e interação com o site e plataforma.</li>
                    <li>Informações geradas dentro do WhatsApp para fins de funcionamento da automação (mensagens enviadas, horários, interações).</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">1.3. Dados de terceiros</h3>
                  <p>
                    Podemos receber dados por meio de integrações autorizadas pelo usuário (como WhatsApp Business API, gateways de pagamento e ferramentas de automação).
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">2. Como Utilizamos Seus Dados</h2>
                  <p>Utilizamos seus dados para:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Operar e melhorar o ShapeZap.</li>
                    <li>Personalizar sua experiência e facilitar seu atendimento.</li>
                    <li>Processar solicitações, serviços contratados e comunicação.</li>
                    <li>Enviar notificações importantes, atualizações e ofertas relevantes.</li>
                    <li>Atender obrigações legais e solicitações de autoridades competentes.</li>
                  </ul>
                  <p className="mt-2 font-medium">Nunca vendemos ou cedemos seus dados para terceiros sem sua autorização.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">3. Base Legal (LGPD)</h2>
                  <p>Tratamos seus dados com base nas hipóteses legais previstas na LGPD, incluindo:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Consentimento do titular.</li>
                    <li>Execução de contrato ou procedimentos preliminares.</li>
                    <li>Cumprimento de obrigações legais.</li>
                    <li>Legítimo interesse para melhoria dos serviços e prevenção de fraudes.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">4. Compartilhamento de Dados</h2>
                  <p>Compartilhamos informações somente quando necessário:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>WhatsApp e Meta: para prestação do serviço via API.</li>
                    <li>Serviços de automação: para funcionamento dos fluxos.</li>
                    <li>Gateways de pagamento: quando o usuário contrata serviços pagos.</li>
                    <li>Parceiros operacionais: exclusivamente para entrega ou suporte do ShapeZap.</li>
                  </ul>
                  <p className="mt-2">Todos os parceiros seguem padrões de segurança e confidencialidade.</p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">5. Armazenamento e Segurança dos Dados</h2>
                  <p>Adotamos práticas robustas de segurança digital:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Criptografia de dados.</li>
                    <li>Controles de acesso restrito.</li>
                    <li>Monitoramento contínuo para prevenção de incidentes.</li>
                  </ul>
                  <p className="mt-2">
                    Embora empreguemos medidas avançadas, nenhum sistema é 100% livre de riscos. Caso ocorra incidente relevante, notificaremos conforme exigido pela LGPD.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">6. Retenção e Exclusão dos Dados</h2>
                  <p>Os dados são mantidos somente pelo período necessário para:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cumprir finalidades de uso.</li>
                    <li>Atender obrigações legais.</li>
                    <li>Resolver eventuais pendências.</li>
                  </ul>
                  <p className="mt-2">
                    O usuário pode solicitar exclusão ou anonimização, exceto quando a lei exigir retenção.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">7. Direitos do Titular de Dados</h2>
                  <p>Você tem direito a:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Confirmar a existência de tratamento.</li>
                    <li>Acessar, corrigir, atualizar e solicitar exclusão de dados.</li>
                    <li>Revogar consentimento.</li>
                    <li>Solicitar portabilidade.</li>
                    <li>Obter informações sobre compartilhamento.</li>
                  </ul>
                  <p className="mt-2">
                    Solicitações podem ser enviadas aos canais oficiais de atendimento.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">8. Cookies e Tecnologias de Rastreamento</h2>
                  <p>Utilizamos cookies para:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Melhorar desempenho do site.</li>
                    <li>Personalizar conteúdos.</li>
                    <li>Analisar comportamento de navegação.</li>
                  </ul>
                  <p className="mt-2">
                    Você pode desativar cookies no navegador, mas alguns recursos podem ser afetados.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">9. Uso pelo WhatsApp</h2>
                  <p>Quando você utiliza o ShapeZap via WhatsApp:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>As mensagens podem ser processadas automaticamente para oferecer serviços.</li>
                    <li>Dados podem ser armazenados conforme necessário para histórico e melhoria da experiência.</li>
                  </ul>
                  <p className="mt-2">
                    O WhatsApp aplica suas próprias políticas de privacidade: <br />
                    <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline break-all">
                      https://www.whatsapp.com/legal/privacy-policy
                    </a>
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">10. Alterações na Política</h2>
                  <p>
                    Podemos atualizar esta Política para refletir melhorias ou exigências legais. A versão mais recente sempre estará disponível no site. O uso contínuo dos serviços após atualização significa concordância com as mudanças.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">11. Contato</h2>
                  <p>
                    Para dúvidas, solicitações ou exercício de direitos, entre em contato pelos canais de suporte indicados no site ShapeZap.
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
