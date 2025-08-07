'use strict';

let totalVolume = 0;

const wallThickness = 0.01;

const pi = Math.PI;

let currentInternalRadius = 0.24;

for (let i = 1; i <= 12; i++) {
    const currentVolume = (4 / 3) * pi * currentInternalRadius ** 3;

    totalVolume += currentVolume;

    currentInternalRadius += wallThickness;
}

console.log(
    `Суммарный внутренний объем 12-ти шаров равен ${totalVolume.toFixed(2)} м3`
);
