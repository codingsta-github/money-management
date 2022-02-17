
function inputValue(source) {
    // this function I've use for collecting data from input field.
    var source=parseFloat(document.getElementById(source+'-input').value);    
    return source;
}
    
// calculate button event listener
document.getElementById('calculate-btn').addEventListener('click',function(){
    const income=inputValue("income");
    const food=inputValue("food");
    const rent=inputValue("rent");
    const cloth=inputValue("cloth");

    // for better look saving and remaining innerText blank here.
    
    document.getElementById('saving-amount').innerText='';
    document.getElementById('remaining-balance').innerText='';


    if(!isNaN(income) && income>=0 && !isNaN(food) && food>=0 && !isNaN(rent) && rent>=0 && !isNaN(cloth) && cloth>=0){
        const totalExpense=food+rent+cloth;
        const balance=income-totalExpense;
        
        document.getElementById('total-expense').innerText=totalExpense;
        document.getElementById('balance').innerText=balance;

        // expense error, when expense greater than income
        if (balance<0) {
            document.getElementById('expense-err').style.display='block' ;
        }
        }

        /* string , negetive error handling. only the numbers greater or 
        equal 0 will calculate.*/

    if (isNaN(income)||income<0) {
        document.getElementById('income-err').style.display='block' ;
    }
    if (isNaN(food)||food<0) {
        document.getElementById('food-err').style.display='block' ;
    }
    if (isNaN(rent)||rent<0) {
        document.getElementById('rent-err').style.display='block' ;
    }
    if (isNaN(cloth)||cloth<0){
        document.getElementById('cloth-err').style.display='block' ;
    }  
        
    })


// save button event listener
 document.getElementById('saving-btn').addEventListener('click',function(){
        const income=parseFloat(document.getElementById('income-input').value);
        const balance=parseFloat(document.getElementById('balance').innerText);
        const save=parseFloat(document.getElementById('saving-input').value);
        
        if (isNaN(save)||save<0) {
            document.getElementById('save-err').style.display='block' ;
        }
        else{
        const saved=income*(save/100);
        document.getElementById('saving-amount').innerText=saved.toFixed(2);
        
        /* if savings greater than balance then remaining balance wont be 
        calculated to make it realistic*/

        if (saved>balance) {
            document.getElementById('saving-err').style.display='block' ;    
        } else {
            document.getElementById('remaining-balance').innerText=(balance-saved).toFixed(2);
            
        }    
    }
        
            
 })
