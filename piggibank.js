/* Topic : Structured programming */

console.log('--------------------------------');
console.log("Welcome to piggibank");

/*
  self documenting code
  naming convension should be proper
*/

var balance=0;
var lt=0;

// A function which prints balance and last transaction
function statement()
{
  console.log('');
  console.log("Balance = " + balance);
  console.log('lt = '+ lt);
  console.log('```````````````');
}

// A function which deposites amount in piggibank
function deposite(deposite_val)
{
balance =balance + deposite_val;
lt = deposite_val;
}

// A function which withdraws amount in piggibank
function withdraw(withdraw_val)
{
  if(balance >= withdraw_val)
  {
    balance = balance - withdraw_val;
    lt = (- withdraw_val);
  }
  else {
    console.log('\nWARN - Insufficient amount to withdraw from piggibank');
  }
}


statement();

deposite(50);
statement();

deposite(100);
statement();

withdraw(25);
statement();

withdraw(100);
statement();

withdraw(20);
statement();

withdraw(10);
statement();
console.log('--------------------------------');


/*
computational model

variables represents state

we should very fast for absorbing new domain
we are the big enablers for enable something
learn/absorb domains

balance = v ; // it is an inconsistent model, it should be balance = balance + v;

solution should be functionally correct,maintainable

you can apply to variable a () which points to a  function

when we define a funtion then name of the function is work as a parameter which holds address where it is stored in memory.
we can write   console.log(function-name); then it will invoke that function

we can pass the parameters to the paramter which points to the functions, hence we can write deposite(100);

*/
