let expenses=[]
let totalamount=0;
const categoryselect=document.getElementById('category_select');
const amountinput = document.getElementById('amount_input');
const infoin=document.getElementById('info');
const datein = document.getElementById('date_input');
const addbtn = document.getElementById('add_btn');
const expensetb = document.getElementById('expense-table-body');
const totalamountcell = document.getElementById('total-amount');

addbtn.addEventListener('click',function(){
    const Category=categoryselect.value;
    const info=infoin.value;
    const amount=Number(amountinput.value);
    const date=datein.value;


    if(Category === ''){
        alert('please select a category');
        return;
    }
    if(isNaN(amount)||amount<=0){
        alert('please enter a valid amount');
        return;
    }
    if(info === ''){
        alert('please provide an info');
        return;
    }
    if(date === ''){
        alert('please select a date');
        return;
    }
    expenses.push({Category,amount,info,date})

    if(Category === 'Income'){
        totalamount+=amount;
    }
    if(Category === 'Expense'){
        totalamount-=amount;
    }
    totalamountcell.textContent = totalamount;

    const newRow = expensetb.insertRow();

    const categorycell= newRow.insertCell();
    const amountcell = newRow.insertCell();
    const infocell = newRow.insertCell();
    const datecell = newRow.insertCell();
    const deletecell= newRow.insertCell();

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);
        if(Category === 'Income'){
            totalamount-=amount;
        }
        if(Category === 'Expense'){
            totalamount+=amount;
        }

        totalamountcell.textContent=totalamount;
        expensetb.removeChild(newRow)
    })
    const expense = expenses[expenses.length-1];
    categorycell.textContent = expense.Category;
    amountcell.textContent = expense.amount;
    infocell.textContent = expense.info;
    datecell.textContent = expense.date;
    deletecell.appendChild(deletebtn);
    


 });
 for(const expense of expenses){
    if(Category === 'Income'){
        totalamount+=amount;
    }
    if(Category === 'Expense'){
        totalamount-=amount;
    }
    totalamountcell.textContent = totalamount;

    const newRow = expensetb.insertRow();

    const categoryCell= newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell= newRow.insertCell();

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'Delete';
    deletebtn.classList.add('delete-btn');
    deletebtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expenses),1);
        if(Category === 'Income'){
            totalamount-=amount;
        }
        if(Category === 'Expense'){
            totalamount+=amount;
        }

        totalamountcell.textContent=totalamount;
        expensetb.removeChild(new Row)
    })
    const expense = expenses(expenses.length-1);
    categoryCell.textContent = expense.Category;
    amountCell.textContent = expense.amount;
    infoCell.textContent = expense.info;
    dateCell.textContent = expense.date;
    deleteCell.appendChild(delete-btn);
    
 }
