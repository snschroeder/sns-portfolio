class Particle {
  x: number;

  y: number;

  veloX: number;

  veloY: number;

  radius: number;

  ctx: any;

  windowX = innerWidth;

  windowY = innerHeight; 

  constructor(startX: number, startY: number, radius: number, veloX: number, veloY: number, ctx: any) {
    this.x = startX;
    this.y = startY;
    this.veloX = veloX;
    this.veloY = veloY;
    this.radius = radius;
    this.ctx = ctx;
  }

  private draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  public floatAround(): void {
    this.draw();

    // Flip the direction if we hit the left or right boundary
    if ((this.x + this.veloX) > this.windowX || (this.x + this.veloX) < 0) {
      this.veloX = - this.veloX;
    }
    // Flip the direction if we hit the top or bottom boundary
    if ((this.y + this.veloY) > this.windowY || (this.y + this.veloY) < 0)  {
      this.veloY = - this.veloY;
    }

    this.x += this.veloX;
    this.y += this.veloY;
  }
}

export default Particle;