
    document.getElementById('calculate-btn').addEventListener('click',function arr(){
        const income=parseFloat(document.getElementById('income-input').value);
        const food=parseFloat(document.getElementById('food-input').value);
        const rent=parseFloat(document.getElementById('rent-input').value);
        const cloth=parseFloat(document.getElementById('cloth-input').value);
        const totalExpense=food+rent+cloth;
        const balance=income-totalExpense;
        document.getElementById('total-expense').innerText=totalExpense;
        document.getElementById('balance').innerText=balance;
        return balance;
        })



 document.getElementById('saving-btn').addEventListener('click',function(){
        const balance=parseFloat(document.getElementById('balance').innerHTML);
        const save=parseFloat(document.getElementById('saving-input').value);
        const saved=balance*(save/100);
        document.getElementById('saving-amount').innerText=saved;
        document.getElementById('remaining-balance').innerText=balance-saved;
 })
