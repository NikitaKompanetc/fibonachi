function fib(n) {
  if (n<3) alert("get another number")
  else{
var number1a=1;
var number2b=1;
for(var i=3; i <= n ; i++){
   var sum= number1a+number2b;
   number1a = number2b;
    number2b = sum;
    
    
}
 return number2b;   
  }
}
alert( fib(7) )