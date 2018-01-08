console.log(10+20)
function change(){
    //1. Acquire the h1 element obj
    var d=document.getElementById("h")
    //2. Get the value of attribute
    var t=d.getAttribute("reply")
    //3. Manipulate h1 content
    d.innerHTML = t
}


// Print first 5 numbers
for (var index = 1; index <=5; index++) {
    console.log(index)
}
console.log("Value of i after FOR loop",index)

const c=90;
console.log(c);
//c=70;

//Anonymous function
let m=function(){
    return "UHG"
}

console.log(m);
console.log(m());

//Arrow Function
let p=()=>"OPTUM"
console.log(p())

//Arrow Function with argument and return the argument
let q=(msg)=>msg;
// can work without paranthesis also let q=(msg)=>msg;
console.log(q("UHG , Hyd"))
console.log(q(40+30))
console.log(q(true))