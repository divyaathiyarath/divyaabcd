
let num=[2,3,2,5,3,3,6]
let f=0
let i
let j
let count=0
let item
let len=num.length
let n
for(i=0;i<len;i++)
{
    for(j=i;j<len;j++)
    {
        
        if(num[i]==num[j])
        {
            count++
        }
       
    }
    
    
    if(f<count)
    {
        f=count
        item=num[i]
    }
    count=0
}
console.log("Frequent number:"+item)
