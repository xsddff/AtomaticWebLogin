'use client';

import { useEffect, useState, useRef } from 'react';
import { TYPEWRITER_CONFIG, SCROLL_STAGGER_DELAY } from '@/lib/animations';

/**
 * Reflect.app 风格 Hero 组件
 * 特性：
 * - 打字机效果
 * - 渐入动画
 * - 动态渐变背景
 * - 3D 浮动元素
 */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const texts = [
    'Capture ideas at the speed of thought',
    'Your second brain',
    'AI-powered note-taking',
    'Think better, together',
  ];

  // 组件挂载后触发动画
  useEffect(() => {
    setMounted(true);
  }, []);

  // 打字机效果
  useEffect(() => {
    if (!mounted) return;

    const currentText = texts[loopIndex];

    const type = () => {
      if (isDeleting) {
        setTypedText((prev) => {
          if (prev.length === 0) {
            setIsDeleting(false);
            setLoopIndex((prev) => (prev + 1) % texts.length);
            return '';
          }
          return prev.slice(0, -1);
        });
      } else {
        setTypedText((prev) => {
          if (prev === currentText) {
            // 打字完成，暂停后开始删除
            setIsDeleting(true);
            return prev;
          }
          return prev + currentText[prev.length];
        });
      }
    };

    const speed = isDeleting
      ? TYPEWRITER_CONFIG.deleteSpeed
      : TYPEWRITER_CONFIG.baseSpeed;

    typingIntervalRef.current = setTimeout(type, speed);

    return () => {
      if (typingIntervalRef.current) {
        clearTimeout(typingIntervalRef.current);
      }
    };
  }, [typedText, isDeleting, loopIndex, mounted, texts]);

  return (
    <section
      className="
        relative overflow-hidden
        min-h-screen flex items-center justify-center
        gradient-bg animate-gradient
      "
    >
      {/* 背景粒子装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Hero 内容 */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/20 backdrop-blur-md border border-white/30
            text-white text-sm font-medium mb-8
            animate-slide-up
            ${mounted ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transitionDelay: mounted ? SCROLL_STAGGER_DELAY.STEP_1 : '0ms',
          }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Now with AI-powered summaries
        </div>

        {/* 主标题 */}
        <h1
          className={`
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold
            text-white mb-6 leading-tight
            animate-slide-up
            ${mounted ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transitionDelay: mounted ? SCROLL_STAGGER_DELAY.STEP_2 : '0ms',
          }}
        >
          <span className="block">Think faster.</span>
          <span className="block">Think deeper.</span>
          <span className="block">Think together.</span>
        </h1>

        {/* 打字机效果副标题 */}
        <div
          className={`
            text-xl sm:text-2xl md:text-3xl
            text-white/90 mb-8 min-h-[3.5rem]
            animate-slide-up
            ${mounted ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transitionDelay: mounted ? SCROLL_STAGGER_DELAY.STEP_3 : '0ms',
          }}
        >
          {typedText}
          {TYPEWRITER_CONFIG.showCursor && (
            <span className="typewriter-cursor" />
          )}
        </div>

        {/* 描述文字 */}
        <p
          className={`
            text-lg text-white/70 max-w-2xl mx-auto mb-10
            animate-slide-up
            ${mounted ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transitionDelay: mounted ? SCROLL_STAGGER_DELAY.STEP_4 : '0ms',
          }}
        >
          Reflect is the world's best AI-powered note-taking app.
          Capture ideas instantly, generate insights automatically,
          and connect your thoughts seamlessly.
        </p>

        {/* CTA 按钮 */}
        <div
          className={`
            flex flex-col sm:flex-row gap-4 justify-center items-center
            animate-slide-up
            ${mounted ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transitionDelay: mounted ? SCROLL_STAGGER_DELAY.STEP_5 : '0ms',
          }}
        >
          <button
            className="
              px-8 py-4 rounded-full
              bg-white text-gray-900 font-semibold text-lg
              hover:shadow-2xl hover:shadow-white/20
              hover:scale-105
              transition-all duration-200
            "
          >
            Start for free
          </button>
          <button
            className="
              px-8 py-4 rounded-full
              bg-white/10 backdrop-blur-md border border-white/30
              text-white font-semibold text-lg
              hover:bg-white/20 hover:scale-105
              transition-all duration-200
            "
          >
            Watch demo
          </button>
        </div>

        {/* 产品截图/演示区域 */}
        <div
          className={`
            mt-16 relative
            animate-scale
            ${mounted ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            transitionDelay: mounted ? SCROLL_STAGGER_DELAY.STEP_6 : '0ms',
          }}
        >
          <div
            className="
              relative max-w-4xl mx-auto
              bg-white/10 backdrop-blur-xl
              rounded-2xl border border-white/20
              shadow-2xl
            "
          >
            {/* 顶部栏 */}
            <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-white/60 text-sm">Reflect Notes</span>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="p-8 min-h-[400px]">
              <div className="space-y-4">
                {/* 模拟笔记内容 */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`
                      h-4 bg-white/20 rounded-full
                      animate-pulse-slow
                    `}
                    style={{
                      width: `${Math.random() * 40 + 60}%`,
                      animationDelay: `${i * 200}ms`,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* 浮动装饰元素 */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-violet-400 to-pink-400 rounded-2xl opacity-60 animate-float" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-xl opacity-60 animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * 简化的粒子背景组件
 */
function ParticleBackground() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white/30 rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </>
  );
}
