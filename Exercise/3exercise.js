let stmt='aKfg H'
let a=[]
var upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lower='abcdefghijklmnopqrstuvwxyz'
for(let i=0;i<stmt.length;i++)
{
    if(upper.indexOf(stmt[i])!==-1)
    {
        a.push(stmt[i].toLowerCase())
    }
    else if(lower.indexOf(stmt[i])!==-1)
    {
        a.push(stmt[i].toUpperCase())
    }
    else{
        a.push(stmt[i]);
    }
    
}
console.log(a.join(''));
