// var variable=10;
// (()=>{
//     variable_3=35;
//     console.log(variable_3);
//     variable_3=45;
//     variable_2=15;
//     console.log(variable);


// })()
// console.log(variable_2);
// console.log(variable_3);
// var variable=30;


// for(var i=0;i<5;i++){
//     function close(i){

//         setTimeout(()=>{
//             console.log(i)
//         },1000)
//     }
//     close(i)
//     }



// let counter=function(){
//     let k=0;
//     return ()=>k++;
// }();
// console.log(counter())//0
// console.log(counter())//1
// console.log(counter())//2





// function createClosureArr(){
//     var badArr=[];

//     for(let index=0;index<5;index++){
//         badArr[index]=function(){
//             return 'n = ' +index;
//         }
//     }
//     return badArr;
// }
// var badArr=createClosureArr();

// for(var index in badArr){
//     console.log(badArr[index]())
// }





//this keyword:--->

var fullName='abhishek adhikary';

var obj={
    fullName:'animesh samanta',
    prop:{
        fullName:'prakash bera',
        getFullName:function(){
            return this.fullName;
        }
    },
    getMyName:function(){
        return this.fullName;
    },
    getFirstName:()=>{
        return this.fullName;
    },
    getLastName:function(){
        return this.fullName.split(' ')[1];
    }
}

// console.log(obj.prop.getFullName())
// console.log(obj.getFirstName())////undefined
// console.log(obj.getMyName())
console.log(obj.getLastName)



