import { useState, type FormEvent } from 'react'
import {
  AlertCircle,
  ArrowUpRight,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronDown,
  Copy,
  Loader2,
  Mail,
  MessageCircle,
  PlayCircle,
  Send,
} from 'lucide-react'
import { EMAIL, WHATSAPP_DISPLAY, external, gmailComposeLink, whatsappLink } from '../lib/contact'
import { enviarMensagemContato, type MensagemContato } from '../lib/supabase'
import { Reveal } from './Reveal'

const channels: { id: string; icon: typeof MessageCircle; title: string; text: string }[] = [
  {
    id: 'demonstracao',
    icon: PlayCircle,
    title: 'Solicitar demonstração',
    text: 'Veja a Sofia conduzindo um atendimento de exemplo.',
  },
  {
    id: 'contratacao',
    icon: Briefcase,
    title: 'Falar sobre contratação',
    text: 'Converse com a equipe sobre a implantação na sua clínica.',
  },
  {
    id: 'geral',
    icon: MessageCircle,
    title: 'Conhecer os serviços',
    text: 'Tire dúvidas gerais sobre a Automatech.',
  },
]

// Os assuntos e limites abaixo espelham as regras (CHECK) da tabela public.mensagens_contato.
const topics = ['Dúvida', 'Sugestão', 'Feedback sobre o site', 'Outro assunto']
const LIMITES = { nome: [2, 100], contato: [5, 150], mensagem: [10, 2000] } as const

function contatoValido(valor: string) {
  const email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/i.test(valor)
  const telefone = /^\d{10,13}$/.test(valor.replace(/\D/g, ''))
  return email || telefone
}

function validar(d: MensagemContato): string | null {
  if (d.nome.length < LIMITES.nome[0]) return 'Informe seu nome.'
  if (!contatoValido(d.contato))
    return 'Informe um e-mail válido ou um WhatsApp com DDD (ex.: (61) 99999-9999) para podermos responder.'
  if (!topics.includes(d.assunto)) return 'Escolha um assunto.'
  if (d.mensagem.length < LIMITES.mensagem[0]) return 'A mensagem precisa ter pelo menos 10 caracteres.'
  if (!d.consentimento_lgpd) return 'Para enviar, marque a autorização de uso dos dados.'
  return null
}

/** Link do Gmail com os dados já preenchidos, usado como alternativa quando o envio falha. */
function gmailFallback(d: MensagemContato) {
  const subject = `[Site] ${d.assunto} de ${d.nome}`
  const body = `${d.mensagem}\n\n—\nNome: ${d.nome}\nContato para resposta: ${d.contato}\nEnviado a partir do formulário do site da Automatech.`
  return gmailComposeLink(subject, body)
}

type Status = 'idle' | 'loading' | 'success' | 'validation' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [aviso, setAviso] = useState('')
  const [ultimoEnvio, setUltimoEnvio] = useState<MensagemContato | null>(null)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Sem acesso à área de transferência: o endereço continua visível na tela.
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status === 'loading') return
    const data = new FormData(e.currentTarget)
    const dados: MensagemContato = {
      nome: String(data.get('nome') ?? '').trim(),
      contato: String(data.get('contato') ?? '').trim(),
      assunto: String(data.get('assunto') ?? topics[0]),
      mensagem: String(data.get('mensagem') ?? '').trim(),
      consentimento_lgpd: data.get('consentimento') === 'on',
    }

    const erro = validar(dados)
    if (erro) {
      setAviso(erro)
      setStatus('validation')
      return
    }

    setUltimoEnvio(dados)
    setStatus('loading')
    try {
      await enviarMensagemContato(dados)
      setStatus('success')
    } catch {
      setAviso('Não foi possível enviar sua mensagem agora. Tente novamente ou envie pelo Gmail com os dados já preenchidos.')
      setStatus('error')
    }
  }

  const loading = status === 'loading'

  return (
    <section id="contato" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-navy-900 text-white">
            <div className="grid gap-12 p-6 sm:p-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
              <div>
                <span className="eyebrow text-teal-300">
                  <span className="h-px w-6 bg-current" aria-hidden />
                  Contato
                </span>
                <h2 className="mt-4 text-3xl leading-tight font-bold sm:text-4xl">
                  Vamos conversar sobre o atendimento da sua clínica
                </h2>
                <p className="mt-4 leading-relaxed text-navy-200">
                  Fale com a equipe da Automatech pelo WhatsApp. Escolha o assunto e a conversa já começa com a mensagem
                  certa.
                </p>

                <ul className="mt-8 grid gap-3">
                  {channels.map(({ id, icon: Icon, title, text }) => (
                    <li key={id}>
                      <a
                        href={whatsappLink()}
                        {...external}
                        className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-teal-400/50 hover:bg-white/[0.06]"
                      >
                        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-400/15 text-teal-300">
                          <Icon size={19} aria-hidden />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-white">{title}</span>
                          <span className="block text-sm text-navy-200">{text}</span>
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-navy-300 transition-colors group-hover:text-teal-300"
                          aria-hidden
                        />
                        <span className="sr-only">(abre o WhatsApp em uma nova aba)</span>
                      </a>
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 grid gap-3 border-t border-white/10 pt-6 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="text-navy-300">WhatsApp</dt>
                    <dd>
                      <a
                        href={whatsappLink()}
                        {...external}
                        className="font-medium text-white underline-offset-4 hover:text-teal-300 hover:underline"
                      >
                        {WHATSAPP_DISPLAY}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-navy-300">E-mail</dt>
                    <dd className="flex items-center gap-2">
                      <a
                        href={gmailComposeLink()}
                        {...external}
                        className="font-medium break-all text-white underline-offset-4 hover:text-teal-300 hover:underline"
                      >
                        {EMAIL}
                      </a>
                      <button
                        type="button"
                        onClick={copyEmail}
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-navy-300 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label={copied ? 'E-mail copiado' : 'Copiar endereço de e-mail'}
                        title={copied ? 'Copiado!' : 'Copiar e-mail'}
                      >
                        {copied ? <Check size={15} className="text-teal-300" aria-hidden /> : <Copy size={15} aria-hidden />}
                      </button>
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl border border-white/10 bg-navy-950/40 p-6 sm:p-8">
                {status === 'success' ? (
                  <div className="flex h-full flex-col items-start justify-center" role="status">
                    <CheckCircle2 size={32} className="text-teal-300" aria-hidden />
                    <p className="mt-4 text-lg font-semibold">Mensagem enviada!</p>
                    <p className="mt-2 text-sm leading-relaxed text-navy-200">
                      Recebemos seu contato. A equipe da Automatech vai responder pelo e-mail ou WhatsApp que você
                      informou.
                    </p>
                    <button type="button" onClick={() => setStatus('idle')} className="btn-ghost-light mt-6 py-2!">
                      Escrever outra mensagem
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="grid gap-4" aria-busy={loading}>
                    <div>
                      <h3 className="text-lg font-semibold">Envie um feedback ou uma dúvida</h3>
                      <p className="mt-1 text-sm text-navy-200">
                        Preencha abaixo e respondemos pelo contato que você indicar.
                      </p>
                    </div>
                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-navy-100">Nome</span>
                      <input
                        name="nome"
                        required
                        disabled={loading}
                        minLength={LIMITES.nome[0]}
                        maxLength={LIMITES.nome[1]}
                        autoComplete="name"
                        placeholder="Seu nome"
                        className="field"
                      />
                    </label>
                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-navy-100">E-mail ou WhatsApp para resposta</span>
                      <input
                        name="contato"
                        required
                        disabled={loading}
                        maxLength={LIMITES.contato[1]}
                        autoComplete="email"
                        placeholder="seu@email.com ou (61) 99999-9999"
                        className="field"
                      />
                    </label>
                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-navy-100">Assunto</span>
                      <span className="relative">
                        <select
                          name="assunto"
                          disabled={loading}
                          defaultValue={topics[0]}
                          className="field appearance-none pr-10"
                        >
                          {topics.map((t) => (
                            <option key={t} value={t} className="bg-navy-900 text-white">
                              {t}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={16}
                          className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-navy-300"
                          aria-hidden
                        />
                      </span>
                    </label>
                    <label className="grid gap-1.5 text-sm">
                      <span className="font-medium text-navy-100">Mensagem</span>
                      <textarea
                        name="mensagem"
                        required
                        disabled={loading}
                        minLength={LIMITES.mensagem[0]}
                        maxLength={LIMITES.mensagem[1]}
                        rows={4}
                        placeholder="Escreva sua dúvida, sugestão ou feedback"
                        className="field resize-none"
                      />
                    </label>
                    <label className="flex items-start gap-3 text-sm leading-relaxed text-navy-200">
                      <input
                        type="checkbox"
                        name="consentimento"
                        required
                        disabled={loading}
                        className="mt-1 h-4 w-4 shrink-0 accent-teal-400"
                      />
                      <span>
                        Autorizo a Automatech a usar estes dados apenas para responder ao meu contato, conforme a LGPD.
                      </span>
                    </label>

                    {(status === 'validation' || status === 'error') && (
                      <div
                        role="alert"
                        className="flex gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm leading-relaxed text-red-100"
                      >
                        <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-300" aria-hidden />
                        <div>
                          <p>{aviso}</p>
                          {status === 'error' && ultimoEnvio && (
                            <a
                              href={gmailFallback(ultimoEnvio)}
                              {...external}
                              className="mt-2 inline-flex items-center gap-1.5 font-medium text-teal-300 underline underline-offset-4"
                            >
                              <Mail size={15} aria-hidden /> Abrir no Gmail
                              <span className="sr-only">(abre em uma nova aba)</span>
                            </a>
                          )}
                        </div>
                      </div>
                    )}

                    <button type="submit" disabled={loading} className="btn-primary mt-2 disabled:cursor-wait disabled:opacity-70">
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" aria-hidden /> Enviando…
                        </>
                      ) : (
                        <>
                          <Send size={16} aria-hidden /> Enviar mensagem
                        </>
                      )}
                    </button>
                    <p className="text-xs leading-relaxed text-navy-300">
                      Seus dados serão utilizados pela equipe da Automatech exclusivamente para responder ao seu contato
                      e serão armazenados no Supabase.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
