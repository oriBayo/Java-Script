function getSum(arr)
{
    let promise = new Promise(resolve =>
    {
        setTimeout(() => 
        {
            let total = 0;
            arr.forEach(x => total += x)
            resolve(total/arr.length);
        }, 1000)
    })
    return promise;
}
getSum([1,2,3,4]).then(x => console.log(x))
console.log("end")