'use client'
import React, { useState, useEffect, useRef } from 'react'
import {
    Menu,
    ShoppingCart,
    Phone,
    MapPin,
    Info,
    Star,
    Clock,
    Utensils,
    Award,
    Sparkles,
    Heart,
    Zap,
} from 'lucide-react'
import RestaurantLocation from './ResturantLocation'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'
type ActionColor = 'green' | 'purple' | 'orange' | 'gray'


const quickActions = [
    {
        id: 'menu',
        title: 'Browse Menu',
        subtitle: '50+ delicious items',
        icon: Menu,
        color: 'blue',
        featured: true
    },
    {
        id: 'cart',
        title: 'My Cart',
        subtitle: '0 items',
        icon: ShoppingCart,
        color: 'green'
    },
    {
        id: 'contact',
        title: 'Contact Us',
        subtitle: 'Get help',
        icon: Phone,
        color: 'purple'
    },
    {
        id: 'location',
        title: 'Location',
        subtitle: 'Find us',
        icon: MapPin,
        color: 'orange'
    },
    {
        id: 'about',
        title: 'About Us',
        subtitle: 'Our story',
        icon: Info,
        color: 'gray'
    }
]

const specialOffers = [
    {
        id: 1,
        title: "Free Delivery",
        description: "On orders over $25",
        icon: Zap,
        color: "green"
    },
    {
        id: 2,
        title: "20% Off First Order",
        description: "New customers only",
        icon: Star,
        color: "yellow"
    }
];

const ProfessionalWelcomeScreen = () => {
    const [currentTime, setCurrentTime] = useState(new Date())
    const [isOnline, _setIsOnline] = useState(true)
    const [activeCard, setActiveCard] = useState(null)
    const cardRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const formatTime = (date: any) => {
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })
    }

    const getGreeting = () => {
        const hour = currentTime.getHours()
        if (hour < 12) return "Good Morning"
        if (hour < 17) return "Good Afternoon"
        return "Good Evening"
    }

    const handleActionClick = (actionId: any) => {
        if (actionId === 'contact' || actionId === 'about' || actionId === 'location') {
            setActiveCard(actionId)
        }
    }

    const closeCard = () => {
        setActiveCard(null)
    }

    const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

    const handleSelect = (offerId: number) => {
        setSelectedOffer(offerId);
        console.log(offerId)
        const selected = specialOffers.find((o: any) => o.id === offerId);
        console.log("Selected offer:", selected);
    };
    return (
        <div className="bg-white rounded-2xl shadow-xl w-full p-6 border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-400 rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400 to-purple-400 rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>

            <div className="relative z-10">
                {/* Header */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
                                <Utensils className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">Delicious Bites</h1>
                                <p className="text-sm text-gray-500">Your culinary companion</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs text-gray-500">Now</div>
                            <div className="text-sm font-semibold text-gray-700">{formatTime(currentTime)}</div>
                        </div>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
                        <span className={`text-xs font-medium ${isOnline ? 'text-green-700' : 'text-red-700'}`}>
                            {isOnline ? 'Open for orders' : 'Currently closed'}
                        </span>
                    </div>
                </div>

                {/* Personalized Greeting */}
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-2xl shadow-lg mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20"></div>
                    <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h2 className="text-lg font-bold mb-1">{getGreeting()}! 👋</h2>
                                <p className="text-orange-100 text-sm">
                                    Craving something delicious? We've got you covered!
                                </p>
                            </div>
                            <Sparkles className="w-5 h-5 text-orange-200 flex-shrink-0" />
                        </div>

                        {/* Quick Stats */}
                        <div className="grid grid-cols-3 gap-3 mt-4 pt-3 border-t border-orange-400/30">
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-1">
                                    <Star className="w-3 h-3 fill-yellow-300 text-yellow-300" />
                                    <span className="text-xs font-semibold">4.9</span>
                                </div>
                                <div className="text-xs text-orange-100">Rating</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-1">
                                    <Clock className="w-3 h-3" />
                                    <span className="text-xs font-semibold">25min</span>
                                </div>
                                <div className="text-xs text-orange-100">Delivery</div>
                            </div>
                            <div className="text-center">
                                <div className="flex items-center justify-center space-x-1">
                                    <Award className="w-3 h-3" />
                                    <span className="text-xs font-semibold">50+</span>
                                </div>
                                <div className="text-xs text-orange-100">Items</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Special Offers */}
                <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3 flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-orange-500" />
                        <span>Special Offers</span>
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                        {specialOffers.map((offer, index) => {
                            const Icon = offer.icon;
                            const isSelected = selectedOffer === index;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleSelect(offer.id)}
                                    className={`... ${isSelected ? "ring-2 ring-offset-2 ring-orange-400 scale-[1.02]" : ""}`}
                                >
                                    <div className="flex items-center space-x-2 mb-1">
                                        <Icon className={offer.color === "green" ? "text-green-600 w-4 h-4" : "text-yellow-600 w-4 h-4"} />
                                        <span className={offer.color === "green" ? "text-green-800 text-xs font-bold" : "text-yellow-800 text-xs font-bold"}>
                                            {offer.title}
                                        </span>
                                    </div>
                                    <p className={offer.color === "green" ? "text-green-700 text-xs" : "text-yellow-700 text-xs"}>
                                        {offer.description}
                                    </p>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-800 flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span>Quick Actions</span>
                    </h3>

                    {/* Grid Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        {quickActions.slice(1).map((action) => {
                            const Icon = action.icon
                            const colorMap: Record<ActionColor, string> = {
                                green: 'hover:bg-green-50 hover:border-green-200 text-green-700',
                                purple: 'hover:bg-purple-50 hover:border-purple-200 text-purple-700',
                                orange: 'hover:bg-orange-50 hover:border-orange-200 text-orange-700',
                                gray: 'hover:bg-gray-50 hover:border-gray-200 text-gray-700'
                            }

                            return (
                                <button
                                    key={action.id}
                                    onClick={() => handleActionClick(action.id)}
                                    className={`p-4 rounded-xl border-2 border-gray-100 hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02] ${colorMap[action.color as ActionColor] ?? ''}`}
                                >
                                    <div className="text-center">
                                        <div className="w-8 h-8 mx-auto mb-2 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="font-medium text-sm text-gray-900">{action.title}</div>
                                        <div className="text-xs text-gray-500">{action.subtitle}</div>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Contact Us Card */}
                {activeCard === 'contact' && (
                    <ContactUs closeCard={closeCard} cardRef={cardRef} />
                )}

                {activeCard === 'location' && (
                    <RestaurantLocation onClose={closeCard} />
                )}

                {/* About Us Card */}
                {activeCard === 'about' && (
                    <AboutUs closeCard={closeCard} cardRef={cardRef} />
                )}

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-500">
                        Made with <Heart className="w-3 h-3 text-red-500 inline" /> for food lovers
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalWelcomeScreen