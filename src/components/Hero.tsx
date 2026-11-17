import { ArrowDown, CalendarClock, Check, MessageCircle, Sparkles, UserRound } from 'lucide-react'
import { external, whatsappLink } from '../lib/contact'

const flow = ['Solicitação recebida', 'Especialidade identificada', 'Horários sugeridos', 'Pré-agendamento']

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950 pt-28 pb-20 text-white sm:pt-36 sm:pb-28">
      <div
        className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        aria-hidden
      />

      <div className="container-x relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-200">
            <Sparkles size={13} aria-hidden /> Automação de atendimento para clínicas
          </span>

          <h1 className="mt-6 text-4xl leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.4rem]">
            Menos tarefas repetitivas.{' '}
            <span className="text-teal-300">Mais tempo para cuidar de pessoas.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
            A Automatech desenvolve a <strong className="font-semibold text-white">Sofia</strong>, uma assistente
            virtual para o WhatsApp da clínica. Ela responde às dúvidas frequentes, apresenta horários e organiza as
            solicitações de agendamento, para que a equipe se concentre no que exige atenção humana.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappLink()} {...external} className="btn-primary">
              <MessageCircle size={16} aria-hidden /> Conhecer nossa solução
            </a>
            <a href="#sofia" className="btn-ghost-light">
              Ver a Sofia em ação <ArrowDown size={16} aria-hidden />
            </a>
          </div>

          <p className="mt-8 text-xs leading-relaxed text-navy-300">
            Solução em desenvolvimento · As conversas exibidas neste site são demonstrações ilustrativas.
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden>
      {/* Cartão principal: prévia da conversa */}
      <div className="relative rounded-3xl border border-white/10 bg-navy-900 p-5 shadow-2xl sm:p-6 sm:pb-14">
        <div className="flex items-center gap-3 border-b border-white/10 pb-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-teal-400 font-display font-bold text-navy-950">
            S
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold">Sofia</p>
            <p className="text-xs text-navy-300">Assistente virtual · WhatsApp</p>
          </div>
          <span className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] font-medium tracking-wide text-navy-200 uppercase">
            Exemplo ilustrativo
          </span>
        </div>

        <div className="space-y-3 pt-5 text-sm">
          <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-teal-400 px-4 py-2.5 text-navy-950">
            Oi! Tem horário para dermatologista essa semana?
          </div>
          <div className="w-fit max-w-[85%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-2.5 text-navy-50">
            Olá! Tenho estas opções disponíveis para Dermatologia:
          </div>
          <div className="flex flex-wrap gap-2">
            {['Qua · 09:30', 'Qua · 15:00', 'Sex · 10:15'].map((s, i) => (
              <span
                key={s}
                className={`rounded-full border px-3 py-1 text-xs ${
                  i === 1 ? 'border-teal-300 bg-teal-300/15 text-teal-200' : 'border-white/15 text-navy-200'
                }`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mt-4 grid items-start gap-4 sm:-mt-8 sm:grid-cols-2 sm:px-5">
        {/* Fluxo automatizado */}
      <div className="rounded-2xl border border-navy-100 bg-white p-4 text-navy-900 shadow-xl">
        <p className="mb-3 flex items-center gap-2 text-xs font-semibold text-navy-600">
          <CalendarClock size={14} className="text-teal-600" /> Fluxo de agendamento
        </p>
        <ul className="space-y-2">
          {flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2 text-[13px]">
              <span
                className={`grid h-4 w-4 place-items-center rounded-full ${
                  i < 3 ? 'bg-teal-400 text-navy-950' : 'border border-dashed border-navy-300'
                }`}
              >
                {i < 3 && <Check size={10} strokeWidth={3} />}
              </span>
              <span className={i < 3 ? 'text-navy-800' : 'text-navy-500'}>{step}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Encaminhamento humano */}
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-navy-800 p-4 shadow-xl sm:mt-10">
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/10 text-teal-300">
          <UserRound size={18} />
        </div>
        <div className="text-xs">
          <p className="font-semibold text-white">Casos especiais</p>
          <p className="text-navy-200">encaminhados para a equipe da recepção</p>
        </div>
        <MessageCircle size={16} className="ml-auto shrink-0 text-navy-400" />
      </div>
      </div>
    </div>
  )
}
