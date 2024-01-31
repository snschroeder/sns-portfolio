import React, { useEffect, useRef, useState } from 'react';
import Particle from './Particle';
import './ParticleCanvas.css';

interface Props {
  windowX: number;
  windowY: number;
}

const ParticleCanvas: React.FC<Props> = ({ windowX, windowY }: Props) => {
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

  const setupCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.canvas.height = windowX;
    ctx.canvas.height = windowY;
    ctx.fillStyle = '#eee'
    ctx.fillRect(0, 0, windowX, windowY);
    ctx.fillStyle = 'rgba(223, 207, 137, 0.4)';
    return ctx;
  }

  const generateParticleField = (amount: number) => {
    const ctx = setupCanvas();

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
    setupCanvas();
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
    animate();
  }, [particleArray]);

  useEffect(() => {
    setupCanvas();
    generateParticleField(50);
  }, [windowX, windowY])
 
  // useEffect(() => {
  //   console.log(document.body.scrollHeight);
  //   setupCanvas();
  // }, [document.body.scrollHeight, windowX])

  return (
    <section className="particle-container">
        <canvas
            className="particle-canvas"
            id="particle-canvas"
            ref={canvasRef}
            width={windowX}
            height={windowY}
        >
        </canvas>
    </section>
  );
};

export default ParticleCanvas;
