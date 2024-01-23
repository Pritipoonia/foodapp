import { useContext, useEffect, useState } from 'react';

import CartContext from '../../store/cart-context';

import React from 'react';
import classes from './HeaderCartButton.module.css';
import '../Cart/CartIcon';
import CartIcon from '../Cart/CartIcon';
const HeaderCartButton=props=>
{
     const [btnIsHighlighted, setBtnIsHighlighted]=useState(false)
   const cartctx= useContext(CartContext);
const {items}= cartctx;
const numberofCartItems= items.reduce((currNumber ,item)=>{
    return currNumber+item.amount;
},0);
const btnclasses=`${classes.button} ${btnIsHighlighted ? classes.bump: '' }`;


useEffect(()=>{
    if(items.length===0)
    {
        return ;
    }
    setBtnIsHighlighted(true);
 const timer=   setTimeout(()=>{
        setBtnIsHighlighted(false)
    },300);
    return ()=>
    {
clearTimeout(timer);
    };

},[items])


    return <button className={btnclasses} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon/></span>
        <span>Your Cart</span>
<span className={classes.badge}>{numberofCartItems}</span>
    </button>
}
export default HeaderCartButton;