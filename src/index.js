'use strict';

let totalVolume = 0;

const smallBallDiameter = 0.5;

const wallThickness = 0.01;

let currentInternalRadius = smallBallDiameter / 2 - wallThickness;

for (let i = 1; i <= 12; i++) {
    const currentVolume = (4 / 3) * Math.PI * currentInternalRadius ** 3;

    totalVolume += currentVolume;

    currentInternalRadius += wallThickness;
}

console.log(
    `The total internal volume of the 12 balls is ${totalVolume.toFixed(2)} m³`
);
