let range_list = [];

for(i=0; i<100; i++){
    range_list.push(i);
}

// console.log(range_list); another testing inside the if test, and this went from VS code, now what about that.

for(age of range_list){
    if(age<18){
        console.log('Cant Drive, this guy is a kid of '+ age +' years');
    }
    else if(age==20){
        console.log('ooooh 20');
    }
    else{
        console.log('what is the big deal, ' + age + ' man');
    }
}
