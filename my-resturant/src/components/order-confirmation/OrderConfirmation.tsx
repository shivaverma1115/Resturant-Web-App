'use client'
import React, { useState, useEffect } from 'react'
import {
    CheckCircle,
    MapPin,
    Clock,
    Phone,
    Home,
    Truck,
    Star,
    Receipt,
    MessageCircle,
    Download,
    Share2,
    Calendar,
    CreditCard
} from 'lucide-react'

const ProfessionalOrderConfirmation = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [deliveryProgress, setDeliveryProgress] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        // Simulate delivery progress
        const progressTimer = setInterval(() => {
            setDeliveryProgress(prev => Math.min(prev + 1, 25))
        }, 2000)

        return () => {
            clearInterval(timer)
            clearInterval(progressTimer)
        }
    }, [])

    const orderNumber = "DB-2024-0156"
    const estimatedDelivery = new Date(currentTime.getTime() + 50 * 60000) // 50 minutes from now
    const orderItems = [
        { name: "Margherita Pizza", quantity: 2, price: 12.99 },
        { name: "Pepperoni Pizza", quantity: 1, price: 15.99 }
    ]

    const formatTime = (date: any) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    }

    return (
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100 mx-auto">
            {/* Success Header */}
            <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
                <p className="text-gray-600">Thank you for your order. We're preparing it now!</p>
            </div>

            {/* Order Status Card */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-4 rounded-xl mb-6">
                <div className="flex items-center justify-between mb-3">
                    <div>
                        <h2 className="font-semibold text-gray-900">Order #{orderNumber}</h2>
                        <p className="text-sm text-gray-600">Placed at {formatTime(currentTime)}</p>
                    </div>
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Confirmed
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                    <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Order Progress</span>
                        <span>{deliveryProgress}% Complete</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${deliveryProgress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex items-center space-x-2 text-green-700">
                    <Truck className="w-4 h-4" />
                    <span className="text-sm font-medium">Being prepared in kitchen</span>
                </div>
            </div>

            {/* Order Details */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                    <Receipt className="w-4 h-4" />
                    <span>Order Details</span>
                </h3>

                <div className="space-y-3">
                    {/* Items */}
                    <div>
                        <h4 className="font-medium text-gray-800 mb-2">Items Ordered</h4>
                        <div className="space-y-2">
                            {orderItems.map((item, index) => (
                                <div key={index} className="flex justify-between items-center text-sm">
                                    <div className="flex items-center space-x-2">
                                        <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs flex items-center justify-center font-medium">
                                            {item.quantity}
                                        </span>
                                        <span className="text-gray-700">{item.name}</span>
                                    </div>
                                    <span className="font-medium text-gray-900">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Delivery Info */}
                    <div className="border-t pt-3">
                        <h4 className="font-medium text-gray-800 mb-2 flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>Delivery Address</span>
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            123 Main Street, Apt 4B<br />
                            New York, NY 10001
                        </p>
                    </div>

                    {/* Summary */}
                    <div className="border-t pt-3 grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-medium text-gray-800 mb-1 flex items-center space-x-1">
                                <CreditCard className="w-4 h-4" />
                                <span>Total Paid</span>
                            </h4>
                            <p className="text-xl font-bold text-green-600">$49.64</p>
                        </div>
                        <div>
                            <h4 className="font-medium text-gray-800 mb-1 flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>ETA</span>
                            </h4>
                            <p className="text-sm font-semibold text-gray-900">{formatTime(estimatedDelivery)}</p>
                            <p className="text-xs text-gray-500">45-60 minutes</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <Truck className="w-5 h-5" />
                    <span>Track Your Order</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                        <Home className="w-4 h-4" />
                        <span>Main Menu</span>
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call Us</span>
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>Receipt</span>
                    </button>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-1">
                        <Share2 className="w-3 h-3" />
                        <span>Share</span>
                    </button>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-600 py-2 px-3 rounded-lg text-sm transition-all duration-200 flex items-center justify-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>Support</span>
                    </button>
                </div>
            </div>

            {/* Additional Info */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
                <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-medium text-blue-900 mb-1">What's Next?</h4>
                        <p className="text-sm text-blue-700 leading-relaxed">
                            You'll receive SMS updates about your order status. Our delivery team will contact you when they're nearby.
                        </p>
                    </div>
                </div>
            </div>

            {/* Rating Reminder */}
            <div className="mt-4 text-center">
                <p className="text-xs text-gray-500 mb-2">How was your ordering experience?</p>
                <div className="flex justify-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} className="text-gray-300 hover:text-yellow-400 transition-colors">
                            <Star className="w-4 h-4" />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProfessionalOrderConfirmation