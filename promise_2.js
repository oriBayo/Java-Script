function getData(num)
{
    let promise = new Promise(resolve =>
        {
            setTimeout(() => resolve(num*2),2000);
        })
    return promise
}


getData(4).then(x => console.log(x))
console.log("End")