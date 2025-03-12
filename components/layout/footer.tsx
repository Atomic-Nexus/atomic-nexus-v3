import Link from "next/link"
import Image from "next/image"
import { Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-russian-violet/30 pt-16 pb-8 border-t border-[rgba(255,184,0,0.3)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-16 mb-12">
          <div className="flex flex-col max-w-xs text-center md:text-left">
            <Link href="/" className="mb-4">
              <Image src="/logo-blue.svg" alt="Atomic Nexus" width={150} height={40} className="h-10 w-auto" />
            </Link>
            <p className="text-cool-gray mb-6">
              Atomic Nexus empowers entrepreneurs with AI-driven education and strategic consulting to drive growth,
              enhance customer experiences, and optimize operations—helping businesses stay ahead in an evolving digital
              world.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-cool-gray hover:text-electric-cyan transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-cool-gray hover:text-electric-cyan transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cool-gray hover:text-electric-cyan transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-cool-gray hover:text-electric-cyan transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-cool-gray hover:text-electric-cyan transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="text-cool-gray hover:text-electric-cyan transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-cool-gray hover:text-electric-cyan transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-cool-gray hover:text-electric-cyan transition-colors">
                  Privacy & Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-cool-gray hover:text-electric-cyan transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>                
            </ul>
          </div>
        </div>

        <div className="border-t border-russian-violet/50 pt-8 mt-8 text-center">
          <p className="text-cool-gray text-sm">© {new Date().getFullYear()} Atomic Nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

