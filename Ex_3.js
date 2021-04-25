function func(arr)
{
    return new Promise(resolve =>
        {
            setTimeout(() =>
            {
                let result = arr.map(x =>
                    {
                        let max = 0;
                        x.forEach(num =>
                            {
                                if(num > max)
                                {
                                    max = num;
                                }
                            } )
                        return max;
                    })
                    resolve(result)
            },2000)
        })
}
let arr = [[1,6,3,12],[6,12,5,21],[4,11,23,1]]
func(arr).then(x => console.log(arr))
// async function funcB()
// {
//     let data = await funcA()
// }

