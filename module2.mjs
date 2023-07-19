const a = "Harry";
const b = "Rohan";
const c = "Aakash";
const d = "Priyanka";

export default d; // Exporting "Priyanka" as "d"
export {a}; // Here, we can't export "a" by default that's why we use "{}"
export {c}; // same
export {d}; // same