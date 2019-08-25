let a_list = [];
a_list.push('zameer');
a_list.push('choma');
a_list.push('chem');
a_list.push('zan');
a_list.push('shreya');
d = a_list.slice(0,3);
a_list.sort();

for(names of a_list){
  console.log('have got\t'+ names + '\tfrom\tjavascript\n');
}
let b = a_list.pop();
for(names of a_list){
  console.log('have got\t'+ names + '\tfrom\tjavascript\n');
}

console.log('finally i got the the b as:\t' + b)
console.log('the sliced one is\t'+ d);

let z = range(10);
console.log(z)