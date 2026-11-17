import { BellRing, CalendarPlus, Clock3, LayoutList, MessageCircleQuestion, UsersRound } from 'lucide-react'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const features = [
  {
    icon: CalendarPlus,
    title: 'Agendamento guiado',
    text: 'Conduz o paciente da escolha da especialidade até a seleção do horário em poucas mensagens.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Dúvidas frequentes',
    text: 'Responde sobre endereço, horários de funcionamento, convênios e preparo para exames.',
  },
  {
    icon: BellRing,
    title: 'Lembretes e confirmações',
    text: 'Envia lembretes antes da consulta e registra a confirmação ou o pedido de remarcação.',
  },
  {
    icon: UsersRound,
    title: 'Encaminhamento humano',
    text: 'Transfere a conversa para a recepção quando o paciente pede ou quando o assunto exige.',
  },
  {
    icon: Clock3,
    title: 'Disponível fora do expediente',
    text: 'Recebe solicitações a qualquer hora, e a equipe as encontra organizadas no próximo expediente.',
  },
  {
    icon: LayoutList,
    title: 'Solicitações organizadas',
    text: 'Reúne pedidos e pré-agendamentos em um só lugar, prontos para revisão da equipe.',
  },
]

export function Features() {
  return (
    <section id="funcionalidades" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Funcionalidades"
          title="O que a Sofia foi pensada para fazer"
          description="Recursos em desenvolvimento, desenhados a partir das rotinas mais comuns da recepção de uma clínica."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 80}>
              <article className="card h-full p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-teal-300">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-navy-600">
          As integrações com o WhatsApp Business e com agendas estão no plano de desenvolvimento.{' '}
          <a href="#proximos-passos" className="font-semibold text-teal-700 underline-offset-4 hover:underline">
            Ver próximos passos
          </a>
        </p>
      </div>
    </section>
  )
}
