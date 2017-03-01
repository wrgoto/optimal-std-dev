# Optimal Standard Deviation Calculation

Calculates the mean, standard deviation, and variance of an array in one loop. This is based on 
Mark Hoemmen's work, _Computing the standard deviation efficiently_ published August 25, 2007. 

## Usage

Install:

```
npm install --save optimal-std-dev
```

Import:

```javascript
var calcStdDev = require('optimal-std-dev');
```

Use with a normal array:

```javascript
var calcValues = calcStdDev([1, 2, 3, 10]);
```

Use with an accessor provided as a string:

```javascript
var calcValues = calcStdDev([{ n: 1 }, { n: 2 }], 'n');
```

Use with an accessor provided as a function:


```javascript
var calcValues = calcStdDev([{ n: 1 }, { n: 2 }], function (n) { return n + 1; });
```

Returns an object with the following properties:

```javascript
{
  sum: 16,
  mean: 4,
  popStdDev: 3.5355339059327378,
  popVariance: 12.5,
  sampleStdDev: 4.08248290463863,
  sampleVariance: 16.666666666666668
}
```


## The Calculation

![screen shot 2017-02-14 at 10 40 37 am](https://cloud.githubusercontent.com/assets/12705454/22943398/4bd8db96-f2a2-11e6-9d77-649cd8f205b1.png)


