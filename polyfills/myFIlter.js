Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i = 0 ;i<this.length; i++){
        if(cb(this[i], i, this)){
            temp.push(this[i])
        }
    }
    return temp;
}

let arr = [1,2,3,4,56];
const result = arr.myFilter((num) =>{
    return num>2;
})
console.log(result);