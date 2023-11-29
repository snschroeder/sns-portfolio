import React, { useEffect, useRef, useState } from 'react';
import Particle from './Particle';
import './ParticleCanvas.css';

const ParticleCanvas: React.FC = () => {
  const [windowX, setWindowX] = useState(innerWidth);
  const [windowY, setWindowY] = useState(innerHeight);
  const [particleArray, setParticleArray] = useState(new Array<Particle>);

  const canvasRef: React.Ref<any> = useRef();
  let animationFrame;

  // Get a random integer between 0 and max, exclusive
  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  // Get a random integer between min and max
  // min is inclusive
  // max is exclusive
  const getRandomIntWithinRange = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  // Get a random decimal between min and max
  // min is inclusive
  // max is exclusive
  const getRandomDecimalWithinRange = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;    
  };

  // Randomly make a number either positive or negative
  const applySign = (val: number): number => {
    const direction = getRandomInt(2);

    return direction === 0 ? val : -val;
  };

  const generateParticleField = (amount: number) => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'rgba(223, 207, 137, 0.4)';
    ctx.fillRect(0, 0, windowX, windowY);
    let particles = new Array<Particle>(amount);

    for (let i = 0; i < amount; i += 1) {
      particles[i] = new Particle(
        getRandomInt(windowX),
        getRandomInt(windowY),
        getRandomIntWithinRange(5, 15),
        applySign(getRandomDecimalWithinRange(0.005, 0.1)),
        applySign(getRandomDecimalWithinRange(0.005, 0.1)),
        ctx,
      );
    }

    setParticleArray([...particles]);
  };

  const setSize = (): void => {
    if (Math.abs(innerWidth - windowX) > 50) {
      setWindowX(innerWidth);
      setParticleArray([]);
    }
  
    if (Math.abs(innerHeight - windowY) > 50) {
      setWindowY(innerHeight);
      setParticleArray([]);
    }

    if (particleArray.length === 0) {
      generateParticleField(50);
    }
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
    generateParticleField(50);
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
