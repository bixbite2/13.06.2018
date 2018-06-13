import {Time} from './time.class.js';

console.log('main.js');

const t1 = new Time(8,50,15);
console.log(t1.toString());

const t2 = new Time(30);
console.log(t2.toString());

const t3 = new Time(10, 70);
console.log(t3.toString());

const t4 = new Time(10, 10, 70);
console.log(t4.toString());

const t5 = new Time(23, 59, 70);
console.log(t5.toString());


