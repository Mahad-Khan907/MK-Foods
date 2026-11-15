"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface CartItem {
  _id?: string;
  name: string;
  price: number;
  originalPrice?: number;
  image_url: string;
  quantity: number;
  category?: string;
  slug?: { current: string } | string;
}

interface CartContextType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  updateQuantity: (index: number, newQty: number) => void;
  clearCart: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("cart");
      if (stored) {
        setCart(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load cart", e);
    }
  }, []);

  // Sync to localStorage
  const saveCart = (items: CartItem[]) => {
    setCart(items);
    try {
      localStorage.setItem("cart", JSON.stringify(items));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2500);
  };

  const addToCart = (newItem: CartItem) => {
    const existingIndex = cart.findIndex((i) => i.name === newItem.name);
    let updated: CartItem[];
    if (existingIndex > -1) {
      updated = [...cart];
      updated[existingIndex].quantity += newItem.quantity || 1;
    } else {
      updated = [...cart, { ...newItem, quantity: newItem.quantity || 1 }];
    }
    saveCart(updated);
    showToast(`Added "${newItem.name}" to cart! 🍔`);
  };

  const removeFromCart = (index: number) => {
    const updated = cart.filter((_, i) => i !== index);
    saveCart(updated);
  };

  const updateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      removeFromCart(index);
      return;
    }
    const updated = [...cart];
    updated[index].quantity = newQty;
    saveCart(updated);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
  const cartTotal = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        cartTotal,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium px-5 py-3 rounded-2xl shadow-2xl shadow-orange-500/30 border border-amber-300/30 animate-bounce duration-300">
          <span className="text-xl">✓</span>
          <span>{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
