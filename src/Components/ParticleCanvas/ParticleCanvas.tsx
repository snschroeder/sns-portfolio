import React, { useEffect, useRef, useState } from 'react';
import './ParticleCanvas.css';

const ParticleCanvas: React.FC = () => {
  const [windowX, setWindowX] = useState(innerWidth);
  const [windowY, setWindowY] = useState(innerHeight);

  const canvasRef: React.Ref<any> = useRef();


  const setSize = (): void => {
    setWindowX(innerWidth);
    setWindowY(innerHeight);
  };

  const drawParticle = (ctx: any, startX: number, startY: number, size: number) => {
    ctx.fillStyle = 'rgba(200, 200, 0, 1)';
    const circle = new Path2D();
    circle.arc(startX, startY, size, 0, 2 * Math.PI);
    ctx.fill(circle);
  };

  const generateParticleField = (): void => {
    const ctx = canvasRef.current.getContext('2d');

    ctx.globalCompositeOperation = 'destination-over';
    ctx.clearRect(0, 0, windowX, windowY);

    drawParticle(ctx, 10, 20, 4);
    ctx.save();

  };

  const animate = () => {
    window.requestAnimationFrame(generateParticleField);
  };

  useEffect(() => {
    addEventListener('resize', () => setSize());
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
