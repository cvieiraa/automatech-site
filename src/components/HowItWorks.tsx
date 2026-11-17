import { MessagesSquare, Search, Settings2, ShieldCheck } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const steps = [
  {
    icon: Search,
    title: 'Mapeamento',
    text: 'Entendemos como a clínica atende hoje: especialidades, horários, dúvidas mais comuns e regras de agendamento.',
  },
  {
    icon: Settings2,
    title: 'Configuração',
    text: 'A Sofia é configurada com as informações e o tom de voz da clínica, e as mensagens são revisadas pela equipe.',
  },
  {
    icon: MessagesSquare,
    title: 'Atendimento',
    text: 'Os pacientes conversam com a Sofia pelo WhatsApp, no canal que já usam no dia a dia.',
  },
  {
    icon: ShieldCheck,
    title: 'Acompanhamento',
    text: 'A equipe revisa as solicitações, assume conversas quando necessário e ajusta o fluxo com o tempo.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-navy-950 py-20 text-white sm:py-28">
      <div className="container-x relative">
        <SectionHeading
          dark
          eyebrow="Como funciona"
          title="Da rotina da clínica para uma conversa organizada"
          description="Nossa proposta de implantação em quatro etapas, com a equipe da clínica participando de cada decisão."
        />

        <div className="mt-16">
          <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text }, i) => (
              <li key={title}>
                <Reveal delay={i * 100} className="h-full">
                  <div className="h-full rounded-2xl border border-white/10 bg-navy-900/60 p-6">
                    <div className="flex items-center justify-between">
                      <span className="grid h-12 w-12 place-items-center rounded-xl bg-teal-400 text-navy-950">
                        <Icon size={22} />
                      </span>
                      <span className="font-display text-sm font-semibold tracking-widest text-navy-300">
                        Etapa {i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-200">{text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
