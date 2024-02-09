import React, { useEffect, useRef, useState } from 'react';
import Particle from './Particle';
import {
  getRandomInt,
  getRandomIntWithinRange,
  getRandomDecimalWithinRange,
  applySign,
} from '../../Utilities/rng';

import './ParticleCanvas.css';

interface Props {
  windowX: number;
  windowY: number;
  zIndex: number;
}

const ParticleCanvas: React.FC<Props> = ({ windowX, windowY, zIndex }: Props) => {
  const [particleArray, setParticleArray] = useState(new Array<Particle>);

  const canvasRef: React.Ref<any> = useRef();
  let animationFrame;

  const setupCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.canvas.height = windowX;
    ctx.canvas.height = windowY;
    ctx.fillStyle = '#eee';
    ctx.fillRect(0, 0, windowX, windowY);
    ctx.fillStyle = 'rgba(223, 207, 137, 0.4)';
    return ctx;
  };

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
  }, [windowX, windowY]);

  const style = {
    zIndex,
  };

  return (
    <div className="particle-container" style={ style }>
      <canvas
        className="particle-canvas"
        id="particle-canvas"
        ref={canvasRef}
        width={windowX}
        height={windowY}
      >
      </canvas>
    </div>
  );
};

export default ParticleCanvas;
