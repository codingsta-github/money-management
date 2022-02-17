function inputValue(src) {
    var src=parseFloat(document.getElementById(src+'-input').value);
    
    return src;

}
    

    document.getElementById('calculate-btn').addEventListener('click',function func1(){
        const income=inputValue("income");
        const food=inputValue("food");
        const rent=inputValue("rent");
        const cloth=inputValue("cloth");
        if(!isNaN(income) && income>=0 && !isNaN(food) && food>=0 && !isNaN(rent) && rent>=0 && !isNaN(cloth) && cloth>=0){
            const totalExpense=food+rent+cloth;
            const balance=income-totalExpense;
            
            document.getElementById('total-expense').innerText=totalExpense;
            document.getElementById('balance').innerText=balance;
            }
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



 document.getElementById('saving-btn').addEventListener('click',function(){
     
        const balance=parseFloat(document.getElementById('balance').innerText);
        const save=parseFloat(document.getElementById('saving-input').value);
        if (balance>=0) {
            const saved=balance*(save/100);
            document.getElementById('saving-amount').innerText=saved;
            document.getElementById('remaining-balance').innerText=balance-saved;
        } else {
            document.getElementById('saving-err').style.display='block' ;
        }
 })
