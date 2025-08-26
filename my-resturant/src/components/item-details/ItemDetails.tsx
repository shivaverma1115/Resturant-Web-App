'use client'
import React from "react";
import { motion } from "framer-motion";

const ItemDetails = () => {
    return (
        <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span className="text-xl">🍕</span>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Item Details</h2>
                            <p className="text-sm text-gray-500">Step 4 of 5</p>
                        </div>
                    </div>
                    <div className="text-2xl font-bold text-orange-600">$12.99</div>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Product Image Placeholder */}
                <motion.div
                    className="w-full h-48 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="text-6xl">🍕</span>
                </motion.div>

                {/* Product Info */}
                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Margherita Pizza</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Classic Italian pizza with fresh tomato sauce, premium mozzarella cheese,
                            and aromatic basil leaves. Made with our signature hand-tossed dough.
                        </p>
                    </div>

                    {/* Specifications */}
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700">Size</span>
                            <span className="text-sm text-gray-900">12 inch</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700">Prep Time</span>
                            <span className="text-sm text-gray-900">15-20 minutes</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700">Serves</span>
                            <span className="text-sm text-gray-900">2-3 people</span>
                        </div>
                    </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    className="space-y-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    {/* Primary Action */}
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                        <span>➕</span>
                        <span>Add to Cart</span>
                    </button>

                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 hover:text-blue-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1 text-sm">
                            <span>🔧</span>
                            <span>Customize</span>
                        </button>
                        <button className="bg-white border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 text-gray-700 hover:text-orange-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-1 text-sm">
                            <span>ℹ️</span>
                            <span>Info</span>
                        </button>
                    </div>

                    {/* Navigation */}
                    <button className="w-full bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2.5 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2">
                        <span>⬅️</span>
                        <span>Back to Pizza Menu</span>
                    </button>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default ItemDetails;