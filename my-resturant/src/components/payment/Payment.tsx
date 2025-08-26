'use client'
import React, { useState } from 'react'
import {
    CreditCard,
    Smartphone,
    Banknote,
    Building2,
    Shield,
    Zap,
    Clock,
    CheckCircle,
    ArrowLeft,
    Lock,
    Wallet,
    Star
} from 'lucide-react'

const ProfessionalPayment = () => {
    const [selectedPayment, setSelectedPayment] = useState('card')
    const [selectedDelivery, setSelectedDelivery] = useState('standard')
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvv: '',
        name: ''
    })

    const baseTotal = 49.64
    const expressDeliveryFee = 2.00
    const finalTotal = selectedDelivery === 'express' ? baseTotal + expressDeliveryFee : baseTotal

    const paymentMethods = [
        {
            id: 'card',
            name: 'Credit/Debit Card',
            icon: CreditCard,
            description: 'Visa, Mastercard, American Express',
            popular: true,
            secure: true
        },
        {
            id: 'apple',
            name: 'Apple Pay',
            icon: Smartphone,
            description: 'Touch ID or Face ID',
            popular: false,
            secure: true
        },
        {
            id: 'google',
            name: 'Google Pay',
            icon: Wallet,
            description: 'Quick & secure checkout',
            popular: false,
            secure: true
        },
        {
            id: 'cash',
            name: 'Cash on Delivery',
            icon: Banknote,
            description: 'Pay when you receive',
            popular: false,
            secure: false
        },
        {
            id: 'bank',
            name: 'Bank Transfer',
            icon: Building2,
            description: 'Direct bank payment',
            popular: false,
            secure: true
        }
    ]

    const handleCardInputChange = (field: any, value: any) => {
        setCardDetails(prev => ({ ...prev, [field]: value }))
    }

    const formatCardNumber = (value: any) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        const matches = v.match(/\d{4,16}/g)
        const match = matches && matches[0] || ''
        const parts = []
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return v
        }
    }

    const formatExpiry = (value:any) => {
        const v = value.replace(/\D/g, '').substring(0, 4)
        if (v.length >= 3) {
            return `${v.substring(0, 2)}/${v.substring(2, 4)}`
        }
        return v
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Payment</h2>
                        <p className="text-sm text-gray-500">Secure checkout process</p>
                    </div>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">3</span>
                </div>
            </div>

            <div className="space-y-6">
                {/* Delivery Speed Selection */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Delivery Speed</h3>
                    <div className="space-y-2">
                        <button
                            onClick={() => setSelectedDelivery('express')}
                            className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${selectedDelivery === 'express'
                                ? 'border-yellow-400 bg-yellow-50'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-semibold text-gray-900 flex items-center space-x-2">
                                            <span>Express Delivery</span>
                                            <span className="bg-yellow-200 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                                                FAST
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">25-30 minutes</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-gray-900">+$2.00</div>
                                </div>
                            </div>
                        </button>

                        <button
                            onClick={() => setSelectedDelivery('standard')}
                            className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${selectedDelivery === 'standard'
                                ? 'border-green-400 bg-green-50'
                                : 'border-gray-200 hover:border-gray-300'
                                }`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div className="text-left">
                                        <div className="font-semibold text-gray-900 flex items-center space-x-2">
                                            <span>Standard Delivery</span>
                                            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                                                FREE
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600">45-60 minutes</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-green-600">$0.00</div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Payment Method</h3>
                    <div className="space-y-2">
                        {paymentMethods.map((method) => {
                            const Icon = method.icon
                            return (
                                <button
                                    key={method.id}
                                    onClick={() => setSelectedPayment(method.id)}
                                    className={`w-full p-4 rounded-xl border-2 transition-all duration-200 ${selectedPayment === method.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${selectedPayment === method.id ? 'bg-blue-100' : 'bg-gray-100'
                                                }`}>
                                                <Icon className={`w-5 h-5 ${selectedPayment === method.id ? 'text-blue-600' : 'text-gray-600'
                                                    }`} />
                                            </div>
                                            <div className="text-left">
                                                <div className="font-semibold text-gray-900 flex items-center space-x-2">
                                                    <span>{method.name}</span>
                                                    {method.popular && (
                                                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600">{method.description}</p>
                                            </div>
                                        </div>
                                        {method.secure && (
                                            <Shield className="w-4 h-4 text-green-500" />
                                        )}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Card Details Form */}
                {selectedPayment === 'card' && (
                    <div className="space-y-4 p-4 bg-gray-50 rounded-xl">
                        <h4 className="font-medium text-gray-900 flex items-center space-x-2">
                            <Lock className="w-4 h-4 text-green-500" />
                            <span>Card Details</span>
                        </h4>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Cardholder Name
                                </label>
                                <input
                                    type="text"
                                    value={cardDetails.name}
                                    onChange={(e) => handleCardInputChange('name', e.target.value)}
                                    placeholder="John Doe"
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    value={cardDetails.number}
                                    onChange={(e) => handleCardInputChange('number', formatCardNumber(e.target.value))}
                                    placeholder="1234 5678 9012 3456"
                                    maxLength={19}
                                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        value={cardDetails.expiry}
                                        onChange={(e) => handleCardInputChange('expiry', formatExpiry(e.target.value))}
                                        placeholder="MM/YY"
                                        maxLength={5}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        value={cardDetails.cvv}
                                        onChange={(e) => handleCardInputChange('cvv', e.target.value.replace(/\D/g, '').substring(0, 3))}
                                        placeholder="123"
                                        maxLength={3}
                                        className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Order Summary */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">${(baseTotal - 7.67).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="font-medium">$3.99</span>
                        </div>
                        {selectedDelivery === 'express' && (
                            <div className="flex justify-between">
                                <span className="text-gray-600">Express Delivery</span>
                                <span className="font-medium">+$2.00</span>
                            </div>
                        )}
                        <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span className="font-medium">$3.68</span>
                        </div>
                        <div className="border-t border-gray-300 pt-2 mt-3">
                            <div className="flex justify-between items-center">
                                <span className="font-bold text-lg text-gray-900">Total</span>
                                <span className="font-bold text-xl text-gray-900">${finalTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                    </button>

                    <button className="flex-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                        <CheckCircle className="w-4 h-4" />
                        <span>Place Order</span>
                    </button>
                </div>

                {/* Security Notice */}
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 pt-2">
                    <Shield className="w-3 h-3" />
                    <span>256-bit SSL encryption • PCI DSS compliant</span>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalPayment