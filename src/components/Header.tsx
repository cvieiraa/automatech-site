import { useEffect, useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { external, whatsappLink } from '../lib/contact'
import { Logo } from './Logo'

const links = [
  { href: '#sofia', label: 'Sofia' },
  { href: '#solucao', label: 'Solução' },
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <>
    <a href="#conteudo" className="skip-link">
      Pular para o conteúdo
    </a>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'border-b border-white/10 bg-navy-950/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#inicio" aria-label="Automatech — início">
          <Logo light />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-navy-200 transition-colors hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={whatsappLink()} {...external} className="btn-primary py-2.5!">
            <MessageCircle size={16} aria-hidden /> Conhecer nossa solução
          </a>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-white hover:bg-white/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-white/10 transition-[max-height,visibility] duration-300 lg:hidden ${
          open ? 'max-h-[80vh] border-t' : 'invisible max-h-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Navegação móvel">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-navy-100 hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            {...external}
            onClick={() => setOpen(false)}
            className="btn-primary mt-3"
          >
            <MessageCircle size={16} aria-hidden /> Solicitar demonstração pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
    </>
  )
}
