import { ArrowRight, CalendarSearch, ClipboardCheck, HeartHandshake, MessagesSquare, Repeat2, Workflow } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const problems = [
  {
    icon: Repeat2,
    title: 'Perguntas repetitivas',
    text: 'Endereço, horário de funcionamento, convênios aceitos: as mesmas dúvidas chegam várias vezes por dia e disputam a atenção da recepção.',
  },
  {
    icon: CalendarSearch,
    title: 'Busca manual por horários',
    text: 'Cada pedido de consulta exige consultar a agenda, listar opções e esperar a resposta do paciente, muitas vezes em várias conversas ao mesmo tempo.',
  },
  {
    icon: ClipboardCheck,
    title: 'Confirmações uma a uma',
    text: 'Confirmar e lembrar consultas manualmente consome tempo e aumenta o risco de esquecimentos e faltas.',
  },
]

const solutions = [
  {
    icon: MessagesSquare,
    title: 'Respostas imediatas e padronizadas',
    text: 'A Sofia responde às dúvidas frequentes com as informações definidas pela própria clínica.',
  },
  {
    icon: Workflow,
    title: 'Fluxo de agendamento guiado',
    text: 'O paciente informa a especialidade, vê as opções de horário e registra a solicitação na mesma conversa.',
  },
  {
    icon: HeartHandshake,
    title: 'A equipe no centro do cuidado',
    text: 'Com menos tarefas repetitivas, secretárias e recepcionistas ganham tempo para acolher pacientes e resolver os casos que pedem atenção humana.',
  },
]

export function ProblemSolution() {
  return (
    <section id="solucao" className="py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Problema e solução"
          title="O atendimento da clínica não precisa ser uma fila de mensagens"
          description="Boa parte do dia da recepção é ocupada por tarefas que seguem sempre o mesmo roteiro. A automação cuida desse roteiro, e a equipe fica livre para o que realmente pede atenção."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <Reveal className="card p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-navy-500 uppercase">Hoje</p>
            <h3 className="mt-2 text-xl font-bold text-navy-900">Os desafios do dia a dia</h3>
            <ul className="mt-6 space-y-6">
              {problems.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-600">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-900">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="hidden items-center lg:flex" aria-hidden>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-navy-100 bg-white text-teal-600 shadow-sm">
              <ArrowRight size={20} />
            </span>
          </div>

          <Reveal delay={120} className="rounded-2xl bg-navy-900 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-teal-300 uppercase">Com a Sofia</p>
            <h3 className="mt-2 text-xl font-bold">Automação que apoia a equipe</h3>
            <ul className="mt-6 space-y-6">
              {solutions.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-400/15 text-teal-300">
                    <Icon size={19} />
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-200">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-navy-600">
            <strong className="text-navy-900">A Sofia trabalha ao lado da equipe.</strong> Ela assume as etapas
            repetitivas do atendimento e passa a conversa para uma pessoa sempre que o paciente pedir ou o assunto exigir.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
