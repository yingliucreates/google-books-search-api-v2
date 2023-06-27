export const debounce = (fn, wait = 0) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), wait);
  };
};

export const debounceAsync = (fn, wait = 0) => {
  const debounced = debounce(
    (resolve, reject, args) =>
      fn(...args)
        ?.then(resolve)
        .catch(reject),
    wait
  );
  return (...args) =>
    new Promise((resolve, reject) => debounced(resolve, reject, args));
};
