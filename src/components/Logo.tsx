type LogoProps = {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span
        className={`relative grid h-8 w-8 place-items-center rounded-lg ${light ? 'bg-white/10 ring-1 ring-white/15' : 'bg-navy-900'}`}
        aria-hidden
      >
        <span className="font-display text-[15px] leading-none font-extrabold text-white">A</span>
        <span className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-teal-400" />
      </span>
      <span
        className={`font-display text-lg font-bold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}
      >
        automa<span className="text-teal-500">tech</span>
      </span>
    </span>
  )
}
