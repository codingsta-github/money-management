function inputValue(src) {
    var src=parseFloat(document.getElementById(src+'-input').value);
    
    return src;

}
    

    document.getElementById('calculate-btn').addEventListener('click',function func1(){
        const income=inputValue("income");
        const food=inputValue("food");
        const rent=inputValue("rent");
        const cloth=inputValue("cloth");
        if (isNaN(income)) {
            document.getElementById('income-err').style.display='block' ;
        }
        else if (isNaN(food)) {
            document.getElementById('food-err').style.display='block' ;
        }
        else if (isNaN(rent)) {
            document.getElementById('rent-err').style.display='block' ;
        }
        else if (isNaN(cloth)){
            document.getElementById('cloth-err').style.display='block' ;
        }  
        else {
        const totalExpense=food+rent+cloth;
        var balance=income-totalExpense;
        
        document.getElementById('total-expense').innerText=totalExpense;
        document.getElementById('balance').innerText=balance;
        }
        })



 document.getElementById('saving-btn').addEventListener('click',function(){
     
        const balance=document.getElementById('balance').innerText;
        const save=parseFloat(document.getElementById('saving-input').value);
        const saved=balance*(save/100);
        document.getElementById('saving-amount').innerText=saved;
        document.getElementById('remaining-balance').innerText=balance-saved;
 })
