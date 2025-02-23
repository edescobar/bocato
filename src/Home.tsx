import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  Bot, MessageSquare, Truck, Phone, ArrowRight, LogIn, Shield,
  Code, Zap, Workflow, Server, Headphones, Menu, X, Play, Pause, Check,
  ChevronDown, Mail, MapPin, Star, User2, Twitter, Github, Linkedin
} from 'lucide-react';
import Layout from './components/Layout';

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Add these interfaces at the top of the file
interface AudioPlayerProps {
  category: string;
  name: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// Components
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-racing-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
}

function AudioPlayer({ category, name }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  
  return (
    <div className="mt-4 bg-black/5 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-racing-500">{category}</div>
          <div className="font-medium">{name}</div>
        </div>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 rounded-full bg-racing-500 text-white flex items-center justify-center hover:bg-racing-600 transition-colors"
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? "0%" : "100%" }}
      transition={{ type: "spring", damping: 20 }}
      className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 p-6"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-gray-500 hover:text-gray-900"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="flex flex-col gap-6 mt-16">
        <a 
          href="#features" 
          onClick={onClose}
          className="text-gray-600 hover:text-racing-500 transition-colors"
        >
          Features
        </a>
        <a 
          href="#integrations" 
          onClick={onClose}
          className="text-gray-600 hover:text-racing-500 transition-colors"
        >
          Integrations
        </a>
        
        <div className="h-px bg-gray-200 my-4" />
        
        <Link to="/login" className="text-gray-600 hover:text-racing-500 flex items-center gap-2">
          <LogIn className="w-4 h-4" />
          Login
        </Link>
        <Link 
          to="/get-started" 
          className="bg-racing-500 text-white px-6 py-3 rounded-lg flex items-center gap-2 justify-center"
        >
          Get started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-racing-500" />
            <span className="text-xl font-medium">bocato</span>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bocato, Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Add the missing data
  const testimonials = [
    {
      quote: "bocato has transformed how we handle orders. Our staff can focus on creating great experiences while the AI handles routine tasks.",
      author: "Sarah Chen",
      role: "Restaurant Owner"
    },
    {
      quote: "The AI's ability to handle multiple languages has helped us serve our diverse customer base better than ever.",
      author: "Miguel Rodriguez",
      role: "Operations Manager"
    },
    {
      quote: "Integration was seamless, and the AI learns quickly. It's like having an extra team member who never takes a break.",
      author: "David Smith",
      role: "Owner"
    }
  ];

  const integrations = [
    {
      icon: <Server className="w-6 h-6 text-racing-500" />,
      title: "POS Systems",
      description: "Seamlessly connect with Toast, Square, and other major POS providers"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-racing-500" />,
      title: "Communication",
      description: "Integrate with your phone system, WhatsApp, and SMS"
    },
    {
      icon: <Workflow className="w-6 h-6 text-racing-500" />,
      title: "Analytics",
      description: "Connect to your favorite analytics and reporting tools"
    }
  ];

  const logos = [
    {
      src: "/logos/toast.svg",
      alt: "Toast POS"
    },
    {
      src: "/logos/square.svg",
      alt: "Square"
    },
    {
      src: "/logos/clover.svg",
      alt: "Clover"
    },
    {
      src: "/logos/twilio.svg",
      alt: "Twilio"
    },
    {
      src: "/logos/stripe.svg",
      alt: "Stripe"
    },
    {
      src: "/logos/shopify.svg",
      alt: "Shopify"
    }
  ];

  return (
    <Layout>
      <ScrollProgress />
      
      {/* Single Navigation Bar */}
      <nav className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Bot className="w-8 h-8 text-racing-500 group-hover:scale-110 transition-transform" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-racing-500 rounded-full animate-pulse" />
              </div>
              <span className="text-xl font-medium tracking-tight">bocato</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-racing-500 transition-colors">Features</a>
              <a href="#integrations" className="text-gray-600 hover:text-racing-500 transition-colors">Integrations</a>
              
              <div className="h-4 w-px bg-gray-200" />
              
              <Link to="/login" className="text-gray-600 hover:text-racing-500 transition-colors">
                Login
              </Link>
              <Link 
                to="/get-started" 
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-900 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Hero Section */}
      <section className="min-h-[85vh] pt-32 pb-8 bg-black text-white relative overflow-hidden">
        {/* Background gradients remain the same */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#004225,transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#004225,transparent_70%)] opacity-50"></div>
        </div>

        {/* Floating elements remain the same */}
        <motion.div 
          animate={{ 
            y: [-20, 20, -20],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-[20%] w-64 h-64 bg-racing-500/5 rounded-full blur-3xl"
        />

        {/* Updated Content */}
        <div className="container mx-auto px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Main title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-light leading-[1.1] tracking-tight mb-6"
            >
              AI restaurant agents that sound human, speak any language, and work 24/7.
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8"
            >
              Bocato makes it simple to integrate the latest conversational AI technology into your business. Build the perfect employee to handle orders and all your customer support needs. Bocato AI phone agents sound human, can speak any language, and work 24/7.
            </motion.p>

            {/* Price */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-racing-400 text-lg sm:text-xl mb-8"
            >
              Starting at just $0.12 per minute.
            </motion.p>

            {/* CTA Buttons - Replace with single button */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex justify-center"
            >
              <Link 
                to="/get-started" 
                className="bg-white text-black px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-xl hover:-translate-y-0.5 text-center inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-racing-900" />
        <div className="container mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-light text-white mb-4">Everything you need</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Complete solution for your restaurant's communication needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "WhatsApp Orders",
                description: "Accept orders through WhatsApp with our AI agent that understands custom menus.",
                color: "from-green-500/20 to-transparent"
              },
              {
                icon: <Truck className="w-6 h-6" />,
                title: "Drive-Through AI",
                description: "Modernize your drive-through with our AI voice agent that integrates with your POS.",
                color: "from-blue-500/20 to-transparent"
              },
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Phone Orders",
                description: "Never miss a call with our AI phone agent that handles orders 24/7.",
                color: "from-purple-500/20 to-transparent"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
                <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-racing-500/30 transition-all">
                  <div className="bg-racing-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-racing-400 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-white text-xl mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - New */}
      <section className="py-16 bg-racing-500/5 border-y border-racing-500/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Restaurants" },
              { number: "24/7", label: "Availability" },
              { number: "99.9%", label: "Uptime" },
              { number: "15+", label: "Languages" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-light text-racing-500 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-racing-500/10 text-racing-500 mb-8">
              <Star className="w-4 h-4" />
              Trusted by 500+ restaurants
            </div>
            <h2 className="text-4xl font-light mb-6">What our customers say</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all"
              >
                <div className="absolute -top-4 left-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-racing-500" fill="currentColor" />
                    ))}
                  </div>
                </div>
                <blockquote className="text-gray-600 mb-6">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <User2 className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section id="integrations" className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#004225,transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-racing-500/10 text-racing-500 mb-8">
                <Zap className="w-4 h-4" />
                Easy Integration
              </div>
              <h2 className="text-4xl font-light mb-6">Connect with your existing stack</h2>
              <p className="text-xl text-gray-400 mb-12">
                Integrate with your favorite tools and services in minutes, not months.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Server className="w-6 h-6" />,
                    title: "POS Systems",
                    description: "Seamlessly connect with Toast, Square, and other major POS providers",
                    integrations: ["Toast", "Square", "Clover"]
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: "Communication",
                    description: "Integrate with your phone system, WhatsApp, and SMS",
                    integrations: ["Twilio", "MessageBird", "Vonage"]
                  },
                  {
                    icon: <Workflow className="w-6 h-6" />,
                    title: "Analytics",
                    description: "Connect to your favorite analytics and reporting tools",
                    integrations: ["Stripe", "Shopify", "QuickBooks"]
                  }
                ].map((integration, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-racing-500/10 flex items-center justify-center shrink-0 text-racing-400 group-hover:scale-110 transition-transform">
                        {integration.icon}
                      </div>
                      <div>
                        <h3 className="text-xl mb-2">{integration.title}</h3>
                        <p className="text-gray-400">{integration.description}</p>
                      </div>
                    </div>
                    <div className="ml-16 flex gap-2">
                      {integration.integrations.map((name, i) => (
                        <span 
                          key={i}
                          className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10"
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Interactive Visualization */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-racing-500/5 rounded-2xl p-8 border border-racing-500/10"
              >
                <div className="relative aspect-square">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-racing-500/20 flex items-center justify-center"
                    >
                      <Bot className="w-10 h-10 text-racing-500" />
                    </motion.div>
                  </div>

                  {/* Connecting Lines and Integration Points */}
                  {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="absolute top-1/2 left-1/2 w-1/2 origin-left"
                      style={{ transform: `rotate(${degree}deg)` }}
                    >
                      <div className="h-px bg-gradient-to-r from-racing-500/50 to-racing-500/0 w-full" />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                        className="absolute right-0 -translate-y-1/2 w-8 h-8 rounded-full bg-racing-500/10 flex items-center justify-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-racing-500" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light mb-4">Enterprise-Grade Security</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Your data is protected by industry-leading security measures and compliance standards.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "PCI DSS Compliant",
              "SOC 2 Type II",
              "HIPAA Compliant",
              "24/7 Monitoring"
            ].map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-racing-400/10 rounded-xl p-6 hover:border-racing-400/30 transition-colors"
              >
                <Shield className="w-6 h-6 text-racing-400 mb-4" />
                <h3 className="text-racing-400 mb-2">{cert}</h3>
                <p className="text-gray-400 text-sm">Secure data handling and processing.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-racing-500 to-racing-600 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center"
        >
          <h2 className="text-4xl font-light mb-6">Ready to revolutionize your restaurant?</h2>
          <p className="text-racing-100 mb-12 text-lg">Join hundreds of restaurants using bocato's AI solutions.</p>
          <Link 
            to="/get-started" 
            className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-900 transition-all inline-flex items-center gap-2 hover:shadow-2xl hover:-translate-y-0.5"
          >
            Get started <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </section>

      {/* Pathways Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#004225,transparent_70%)] opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side: Features */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-racing-500/10 text-racing-500 mb-8">
                <Code className="w-4 h-4" />
                Pathways
              </div>
              <h2 className="text-4xl font-light mb-6">Meet Pathways</h2>
              <p className="text-xl text-gray-400 mb-12">
                The programming language for hallucination-proof AI.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: <Code className="w-6 h-6" />,
                    title: "Write custom prompts",
                    description: "Provide your agent with sample dialogue and relevant details to personalize interactions."
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Scale usage anytime",
                    description: "Auto-scaling infrastructure allows you to handle thousands of calls, any time."
                  },
                  {
                    icon: <Workflow className="w-6 h-6" />,
                    title: "Seamlessly exchange data",
                    description: "Dynamic integrations built with our API send your data wherever it needs to go."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-xl bg-racing-500/10 flex items-center justify-center shrink-0 text-racing-400 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{feature.title}</h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side: Code Preview */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-xl p-8 shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="font-mono text-sm">
                  <code className="text-gray-300">{`pathway "order_pizza" {
  // Define the initial greeting
  intent "greeting" {
    response "Welcome to Bocato Pizza!"
  }
  
  // Collect order details
  collect "size" {
    type: enum["small", "medium", "large"]
    prompt "What size pizza would you like?"
  }

  collect "toppings" {
    type: array[string]
    prompt "What toppings would you like?"
    max_items: 4
  }

  // Confirm the order
  intent "confirm_order" {
    response "Your total is \${total}. Would you like to place this order?"
    
    on "yes" {
      action "process_payment"
      response "Great! Your order will be ready in 30 minutes."
    }
  }
}`}</code>
                </pre>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-racing-500/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-racing-500/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}

export default Home;