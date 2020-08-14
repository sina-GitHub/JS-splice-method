const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
// Remove 0 (zero) elements at index 1, and insert "Feb"
console.log(months);

months.splice(4, 1, "May");
// Remove 1 element at index 4, and insert "May"
console.log(months);

months.splice(0, 1);
// Remove 1 element at index 0 only...
console.log(months);

months.splice(0, 0, "new first element");
// add 1 element at index 0 only...
console.log(months);

months.splice(3);
// remove data from index 3 and after that
console.log(months);

months.splice(-2, 1);
// remove data from the end of the array(second from the last one...)
console.log(months);
