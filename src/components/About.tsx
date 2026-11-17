import { CalendarRange, Compass, Eye, Lock, Plug, Target, Wrench } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const pillars = [
  {
    icon: Target,
    title: 'Missão',
    text: 'Simplificar o atendimento de clínicas com automação acessível, liberando tempo da equipe para cuidar das pessoas.',
  },
  {
    icon: Eye,
    title: 'Visão',
    text: 'Ser referência em atendimento automatizado e humanizado para clínicas de pequeno e médio porte.',
  },
  {
    icon: Compass,
    title: 'Valores',
    text: 'Clareza, respeito ao paciente, privacidade dos dados e tecnologia a serviço das pessoas.',
  },
]

const roadmap = [
  { icon: Plug, title: 'Integração com WhatsApp Business', text: 'Conexão com a API oficial para conversas reais.' },
  { icon: CalendarRange, title: 'Integração com agendas', text: 'Consulta de horários direto do sistema da clínica.' },
  { icon: Lock, title: 'Adequação à LGPD', text: 'Tratamento seguro e transparente dos dados de pacientes.' },
]

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Sobre a Automatech"
              title="Tecnologia para um atendimento mais ágil e humano"
              description="A Automatech é uma startup de automação focada no atendimento de clínicas. Nascemos em um projeto acadêmico, a partir de uma pergunta prática: como tirar da recepção as tarefas repetitivas sem perder o cuidado com o paciente? A Sofia é a nossa resposta, e está em desenvolvimento."
            />
            <Reveal delay={100}>
              <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-navy-100 bg-navy-50/60 px-4 py-3 text-sm text-navy-700">
                <Wrench size={18} className="text-teal-700" aria-hidden />
                Solução em desenvolvimento, com origem acadêmica
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {pillars.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80}>
                <div className="card flex gap-5 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy-900">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div id="proximos-passos" className="mt-16 rounded-2xl border border-dashed border-navy-200 p-6 sm:p-8">
            <p className="eyebrow">Próximos passos</p>
            <h3 className="mt-2 text-lg font-semibold text-navy-900">O que ainda está em desenvolvimento</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {roadmap.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <Icon size={18} className="mt-0.5 shrink-0 text-teal-700" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-navy-800">{title}</p>
                    <p className="mt-1 text-sm text-navy-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
