import ui, {a, c, d} from './module2.mjs' // Here we can't export "a", "c", "d" by default that's why we can't use different names other then one we specified in module2.j
console.log(ui);
console.log(c);
console.log(a);
console.log(d);