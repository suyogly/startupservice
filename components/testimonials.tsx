"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type T = {
  quote: string
  name: string
  title: string
  avatar: string
}

const TESTIMONIALS: T[] = [
  {
    quote:
      "Their automation and compliance expertise saved us countless hours each month. We can finally focus on growth.",
    name: "Suresh Thapa",
    title: "Operations Manager",
    avatar: "/professional-avatar-1.png",
  },
  {
    quote:
      "Clear dashboards and proactive advice—issues are spotted and resolved before they impact customers.",
    name: "Anita Gurung",
    title: "Head of Product",
    avatar: "/professional-avatar-2.png",
  },
  {
    quote:
      "SMS handled our entire IT setup and legal registrations. Their multi-sector expertise is exactly what early-stage startups need.",
    name: "Rajesh Maharjan",
    title: "CTO",
    avatar: "/professional-avatar-3.png",
  },
  {
    quote:
      "The financial insights and strategic guidance helped us scale from 5 to 50 employees in just two years.",
    name: "Bina Shrestha",
    title: "CEO",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "Outstanding support during our funding rounds. They made complex financial reporting look effortless.",
    name: "Kiran Tamang",
    title: "Finance Director",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "From co-working space to social media marketing, SMS took care of everything we needed to launch. Truly a one-stop partner.",
    name: "Prakash Poudel",
    title: "Founder",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "SMS connected us with the right advisors and handled our operations end-to-end. Their support was crucial in helping us reach Series A.",
    name: "Sunita Lama",
    title: "Co-Founder",
    avatar: "/placeholder-user.jpg",
  },
  {
    quote:
      "From day one, SMS handled everything — legal, IT, and operations. We could focus entirely on building our product.",
    name: "Bikram Rana",
    title: "Managing Director",
    avatar: "/placeholder-user.jpg",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % TESTIMONIALS.length), 4500)
    return () => clearInterval(id)
  }, [])

  const t = TESTIMONIALS[index]

  return (
    <div className="mx-auto max-w-4xl">
      <motion.blockquote
        key={index}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-xl text-zinc-700"
      >
        <div className="mx-auto mb-6 h-1 w-16 rounded bg-zinc-200" aria-hidden="true" />
        <p className="leading-relaxed">{`“${t.quote}”`}</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Avatar>
            <AvatarImage src={t.avatar || "/placeholder.svg"} alt={`${t.name} avatar`} />
            <AvatarFallback>{t.name.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{t.name}</div>
            <div className="text-sm text-muted-foreground">{t.title}</div>
          </div>
        </div>
      </motion.blockquote>
    </div>
  )
}
