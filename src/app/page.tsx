import HeroSection from '@/components/HeroSection';
import Navbar from '@/components/Navbar';
import ScrollAnimation from '@/components/ScrollAnimation';
import FeatureCard, { AdvancedFeatureCard } from '@/components/FeatureCard';
import BlackHole from '@/components/BlackHole';
import Link from 'next/link';

/**
 * Reflect.app 风格首页
 * 包含丰富的动效和交互效果
 */
export default function Home() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Lightning Fast',
      description: 'Capture ideas at the speed of thought with our instant capture feature.',
      tags: ['Quick', 'Efficient'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AI-Powered',
      description: 'Let AI summarize, organize, and connect your thoughts automatically.',
      tags: ['GPT-4', 'Smart'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'End-to-End Encrypted',
      description: 'Your notes are private and secure with military-grade encryption.',
      tags: ['Secure', 'Private'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Bi-Directional Linking',
      description: 'Create a web of knowledge that grows with your thinking.',
      tags: ['Connected', 'Network'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Voice Transcription',
      description: 'Record and transcribe meetings automatically with Whisper.',
      tags: ['Audio', 'Transcribe'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Beautiful Interface',
      description: 'Clean, distraction-free design that helps you focus.',
      tags: ['Minimal', 'Elegant'],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-violet-50/20 to-purple-50/20">
      <Navbar />
      <HeroSection />

      {/* Features Section */}
      <section className="w-full px-6 sm:px-8 lg:px-12 pt-20 pb-28 bg-white bg-pattern-dots">
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Header */}
          <ScrollAnimation className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
              Everything you need to
              <span className="text-gradient"> think better</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-loose">
              Powerful features designed to enhance your thinking and creativity
            </p>
          </ScrollAnimation>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <ScrollAnimation
                key={feature.title}
                delay={index * 100}
                threshold={0.2}
              >
                <AdvancedFeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  tags={feature.tags}
                />
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full px-6 sm:px-8 lg:px-12 py-20 md:py-28 bg-gradient-to-br from-violet-50/50 via-purple-50/50 to-pink-50/50 bg-pattern-grid">
        <div className="mx-auto w-full max-w-5xl">
          {/* Section Header */}
          <ScrollAnimation className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
              How it works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-loose">
              Get started in minutes, think better forever
            </p>
          </ScrollAnimation>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Capture',
                description: 'Write down your thoughts instantly with our lightning-fast capture.',
              },
              {
                step: '02',
                title: 'Connect',
                description: 'Let AI link your ideas automatically and build your knowledge graph.',
              },
              {
                step: '03',
                title: 'Discover',
                description: 'Uncover new insights through AI-powered analysis and search.',
              },
            ].map((item, index) => (
              <ScrollAnimation
                key={item.step}
                delay={index * 150}
                threshold={0.2}
              >
                <div className="relative group">
                  {/* Step Number */}
                  <div className="text-7xl font-bold text-gradient-purple absolute -top-10 -left-3 opacity-50 group-hover:opacity-70 transition-opacity">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div className="relative pt-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-gradient-purple transition-colors leading-relaxed">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-loose">
                      {item.description}
                    </p>
                  </div>

                  {/* Connector Line */}
                  {index < 2 && (
                    <div className="hidden md:block absolute top-16 -right-5 w-10 h-0.5 bg-gradient-to-r from-violet-400 to-transparent group-hover:w-14 transition-all duration-300" />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full px-6 sm:px-8 lg:px-12 pt-20 pb-28 bg-gradient-to-br from-violet-50/30 via-purple-50/30 to-pink-50/30">
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Header */}
          <ScrollAnimation className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
              Loved by thinkers
            </h2>
            <p className="text-lg text-gray-600 leading-loose">
              Join thousands of people who think better with Reflect
            </p>
          </ScrollAnimation>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Product Designer',
                content: 'Reflect has completely transformed how I think and work. The AI features are game-changing.',
                color: 'violet'
              },
              {
                name: 'Michael Park',
                role: 'Founder',
                content: 'Finally, a note-taking app that keeps up with my thoughts. The linking system is brilliant.',
                color: 'purple'
              },
              {
                name: 'Emily Watson',
                role: 'Researcher',
                content: 'The AI summaries help me process information faster than ever. Highly recommended!',
                color: 'pink'
              },
            ].map((testimonial, index) => (
              <ScrollAnimation
                key={index}
                delay={index * 100}
                threshold={0.2}
              >
                <div className="p-8 sm:p-10 lg:p-12 rounded-xl bg-white border border-gray-100 card-hover hover:shadow-xl hover:shadow-glow-soft">
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base leading-loose mb-8">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-full gradient-${testimonial.color} flex items-center justify-center text-white font-bold text-lg`}>
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-base">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 sm:px-8 lg:px-12 py-20 bg-white relative overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-violet-50/50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-violet-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/10 rounded-full blur-3xl" />

        <div className="mx-auto w-full max-w-4xl text-center relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-relaxed">
              Ready to <span className="text-gradient">think better</span>?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-loose">
              Start your free trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                className="
                  px-10 py-4 rounded-full
                  btn-gradient-primary font-semibold text-lg
                  hover:scale-105
                  transition-all duration-300
                "
              >
                Get Started Free
              </button>
              <button
                className="
                  px-10 py-4 rounded-full
                  bg-gray-100 text-gray-700 font-semibold text-lg
                  hover:bg-gray-200 hover:scale-105
                  transition-all duration-300
                "
              >
                Talk to Sales
              </button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Black Hole Animation */}
      <BlackHole />

      {/* Footer */}
      <footer className="w-full px-6 sm:px-8 lg:px-12 py-12 bg-gray-900 text-gray-400">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg gradient-violet flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold text-lg">Reflect</span>
              </div>
              <p className="text-sm">
                The world's best AI-powered note-taking app.
              </p>
            </div>

            {/* Links */}
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Updates'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Resources', links: ['Help', 'Docs', 'API', 'Community'] },
            ].map((column) => (
              <div key={column.title}>
                <h4 className="text-white font-semibold mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link) => (
                    <li key={link}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">
              © 2024 Reflect. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              {['Privacy', 'Terms', 'Security'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
