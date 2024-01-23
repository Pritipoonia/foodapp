import classes from './MealItemForm.module.css'
import { useRef , useState} from 'react';
import Input from '../UI/Input';
const MealItemForm=props=>

{const [amountIsValid,setAmountIsValid]= useState(true);
     const amountInputRef=useRef();
    const submitHandler= event=>{

event.preventDefault();
const enteredamount=amountInputRef.current.value;
const enteredamountNumber=+enteredamount;
if(enteredamount.trim().length===0 ||
 enteredamountNumber<1||
  enteredamountNumber>5) 
{
    setAmountIsValid(false);
return;
}
props.onAddToCart(enteredamountNumber);

    }
    
    return <form className={classes.form } onSubmit={submitHandler}>
<Input 
ref={amountInputRef}
label ="amount" input={{
    id:'amount_'+props.id,
    type:'number',
    min:'1',
    max:'5',
    steps:'1',
    defaultValue:'1'
}} />
    
    <button>+Add</button>
    {
        !amountIsValid && <p>Please enter a valid amount(1-5).</p>
    }
    </form>


}
export default MealItemForm;