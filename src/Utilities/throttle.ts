export const throttle = (throttledFunc: Function, wait: number = 300) => {
  let wasCalled = false;

  return function (...args: any[]) {
    if (!wasCalled) {
      throttledFunc(...args);
      wasCalled = true;
      setTimeout(() => {
        wasCalled = false;
      }, wait);
    }
  };
};
