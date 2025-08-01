'use client';

import { useEffect, useRef } from 'react';

export default function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = [
      'rgba(120, 230, 200, 0.8)',  // Cyan
      'rgba(100, 180, 255, 0.8)',  // Blue
      'rgba(160, 140, 255, 0.8)',  // Purple
      'rgba(140, 255, 180, 0.8)',  // Green
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const numberOfParticles = 100;
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + Math.random() * 20,
          vx: (Math.random() - 0.5) * 0.5,
          vy: -0.5 - Math.random() * 1,
          size: 2 + Math.random() * 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0.1 + Math.random() * 0.4
        });
      }
    };

    const updateParticles = () => {
      const mouseInfluence = 0.2;
      const dx = targetMouseRef.current.x - mouseRef.current.x;
      const dy = targetMouseRef.current.y - mouseRef.current.y;
      
      mouseRef.current.x += dx * 0.1;
      mouseRef.current.y += dy * 0.1;

      particles.forEach(particle => {
        // Add mouse influence
        const distX = mouseRef.current.x - particle.x;
        const distY = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 200) {
          particle.vx += (distX / distance) * mouseInfluence;
          particle.vy += (distY / distance) * mouseInfluence;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Add some natural movement
        particle.vx += (Math.random() - 0.5) * 0.1;
        particle.vy += (Math.random() - 0.5) * 0.1;

        // Damping
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Reset if out of bounds
        if (
          particle.y < -20 ||
          particle.x < -20 ||
          particle.x > canvas.width + 20
        ) {
          particle.x = Math.random() * canvas.width;
          particle.y = canvas.height + 10;
          particle.vx = (Math.random() - 0.5) * 0.5;
          particle.vy = -0.5 - Math.random() * 1;
        }
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        
        const color = particle.color.replace('0.8', `${particle.alpha}`);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // Add bloom effect
      ctx.globalCompositeOperation = 'lighter';
      particles.forEach(particle => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 4
        );
        
        gradient.addColorStop(0, particle.color.replace('0.8', '0.1'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ backgroundColor: 'transparent' }}
    />
  );
}
