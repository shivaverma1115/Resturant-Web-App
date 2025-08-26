'use client'
import React, { useState } from 'react'
import { 
    MapPin, 
    Phone, 
    CreditCard, 
    Banknote, 
    Truck, 
    Store, 
    ArrowLeft, 
    MessageSquare,
    CheckCircle,
    Clock,
    Shield,
    User
} from 'lucide-react'

const ProfessionalCheckoutDetails = () => {
    const [formData, setFormData] = useState({
        address: '',
        phone: '',
        fullName: '',
        instructions: ''
    })
    const [deliveryMethod, setDeliveryMethod] = useState('delivery')
    const [paymentMethod, setPaymentMethod] = useState('card')
    const [showInstructions, setShowInstructions] = useState(false)

    const handleInputChange = (field:any, value:any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const isFormValid = formData.address && formData.phone && formData.fullName

    return (
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Checkout Details</h2>
                        <p className="text-sm text-gray-500">Almost there! Just a few more details</p>
                    </div>
                </div>
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-600">2</span>
                </div>
            </div>

            <div className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                    <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-600" />
                        <span>Personal Information</span>
                    </h3>
                    
                    <div className="space-y-3">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={formData.fullName}
                                onChange={(e) => handleInputChange('fullName', e.target.value)}
                                placeholder="Enter your full name"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                                <Phone className="w-4 h-4" />
                                <span>Phone Number</span>
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                placeholder="+1 (555) 123-4567"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>Delivery Address</span>
                            </label>
                            <input
                                type="text"
                                value={formData.address}
                                onChange={(e) => handleInputChange('address', e.target.value)}
                                placeholder="123 Main St, City, State 12345"
                                className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                            />
                        </div>
                    </div>
                </div>

                {/* Delivery Method */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Delivery Method</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setDeliveryMethod('delivery')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                deliveryMethod === 'delivery'
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                        >
                            <div className="flex flex-col items-center space-y-2">
                                <Truck className="w-6 h-6" />
                                <span className="font-medium">Delivery</span>
                                <span className="text-xs opacity-75">25-35 min</span>
                            </div>
                        </button>
                        
                        <button
                            onClick={() => setDeliveryMethod('pickup')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                deliveryMethod === 'pickup'
                                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                        >
                            <div className="flex flex-col items-center space-y-2">
                                <Store className="w-6 h-6" />
                                <span className="font-medium">Pickup</span>
                                <span className="text-xs opacity-75">15-20 min</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Payment Method</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setPaymentMethod('card')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                paymentMethod === 'card'
                                    ? 'border-green-500 bg-green-50 text-green-700'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                        >
                            <div className="flex flex-col items-center space-y-2">
                                <CreditCard className="w-6 h-6" />
                                <span className="font-medium">Card Payment</span>
                                <div className="flex items-center space-x-1">
                                    <Shield className="w-3 h-3" />
                                    <span className="text-xs opacity-75">Secure</span>
                                </div>
                            </div>
                        </button>
                        
                        <button
                            onClick={() => setPaymentMethod('cash')}
                            className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                                paymentMethod === 'cash'
                                    ? 'border-green-500 bg-green-50 text-green-700'
                                    : 'border-gray-200 hover:border-gray-300 text-gray-700'
                            }`}
                        >
                            <div className="flex flex-col items-center space-y-2">
                                <Banknote className="w-6 h-6" />
                                <span className="font-medium">Cash on Delivery</span>
                                <span className="text-xs opacity-75">Pay when delivered</span>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Special Instructions */}
                <div className="space-y-3">
                    <button
                        onClick={() => setShowInstructions(!showInstructions)}
                        className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                        <div className="flex items-center space-x-2">
                            <MessageSquare className="w-4 h-4 text-gray-600" />
                            <span className="font-medium text-gray-700">Special Instructions</span>
                        </div>
                        <span className="text-gray-400 text-sm">Optional</span>
                    </button>
                    
                    {showInstructions && (
                        <textarea
                            value={formData.instructions}
                            onChange={(e) => handleInputChange('instructions', e.target.value)}
                            placeholder="e.g., Ring the doorbell, Leave at door, etc."
                            rows={3}
                            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        />
                    )}
                </div>

                {/* Estimated Delivery Time */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl border border-blue-100">
                    <div className="flex items-center space-x-2 text-blue-700">
                        <Clock className="w-4 h-4" />
                        <span className="font-medium">Estimated {deliveryMethod === 'delivery' ? 'Delivery' : 'Pickup'} Time</span>
                    </div>
                    <p className="text-sm text-blue-600 mt-1">
                        {deliveryMethod === 'delivery' ? '25-35 minutes' : '15-20 minutes'}
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 pt-2">
                    <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-all duration-200 flex items-center justify-center space-x-2">
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Cart</span>
                    </button>
                    
                    <button 
                        className={`flex-2 py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                            isFormValid
                                ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
                                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!isFormValid}
                    >
                        <CheckCircle className="w-4 h-4" />
                        <span>Complete Order</span>
                    </button>
                </div>

                {/* Security Notice */}
                <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 pt-2">
                    <Shield className="w-3 h-3" />
                    <span>Your information is secure and encrypted</span>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalCheckoutDetails