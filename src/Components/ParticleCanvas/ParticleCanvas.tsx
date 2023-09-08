import React, { useEffect, useRef, useState } from 'react';
import './ParticleCanvas.css';

interface ParticleInterface {
  x: number,
  y: number,
  size: number,
  trajectory: number,
  speed: number,
  t: number,
  strokeColor: string,
  particleTrailWidth: number,
  floatAround: () => void,
}

const ParticleCanvas: React.FC = () => {
  const [windowX, setWindowX] = useState(innerWidth);
  const [windowY, setWindowY] = useState(innerHeight);
  //   const [particleArray, setParticleArray] = useState(new Array<ParticleInterface>);

  const canvasRef: React.Ref<any> = useRef();

  let particleArray = new Array<ParticleInterface>;


  const setSize = (): void => {
    setWindowX(innerWidth);
    setWindowY(innerHeight);
  };

  function Particle(this: ParticleInterface, ctx: any, startX: number, startY: number, size: number) {
    this.x = startX;
    this.y = startY;
    this.speed = 0.02;
    this.trajectory = Math.random() * Math.PI * 2;
    this.t = Math.random() * 150;
    this.strokeColor = 'rgba(200, 200, 0, 1)';
    this.particleTrailWidth = size;

    this.floatAround = () => {
      const ls = {
        x: this.x,
        y: this.y,
      };
      this.trajectory += this.speed;
      this.x = Math.cos(this.trajectory) * this.t;
      this.y = Math.sin(this.trajectory) * this.t;
      ctx.beginPath();
      ctx.lineWidth = this.particleTrailWidth;
      ctx.strokeStyle = this.strokeColor;
      ctx.moveTo(ls.x, ls.y);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
    };
  }

  const generateParticleField = (amount: number): void => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
    ctx.fillRect(0, 0, windowX, windowY);

    for (let i = 0; i < amount; i += 1) {
      particleArray[i] = new (Particle as any)(ctx, 300, 300, 10);
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    particleArray.forEach((particle) => particle.floatAround());
  };

  useEffect(() => {
    addEventListener('resize', () => setSize());
    generateParticleField(10);
    animate();
  }, []);
 
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
