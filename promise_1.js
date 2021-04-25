let porm = new Promise(resolve =>
    {
        setTimeout(() => resolve("Ok"),2000)
    })
porm.then(x => console.log(x))
console.log("End")