function myEach(collection, alert) {
    let arr = Object.values(collection)

    // return arr.map((ele) => alert(ele))

    arr.forEach(ele => alert(ele))

    // for(let i = 0; i < arr.length; i++) {
    //     alert(arr[i])

    // for(let ele of arr) {
    //     alert(ele)
    // }
    return collection
}
  
function myMap(collection, callback) {
    let arr = Object.values(collection)
    let newArr = []
    for(let ele of arr) {
        newArr.push(callback(ele))
    }
    return newArr
}

function myReduce(collection, callback, ...acc) {
    console.log("acc", acc)
    let arr = Object.values(collection)
    let newAcc;
    let i; 
    let total = 0
    if(acc.length > 0) {
        newAcc = acc[0]
        i = 0
    } else {
        newAcc = arr[0]
        i = 1
    }
    
    for(i; i < arr.length; i ++) {
        newAcc = callback(newAcc, arr[i], collection)
    }
    return newAcc

}