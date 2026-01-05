/**
 * Reflect.app 复刻 - 动效配置中心
 * 集中管理所有 CSS 动画变量和工具函数
 */

// 动画持续时间常量
export const ANIMATION_DURATION = {
  FAST: '150ms',
  NORMAL: '300ms',
  SLOW: '500ms',
  VERY_SLOW: '800ms',
  SUPER_SLOW: '1200ms',
} as const;

// 动画缓动函数
export const EASING = {
  LINEAR: 'linear',
  EASE_IN: 'ease-in',
  EASE_OUT: 'ease-out',
  EASE_IN_OUT: 'ease-in-out',
  CUSTOM: 'cubic-bezier(0.4, 0, 0.2, 1)',
  BOUNCE: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
} as const;

// 滚动动画延迟配置
export const SCROLL_STAGGER_DELAY = {
  STEP_1: '0ms',
  STEP_2: '100ms',
  STEP_3: '200ms',
  STEP_4: '300ms',
  STEP_5: '400ms',
  STEP_6: '500ms',
} as const;

// 动画类名生成工具
export const createAnimationClass = (
  animation: string,
  duration: string = ANIMATION_DURATION.NORMAL,
  easing: string = EASING.CUSTOM
) => `${animation} ${duration} ${easing}`;

// Intersection Observer 配置
export const OBSERVER_CONFIG = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1,
} as const;

// 打字机效果配置
export const TYPEWRITER_CONFIG = {
  baseSpeed: 50,
  deleteSpeed: 30,
  pauseTime: 2000,
  showCursor: true,
  cursorBlinkSpeed: 1000,
} as const;

// 粒子背景配置
export const PARTICLE_CONFIG = {
  count: 80,
  size: { min: 1, max: 3 },
  speed: { min: 0.1, max: 0.3 },
  color: 'rgba(139, 92, 246, 0.5)', // Violet color
  connectionDistance: 150,
  mouseInteractionRadius: 100,
} as const;

// 导航栏滚动阈值
export const NAV_SCROLL_THRESHOLD = 50;

// 卡片 hover 效果配置
export const CARD_HOVER_CONFIG = {
  scale: 1.02,
  lift: '-8px',
  shadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
  transitionDuration: '200ms',
} as const;
