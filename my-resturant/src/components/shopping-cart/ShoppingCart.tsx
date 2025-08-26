'use client'
import React, { useState } from 'react'
import { Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react'

const ShoppingCart = () => {
    const [items, setItems] = useState([
        { id: 1, name: 'Margherita Pizza', price: 12.99, quantity: 2, image: '🍕' },
        { id: 2, name: 'Pepperoni Pizza', price: 15.99, quantity: 1, image: '🍕' }
    ])

    const updateQuantity = (id:number, change:any) => {
        setItems(items.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(0, item.quantity + change) }
                : item
        ).filter(item => item.quantity > 0))
    }

    const removeItem = (id:number) => {
        setItems(items.filter(item => item.id !== id))
    }
    console.log(removeItem)

    const clearCart = () => {
        setItems([])
    }

    const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const deliveryFee = subtotal > 0 ? 3.99 : 0
    const tax = subtotal * 0.0875
    const total = subtotal + deliveryFee + tax

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

    if (items.length === 0) {
        return (
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-md mx-auto">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <ShoppingBag className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Your cart is empty</h3>
                    <p className="text-gray-500 mb-6">Add some delicious items to get started!</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-2">
                        <ShoppingBag className="w-4 h-4" />
                        <span>Start Shopping</span>
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        {/* <shoppingCartIcon className="w-5 h-5 text-blue-600" /> */}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
                        <p className="text-sm text-gray-500">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>
                    </div>
                </div>
                {items.length > 0 && (
                    <button
                        onClick={clearCart}
                        className="text-gray-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-lg"
                        title="Clear cart"
                    >
                        <Trash2 className="w-4 h-4" />
                    </button>
                )}
            </div>

            {/* Cart Items */}
            <div className="space-y-3 mb-6">
                {items.map((item) => (
                    <div key={item.id} className="group bg-gray-50 hover:bg-gray-100 p-4 rounded-xl transition-all duration-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 flex-1">
                                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                                    <span className="text-2xl">{item.image}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 truncate">{item.name}</h3>
                                    <p className="text-sm text-gray-600">${item.price.toFixed(2)} each</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2 bg-white rounded-lg p-1 shadow-sm">
                                    <button
                                        onClick={() => updateQuantity(item.id, -1)}
                                        className="w-8 h-8 bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 rounded-md transition-all duration-200 flex items-center justify-center"
                                    >
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="font-semibold text-gray-900 min-w-[24px] text-center">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, 1)}
                                        className="w-8 h-8 bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 rounded-md transition-all duration-200 flex items-center justify-center"
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>

                                {/* <div className="text-right min-w-[60px]">
                                    <p className="font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl space-y-3 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Delivery Fee</span>
                        <span className="font-medium text-gray-900">${deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-gray-600">Tax (8.75%)</span>
                        <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-300 pt-2 mt-3">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-900">Total</span>
                            <span className="font-bold text-xl text-gray-900">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Proceed to Checkout</span>
                    <ArrowRight className="w-4 h-4" />
                </button>

                <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Continue Shopping</span>
                </button>
            </div>
        </div>
    )
}

export default ShoppingCart