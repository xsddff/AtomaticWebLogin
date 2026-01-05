'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 黑洞动效组件
 * 特性：
 * - 旋转的吸积盘
 * - 被吸入的粒子效果
 * - 引力透镜效果
 * - 脉冲光晕
 */
export default function BlackHole() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 设置画布尺寸
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // 粒子系统
    const particles: Particle[] = [];
    const numParticles = 100;
    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;

    // 创建粒子
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = 100 + Math.random() * 200;
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.3,
        angle: angle,
        distance: distance,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }

    let animationFrameId: number;
    let time = 0;

    // 动画循环
    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const currentCenterX = width / 2;
      const currentCenterY = height / 2;

      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // 绘制吸积盘外层（旋转的光环）
      const gradient = ctx.createRadialGradient(
        currentCenterX, currentCenterY, 50,
        currentCenterX, currentCenterY, 250
      );
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      gradient.addColorStop(0.3, 'rgba(76, 29, 149, 0.8)');
      gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.4)');
      gradient.addColorStop(0.7, 'rgba(236, 72, 153, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      // 绘制多层光环
      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.translate(currentCenterX, currentCenterY);
        ctx.rotate(time * (0.5 + i * 0.1) * (i % 2 === 0 ? 1 : -1));
        ctx.scale(1, 0.3 + i * 0.05); // 压扁成椭圆，制造3D效果

        const ringGradient = ctx.createRadialGradient(0, 0, 40 + i * 20, 0, 0, 100 + i * 30);
        ringGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
        ringGradient.addColorStop(0.5, `rgba(139, 92, 246, ${0.3 - i * 0.05})`);
        ringGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.beginPath();
        ctx.arc(0, 0, 100 + i * 30, 0, Math.PI * 2);
        ctx.fillStyle = ringGradient;
        ctx.fill();
        ctx.restore();
      }

      // 绘制粒子（被吸入的效果）
      particles.forEach((particle) => {
        // 计算到中心的距离
        const dx = currentCenterX - particle.x;
        const dy = currentCenterY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // 粒子被吸入
        if (distance > 40) {
          const force = 200 / (distance * distance);
          particle.x += (dx / distance) * particle.speed * 2;
          particle.y += (dy / distance) * particle.speed * 2;

          // 添加旋转效果
          const rotationSpeed = 0.02;
          const rotatedX =
            currentCenterX +
            Math.cos(rotationSpeed) * (particle.x - currentCenterX) -
            Math.sin(rotationSpeed) * (particle.y - currentCenterY);
          const rotatedY =
            currentCenterY +
            Math.sin(rotationSpeed) * (particle.x - currentCenterX) +
            Math.cos(rotationSpeed) * (particle.y - currentCenterY);

          particle.x = rotatedX;
          particle.y = rotatedY;
        } else {
          // 重置粒子
          const angle = Math.random() * Math.PI * 2;
          const newDistance = 200 + Math.random() * 100;
          particle.x = currentCenterX + Math.cos(angle) * newDistance;
          particle.y = currentCenterY + Math.sin(angle) * newDistance;
        }

        // 绘制粒子
        const particleGradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        particleGradient.addColorStop(0, `rgba(255, 255, 255, ${particle.opacity})`);
        particleGradient.addColorStop(1, 'rgba(139, 92, 246, 0)');

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = particleGradient;
        ctx.fill();
      });

      // 绘制中心黑洞
      const blackHoleGradient = ctx.createRadialGradient(
        currentCenterX, currentCenterY, 0,
        currentCenterX, currentCenterY, 50
      );
      blackHoleGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      blackHoleGradient.addColorStop(0.7, 'rgba(0, 0, 0, 1)');
      blackHoleGradient.addColorStop(0.8, 'rgba(76, 29, 149, 0.8)');
      blackHoleGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.beginPath();
      ctx.arc(currentCenterX, currentCenterY, 50, 0, Math.PI * 2);
      ctx.fillStyle = blackHoleGradient;
      ctx.fill();

      // 绘制事件视界边缘的光环
      ctx.beginPath();
      ctx.arc(currentCenterX, currentCenterY, 48, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(139, 92, 246, ${0.5 + Math.sin(time * 2) * 0.2})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMounted]);

  return (
    <div className="relative w-full h-[400px] overflow-hidden bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* 背景星星 */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}
      </div>

      {/* 画布 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* 底部文字 */}
      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase">
          Event Horizon
        </p>
      </div>
    </div>
  );
}

// 粒子接口
interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  distance: number;
  opacity: number;
}
