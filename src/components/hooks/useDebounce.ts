export const debounceEvent = (fn, wait = 1000, time?) => (...args) => {
    // @ts-ignore
    return clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));
};
