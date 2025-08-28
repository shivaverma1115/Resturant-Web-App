'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Product {
    id: number;
    Category: string;
    ["Item Name"]: string;
    Price: string;
    ["Image URL"]: string;
    Description: string;
}

const MenuCategory = () => {
    const [products, _setProducts] = useState<Product[]>([]);
    const [categories, _setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // Fetch products from Supabase GraphQL
    const fetchProducts = async (category?: string) => {
        const url = new URL(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/Items`);

        // Add select to get all columns
        url.searchParams.set("select", "*");

        if (category) {
            url.searchParams.set("category", `eq.${category}`);
        }

        const res = await fetch(url.toString(), {
            headers: {
                apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
            },
        });

        const json = await res.json();
        console.log(json);

        return json;
    };




    useEffect(() => {
        // fetchProducts();
        fetchProducts("BURGER").then((data) => {
            console.log(data)
        });
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter((p) => p.Category === selectedCategory)
        : [];

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
                {!selectedCategory && (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-5 rounded-xl shadow-md text-sm leading-relaxed"
                    >
                        🍴 Choose a category to explore our delicious menu
                    </motion.div>
                )}

                {/* Categories */}
                {!selectedCategory ? (
                    <div className="mt-6 grid grid-cols-2 gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className="bg-gray-100 hover:bg-orange-100 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-sm"
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                ) : (
                    <>
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            {selectedCategory} Items
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredProducts.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="p-4 bg-gray-50 rounded-xl shadow hover:shadow-lg transition"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <img
                                        src={item["Image URL"]}
                                        alt={item["Item Name"]}
                                        className="w-full h-40 object-cover rounded-lg mb-3"
                                    />
                                    <h3 className="text-md font-bold text-gray-800">
                                        {item["Item Name"]}
                                    </h3>
                                    <p className="text-sm text-gray-500">{item.Description}</p>
                                    <p className="mt-2 font-semibold text-orange-600">
                                        ₹{item.Price}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Back Button */}
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="mt-6 w-full bg-gray-200 hover:bg-orange-200 p-4 rounded-xl text-center transition-colors font-medium text-gray-700 shadow-md"
                        >
                            ⬅️ Back to Categories
                        </button>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default MenuCategory;
