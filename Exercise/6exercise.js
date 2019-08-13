function myFunction(stmt,l)
{

if(stmt.length>l)
{
    console.log("Too long!!")
   console.log(stmt.substring(0,l))
}
else
{
    console.log(stmt)
}
}
let stmt='hello world'
let l=6
myFunction(stmt,l)