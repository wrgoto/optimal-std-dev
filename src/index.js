function calcStdDev(arr, accessor) {
  var I = arr.reduce(function (I, x, k) {
    if (accessor) {
      if (typeof accessor === 'function') {
        x = accessor(x);
      } else if (typeof accessor === 'string') {
        x = x[accessor];
      }
    }
    k = k + 1;
    return {
      Sg: I.Sg + x,
      Mk: k === 1 ? x : I.Mk + ((x - I.Mk) / k),
      Qk: k === 1 ? 0 : I.Qk + ((k - 1) * Math.pow(x - I.Mk, 2) / k)
    }
  }, { Sg: 0, Mk: 0, Qk: 0 });

  var t = I.Sg;
  var n = arr.length;
  var m = t / n;
  var s2 = I.Qk / (n - 1);
  var s = Math.sqrt(s2);
  var o2 = I.Qk / n;
  var o = Math.sqrt(o2);

  return {
    sum: t,
    mean: m,
    popStdDev: o,
    popVariance: o2,
    sampleStdDev: s,
    sampleVariance: s2
  };
}

console.log(calcStdDev([1, 2, 3, 10]));

module.exports = calcStdDev;
