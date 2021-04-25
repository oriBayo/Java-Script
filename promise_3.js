function getData(num)
{
    let promise = new Promise(resolve =>
        {
            setTimeout(() => 
            {   
                console.log("First function is runing!")
                resolve(num*2)
            }   ,2000);
        })
    return promise
}

var func2 = function(data)
{
    var promise = new Promise((resolve,reject) => 
    {
        setTimeout(() =>
        {
            console.log("Second function is runing");
            console.log(data*2);
            resolve(data*2);
        } ,2000);
    })
    return promise;
}

var a = getData(4).then(func2)
console.log("End")