import React from 'react'
import WelcomeScreen from '../welcome-screen/WelcomeScreen'
import MenuCategory from '../menu-category/MenuCategory'
import MenuItem from '../menu-item/MenuItem'
import ItemDetails from '../item-details/ItemDetails'
import ShoppingCart from '../shopping-cart/ShoppingCart'
import CheckoutDetails from '../checkout-details/CheckoutDetails'
import Payment from '../payment/Payment'
import OrderConfirmation from '../order-confirmation/OrderConfirmation'
import OrderTracking from '../order-tracking/OrderTracking'

const Home = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <WelcomeScreen />
                    <MenuCategory />
                    <MenuItem />
                    <ItemDetails />
                    <ShoppingCart />
                    <CheckoutDetails />
                    <Payment />
                    <OrderConfirmation />
                    <OrderTracking />
                </div>
            </div>
        </div>
    )
}

export default Home
