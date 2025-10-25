import { useEffect, useRef } from 'react';
import './FuturisticBackground.css';

const FuturisticBackground = () => {
  const starsRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    // Generar estrellas
    if (starsRef.current) {
      for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.width = `${Math.random() * 3 + 1}px`;
        star.style.height = star.style.width;
        star.style.animationDelay = `${Math.random() * 2}s`;
        star.style.animationDuration = `${Math.random() * 3 + 1}s`;
        starsRef.current.appendChild(star);
      }
    }

    // Generar partículas flotantes
    if (particlesRef.current) {
      const colors = ['#00f5ff', '#8a2be2', '#ff1493', '#39ff14'];
      for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${Math.random() * 8 + 4}s`;
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        particle.style.boxShadow = `0 0 10px ${color}`;
        particlesRef.current.appendChild(particle);
      }
    }

    return () => {
      if (starsRef.current) starsRef.current.innerHTML = '';
      if (particlesRef.current) particlesRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div className="futuristic-background">
      <div className="stars-container" ref={starsRef}></div>
      <div className="particles-container" ref={particlesRef}></div>
    </div>
  );
};

export default FuturisticBackground;