const Chance = require('chance');
const { appendFileSync } = require('fs');
const { appendFile } = require('fs/promises');


const chance = new Chance();

const array = [];
for (let i = 0; i < 1000; i++) {
    const rnd = chance.animal();
    array.push(rnd);
}

const sorted = array.sort();

for (const animal of sorted) {
    appendFileSync('sorted.txt', `${animal}\n`);
}

console.log('')


