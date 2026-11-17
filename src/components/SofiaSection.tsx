import { useState } from 'react'
import { Info, MessageCircle } from 'lucide-react'
import { external, whatsappLink } from '../lib/contact'
import { ChatDemo, stages } from './ChatDemo'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function SofiaSection() {
  const [stage, setStage] = useState(0)

  return (
    <section id="sofia" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Conheça a Sofia"
            title="A assistente virtual que organiza o atendimento pelo WhatsApp"
            description="A Sofia é a assistente virtual que a Automatech está desenvolvendo para ajudar clínicas a conduzir as conversas mais frequentes: pedidos de consulta, dúvidas sobre especialidades e escolha de horários, sempre de forma clara e cordial."
          />

          <Reveal delay={100}>
            <ol className="mt-10 space-y-3">
              {stages.map((s, i) => {
                const active = i === stage
                const done = i < stage
                return (
                  <li
                    key={s.title}
                    aria-current={active ? 'step' : undefined}
                    className={`flex items-start gap-4 rounded-xl border p-4 transition-all duration-300 ${
                      active ? 'border-teal-300 bg-white shadow-sm' : 'border-transparent'
                    }`}
                  >
                    <span
                      className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg font-display text-sm font-bold transition-colors ${
                        active
                          ? 'bg-teal-400 text-navy-950'
                          : done
                            ? 'bg-navy-900 text-white'
                            : 'bg-navy-100 text-navy-600'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-display font-semibold text-navy-900">{s.title}</p>
                      <p className="text-sm text-navy-600">{s.text}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </Reveal>

          <Reveal delay={150}>
            <p className="mt-8 flex gap-3 rounded-xl border border-navy-200 bg-white p-4 text-sm leading-relaxed text-navy-600">
              <Info size={18} className="mt-0.5 shrink-0 text-teal-600" />
              <span>
                <strong className="text-navy-900">Demonstração ilustrativa.</strong> Esta conversa é uma simulação
                com dados fictícios. Este site não se conecta ao WhatsApp nem a sistemas de clínicas.
              </span>
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href={whatsappLink()} {...external} className="btn-dark">
                <MessageCircle size={16} aria-hidden /> Solicitar uma demonstração
              </a>
              <span className="text-sm text-navy-600">Mostramos como a Sofia pode funcionar na rotina da sua clínica.</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <ChatDemo onStageChange={setStage} />
        </Reveal>
      </div>
    </section>
  )
}
