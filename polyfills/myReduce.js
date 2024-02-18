Array.prototype.myReduce = function(cb, initialValue){
    if(this.length == 0){
        throw new Error('Array is Empty');
    }

    let index = 0;
    if(initialValue == undefined){
        index++;
        initialValue = this[0];
    }

    for(index ; index<this.length ; index++){
        initialValue = cb(initialValue,this[index], index, this);
    }
    return initialValue;
}

let arr = [1,2,3,4,5];
const result = arr.myReduce((num,curr) =>{
    return num + curr;
})
console.log(result);