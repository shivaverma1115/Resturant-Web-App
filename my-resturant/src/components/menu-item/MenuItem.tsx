'use client'
import React from "react";
import { motion } from "framer-motion";

const MenuItem = () => {
    return (
        <motion.div
            className="bg-white rounded-xl shadow-lg p-6 border border-gray-200"
            initial={{ opacity: 0, y: 50 }}       // Start hidden & below
            whileInView={{ opacity: 1, y: 0 }}    // Animate into view
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
        >
            <div className="flex items-center mb-4 pb-3 border-b">
                <span className="text-2xl mr-3">🍕</span>
                <div className="text-lg font-semibold text-gray-800">3. Pizza Menu</div>
            </div>

            <div className="space-y-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
                    Here are our delicious pizzas:
                </div>

                {/* Pizza Items */}
                <div className="space-y-3">
                    {[
                        {
                            name: "Margherita Pizza",
                            desc: "Classic tomato, mozzarella & basil",
                            price: "$12.99",
                        },
                        {
                            name: "Pepperoni Pizza",
                            desc: "Pepperoni, cheese & tomato sauce",
                            price: "$15.99",
                        },
                        {
                            name: "Supreme Pizza",
                            desc: "Loaded with all the toppings",
                            price: "$18.99",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-2xl mr-3">🍕</div>
                            <div className="flex-1">
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm text-gray-600">{item.desc}</div>
                                <div className="font-bold text-green-600">{item.price}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="menu-btn text-sm">⬅️ Back to Categories</div>
                    <div className="menu-btn text-sm">🛒 View Cart</div>
                </div>
            </div>
        </motion.div>
    );
};

export default MenuItem;
