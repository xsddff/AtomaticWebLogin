'use client';

import { useEffect, useRef, useState } from 'react';
import { OBSERVER_CONFIG } from '@/lib/animations';

/**
 * 滚动动画 Hook
 * 监听元素是否进入视口，并返回动画状态
 */
export function useScrollAnimation(
  threshold: number = 0.1,
  rootMargin: string = '0px 0px -100px 0px'
) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin, threshold]);

  return { ref, isVisible };
}

/**
 * 滚动动画容器组件
 * 子元素在进入视口时触发动画
 */
interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({
  children,
  animation = 'slideUp',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fadeIn':
        return 'animate-fade-in';
      case 'slideUp':
        return 'animate-slide-up';
      case 'slideLeft':
        return 'animate-slide-left';
      case 'slideRight':
        return 'animate-slide-right';
      case 'scale':
        return 'animate-scale';
      default:
        return 'animate-slide-up';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`
        ${!isVisible ? 'scroll-hidden' : getAnimationClass()}
        ${className}
      `}
      style={{
        animationDelay: isVisible ? `${delay}ms` : '0ms',
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * 渐进式滚动动画组件
 * 多个子元素按顺序依次进入动画
 */
interface StaggeredScrollAnimationProps {
  children: React.ReactNode[];
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  staggerDelay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function StaggeredScrollAnimation({
  children,
  animation = 'slideUp',
  staggerDelay = 100,
  duration = 600,
  threshold = 0.1,
  className = '',
}: StaggeredScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`
            ${!isVisible ? 'scroll-hidden' : getAnimationClass(animation)}
          `}
          style={{
            animationDelay: isVisible ? `${index * staggerDelay}ms` : '0ms',
            animationDuration: `${duration}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

function getAnimationClass(animation: string) {
  switch (animation) {
    case 'fadeIn':
      return 'animate-fade-in';
    case 'slideUp':
      return 'animate-slide-up';
    case 'slideLeft':
      return 'animate-slide-left';
    case 'slideRight':
      return 'animate-slide-right';
    default:
      return 'animate-slide-up';
  }
}
