"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: "ai-hype-cycle",
    title: "The AI Hype Cycle: Cutting Through the Noise and Finding Real Value",
    excerpt:
      "AI is surrounded by buzz and misinformation—learn how to separate the hype from real-world applications that can actually benefit your business.",
    image: "/blog/blog-1-sm.png?height=400&width=600",
    category: "AI Strategy",
  },
  {
    id: "is-ai-right-for-your-business",
    title: "Is AI Right for Your Business? How to Determine If (and Where) AI Can Help",
    excerpt: "Not every business needs AI—use this guide to assess your readiness, explore practical use cases, and avoid costly mistakes..",
    image: "/blog/blog-3-sm.png?height=400&width=600",
    category: "AI Assessment",
  },
  {
    id: "smart-approach-to-ai",
    title: "The Smart Approach to AI: Why Strategy Comes Before Implementation",
    excerpt:
      "Jumping into AI without a clear plan leads to wasted time and money—discover why a strategic approach is essential before adopting AI tools.",
    image: "/blog/blog-2-sm.png?height=400&width=600",
    category: "AI Implementation",
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            className="heading-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            AI & Automation <span className="gradient-text">Unlocked</span>
          </motion.h2>
          <motion.p
            className="paragraph max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cut through the noise—get clear, actionable insights on AI, automation, and the future of business
            innovation.
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-russian-violet/30 border-russian-violet/50 overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-cool-gray">{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <Link
                  href={`/blog/${post.id}`}
                  className="text-blue-violet hover:text-electric-cyan transition-colors flex items-center"
                >
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button asChild variant="outline">
            <Link href="/blog">
              View all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

