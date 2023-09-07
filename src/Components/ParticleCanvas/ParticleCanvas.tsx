import React from 'react';
import './ParticleCanvas.css';

const ParticleCanvas: React.FC = () => {
    return (
        <section className="particle-container">
            <canvas className="particle-canvas" id="test-canvas">

            </canvas>
        </section>
    )
}

export default ParticleCanvas;
