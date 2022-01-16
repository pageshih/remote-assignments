// assignment 1
function max(number){
    let maxNum = 0;
    for(let i = 0; i < number.length; i++){
        if(maxNum < number[i]){
            maxNum = number[i];
        }
    }
    console.log(maxNum);
}

//assignment 2
function calculate(args){
    let result;
    if(args.op==="+"){ 
        result=args.n1+args.n2;
    }else if(args.op==="-"){ 
        result=args.n1-args.n2;
    }else{
        result="Not supported";
    }
    return result; 
}
calculate({op: "+", n1: 3, n2: 6});
class Input{
    constructor (op, n1, n2){
        this.op = op;
        this.n1 = n1;
        this.n2 = n2;
    }
}
let inputNum = new Input("-", 5, 9);
calculate(inputNum);

//assignment 3
function avg(data){
    // your code here
    let totalPrice = 0;
    for(let i = 0; i < data.products.length; i++){
        totalPrice += data.products[i].price;
    }
    console.log(totalPrice / data.products.length);

}
avg({
    size:3, 
    products:[
    {
        name:"Product 1",
        price:100
    },
    {
        name:"Product 2",
        price:700
    },
    {
        name:"Product 3",
        price:250
    }
]
}); // show the average price of all products