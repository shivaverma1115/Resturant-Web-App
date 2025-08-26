'use client'
import React, { useState, useEffect } from 'react'
import {
    MapPin,
    CheckCircle,
    ChefHat,
    Truck,
    Home,
    Clock,
    Phone,
    RefreshCw,
    Bell,
    User,
    Star,
    MessageCircle,
    Navigation
} from 'lucide-react'

const OrderTracking = () => {
    const [currentStatus, setCurrentStatus] = useState(2) 
    const [estimatedTime, setEstimatedTime] = useState(35)
    const [isRefreshing, setIsRefreshing] = useState(false)

    useEffect(() => {
        // Simulate status progression
        const statusTimer = setTimeout(() => {
            if (currentStatus < 4) {
                setCurrentStatus(prev => Math.min(prev + 1, 4))
            }
        }, 15000) // Progress every 15 seconds for demo

        // Update estimated time
        const timeTimer = setInterval(() => {
            setEstimatedTime(prev => Math.max(prev - 1, 0))
        }, 60000) // Decrease every minute

        return () => {
            clearTimeout(statusTimer)
            clearInterval(timeTimer)
        }
    }, [currentStatus])

    const orderNumber = "DB-2024-0156"

    const trackingSteps = [
        {
            id: 1,
            title: "Order Confirmed",
            description: "We've received your order",
            time: "2:30 PM",
            icon: CheckCircle,
            color: "green"
        },
        {
            id: 2,
            title: "Preparing Your Order",
            description: "Our chefs are cooking your meal",
            time: "2:35 PM",
            icon: ChefHat,
            color: "orange"
        },
        {
            id: 3,
            title: "Out for Delivery",
            description: "Your order is on the way",
            time: "Est. 3:05 PM",
            icon: Truck,
            color: "blue"
        },
        {
            id: 4,
            title: "Delivered",
            description: "Enjoy your meal!",
            time: "Est. 3:10 PM",
            icon: Home,
            color: "purple"
        }
    ]

    const handleRefresh = () => {
        setIsRefreshing(true)
        setTimeout(() => {
            setIsRefreshing(false)
        }, 2000)
    }

    const getStepStatus = (stepId: any) => {
        if (stepId < currentStatus) return 'completed'
        if (stepId === currentStatus) return 'current'
        return 'pending'
    }

    const getStatusColor = (status: any, color: any) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 text-green-600 border-green-200'
            case 'current':
                return `bg-${color}-100 text-${color}-600 border-${color}-200`
            default:
                return 'bg-gray-100 text-gray-400 border-gray-200'
        }
    }
    console.log(getStatusColor)

    const getProgressWidth = () => {
        return ((currentStatus - 1) / 3) * 100
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Order Tracking</h2>
                        <p className="text-sm text-gray-500">Order #{orderNumber}</p>
                    </div>
                </div>
                <button
                    onClick={handleRefresh}
                    className={`p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-200 ${isRefreshing ? 'animate-spin' : ''}`}
                >
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                </button>
            </div>

            {/* Status Overview */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 p-4 rounded-xl mb-6">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold text-gray-900">
                            {trackingSteps[currentStatus - 1]?.title}
                        </span>
                    </div>
                    <div className="text-right">
                        <div className="text-sm text-gray-600">ETA</div>
                        <div className="font-bold text-lg text-gray-900 flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{estimatedTime} min</span>
                        </div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${getProgressWidth()}%` }}
                        ></div>
                    </div>
                </div>

                <p className="text-sm text-gray-700">
                    {trackingSteps[currentStatus - 1]?.description}
                </p>
            </div>

            {/* Tracking Steps */}
            <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-gray-900">Order Progress</h3>
                <div className="space-y-3">
                    {trackingSteps.map((step, index) => {
                        const Icon = step.icon
                        const status = getStepStatus(step.id)
                        const isLast = index === trackingSteps.length - 1

                        return (
                            <div key={step.id} className="relative">
                                <div className="flex items-center space-x-4">
                                    <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${status === 'completed'
                                            ? 'bg-green-100 border-green-200'
                                            : status === 'current'
                                                ? `bg-${step.color}-100 border-${step.color}-200`
                                                : 'bg-gray-100 border-gray-200'
                                        }`}>
                                        <Icon className={`w-5 h-5 ${status === 'completed'
                                                ? 'text-green-600'
                                                : status === 'current'
                                                    ? `text-${step.color}-600`
                                                    : 'text-gray-400'
                                            }`} />
                                    </div>

                                    <div className="flex-1">
                                        <div className={`font-semibold ${status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                                            }`}>
                                            {step.title}
                                        </div>
                                        <div className={`text-sm ${status === 'pending' ? 'text-gray-400' : 'text-gray-600'
                                            }`}>
                                            {step.description}
                                        </div>
                                    </div>

                                    <div className={`text-xs font-medium ${status === 'pending' ? 'text-gray-400' : 'text-gray-600'
                                        }`}>
                                        {step.time}
                                    </div>
                                </div>

                                {/* Connecting line */}
                                {!isLast && (
                                    <div className={`absolute left-5 top-10 w-0.5 h-6 ${status === 'completed' ? 'bg-green-300' : 'bg-gray-300'
                                        }`}></div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Delivery Info */}
            {currentStatus >= 3 && (
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl mb-6">
                    <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-yellow-900 mb-1">Your Delivery Driver</h4>
                            <p className="text-sm text-yellow-700 mb-2">Mike is on the way with your order</p>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-1">
                                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                    <span className="text-xs font-medium text-yellow-700">4.9</span>
                                </div>
                                <button className="flex items-center space-x-1 text-xs text-yellow-700 hover:text-yellow-800">
                                    <MessageCircle className="w-3 h-3" />
                                    <span>Message</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Notification Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-xl mb-6">
                <div className="flex items-start space-x-3">
                    <Bell className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold mb-1">Stay Updated</p>
                        <p className="text-sm opacity-90">
                            We'll send you notifications at each step of your order journey!
                        </p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
                <button
                    onClick={handleRefresh}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                    <RefreshCw className={`w-5 h-5 ${isRefreshing ? 'animate-spin' : ''}`} />
                    <span>Refresh Status</span>
                </button>

                <div className="grid grid-cols-2 gap-3">
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Call Restaurant</span>
                    </button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                        <Home className="w-4 h-4" />
                        <span>Main Menu</span>
                    </button>
                </div>

                {currentStatus >= 3 && (
                    <button className="w-full bg-green-100 hover:bg-green-200 text-green-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                        <Navigation className="w-4 h-4" />
                        <span>Track on Map</span>
                    </button>
                )}
            </div>

            {/* Help Section */}
            <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-center text-xs text-gray-500 mb-2">
                    Need help with your order?
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        Contact Support
                    </button>
                    <span className="text-gray-300">•</span>
                    <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
                        Order FAQ
                    </button>
                </div>
            </div>
        </div>
    )
}

export default OrderTracking