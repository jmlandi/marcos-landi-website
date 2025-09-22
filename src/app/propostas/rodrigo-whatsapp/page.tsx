"use client";
import { useEffect } from "react";
import {
    Chart,
    ChartData,
    ChartOptions,
    TooltipItem,
    DoughnutController,
    ArcElement,
    Legend,
    Title,
    Tooltip,
} from "chart.js";
import Script from "next/script";
import Head from "next/head";
import React from "react";


export default function PropostaRodrigoWhatsapp() {
    useEffect(() => {
        // Register Chart.js components (for v4+ tree-shaking)
        Chart.register(DoughnutController, ArcElement, Legend, Title, Tooltip);
        // Step navigation logic
        const steps = document.querySelectorAll<HTMLElement>(".step");
        const stepContents = document.querySelectorAll<HTMLElement>(".step-content");
        steps.forEach((step) => {
            step.addEventListener("click", () => {
                const stepNumber = step.dataset.step;
                steps.forEach((s) => s.classList.remove("active"));
                step.classList.add("active");
                stepContents.forEach((content) => {
                    if (content.dataset.content === stepNumber) {
                        content.classList.remove("hidden");
                        content.classList.add("active");
                    } else {
                        content.classList.add("hidden");
                        content.classList.remove("active");
                    }
                });
            });
        });
        // Tab navigation logic
        const tabs = document.querySelectorAll<HTMLElement>(".tab");
        const tabContents = document.querySelectorAll<HTMLElement>(".tab-content");
        tabs.forEach((tab) => {
            tab.addEventListener("click", () => {
                const tabName = tab.dataset.tab;
                tabs.forEach((t) => t.classList.remove("active"));
                tab.classList.add("active");
                tabContents.forEach((content) => {
                    if (content.dataset.contentTab === tabName) {
                        content.classList.remove("hidden");
                        content.classList.add("active");
                    } else {
                        content.classList.add("hidden");
                        content.classList.remove("active");
                    }
                });
            });
        });
        // Chart.js logic
        const canvas = document.getElementById("costChart") as HTMLCanvasElement | null;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                const data: ChartData<"doughnut"> = {
                    labels: [
                        "n8n & Hospedagem",
                        "Banco de Dados",
                        "WhatsApp API",
                        "Armazenamento S3 & IA",
                    ],
                    datasets: [
                        {
                            label: "Estimativa de Custo Mensal (USD)",
                            data: [15, 12.41, 6.8, 0.5],
                            backgroundColor: [
                                "#C8BA95",
                                "#625B49",
                                "#000000",
                                "#C8BA95",
                            ],
                            borderColor: "#FFFFFF",
                            borderWidth: 4,
                            hoverOffset: 10,
                        },
                    ],
                };
                const options: ChartOptions<"doughnut"> = {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: "60%",
                    plugins: {
                        legend: {
                            position: "bottom",
                            labels: {
                                color: "#000000",
                                font: {
                                    size: 14,
                                },
                            },
                        },
                        tooltip: {
                            callbacks: {
                                label: function (context: TooltipItem<"doughnut">) {
                                    let label = context.label || "";
                                    if (label) {
                                        label += ": ";
                                    }
                                    if (context.parsed !== null) {
                                        label += new Intl.NumberFormat("en-US", {
                                            style: "currency",
                                            currency: "USD",
                                        }).format(context.parsed as number);
                                    }
                                    return label;
                                },
                            },
                        },
                    },
                };
                new Chart(ctx, {
                    type: "doughnut",
                    data,
                    options,
                });
            }
        }
    }, []);

    return (
        <>
            <Head>
                <title>Proposta Interativa: Automação de Relatórios de Marketing</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>
            <Script src="https://cdn.jsdelivr.net/npm/chart.js" strategy="afterInteractive" />
            <style jsx global>{`
                body {
                    font-family: 'Inter', sans-serif;
                    background-color: #ffffff;
                    color: #000000;
                }
                .chart-container {
                    position: relative;
                    width: 100%;
                    max-width: 400px;
                    margin-left: auto;
                    margin-right: auto;
                    height: 400px;
                    max-height: 40vh;
                }
                .step-connector {
                    flex-grow: 1;
                    height: 2px;
                    background-color: #c8ba95;
                }
                .step.active {
                    border-color: #625b49;
                    color: #625b49;
                }
                .tab.active {
                    border-color: #625b49;
                    color: #625b49;
                    background-color: #ffffff;
                }
            `}</style>
            {/* ...existing code... */}
            <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold text-[#C8BA95]">Proposta Interativa</h1>
                    <div className="hidden md:flex space-x-8">
                        <a href="#solucao" className="text-gray-600 hover:text-[#C8BA95] transition-colors">A Solução</a>
                        <a href="#funcionamento" className="text-gray-600 hover:text-[#C8BA95] transition-colors">Como Funciona</a>
                        <a href="#custos" className="text-gray-600 hover:text-[#C8BA95] transition-colors">Custos</a>
                        <a href="#passos" className="text-gray-600 hover:text-[#C8BA95] transition-colors">Próximos Passos</a>
                        <a href="#comercial" className="text-gray-600 hover:text-[#C8BA95] transition-colors">Detalhes Comerciais</a>
                    </div>
                </nav>
            </header>

            <main>
                <section className="text-center py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#000000] mb-4">Automação de Relatórios com IA e WhatsApp</h2>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Uma solução inteligente para otimizar a entrega de relatórios de marketing, fortalecer a comunicação e reduzir custos operacionais.</p>
                    </div>
                </section>

        <section id="solucao" className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-[#000000]">A Solução Proposta</h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Desenvolvemos uma plataforma completa que resolve o desafio de comunicação com clientes de ponta a ponta, combinando automação, inteligência artificial e a conveniência do WhatsApp.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-4xl mb-4 text-[#C8BA95]">📊</div>
                        <h4 className="text-xl font-bold mb-2">Relatórios Automatizados</h4>
                        <p className="text-gray-600">Extraímos dados de dashboards de marketing e os transformamos em relatórios PDF claros e dashboards web interativos, eliminando o trabalho manual.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-4xl mb-4 text-[#C8BA95]">📱</div>
                        <h4 className="text-xl font-bold mb-2">Bot no WhatsApp</h4>
                        <p className="text-gray-600">Um bot intuitivo utiliza a API oficial do WhatsApp para iniciar conversas, enviar relatórios e manter seus clientes informados de forma proativa.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-4xl mb-4 text-[#C8BA95]">🧠</div>
                        <h4 className="text-xl font-bold mb-2">Inteligência Artificial</h4>
                        <p className="text-gray-600">A IA analisa e resume os relatórios, permitindo que os clientes façam perguntas sobre o desempenho e recebam respostas contextuais instantâneas.</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <div className="text-4xl mb-4 text-[#C8BA95]">⚙️</div>
                        <h4 className="text-xl font-bold mb-2">Infraestrutura Otimizada</h4>
                        <p className="text-gray-600">Utilizamos soluções de código aberto (n8n self-hosted) e serviços de nuvem eficientes para garantir um projeto de alto impacto com custos reduzidos.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="funcionamento" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-[#000000]">Como a Automação Funciona</h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Construímos um fluxo de trabalho robusto e inteligente. Clique em cada etapa para ver os detalhes de como transformamos dados brutos em conversas valiosas com seus clientes.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                    <button className="step active font-semibold border-2 border-transparent rounded-full px-6 py-3 cursor-pointer transition-all" data-step="1">1. Coleta de Dados</button>
                    <div className="step-connector w-1/4 h-0.5 bg-gray-300 hidden md:block"></div>
                    <button className="step font-semibold border-2 border-transparent rounded-full px-6 py-3 cursor-pointer transition-all" data-step="2">2. Análise com IA</button>
                    <div className="step-connector w-1/4 h-0.5 bg-gray-300 hidden md:block"></div>
                    <button className="step font-semibold border-2 border-transparent rounded-full px-6 py-3 cursor-pointer transition-all" data-step="3">3. Envio via WhatsApp</button>
                    <div className="step-connector w-1/4 h-0.5 bg-gray-300 hidden md:block"></div>
                    <button className="step font-semibold border-2 border-transparent rounded-full px-6 py-3 cursor-pointer transition-all" data-step="4">4. Atendimento Contextual</button>
                </div>
                
                <div id="step-details" className="mt-8 bg-[#FFFFFF] p-8 rounded-lg shadow-inner min-h-[150px] transition-all duration-300">
                    <div className="step-content active" data-content="1">
                        <h4 className="text-xl font-bold mb-2 text-[#000000]">Coleta e Armazenamento de Dados</h4>
                        <p className="text-gray-600">Um fluxo automatizado no n8n é acionado (diariamente, semanalmente ou via webhook) para coletar dados do dashboard de marketing. O relatório em PDF é gerado, armazenado de forma segura em um bucket S3, e suas informações são registradas em um banco de dados PostgreSQL.</p>
                    </div>
                    <div className="step-content hidden" data-content="2">
                        <h4 className="text-xl font-bold mb-2 text-[#000000]">Processamento com Inteligência Artificial</h4>
                        <p className="text-gray-600">Os dados ou o PDF são enviados para um serviço de IA (como OpenAI ou Google Vertex). A IA gera um resumo conciso, extrai métricas chave e prepara insights para serem enviados ao cliente. O resultado é gravado no banco de dados para referência futura.</p>
                    </div>
                    <div className="step-content hidden" data-content="3">
                        <h4 className="text-xl font-bold mb-2 text-[#000000]">Envio da Mensagem via WhatsApp Cloud API</h4>
                        <p className="text-gray-600">Utilizando um template de mensagem pré-aprovado (categoria &quot;Utility&quot; para otimização de custo), o n8n se conecta à API do WhatsApp. A mensagem é personalizada com os dados da IA e enviada ao cliente, iniciando a conversa e entregando o relatório.</p>
                    </div>
                    <div className="step-content hidden" data-content="4">
                        <h4 className="text-xl font-bold mb-2 text-[#000000]">Atendimento e Respostas Contextuais</h4>
                        <p className="text-gray-600">Quando o cliente responde, um webhook no n8n captura a mensagem. A IA é acionada novamente, agora com o histórico da campanha e o perfil do cliente, para gerar uma resposta precisa e contextualizada, que é enviada gratuitamente dentro da janela de 24 horas.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="custos" className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-[#000000]">Análise de Custos Transparente</h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">Nossa arquitetura foi planejada para maximizar o retorno sobre o investimento. Apresentamos uma estimativa de custos mensais para o projeto piloto, com total transparência em cada componente.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="w-full lg:w-1/2">
                        <div className="text-center mb-8">
                            <span className="text-5xl font-bold text-[#C8BA95]">US$ 30-40</span>
                            <span className="text-xl text-gray-600">/mês (estimativa piloto)</span>
                        </div>
                        <div className="chart-container">
                            <canvas id="costChart"></canvas>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div>
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex space-x-6" aria-label="Tabs">
                                    <button className="tab active whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-tab="n8n">n8n & Hospedagem</button>
                                    <button className="tab whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-tab="whatsapp">WhatsApp API</button>
                                    <button className="tab whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-tab="db">Banco de Dados</button>
                                    <button className="tab whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm" data-tab="s3">Armazenamento S3</button>
                                </nav>
                            </div>
                            <div className="py-6 min-h-[200px]">
                                <div className="tab-content active" data-content-tab="n8n">
                                    <h5 className="font-bold text-lg mb-2">n8n Community (Self-Hosted)</h5>
                                    <p className="text-gray-600">A licença do n8n é gratuita. O custo de US$ 10-20/mês refere-se a um servidor VPS básico (ex: DigitalOcean, EC2) para hospedar a aplicação, garantindo execuções ilimitadas e controle total.</p>
                                </div>
                                <div className="tab-content hidden" data-content-tab="whatsapp">
                                    <h5 className="font-bold text-lg mb-2">WhatsApp Cloud API</h5>
                                    <p className="text-gray-600">Sem mensalidade. O custo estimado de US$ 6,80/mês considera 1.000 mensagens de &quot;Utility&quot; (US$ 0,0068 cada). Respostas dentro da janela de 24h são gratuitas. Mensagens de &quot;Marketing&quot; têm custo maior (US$ 0,0625 cada).</p>
                                </div>
                                <div className="tab-content hidden" data-content-tab="db">
                                    <h5 className="font-bold text-lg mb-2">Banco de Dados PostgreSQL</h5>
                                    <p className="text-gray-600">Gratuito nos primeiros 12 meses com o Free Tier da AWS RDS. Após esse período, uma instância mínima (db.t4g.micro) custa aproximadamente US$ 12,41/mês. Pode ser hospedado no mesmo servidor do n8n para testes, sem custo adicional.</p>
                                </div>
                                <div className="tab-content hidden" data-content-tab="s3">
                                     <h5 className="font-bold text-lg mb-2">Armazenamento S3</h5>
                                    <p className="text-gray-600">Custo extremamente baixo, estimado em US$ 0,04 por GB/mês. Ideal para armazenar os relatórios em PDF com segurança e escalabilidade. Os custos de requisição são ínfimos (frações de centavo por mil solicitações).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="passos" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-[#000000]">Próximos Passos</h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Propomos um plano de implementação em fases para garantir uma entrega ágil, com validação contínua e alinhamento com seus objetivos de negócio.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="border-t-4 border-[#C8BA95] bg-[#FFFFFF] p-8 rounded-lg shadow-md">
                        <div className="text-2xl font-bold text-[#000000] mb-4">Fase 1: Prototipação</div>
                        <span className="block font-semibold text-gray-500 mb-4">(~1 Mês)</span>
                        <p className="text-gray-600">Implementação do fluxo básico de automação e envio do primeiro relatório para validação interna. Configuração da infraestrutura essencial.</p>
                    </div>
                    <div className="border-t-4 border-[#625B49] bg-[#FFFFFF] p-8 rounded-lg shadow-md">
                        <div className="text-2xl font-bold text-[#000000] mb-4">Fase 2: Validação</div>
                        <span className="block font-semibold text-gray-500 mb-4">(Contínuo)</span>
                        <p className="text-gray-600">Lançamento do bot para um grupo piloto de clientes. Coleta de feedback para refinar as respostas da IA e a experiência do usuário.</p>
                    </div>
                    <div className="border-t-4 border-[#000000] bg-[#FFFFFF] p-8 rounded-lg shadow-md">
                        <div className="text-2xl font-bold text-[#000000] mb-4">Fase 3: Expansão</div>
                        <span className="block font-semibold text-gray-500 mb-4">(Após Validação)</span>
                        <p className="text-gray-600">Análise do volume de mensagens e desempenho. Avaliação da necessidade de otimizar a infraestrutura ou migrar para uma solução em Python para maior escalabilidade.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="comercial" className="py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-[#000000]">Detalhes Comerciais</h3>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Para total transparência, aqui estão os detalhes sobre o investimento necessário e as condições de contratação.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="text-4xl mb-4 text-[#C8BA95]">👤</div>
                        <h4 className="text-xl font-bold mb-2">Prestador do Serviço</h4>
                        <p className="text-gray-600">Marcos Landi</p>
                        <a href="https://marcoslandi.com" target="_blank" className="text-[#C8BA95] hover:underline">https://marcoslandi.com</a>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="text-4xl mb-4 text-[#C8BA95]">💰</div>
                        <h4 className="text-xl font-bold mb-2">Valor do Projeto</h4>
                        <p className="text-gray-600 font-bold mb-1">Desenvolvimento: R$3.800</p>
                        <p className="text-gray-600 font-bold mb-1">Manutenção Mensal: R$380,00</p>
                        <p className="text-sm text-gray-500">Valor da manutenção inclui a hospedagem (S3, n8n/Python e Banco de Dados).</p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <div className="text-4xl mb-4 text-[#C8BA95]">💳</div>
                        <h4 className="text-xl font-bold mb-2">Condições de Pagamento</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>À vista com 3% de desconto.</li>
                            <li>Em até 4x sem juros no cartão.</li>
                            <li>Em até 12x com juros no cartão.</li>
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg md:col-span-2 lg:col-span-3">
                        <div className="text-4xl mb-4 text-[#C8BA95]">📅</div>
                        <h4 className="text-xl font-bold mb-2">Datas Importantes</h4>
                        <p className="text-gray-600">O pagamento será realizado na entrega do projeto, e o desenvolvimento terá início 7 dias após a assinatura inicial.</p>
                    </div>
                </div>
            </div>
        </section>
    </main>

            <footer className="bg-[#000000] text-white py-8">
                <div className="container mx-auto px-6 text-center">
                    <h4 className="text-2xl font-bold mb-4">Pronto para começar?</h4>
                    <p className="mb-6">Vamos conversar sobre como esta solução pode transformar a comunicação com seus clientes.</p>
                    <a href="mailto:contato@marcoslandi.com" className="bg-[#C8BA95] hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition-colors">Entre em Contato</a>
                </div>
            </footer>

    </>
  );
}
