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

  public scatterParticle(event: any): void {
    let moveX = event.movementX;
    let moveY = event.movementY;
    console.log(moveX);
    console.log(moveY);
    // detect mouse movement
    // do we need to detect over some short timeframe? 
    // for instance, move mouse from left to right, we scatter right
    // do we need to determine proximity? Only scatter within say 50 pixels
    // Will the event listener need to be canvas level?
    // by that I mean, will assigning an event listener to each particle be an issue?
  }
}

export default Particle;