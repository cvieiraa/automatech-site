import { Mail, MessageCircle } from 'lucide-react'
import { EMAIL, WHATSAPP_DISPLAY, external, gmailComposeLink, whatsappLink } from '../lib/contact'
import { Logo } from './Logo'

const links = [
  { href: '#sofia', label: 'Sofia' },
  { href: '#solucao', label: 'Solução' },
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export function Footer() {
  return (
    <footer className="bg-navy-950 py-12 text-navy-300">
      <div className="container-x">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="max-w-sm">
            <a href="#inicio" aria-label="Automatech — voltar ao início">
              <Logo light />
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Automação do atendimento de clínicas pelo WhatsApp, com a assistente virtual Sofia.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <p className="text-xs font-semibold tracking-[0.14em] text-white uppercase">Navegação</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-white uppercase">Contato</p>
            <ul className="mt-4 grid gap-3 text-sm">
              <li>
                <a href={whatsappLink()} {...external} className="inline-flex items-center gap-2 transition-colors hover:text-white">
                  <MessageCircle size={16} className="text-teal-300" aria-hidden />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a href={gmailComposeLink()} {...external} className="inline-flex items-center gap-2 break-all transition-colors hover:text-white">
                  <Mail size={16} className="shrink-0 text-teal-300" aria-hidden />
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-navy-300 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Automatech. Startup com origem em projeto acadêmico.</p>
          <p>As conversas exibidas são demonstrações ilustrativas com dados fictícios.</p>
        </div>
      </div>
    </footer>
  )
}
