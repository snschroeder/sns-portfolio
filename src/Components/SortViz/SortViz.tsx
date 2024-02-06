import React, { useState, useEffect } from 'react';
import Bar from './Bar/Bar';
import './SortViz.css';

interface Props {
  sortType: string
}

export default function Visualizer({ sortType = 'quick-sort' }: Props) {

  const [sortedArr, setSortedArr] = useState(Array<number>);
  const [randomizedArr, setRandomizedArr] = useState(Array<number>);

  const [pieceOne, setPieceOne] = useState(-1);
  const [pieceTwo, setPieceTwo] = useState(-1);

  const [sortOrder, setSortOrder] = useState(Array<number>);

  const [dimensions, setDimensions] = useState({
    hSize: 3,
    wSize: 1,
  });

  let sort = new Array<number>();

  const determineScaling = (height: number, width: number) => {
    let h = dimensions.hSize;
    let w = dimensions.wSize;
    if (height <= 900) {
      h = 1;
    }
    if (width <= 500) {
      w = .6;
    }
    if (width > 500 && width <= 1000) {
      w = 1;
    }
    if (width > 1000 && width <= 1800) {
      w = 2.2;
    }
    if (width > 1800) {
      w = 3.5;
    }
    return { h, w };
  };

  const genRandomizedArr = (numVals: number, maxVal: number) => {
    let random = new Array<number>();
    sort.length = 0;
    for (let i = 0; i <= numVals; i++) {
      random.push(Math.floor(Math.random() * maxVal) + 1);
    }
    setRandomizedArr(random);
    setSortedArr(random);
  };

  useEffect(() => {
    let height = 800;
    let width = 800;
    const dims = determineScaling(height, width);
    const h = dims.h;
    const w = dims.w;
    setDimensions({ hSize: h, wSize: w });

    genRandomizedArr(160, 400);
  }, []);

  const swap = (arr: number[], i: number, j: number) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    sort.push(i);
    sort.push(j);
    setSortOrder([...sort]);
  };

  const partition = (arr: number[], start: number, end: number) => {
    let pivot = arr[end - 1];
    let i = start;
    for (let j = start; j < end - 1; j++) {
      if (arr[j] <= pivot) {
        swap(arr, j, i);
        i++; 
      }
    }
    swap(arr, i, end - 1);
    return i;
  };

  const quickSort = (arr: number[], start = 0, end = arr.length) => {
    if (start >= end) { return arr; }
    let pivot = partition(arr, start, end);
    quickSort(arr, start, pivot);
    quickSort(arr, pivot + 1, end);
    return arr;
  };

  const combSort = (arr: number[]) => {
    let gap = arr.length;
    let shrinkRate = 1.3;
    let swapped;

    while (gap > 1 || swapped) {
      if (gap > 1) {
        gap = Math.floor(gap / shrinkRate);
      }
      swapped = false;
      for (let i = 0; i + gap < arr.length; i++) {
        if (arr[i] > arr[i + gap]) {
          swap(arr, i, i + gap);
          swapped = true;
        }
      }
    }
    return arr;
  };

  const selectionSort = (arr: number[]) => {
    let i;
    let j;
    let minIndex;
    for (i = 0; i < arr.length; i++) {
      minIndex = i;
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      swap(arr, i, minIndex);
    }
    return arr;
  };

  const bubbleSort = (arr: number[]): number[] => {
    let swaps = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swaps++;
      }
    }
    if (swaps > 0) {
      return bubbleSort(arr);
    }
    return arr;
  };

  const insertionSort = (arr: number[]) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
      let elem = arr[i];
      let j;
      for (j = i - 1; j >= 0 && arr[j] > elem; j--) {
        arr[j + 1] = arr[j];
        sort.push(j);
        sort.push(j + 1);
        setSortOrder([...sort]);
      }
      arr[j + 1] = elem;
    }
    return arr;
  };

  const sortData = () => {
    let sorted = new Array<number>();
    setSortOrder([]);
    if (sortType === 'quick-sort') {
      sorted = quickSort([...randomizedArr]);
    } else if (sortType === 'bubble-sort') {
      sorted = bubbleSort([...randomizedArr]);
    } else if (sortType === 'comb-sort') {
      sorted = combSort([...randomizedArr]);
    } else if (sortType === 'selection-sort') {
      sorted = selectionSort([...randomizedArr]);
    } else if (sortType === 'insertion-sort') {
      sorted = insertionSort([...randomizedArr]);
    }
    setSortedArr(sorted);
  };

  const animate = () => {
    sortData();
    let pattern = sort.length === 0 ? [...sortOrder] : [...sort];
    let clone = [...randomizedArr];
    for (let i = 0; i < pattern.length; i += 2) {
      setTimeout(() => {
        let first = pattern[i];
        let second = pattern[i + 1];

        setPieceOne(first);
        setPieceTwo(second);

        let temp = clone[first];
        clone[first] = clone[second];
        clone[second] = temp;

        setRandomizedArr([...clone]);
      }, 10 + (10 * i));
    }
  };

  const animateReverse = () => {
    let pattern = sort.length === 0 ? [...sortOrder] : [...sort];
    let clone = [...randomizedArr];
    for (let i = pattern.length; i >= 0; i -= 2) {
      setTimeout(() => {
        let first = pattern[i];
        let second = pattern[i + 1];

        setPieceOne(first);
        setPieceTwo(second);

        let temp = clone[first];
        clone[first] = clone[second];
        clone[second] = temp;

        setRandomizedArr([...clone]);
      }, 10 + (10 * i));
    }
  };

  return (
    <div className="sort-viz-container">
      <section className="button-group">
        <button type="button" className="animate" onClick={() => animate()}>Animate!</button>
        <button type="button" className="animate-reverse" onClick={() => animateReverse()}>Undo!</button>
      </section>
      <section className="vizDisplay" id="viz">
        <ul className="display-nums">
          {randomizedArr.map((val, index) => (
            <Bar
              key={index}
              length={val}
              hSize={dimensions.hSize}
              wSize={dimensions.wSize}
              selected={index === pieceOne || index === pieceTwo ? 'selected' : 'not-selected'}
            />
          ))
          }
        </ul>
      </section>
    </div>
  );
}