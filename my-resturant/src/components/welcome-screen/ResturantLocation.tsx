'use client'
import React, { useState } from 'react'
import {
    MapPin,
    Navigation,
    Clock,
    Phone,
    Car,
    Copy,
    Check,
    Star,
} from 'lucide-react'
export const restaurantInfo = {
    name: "Delicious Bites",
    address: "D 53/23 luxa road varanasi, India 221010s",
    phone: "+1 (555) 123-FOOD",
    coordinates: { lat: 40.7128, lng: -74.0060 }, // Example coordinates
    hours: {
        weekdays: "10:00 AM - 11:00 PM",
        weekends: "9:00 AM - 12:00 AM"
    },
    landmarks: [
        "Next to Central Park",
        "Opposite City Mall",
        "2 blocks from Metro Station"
    ],
    parking: "Free parking available",
    rating: 4.9
}

const RestaurantLocation = ({ onClose }) => {
    const [copied, setCopied] = useState(false)

    const copyAddress = async () => {
        try {
            await navigator.clipboard.writeText(restaurantInfo.address)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            console.error('Failed to copy address:', err)
        }
    }

    return (
        <div className="mt-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 p-5 rounded-2xl shadow-xl transform animate-in slide-in-from-top duration-500">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Find Us</h3>
                        <p className="text-sm text-gray-600">Restaurant Location</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    x
                </button>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-6 overflow-hidden border border-gray-100">
                {/* Google Maps Embed */}
                <div className="relative w-full h-64 sm:h-72 md:h-80">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3606.8624216784206!2d82.998485!3d25.308826000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDE4JzMxLjgiTiA4MsKwNTknNTQuNiJF!5e0!3m2!1sen!2sin!4v1756197609996!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

                {/* Restaurant info under the map */}
                <div className="p-4 sm:p-5">
                    <div className="flex items-start justify-between">
                        <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                                {restaurantInfo.name}
                            </h3>
                            <div className="flex items-start space-x-2">
                                <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {restaurantInfo.address}
                                </p>
                            </div>
                        </div>

                        {/* Optional: Get Directions button */}
                        <button
                            onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(restaurantInfo.address)}`, '_blank')}
                            className="ml-4 px-3 py-1.5 text-xs font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 flex items-center space-x-1 flex-shrink-0"
                            aria-label="Get directions to restaurant"
                        >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span>Directions</span>
                        </button>
                    </div>
                </div>
            </div>


            {/* Address Information */}
            <div className="space-y-4">
                {/* Full Address */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-3 flex-1">
                            <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="font-semibold text-gray-900 mb-1">Address</p>
                                <p className="text-sm text-gray-700 leading-relaxed">{restaurantInfo.address}</p>
                            </div>
                        </div>
                        <button
                            onClick={copyAddress}
                            className="ml-3 p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                            title="Copy address"
                        >
                            {copied ? (
                                <Check className="w-4 h-4 text-green-600" />
                            ) : (
                                <Copy className="w-4 h-4 text-gray-600" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Quick Info Grid */}
                <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-3">
                            <Phone className="w-4 h-4 text-green-600" />
                            <div>
                                <p className="font-semibold text-gray-900">Phone</p>
                                <p className="text-sm text-gray-600">{restaurantInfo.phone}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-3">
                            <Clock className="w-4 h-4 text-green-600" />
                            <div>
                                <p className="font-semibold text-gray-900">Hours</p>
                                <p className="text-sm text-gray-600">Mon-Fri: {restaurantInfo.hours.weekdays}</p>
                                <p className="text-sm text-gray-600">Sat-Sun: {restaurantInfo.hours.weekends}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-3">
                            <Car className="w-4 h-4 text-green-600" />
                            <div>
                                <p className="font-semibold text-gray-900">Parking</p>
                                <p className="text-sm text-gray-600">{restaurantInfo.parking}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Landmarks */}
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center space-x-2">
                        <Navigation className="w-4 h-4 text-green-600" />
                        <span>Nearby Landmarks</span>
                    </h4>
                    <div className="space-y-2">
                        {restaurantInfo.landmarks.map((landmark, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                                <p className="text-sm text-gray-700">{landmark}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Rating & Review Prompt */}
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-semibold text-yellow-800">
                                Rated {restaurantInfo.rating}/5 by customers
                            </span>
                        </div>
                        <button className="text-xs text-yellow-700 hover:text-yellow-800 font-medium">
                            Leave Review
                        </button>
                    </div>
                </div>

                {/* Footer Message */}
                <div className="pt-3 border-t border-green-200">
                    <p className="text-sm text-green-700 text-center">
                        🎯 Can't find us? Give us a call and we'll help guide you!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RestaurantLocation