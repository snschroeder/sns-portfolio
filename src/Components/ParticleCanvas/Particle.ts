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

  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, Math.PI * 2, false);
    this.ctx.closePath();
    this.ctx.fill();
  }

  floatAround(): void {
    // this.ctx.clearRect(0, 0, this.windowX, this.windowY);
    this.draw();
    this.x += this.veloX;
    this.y += this.veloY;
  }
}

export default Particle;