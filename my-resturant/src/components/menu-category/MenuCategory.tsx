'use client';
import React from "react";
import { motion } from "framer-motion";

const MenuCategory = () => {
    return (
        <div>
            <motion.div
                className="bg-white rounded-2xl shadow-xl w-full p-6 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                {/* Header */}
                <div className="flex items-center mb-6 pb-4 border-b border-gray-200">
                    <span className="text-3xl mr-3">📋</span>
                    <div>
                        <h1 className="text-xl font-bold text-gray-800">Menu Categories</h1>
                        <p className="text-sm text-gray-500">Pick your favorite section</p>
                    </div>
                </div>

                {/* Intro Message */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-xl shadow-md text-sm leading-relaxed"
                >
                    🍴 Choose a category to explore our delicious menu
                </motion.div>

                {/* Categories */}
                <div className="mt-6 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            🍕 Pizza
                        </button>
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            🍔 Burgers
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            🍜 Pasta
                        </button>
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            🥗 Salads
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            🍖 Main Course
                        </button>
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            🍰 Desserts
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            🥤 Beverages
                        </button>
                        <button className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm">
                            ⭐ Specials
                        </button>
                    </div>

                    {/* Back Button */}
                    <button className="w-full bg-gray-200 hover:bg-orange-200 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-md">
                        ⬅️ Back to Main
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default MenuCategory;
