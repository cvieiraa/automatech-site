// Contatos oficiais da Automatech. Todos os links do site usam estas constantes.

export const EMAIL = 'automatechn8n@gmail.com'
export const WHATSAPP_NUMBER = '5561996619403'
export const WHATSAPP_DISPLAY = '+55 61 99661-9403'

/** Mensagem única usada em todos os links de WhatsApp do site. */
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de conhecer a Automatech.'

/** Link wa.me com mensagem pré-preenchida (funciona no celular, no WhatsApp Desktop e no WhatsApp Web). */
export function whatsappLink() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams()
  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)
  // URLSearchParams codifica espaços como "+", o que alguns clientes de e-mail não convertem.
  const query = params.toString().replace(/\+/g, '%20')
  return `mailto:${EMAIL}${query ? `?${query}` : ''}`
}

/**
 * Abre a tela de "escrever e-mail" do Gmail no navegador, já com destinatário, assunto e mensagem.
 * Mais confiável que mailto:, que não faz nada quando o computador não tem um app de e-mail configurado.
 */
export function gmailComposeLink(subject?: string, body?: string) {
  const parts = [`view=cm`, `fs=1`, `to=${encodeURIComponent(EMAIL)}`]
  if (subject) parts.push(`su=${encodeURIComponent(subject)}`)
  if (body) parts.push(`body=${encodeURIComponent(body)}`)
  return `https://mail.google.com/mail/?${parts.join('&')}`
}

/** Atributos padrão para links externos (WhatsApp). */
export const external = { target: '_blank', rel: 'noopener noreferrer' } as const
