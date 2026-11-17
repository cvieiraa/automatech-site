// Envio do formulário de contato para a tabela public.mensagens_contato (Supabase).
// Usa apenas a chave publicável; o RLS do banco permite somente INSERT para visitantes.

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

export type MensagemContato = {
  nome: string
  contato: string
  assunto: string
  mensagem: string
  consentimento_lgpd: boolean
}

export async function enviarMensagemContato(dados: MensagemContato): Promise<void> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    throw new Error('Supabase não configurado (VITE_SUPABASE_URL / VITE_SUPABASE_PUBLISHABLE_KEY).')
  }

  const res = await fetch(`${SUPABASE_URL}/rest/v1/mensagens_contato`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      'Content-Type': 'application/json',
      // Não pede os dados de volta: visitantes não têm permissão de leitura.
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(dados),
  })

  if (!res.ok) {
    throw new Error(`Falha ao enviar a mensagem (HTTP ${res.status}).`)
  }
}
