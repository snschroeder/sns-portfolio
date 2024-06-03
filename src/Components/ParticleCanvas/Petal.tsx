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
    this.veloX = getRandomDecimalWithinRange(0.05, 0.2);
    this.veloY = getRandomDecimalWithinRange(0.05, 0.2);
    this.ctx = ctx;
  }

  private drawPetal(): void {
    this.ctx.beginPath();
    this.ctx.fill();
  }

  public floatOnTheWind(): void {
    this.drawPetal();
  }
}

export default Petal;
