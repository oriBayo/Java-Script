function GetData()
{
    return new Promise(resolve =>
        {
            setTimeout(() => resolve("ok"),2000)
        })
}

// Option 1 - with "then".
function GetAsyncData1()
{
    GetData().then(x => console.log(x))
}

// Option 2 - async-await
async function GetAsyncData2()
{
    let data = await GetData()
    console.log(data)
}

GetAsyncData2();
console.log("End")