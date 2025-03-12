import type React from "react"

interface LegalPageLayoutProps {
  title: string
  dates: {
    effectiveDate: string
    lastUpdated: string
  }
  children: React.ReactNode
}

export default function LegalPageLayout({ title, dates, children }: LegalPageLayoutProps) {
  return (
    <div className="py-32">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-russian-violet/30 border border-[rgba(255,184,0,0.3)] rounded-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <header className="mb-8 pb-8 border-b border-russian-violet/50">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
                <div className="text-cool-gray">
                  <p>
                    <strong>Effective Date:</strong> {dates.effectiveDate}
                  </p>
                  <p>
                    <strong>Last Updated:</strong> {dates.lastUpdated}
                  </p>
                </div>
              </header>

              <main className="prose prose-invert prose-headings:text-white prose-p:text-cool-gray prose-a:text-electric-cyan max-w-none">
                {children}
              </main>

              <footer className="mt-12 pt-8 border-t border-russian-violet/50 text-center">
                <p className="text-cool-gray">© {new Date().getFullYear()} Atomic Nexus. All rights reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                  <a href="/privacy" className="text-cool-gray hover:text-electric-cyan transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-cool-gray hover:text-electric-cyan transition-colors">
                    Terms & Conditions
                  </a>
                  <a href="/refund" className="text-cool-gray hover:text-electric-cyan transition-colors">
                    Refund Policy
                  </a>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

