'use strict';

outer: for (let i = 2; i <= 100; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            continue outer;
        }
    }
    console.log(i);
}
