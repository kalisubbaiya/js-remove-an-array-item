let array=[10,11,12,13,14,15,16,17,18,19,20];
console.log(array);
let newArray=[];
let a=parseInt(prompt("Enter the index to remove"));
let j=array[a];
let b=0;
for(i=0;i<array.length;i++){
    if(j!=array[i]){
        newArray[b]=array[i];
        b++;
    }
}
console.log(newArray);