import React,{useState} from 'react';
import Cart from './components/Cart/Cart';

import Header from './components/Layout/Header';
import CartProvider from './store/CartProvider';
import Meals from './components/meals/Meals';

function App()
{
    const [cartIsShown, setCartIsShown]=useState(false);

    const showCartHandler=()=>
    {
        setCartIsShown(true);
    }
    const HideCarthandler=()=>
    {
        setCartIsShown(false);
    }
    return (
        <CartProvider>
        {cartIsShown &&<Cart onClose={HideCarthandler}/>}
<Header onShowCart={showCartHandler}/>
<main>
<Meals/>
</main>
        </CartProvider>
    )
}
export default App;