"use client"

import { motion } from "framer-motion"
import { BookOpen, Lightbulb, CheckCircle2, Users, Zap, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

// Particles component using Tailwind CSS
const Particles = () => {
  return (
    <div className="w-full h-48 relative overflow-hidden bg-gradient-to-l from-[#030014] via-[#190e36] to-[#030014]">
      {/* Small particles */}
      <div className="absolute w-[1px] h-[1px] bg-white/80 rounded-full left-[10%] bottom-0 animate-rise-slow"></div>
      <div className="absolute w-[1px] h-[1px] bg-white/80 rounded-full left-[25%] bottom-0 animate-rise-fast"></div>
      <div className="absolute w-[1px] h-[1px] bg-white/80 rounded-full left-[40%] bottom-0 animate-rise-medium"></div>
      <div className="absolute w-[1px] h-[1px] bg-white/80 rounded-full left-[60%] bottom-0 animate-rise-slow"></div>
      <div className="absolute w-[1px] h-[1px] bg-white/80 rounded-full left-[75%] bottom-0 animate-rise-fast"></div>
      <div className="absolute w-[1px] h-[1px] bg-white/80 rounded-full left-[90%] bottom-0 animate-rise-medium"></div>

      {/* Medium particles */}
      <div className="absolute w-[2px] h-[2px] bg-white/80 rounded-full left-[15%] bottom-0 animate-rise-medium"></div>
      <div className="absolute w-[2px] h-[2px] bg-white/80 rounded-full left-[35%] bottom-0 animate-rise-slow"></div>
      <div className="absolute w-[2px] h-[2px] bg-white/80 rounded-full left-[55%] bottom-0 animate-rise-fast"></div>
      <div className="absolute w-[2px] h-[2px] bg-white/80 rounded-full left-[70%] bottom-0 animate-rise-medium"></div>
      <div className="absolute w-[2px] h-[2px] bg-white/80 rounded-full left-[85%] bottom-0 animate-rise-slow"></div>

      {/* Large particles */}
      <div className="absolute w-[3px] h-[3px] bg-white/80 rounded-full left-[20%] bottom-0 animate-rise-slow"></div>
      <div className="absolute w-[3px] h-[3px] bg-white/80 rounded-full left-[45%] bottom-0 animate-rise-medium"></div>
      <div className="absolute w-[3px] h-[3px] bg-white/80 rounded-full left-[65%] bottom-0 animate-rise-fast"></div>
      <div className="absolute w-[3px] h-[3px] bg-white/80 rounded-full left-[80%] bottom-0 animate-rise-slow"></div>
    </div>
  )
}

// Service Card Component
const ServiceCard = ({
  icon: Icon,
  iconBgClass,
  iconColor,
  title,
  paragraphs,
  listTitle,
  listIcon: ListIcon,
  listIconColor,
  listItems,
  footerText,
  buttonText,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-russian-violet/30 border border-[rgba(255,184,0,0.3)] rounded-xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Content */}
        <div className="p-8">
          {/* Icon and Title */}
          <div className="mb-6">
            <div className={`inline-flex p-3 ${iconBgClass} rounded-lg mb-4`}>
              <Icon className={`h-6 w-6 ${iconColor}`} />
            </div>
            <h4 className="text-xl font-semibold text-white">{title}</h4>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 mb-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-cool-gray">
                {paragraph}
              </p>
            ))}
          </div>

          {/* List Section */}
          <div>
            {listTitle && (
              <h5 className="flex items-center text-lg font-semibold text-white mb-4">
                {listTitle.icon && <listTitle.icon className={`h-5 w-5 ${listTitle.iconColor} mr-2`} />}
                {listTitle.text}
              </h5>
            )}
            <ul className="space-y-2 mb-6">
              {listItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ListIcon className={`h-5 w-5 ${listIconColor} mr-2 mt-0.5 flex-shrink-0`} />
                  <span className="text-cool-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div>
            <p className="text-white italic mb-4">{footerText}</p>
            {buttonText && (
              <Button variant="destructive" className="flex items-center">
                <span>{buttonText}</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-[300px] w-[300px] mx-auto md:mx-0">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" sizes="300px" />
        </div>
      </div>
    </div>
  )
}

export default function Offers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Service data
  const services = [
    {
      icon: BookOpen,
      iconBgClass: "bg-blue-violet/20",
      iconColor: "text-blue-violet",
      title: "Cut Through the AI Hype—Get Clear, Actionable Insights",
      paragraphs: [
        "AI is transforming industries, but with so much misinformation, it's easy to feel lost. Atomic Nexus provides expert AI education designed to help business leaders make sense of AI and automation—without the jargon or hype.",
        "Through in-depth insights, real-world applications, and future-focused strategies, I break down how AI can drive growth, streamline operations, and create competitive advantages for businesses of all sizes. Whether you're just beginning to explore AI or looking to refine your understanding, my content ensures you stay informed and ahead of the curve.",
      ],
      listTitle: {
        text: "What You'll Learn:",
        icon: Zap,
        iconColor: "text-luminous-gold",
      },
      listIcon: CheckCircle2,
      listIconColor: "text-electric-cyan",
      listItems: [
        "How AI can be applied to different industries & business models",
        "What's real and what's just hype in the world of AI",
        "Actionable strategies to future-proof your business with AI",
      ],
      footerText: "Stay informed, stay ahead—learn how AI can work for you.",
      imageSrc: "/AI-brain.png?height=300&width=300",
      imageAlt: "AI Education",
    },
    {
      icon: Lightbulb,
      iconBgClass: "bg-neon-magenta/20",
      iconColor: "text-neon-magenta",
      title: "AI Strategy Consulting: Make Smarter Business Decisions",
      paragraphs: [
        "Thinking about integrating AI into your business but not sure where to start? Many companies waste time and money on the wrong AI tools simply because they lack the right guidance. That's where I come in.",
        "Through AI consulting sessions, I provide clarity, direction, and strategy helping you understand what's possible with AI and how it can be applied to your unique business needs. Instead of selling you a prepackaged solution, I focus on tailored insights that empower you to make informed decisions before investing in AI implementation.",
      ],
      listTitle: {
        text: "How I Help:",
        icon: null,
        iconColor: "",
      },
      listIcon: CheckCircle2,
      listIconColor: "text-neon-magenta",
      listItems: [
        "Assess whether AI is right for your business (and where it fits best)",
        "Provide a roadmap for AI adoption—avoiding common pitfalls",
        "Identify high-impact AI opportunities that align with your goals",
        "Connect you with trusted implementation partners when you're ready",
      ],
      footerText: "AI is not a one-size-fits-all solution. Get expert guidance before making your next move.",
      buttonText: "Book a Free Discovery Call",
      imageSrc: "/AI-globe.png?height=300&width=300",
      imageAlt: "AI Consulting",
    },
    {
      icon: Users,
      iconBgClass: "bg-electric-cyan/20",
      iconColor: "text-electric-cyan",
      title: "From AI Strategy to Implementation—Without the Guesswork",
      paragraphs: [
        "Understanding AI is one thing—putting it into action is another. Once you've developed a clear AI strategy, the next step is finding the right experts to implement it.",
        "Through my trusted AI partner network, I connect businesses with pre-vetted AI solution providers who specialize in everything from automation and chatbots to AI-driven analytics and customer engagement tools. This ensures you get the right implementation team—without the hassle of navigating the crowded AI market alone.",
      ],
      listTitle: {
        text: "Why Work With My AI Partners?",
        icon: null,
        iconColor: "",
      },
      listIcon: CheckCircle2,
      listIconColor: "text-electric-cyan",
      listItems: [
        "Access to top-tier AI agencies & specialists",
        "Implementation tailored to your specific business needs",
        "Ongoing strategic oversight so AI aligns with your goals",
      ],
      footerText: "I help you craft the strategy, and my expert partners bring it to life.",
      imageSrc: "/Network.png?height=300&width=300",
      imageAlt: "AI Partners",
    },
  ]

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
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="paragraph max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Empowering businesses with AI-driven solutions for growth and innovation
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div
          className="grid grid-cols-1 gap-y-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* AI Education Section */}
          <motion.div className="mb-0" variants={itemVariants}>
            <ServiceCard {...services[0]} />
          </motion.div>

          {/* Particles Section Above AI Consulting */}
          <Particles />

          {/* AI Consulting Section */}
          <motion.div className="mb-0" variants={itemVariants}>
            <ServiceCard {...services[1]} />
          </motion.div>

          {/* Particles Section Below AI Consulting */}
          <Particles />

          {/* Partners Section */}
          <motion.div className="mb-0" variants={itemVariants}>
            <ServiceCard {...services[2]} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

