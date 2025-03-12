import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog | Atomic Nexus",
  description: "Explore our latest articles on AI, automation, and business innovation",
}

// Blog posts data
const blogPosts = [
  {
    id: "ai-hype-cycle",
    title: "The AI Hype Cycle: Cutting Through the Noise and Finding Real Value",
    excerpt:
      "AI is everywhere. It's in the headlines, in boardroom discussions, and in marketing pitches promising to revolutionize your business overnight. But how much of what you hear is reality—and how much is just hype?",
    image: "/blog/blog-1-sm.png?height=400&width=600",
    category: "AI Strategy",
  },
  {
    id: "is-ai-right-for-your-business",
    title: "Is AI Right for Your Business? How to Determine If (and Where) AI Can Help",
    excerpt:
      "AI is everywhere, but that doesn't mean every business needs it—at least, not yet. Many business owners are intrigued by AI's potential but unsure whether it's the right move for them.",
    image: "/blog/blog-3-sm.png?height=400&width=600",
    category: "AI Assessment",
  },
  {
    id: "smart-approach-to-ai",
    title: "The Smart Approach to AI: Why Strategy Comes Before Implementation",
    excerpt:
      "AI is transforming industries, but for many businesses, it's also creating confusion, wasted resources, and unmet expectations. Why? Because they dive into AI without a clear strategy.",
    image: "/blog/blog-2-sm.png?height=400&width=600",
    category: "AI Implementation",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container-custom">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="heading-xl mb-6">
            AI & Automation <span className="gradient-text">Unlocked</span>
          </h1>
          <p className="paragraph max-w-2xl mx-auto">
            Cut through the noise—get clear, actionable insights on AI, automation, and the future of business
            innovation.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col h-full">
              <Link href={`/blog/${post.id}`} className="block overflow-hidden rounded-lg mb-4">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="flex-1 flex flex-col">
                <div className="mb-2">
                  <span className="text-electric-cyan text-sm">{post.category}</span>
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-electric-cyan transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-cool-gray mb-4">{post.excerpt}</p>
                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-blue-violet hover:text-electric-cyan transition-colors flex items-center"
                  >
                    Read more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

