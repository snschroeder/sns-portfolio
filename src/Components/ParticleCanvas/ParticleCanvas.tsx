import React, { useEffect, useRef } from 'react';
import './ParticleCanvas.css';

const ParticleCanvas: React.FC = () => {
  const canvasRef: React.Ref<any> = useRef();

  const drawParticle = (ctx: any, size: number, startX: number, startY: number) => {
    ctx.fillStyle = 'rgb(200, 200, 0)';
    const circle = new Path2D();
    circle.arc(startX, startY, size, 0, 2 * Math.PI);
    ctx.fill(circle);
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    drawParticle(ctx, 10, 50, 50);
    drawParticle(ctx, 5, 30, 20);
  });

  return (
        <section className="particle-container">
            <canvas
                className="particle-canvas"
                id="test-canvas"
                ref={canvasRef}
            >
            </canvas>
        </section>
  );
};

export default ParticleCanvas;
