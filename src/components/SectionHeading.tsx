import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
}

export function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <Reveal className={`max-w-2xl ${centered ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${dark ? 'text-teal-300' : ''}`}>
        <span className="h-px w-6 bg-current" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-3xl leading-[1.15] font-bold sm:text-4xl ${dark ? 'text-white' : 'text-navy-900'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${dark ? 'text-navy-200' : 'text-navy-500'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
