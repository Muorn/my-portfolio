"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { getImgPath } from '@/utils/image';
import HeroSub from "@/components/SharedComponent/HeroSub";
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
}

const mockProducts: Product[] = [
  { id: 1, name: 'Haircut', price: 25.00 },
  { id: 2, name: 'Beard Trim', price: 15.00 },
  { id: 3, name: 'Shampoo & Style', price: 30.00 },
  { id: 4, name: 'Product X', price: 10.50 },
  { id: 5, name: 'Product Y', price: 20.00 },
];

const MenstribePOSPage = () => {
  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [checkoutMessage, setCheckoutMessage] = useState<string | null>(null);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
    setCheckoutMessage(null);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prevCart.filter((item) => item.product.id !== productId);
    });
    setCheckoutMessage(null);
  };

  const calculateTotal = () => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      setCheckoutMessage('Your cart is empty. Please add some items before checking out.');
      return;
    }
    const total = calculateTotal();
    setCheckoutMessage(`Order processed successfully! Total: ₱${total.toFixed(2)}`);
    setCart([]);
  };

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/portfolio/menstribe-pos", text: "Menstribe POS" },
  ];

  return (
    <>
      <HeroSub
        className="pt-24"
        title="Menstribe POS & Inventory System"
        description="A comprehensive Point-of-Sale solution for a modern barbershop, featuring an interactive demo."
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className="bg-gray-50 dark:bg-darkmode text-gray-900 dark:text-white min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-12">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-500 pb-2">
              Project Overview
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              The Menstribe POS and Inventory System is a web-based application built with PHP and MySQL, designed to streamline the daily operations of a barbershop. It provides a feature-rich admin panel for managing sales, services, products, customers, and employees, transforming traditional business processes into a modern, efficient digital workflow.
            </p>
            <div className="flex justify-center">
              <a href="#interactive-demo" className="inline-block bg-primary text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
                View Live Demo
              </a>
            </div>
          </div>

          <div id="interactive-demo" className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg mb-12 scroll-mt-24">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 border-b-2 border-blue-500 pb-2 text-center">
              Interactive POS Prototype
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
              Experience a simplified version of the Menstribe POS system. Add services and products to the cart, see the total update, and simulate a checkout process.
            </p>

            {checkoutMessage && (
              <div className={`p-4 mb-6 rounded-lg ${cart.length === 0 && checkoutMessage.includes('empty') ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'}`}>
                {checkoutMessage}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              {/* Products Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Available Items</h3>
                <div className="space-y-4">
                  {mockProducts.map((product) => (
                    <div key={product.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                      <div>
                        <p className="font-medium text-lg">{product.name}</p>
                        <p className="text-gray-600 dark:text-gray-300">₱{product.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cart Section */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Your Cart</h3>
                {cart.length === 0 ? (
                  <p className="text-gray-600 dark:text-gray-300">Cart is empty.</p>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div key={item.product.id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                        <div>
                          <p className="font-medium text-lg">{item.product.name} (x{item.quantity})</p>
                          <p className="text-gray-600 dark:text-gray-300">₱{(item.product.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-lg font-bold">{item.quantity}</span>
                          <button
                            onClick={() => addToCart(item.product)}
                            className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-gray-300 dark:border-gray-600 pt-4 mt-4">
                      <div className="flex justify-between items-center font-bold text-xl">
                        <span>Total:</span>
                        <span>₱{calculateTotal().toFixed(2)}</span>
                      </div>
                      <button
                        onClick={handleCheckout}
                        className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-xl"
                      >
                        Process Order
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenstribePOSPage;