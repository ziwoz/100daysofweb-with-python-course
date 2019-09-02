var dyn_obj = {};
dyn_obj.a = [];

for(i=0; i<10; i++){
    dyn_obj.a.push(i)
}

json_out = JSON.stringify(dyn_obj)

console.log(json_out);


list_test = [1,2,3,4];

for(entry of list_test){
    console.log(entry);
}

var len1 = list_test.length;
console.log('total is '+ len1);