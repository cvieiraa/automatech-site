import { useCallback, useEffect, useRef, useState } from 'react'
import { CalendarCheck, CheckCheck, ChevronLeft, Info, MoreVertical, Phone, RotateCcw, Sparkles } from 'lucide-react'

type Message =
  | { from: 'patient'; text: string; stage: number }
  | { from: 'sofia'; text: string; stage: number; options?: string[]; selected?: string }
  | { from: 'sofia'; kind: 'confirmation'; stage: number }

export const stages = [
  { title: 'Solicitação', text: 'O paciente pede uma consulta.' },
  { title: 'Especialidade', text: 'Sofia identifica a área desejada.' },
  { title: 'Horários', text: 'Opções disponíveis são apresentadas.' },
  { title: 'Confirmação', text: 'O pré-agendamento é registrado.' },
]

const script: Message[] = [
  { from: 'patient', text: 'Olá! Gostaria de agendar uma consulta.', stage: 0 },
  {
    from: 'sofia',
    text: 'Olá! Eu sou a Sofia, assistente virtual da Clínica Exemplo. Vou te ajudar com o agendamento. Qual especialidade você procura?',
    options: ['Clínico geral', 'Dermatologia', 'Cardiologia', 'Pediatria'],
    selected: 'Dermatologia',
    stage: 0,
  },
  { from: 'patient', text: 'Dermatologia', stage: 1 },
  {
    from: 'sofia',
    text: 'Perfeito! Estes são os horários disponíveis para Dermatologia nesta semana:',
    options: ['Qua · 09:30', 'Qua · 15:00', 'Sex · 10:15'],
    selected: 'Qua · 15:00',
    stage: 2,
  },
  { from: 'patient', text: 'Quarta às 15:00, por favor.', stage: 2 },
  { from: 'sofia', kind: 'confirmation', stage: 3 },
  {
    from: 'sofia',
    text: 'Você receberá um lembrete antes da consulta. Se preferir falar com a recepção, é só digitar "atendente".',
    stage: 3,
  },
]

const TYPING_MS = 1100
const PAUSE_MS = 900

type ChatDemoProps = {
  onStageChange?: (stage: number) => void
}

export function ChatDemo({ onStageChange }: ChatDemoProps) {
  const [count, setCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Inicia a animação apenas quando a demonstração entra na tela
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.35 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || count >= script.length) return
    const next = script[count]
    if (next.from === 'sofia') {
      setTyping(true)
      const t = setTimeout(() => {
        setTyping(false)
        setCount((c) => c + 1)
      }, TYPING_MS)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setCount((c) => c + 1), count === 0 ? 400 : PAUSE_MS + 600)
    return () => clearTimeout(t)
  }, [count, started])

  useEffect(() => {
    if (count > 0) onStageChange?.(script[count - 1].stage)
  }, [count, onStageChange])

  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [count, typing])

  const restart = useCallback(() => {
    setTyping(false)
    setCount(0)
    onStageChange?.(0)
  }, [onStageChange])

  const visible = script.slice(0, count)
  const finished = count >= script.length

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-[380px]">
      <div className="overflow-hidden rounded-[2rem] border border-navy-800 bg-navy-950 p-2 shadow-[0_30px_80px_-20px_rgba(6,15,34,0.55)]">
        <div className="overflow-hidden rounded-[1.6rem] bg-[#eef2f6]">
          {/* Topo da conversa */}
          <div className="flex items-center gap-3 bg-navy-900 px-3 py-3 text-white">
            <ChevronLeft size={20} className="text-navy-300" aria-hidden />
            <div className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-400 font-display text-sm font-bold text-navy-950">
              S
              <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-navy-900 bg-emerald-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">Sofia · Clínica Exemplo</p>
              <p className="text-xs text-teal-300">{typing ? 'digitando…' : 'assistente virtual'}</p>
            </div>
            <Phone size={18} className="text-navy-300" aria-hidden />
            <MoreVertical size={18} className="text-navy-300" aria-hidden />
          </div>

          {/* Mensagens */}
          <div
            ref={scrollRef}
            className="flex h-[440px] flex-col gap-2.5 overflow-y-auto px-3 py-4"
            aria-live="polite"
            aria-label="Demonstração de conversa com a Sofia"
          >
            <p className="mx-auto mb-1 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-navy-600">
              Conversa demonstrativa · dados fictícios
            </p>

            {visible.map((m, i) => (
              <Bubble key={i} message={m} />
            ))}

            {typing && (
              <div className="flex animate-msg-in items-center gap-1 self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-navy-400" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-navy-400" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-navy-400" />
              </div>
            )}
          </div>

          {/* Campo de digitação (decorativo) */}
          <div className="flex items-center gap-2 border-t border-navy-100 bg-white px-3 py-2.5">
            <div className="flex-1 rounded-full bg-navy-50 px-4 py-2 text-xs text-navy-500">
              Demonstração: envio desativado
            </div>
            <button
              type="button"
              onClick={restart}
              disabled={!finished}
              className="grid h-9 w-9 place-items-center rounded-full bg-teal-400 text-navy-950 transition hover:bg-teal-300 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Reiniciar demonstração"
              title="Reiniciar demonstração"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

function Bubble({ message }: { message: Message }) {
  if (message.from === 'patient') {
    return (
      <div className="max-w-[80%] animate-msg-in self-end rounded-2xl rounded-tr-sm bg-teal-100 px-3.5 py-2 text-sm text-navy-900 shadow-sm">
        {message.text}
        <span className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-navy-500">
          agora <CheckCheck size={12} className="text-teal-600" />
        </span>
      </div>
    )
  }

  if ('kind' in message) {
    return (
      <div className="w-[85%] animate-msg-in self-start overflow-hidden rounded-2xl rounded-tl-sm bg-white text-sm shadow-sm">
        <div className="flex items-center gap-2 bg-navy-900 px-3.5 py-2.5 text-white">
          <CalendarCheck size={16} className="text-teal-300" />
          <span className="font-semibold">Pré-agendamento registrado</span>
        </div>
        <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 px-3.5 py-3 text-[13px]">
          <dt className="text-navy-500">Especialidade</dt>
          <dd className="font-medium text-navy-900">Dermatologia</dd>
          <dt className="text-navy-500">Data</dt>
          <dd className="font-medium text-navy-900">Quarta-feira</dd>
          <dt className="text-navy-500">Horário</dt>
          <dd className="font-medium text-navy-900">15:00</dd>
        </dl>
        <p className="flex items-center gap-1.5 border-t border-navy-100 px-3.5 py-2 text-[11px] text-navy-500">
          <Info size={12} /> Dados fictícios, apenas para demonstração
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-[85%] animate-msg-in self-start">
      <div className="rounded-2xl rounded-tl-sm bg-white px-3.5 py-2 text-sm text-navy-900 shadow-sm">
        <span className="mb-0.5 flex items-center gap-1 text-[11px] font-semibold text-teal-700">
          <Sparkles size={11} /> Sofia
        </span>
        {message.text}
      </div>
      {message.options && (
        <div className="mt-1.5 flex flex-wrap gap-1.5">
          {message.options.map((opt) => (
            <span
              key={opt}
              className={`rounded-full border px-3 py-1 text-xs font-medium ${
                opt === message.selected
                  ? 'border-teal-500 bg-teal-50 text-teal-700'
                  : 'border-navy-200 bg-white text-navy-600'
              }`}
            >
              {opt}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
