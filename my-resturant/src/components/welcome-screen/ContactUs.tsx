import { Clock, Mail, MapPin, Phone, X } from 'lucide-react'
import React from 'react'
import { restaurantInfo } from './ResturantLocation'

const ContactUs = ({ closeCard ,cardRef}) => {
    return (
        <div
            ref={cardRef}
            className="mt-6 bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 p-5 rounded-2xl shadow-lg transform animate-in slide-in-from-top duration-500"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Phone className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
                </div>
                <button
                    onClick={closeCard}
                    className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    <X className="w-4 h-4 text-gray-600" />
                </button>
            </div>

            <div className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-3">
                            <button
                                onClick={() => window.open(`tel:${restaurantInfo.phone}`, '_self')}
                            >
                                <Phone className="w-4 h-4 text-purple-600" />
                                <div>
                                    <p className="font-semibold text-gray-900">Phone</p>
                                    <p className="text-sm text-gray-600">+1 (555) 123-FOOD</p>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-3">
                            <Mail className="w-4 h-4 text-purple-600" />
                            <div>
                                <p className="font-semibold text-gray-900">Email</p>
                                <p className="text-sm text-gray-600">hello@deliciousbites.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-purple-600" />
                            <div>
                                <p className="font-semibold text-gray-900">Address</p>
                                <p className="text-sm text-gray-600">123 Foodie Street, Flavor Town, FT 12345</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-3">
                            <Clock className="w-4 h-4 text-purple-600" />
                            <div>
                                <p className="font-semibold text-gray-900">Hours</p>
                                <p className="text-sm text-gray-600">Mon-Sun: 10:00 AM - 11:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-3 border-t border-purple-200">
                    <p className="text-sm text-purple-700 text-center">
                        💬 We're here to help! Reach out anytime for support or questions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
