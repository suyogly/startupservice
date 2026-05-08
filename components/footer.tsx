import Link from "next/link"
import { Facebook, Instagram, Linkedin} from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-white">SM</div>
              <span>Startup Management Services</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              End-to-end startup support — accounting, IT, legal, marketing, and workspace solutions. A sister wing of PFS.
            </p>
          </div>

          <div>
            <div className="font-medium">Useful Links</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground">Terms and Conditions</Link></li>
              <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link href="#contact" className="hover:text-foreground">Support</Link></li>
            </ul>
          </div>

          <div>
            <div className="font-medium">Quick Links</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="#services" className="hover:text-foreground">Services</Link></li>
              <li><Link href="#partner" className="hover:text-foreground">Partnership</Link></li>
            </ul>
          </div>

          <div>
    
            <div className="mt-4 flex items-center gap-3 text-muted-foreground">
              <Link href="#" aria-label="Instagram" className="hover:text-foreground"><Instagram className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Facebook" className="hover:text-foreground"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-xs text-muted-foreground">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <p>{`Copyright © ${year}. All rights reserved.`}</p>
            <p>Startup Management Services Pvt Ltd · Lalitpur, Nepal · +977-9860519083 / +977-9843736921</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
