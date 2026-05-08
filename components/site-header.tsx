"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">SM</div>
          <span className="hidden sm:inline">Startup Management Services</span>
          <span className="sr-only">Home</span>
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-6 md:flex">
          <HeaderLink href="#about">About</HeaderLink>
          <HeaderLink href="#partner">Partner</HeaderLink>
          <HeaderLink href="#services">Services</HeaderLink>
          <HeaderLink href="#platform">Platform</HeaderLink>
          <HeaderLink href="#benefits">Benefits</HeaderLink>
          <HeaderLink href="#testimonials">Testimonials</HeaderLink>
        </nav>

        <div className="hidden md:block">
          <Button asChild className="h-9 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
            <Link href="#contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md border p-2 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="border-t bg-white">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            <MobileLink href="#about" onClick={() => setOpen(false)}>About</MobileLink>
            <MobileLink href="#partner" onClick={() => setOpen(false)}>Partner</MobileLink>
            <MobileLink href="#services" onClick={() => setOpen(false)}>Services</MobileLink>
            <MobileLink href="#platform" onClick={() => setOpen(false)}>Platform</MobileLink>
            <MobileLink href="#benefits" onClick={() => setOpen(false)}>Benefits</MobileLink>
            <MobileLink href="#testimonials" onClick={() => setOpen(false)}>Testimonials</MobileLink>
            <Button asChild className="mt-2 h-9 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
              <Link href="#contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

function HeaderLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-muted-foreground hover:text-foreground">
      {children}
    </Link>
  )
}

function MobileLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded px-2 py-2 text-sm hover:bg-zinc-100 hover:text-foreground"
    >
      {children}
    </Link>
  )
}
