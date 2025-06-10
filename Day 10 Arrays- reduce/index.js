const users = [
    {firstName:"A",lastName:"D",age:24},
    {firstName:"B",lastName:"D",age:70},
    {firstName:"C",lastName:"D",age:24},
    {firstName:"C",lastName:"D",age:14}
    ]
// Reduce

const output = users.reduce(function(acc,curr)
{    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    } else{
        acc[curr.age]=1;
    }
    return acc;
}, {}
)
console.log(output)

// output = { '14': 1, '24': 2, '70': 1 }
// Learned how to use an object inside an array
// learned more about the reduce function