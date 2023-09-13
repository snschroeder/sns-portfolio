import React, { useEffect, useRef, useState } from 'react';
import './ParticleCanvas.css';

interface ParticleInterface {
  x: number,
  y: number,
  radius: number,
  trajectory: number,
  speed: number,
  veloX: number,
  veloY: number,
  t: number,
  strokeColor: string,
  particleTrailWidth: number,
  draw: () => void,
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

  function Particle(this: ParticleInterface, ctx: any, startX: number, startY: number, radius: number, veloX: number, veloY: number) {
    this.x = startX;
    this.y = startY;
    this.speed = 0.1;
    this.veloX = veloX;
    this.veloY = veloY;

    this.strokeColor = 'rgba(200, 200, 0, 1)';
    this.radius = radius;
    ctx.fillStyle = this.strokeColor;

    this.draw = () => {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
      ctx.closePath();
      ctx.fill();
    };

    this.floatAround = () => {
      const ls = {
        x: this.x,
        y: this.y,
      };

      ctx.clearRect(0, 0, windowX, windowY);
      this.draw();
      this.x += this.veloX;
      this.y += this.veloY;


      // this.trajectory += this.speed;
      //   this.x += Math.cos(this.speed) * this.t;
      //   this.y += Math.sin(this.speed) * this.t;
      //   ctx.beginPath();

      //   ctx.strokeStyle = this.strokeColor;
      //   ctx.moveTo(ls.x, ls.y);
      //   ctx.lineTo(this.x, this.y);
      //   ctx.stroke();
    };
  }

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const generateParticleField = (amount: number): void => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 0.55)';
    ctx.fillRect(0, 0, windowX, windowY);

    for (let i = 0; i < amount; i += 1) {
      particleArray[i] = new (Particle as any)(ctx, getRandomInt(200), getRandomInt(200), getRandomInt(40), 0.2, 0.5);
    }

    particleArray.forEach((particle: ParticleInterface) => particle.draw());
  };

  const animate = () => {
    requestAnimationFrame(animate);
    particleArray.forEach((particle: ParticleInterface) => particle.floatAround());
  };

  useEffect(() => {
    addEventListener('resize', () => setSize());
    generateParticleField(1);
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
