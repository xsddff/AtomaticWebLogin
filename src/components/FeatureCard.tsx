'use client';

import { useState } from 'react';

/**
 * Reflect.app 风格特性卡片
 * 特性：
 * - Hover 缩放 + 阴影
 * - 内容展开动画
 * - 图标动画
 * - 光标跟随效果
 */
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`
        relative group p-8 sm:p-10 lg:p-12 rounded-2xl
        bg-white border border-gray-100
        card-hover
        cursor-pointer
        overflow-hidden
        transition-all duration-300
        ${isHovered ? 'shadow-xl shadow-glow-soft' : 'shadow-sm'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* 光标跟随效果背景 */}
      {isHovered && (
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(
              600px circle at ${mousePosition.x}px ${mousePosition.y}px,
              rgba(139, 92, 246, 0.1),
              transparent 40%
            )`,
          }}
        />
      )}

      {/* 内容 */}
      <div className="relative z-10">
        {/* 图标 */}
        <div
          className={`
            w-16 h-16 rounded-2xl
            flex items-center justify-center
            gradient-violet
            text-white
            mb-8
            transition-all duration-400
            ${isHovered ? 'scale-110 rotate-3 shadow-glow-violet' : ''}
          `}
        >
          {icon}
        </div>

        {/* 标题 */}
        <h3
          className={`
            text-2xl font-bold text-gray-900 mb-4
            transition-all duration-300
            ${isHovered ? 'translate-x-2 text-gradient-purple' : ''}
          `}
        >
          {title}
        </h3>

        {/* 描述 */}
        <p
          className={`
            text-gray-600 text-lg leading-relaxed
            transition-all duration-300
            ${isHovered ? 'text-gray-700' : ''}
          `}
        >
          {description}
        </p>
      </div>

      {/* 底部装饰线 */}
      <div
        className={`
          absolute bottom-0 left-0 h-0.5
          bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500
          transition-all duration-300 ease-out
          ${isHovered ? 'w-full' : 'w-0'}
        `}
      />
    </div>
  );
}

/**
 * 高级特性卡片（带更多动画效果）
 */
interface AdvancedFeatureCardProps extends FeatureCardProps {
  tags?: string[];
}

export function AdvancedFeatureCard({
  icon,
  title,
  description,
  tags = [],
  delay = 0,
}: AdvancedFeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative group p-8 sm:p-10 lg:p-12 rounded-2xl
        bg-gradient-to-br from-white to-violet-50/30
        border border-gray-100
        card-hover
        cursor-pointer
        overflow-hidden
        ${isHovered ? 'shadow-xl shadow-glow-soft' : 'shadow-sm'}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        animationDelay: `${delay}ms`,
      }}
    >
      {/* 背景装饰 */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br from-violet-500/3 via-purple-500/3 to-pink-500/3
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* 光标跟随效果 */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5
          transition-opacity duration-300 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />

      {/* 内容 */}
      <div className="relative z-10">
        {/* 图标 */}
        <div
          className={`
            w-16 h-16 rounded-2xl
            flex items-center justify-center
            gradient-purple
            text-white
            mb-8 shadow-lg
            transition-all duration-500
            ${isHovered ? 'scale-110 rotate-6 shadow-glow-purple' : ''}
          `}
        >
          {icon}
        </div>

        {/* 标题 */}
        <h3
          className={`
            text-2xl font-bold text-gray-900 mb-4
            transition-all duration-300
            ${isHovered ? 'text-gradient-purple' : ''}
          `}
        >
          {title}
        </h3>

        {/* 描述 */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          {description}
        </p>

        {/* 标签 */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`
                  px-3.5 py-1.5 rounded-full text-sm font-medium
                  bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700
                  transition-all duration-300
                  ${isHovered ? 'scale-105' : ''}
                  ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2'}
                `}
                style={{
                  transitionDelay: isHovered ? `${index * 50}ms` : '0ms',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* 装饰角标 */}
      <div
        className={`
          absolute top-4 right-4 w-2 h-2 rounded-full
          bg-violet-500
          transition-all duration-300
          ${isHovered ? 'scale-150' : ''}
        `}
      />
    </div>
  );
}

/**
 * 玻璃态卡片
 */
export function GlassCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`
        relative p-8 rounded-2xl
        glass
        card-hover
        transition-all duration-300
        ${isHovered ? 'bg-white/20' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {/* 内部光效 */}
      <div
        className={`
          absolute inset-0 rounded-2xl
          bg-gradient-to-br from-white/10 to-transparent
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
}
