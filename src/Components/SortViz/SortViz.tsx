import React, { useState, useEffect } from 'react';
import Bar from './Bar/Bar';
import { throttle } from '../../Utilities/throttle';
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
  const [isAnimating, setIsAnimating] = useState(false);
  const [barWidthMulti, setBarWidthMulti] = useState(1);

  let sort = new Array<number>();


  const setSizing = () => {
    const elem = document.getElementById('sort-viz-container');
    const rect = elem?.getBoundingClientRect();

    if (rect) {
      const width = rect.width;
      let newWidthMutli: number;

      if (width <= 800) {
        newWidthMutli = 0.8;
      } else if (width > 800 && width <= 1600) {
        newWidthMutli = 2;
      } else {
        newWidthMutli = 3;
      }
      setBarWidthMulti(newWidthMutli);
    }
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
    setSizing();
    genRandomizedArr(160, 400);
    window.addEventListener('resize', throttle(setSizing, 500));
    return () => window.removeEventListener('resize', setSizing);
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

    switch (sortType) {
      case 'quick-sort':
        sorted = quickSort([...randomizedArr]);
        break;
      case 'bubble-sort':
        sorted = bubbleSort([...randomizedArr]);
        break;
      case 'comb-sort': 
        sorted = combSort([...randomizedArr]);
        break;
      case 'selection-sort':
        sorted = selectionSort([...randomizedArr]);
        break;
      case 'insertion-sort':
        sorted = insertionSort([...randomizedArr]);
    }
    setSortedArr(sorted);
  };

  const animate = () => {
    if (! isAnimating) {
      setIsAnimating(true);
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
      setTimeout(() => {
        setIsAnimating(false);
      }, pattern.length * 10);
    }
  };

  const animateReverse = () => {
    if (! isAnimating) {
      setIsAnimating(true);
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
      setTimeout(() => {
        setIsAnimating(false);
      }, pattern.length * 10);
    }
  };

  const handleGenerateClick = () => {
    if (! isAnimating) {
      genRandomizedArr(160, 400);
    }
  };

  return (
    <div className="sort-viz-container" id="sort-viz-container">
      <div className="button-group">
        <button type="button" className="sort-viz-button" onClick={() => handleGenerateClick()}>Generate new array</button>
        <button type="button" className="sort-viz-button" onClick={() => animate()}>Animate!</button>
        <button type="button" className="sort-viz-button" onClick={() => animateReverse()}>Undo!</button>
      </div>
      <div className="vizDisplay" id="viz">
        <ul className="display-nums">
          {randomizedArr.map((val, index) => (
            <Bar
              key={index}
              length={val}
              hSize={3}
              wSize={barWidthMulti}
              selected={index === pieceOne || index === pieceTwo ? 'selected' : 'not-selected'}
            />
          ))
          }
        </ul>
      </div>
    </div>
  );
}