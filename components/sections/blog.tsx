"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Building Modern Web Applications with Next.js 15",
    excerpt:
      "Explore the new features and improvements in Next.js 15 and how they can enhance your development workflow.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    image: "/blog/blog-1.png?height=400&width=600",
    slug: "/blog/building-modern-web-applications",
  },
  {
    title: "Designing with Apple's Philosophy in Mind",
    excerpt:
      "Learn how to apply Apple's design principles to create beautiful, intuitive, and functional web experiences.",
    date: "Mar 10, 2024",
    readTime: "7 min read",
    image: "/blog/blog-2.png?height=400&width=600",
    slug: "/blog/designing-with-apples-philosophy",
  },
  {
    title: "Optimizing Performance in React Applications",
    excerpt: "Discover techniques and best practices for improving the performance of your React applications.",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    image: "/blog/blog-3.png?height=400&width=600",
    slug: "/blog/optimizing-performance-react-applications",
  },
]

export default function Blog() {
  return (
    <section className="py-24 relative">
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
                  href={post.slug}
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

