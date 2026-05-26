//??

console.log(null >= 0); //  null == 0 or null > 0
console.log(null === 0);

// ??  Nullish  //this nullish will chech if amul is null then it vary with nandani milk
let amul = null;
let milk_required = amul ?? "nandani milk";
console.log(milk_required);

let myname = null;
let age_required = myname ?? " Krish";
console.log(age_required);