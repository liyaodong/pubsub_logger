(function() {
  if (typeof $ === 'undefined') return;

  const spy = (fn, extraFn) => (
    function() {
      fn.apply(this, arguments);
      extraFn(arguments);
    }
  );

  const setSpy = key => {
    const emoji = {
      subscribe: '⏰',
      unsubscribe: '🚫',
      publish: '📡',
    };

    const mockedFunction = spy($[key], ([eventName, secondArgs]) => {
      const logs = [Date.now(), `${emoji[key]}$.${key}(${eventName})`];
      if (typeof secondArgs !== 'undefined') logs.push(secondArgs);
      console.info.apply(this, logs);
    });

    Object.defineProperty($, key, {
      get: () => mockedFunction,
    })
  }

  ['subscribe', 'unsubscribe', 'publish'].forEach(x => setSpy(x));
})();
