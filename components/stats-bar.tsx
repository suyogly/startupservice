"use client"

import { Heart, ThumbsUp, Users } from 'lucide-react'
import { useEffect, useState } from "react"

export function StatsBar() {
  return (
    <div className="rounded-2xl border bg-white shadow-md ring-1 ring-zinc-100">
      <div className="grid gap-8 px-6 py-9 sm:grid-cols-2 md:grid-cols-4 md:px-10">
        <Stat icon={<Heart className="h-7 w-7 text-blue-600" />} label="Happy Clients" value={50} suffix="+" />
        {/* <Stat icon={<CheckCircle2 className="h-7 w-7 text-blue-600" />} label="Projects Completed" value={3452} suffix="+" /> */}
        <Stat icon={<ThumbsUp className="h-7 w-7 text-blue-600" />} label="Years Of Experience" value={6} suffix="+" />
        <Stat icon={<Users className="h-7 w-7 text-blue-600" />} label="Team Members" value={15} suffix="+" />
      </div>
    </div>
  )
}

function Stat({
  icon,
  label,
  value,
  suffix = "",
}: {
  icon: React.ReactNode
  label: string
  value: number
  suffix?: string
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">{icon}</div>
      <div>
        <div className="text-3xl font-semibold">
          <CountUp to={value} />
          <span className="align-super text-base">{suffix}</span>
        </div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  )
}

/**
 * Lightweight count-up animation using requestAnimationFrame.
 * Avoids reliance on framer-motion controls.get()
 */
function CountUp({ to, duration = 1200 }: { to: number; duration?: number }) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf = 0
    const start = performance.now()
    const from = 0
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const next = from + (to - from) * easeOutCubic(progress)
      setValue(Math.round(next))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [to, duration])

  return <>{value.toLocaleString()}</>
}
