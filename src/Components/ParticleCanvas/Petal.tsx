import Particle from './Particle';
import {
  getRandomInt,
  getRandomIntWithinRange,
  getRandomDecimalWithinRange,
} from '../../Utilities/rng';

class Petal extends Particle {
  constructor(startX: number, startY: number, radius: number, veloX: number, veloY: number, ctx: any) {
    super(startX, startY, radius, veloX, veloY, ctx);
    this.x = startX;
    this.y = startY;
    this.veloX = veloX;
    this.veloY = veloY;
    this.ctx = ctx;
  }

  private drawPetal(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  public floatOnTheWind(): void {
    this.drawPetal();
    this.x += this.veloX;
    this.y += this.veloY;
  }
}

export default Petal;
