import React ,{ Fragment } from "react";
import mealIamge from '../../assets/meals.jpg';
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header=props=>
{
return <Fragment>
<header className={classes.header}>
<h1>FOOD APP</h1>
<HeaderCartButton onClick={props.onShowCart}/>
</header>
<div className={classes['main-image']}>
   <img src={mealIamge} alt ='a table full of delicious food' />
</div>


</Fragment>






}
export default Header;
