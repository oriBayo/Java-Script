function getArrAverage(arr)
{
    let promise = new Promise((resolve) =>
    {
        setTimeout(()=>
        {
            var sum = arr.reduce((a,b) => a+b,0)
            resolve(sum/arr.length)
        },1000)
    })
    return promise;
}

arr = [1,2,3,4,5,6];
getArrAverage(arr).then(x => console.log(x));
