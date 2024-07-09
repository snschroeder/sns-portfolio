import React, { useEffect, useState } from 'react';
import Petal from './Petal';
import {
  getRandomInt,
  getRandomIntWithinRange,
  getRandomDecimalWithinRange,
  applySign,
} from '../../Utilities/rng';

class PetalField {
  petalsArr: Petal[];

  ctx: any;

  windowX = innerWidth;

  windowY = innerHeight;


  constructor(ctx: any, windowX: number, windowY: number) {
    this.ctx = ctx;
    this.windowX = windowX;
    this.windowY = windowY;
    this.petalsArr = new Array<Petal>();
  }

  private addPetal(): void {
    const petal = new Petal(
      getRandomInt(this.windowX),
      getRandomInt(this.windowY),
      getRandomIntWithinRange(5, 15),
      - getRandomDecimalWithinRange(0.05, 0.2),
      getRandomDecimalWithinRange(0.05, 0.2),
      this.ctx,
    );
    this.petalsArr.push(petal);
  }

  public generatePetalField(amount: number): void {
    for (let i = 0; i < amount; i += 1) {
      this.addPetal();
    }
  }
}

export default PetalField;
