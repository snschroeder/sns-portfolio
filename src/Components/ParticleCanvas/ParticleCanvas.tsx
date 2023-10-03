import React, { useEffect, useRef, useState } from 'react';
import Particle from './Particle';
import './ParticleCanvas.css';

const ParticleCanvas: React.FC = () => {
  const [windowX, setWindowX] = useState(innerWidth);
  const [windowY, setWindowY] = useState(innerHeight);
  const [particleArray, setParticleArray] = useState(new Array<Particle>);

  const canvasRef: React.Ref<any> = useRef();
  let animationFrame;

  const setSize = (): void => {
    setWindowX(innerWidth);
    setWindowY(innerHeight);
  };

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const getRandomIntWithinRange = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getRandomDecimalWithinRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);    
  };

  const generateParticleField = (amount: number) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
    ctx.fillRect(0, 0, windowX, windowY);

    let particles = new Array<Particle>(amount);

    for (let i = 0; i < amount; i += 1) {
      particles[i] = new Particle(
        getRandomInt(windowX),
        getRandomInt(windowY),
        getRandomIntWithinRange(10, 40),
        getRandomDecimalWithinRange(-0.5, 0.5),
        getRandomDecimalWithinRange(-0.5, 0.5),
        ctx,
      );
    }

    setParticleArray([...particles]);
  };

  const animate = () => {
    const ctx = canvasRef.current.getContext('2d');

    animationFrame = requestAnimationFrame(animate);

    ctx.clearRect(0, 0, windowX, windowY);
    particleArray.forEach((particle: Particle) => {
      particle.floatAround();
    });
  };

  useEffect(() => {
    addEventListener('resize', () => setSize());
    generateParticleField(20);
  }, []);

  useEffect(() => {
    animate();
  }, [particleArray]);

  useEffect(() => {
    setSize();
  }, [windowX, windowY]);

  return (
        <section className="particle-container">
            <canvas
                className="particle-canvas"
                id="test-canvas"
                ref={canvasRef}
                width={windowX}
                height={windowY}
            >
            </canvas>
        </section>
  );
};

export default ParticleCanvas;
