import { Calendar, ChefHat, Globe, Heart, Info, Users } from 'lucide-react'
import React from 'react'

const AboutUs = ({closeCard,cardRef}) => {
    return (
        <div
            ref={cardRef}
            className="mt-6 bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 p-5 rounded-2xl shadow-lg transform animate-in slide-in-from-top duration-500"
        >
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Info className="w-5 h-5 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">About Delicious Bites</h3>
                </div>
                <button
                    onClick={closeCard}
                    className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                    x
                </button>
            </div>

            <div className="space-y-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>Our Story</span>
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                        Since 2018, Delicious Bites has been serving the finest cuisines with passion and love.
                        We believe every meal should be a delightful experience that brings people together.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                            <ChefHat className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-gray-900 text-sm">Expert Chefs</span>
                        </div>
                        <p className="text-xs text-gray-600">Professional culinary team</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                            <Users className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-gray-900 text-sm">50k+ Customers</span>
                        </div>
                        <p className="text-xs text-gray-600">Happy food lovers served</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                            <Calendar className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-gray-900 text-sm">6+ Years</span>
                        </div>
                        <p className="text-xs text-gray-600">Of culinary excellence</p>
                    </div>

                    <div className="bg-white p-3 rounded-xl shadow-sm">
                        <div className="flex items-center space-x-2 mb-2">
                            <Globe className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-gray-900 text-sm">Local Favorite</span>
                        </div>
                        <p className="text-xs text-gray-600">Community's top choice</p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-3 rounded-xl">
                    <p className="text-sm text-orange-800 text-center font-medium">
                        🌟 "Where every bite tells a story of flavor and tradition"
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
