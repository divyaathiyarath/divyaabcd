
function myFunction(num)
{ 
    let i=2
let n=num[0]
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        console.log("not prime");
        break
    }
    else{
        console.log("Prime")
        break
    }

}
}
let num=[12,2,3,4,5,6,7,8,9,10]
myFunction(num)