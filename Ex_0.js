let arr = [[1,6,3,12],[6,12,5,21],[4,11,23,1]]
let result = arr.map(x =>
    {
        let max = 0
        x.forEach(num =>
            {
                if(num > max)
                {
                    max = num
                }
            } )
        return max
    })
console.log(result)

arr2 = result.filter(x => 20>=x && x>=10)
console.log(arr2)