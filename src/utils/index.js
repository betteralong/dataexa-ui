export function debounce(delay, callback) {
  let timer;
  return function() {
    clearTimeout(timer);
    const [that, args] = [this, arguments];
    timer = setTimeout(() => {
      callback.apply(that, args);
    }, delay);
  };
}

export function observerDomResize(dom, callback) {
  const MutationObserver =
    window.MutationObserver ||
    window.WebKitMutationObserver ||
    window.MozMutationObserver;
  const observer = new MutationObserver(callback);
  observer.observe(dom, {
    attributes: true,
    attributeFilter: ["style"],
    attributeOldValue: true,
  });
  return observer;
}
