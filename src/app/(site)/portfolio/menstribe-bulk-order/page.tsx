"use client"
import React, { useState, useMemo } from 'react';
import HeroSub from "@/components/SharedComponent/HeroSub";
import Link from 'next/link';

const mockProducts = [
  { id: 1, name: 'Premium Hair Clay', basePrice: 15.00 },
  { id: 2, name: 'Matte Hair Wax', basePrice: 12.50 },
  { id: 3, name: 'Beard Oil', basePrice: 20.00 },
];

const MenstribeBulkOrderPage = () => {
  const [clientName, setClientName] = useState('Sample Client Inc.');
  const [paymentTerms, setPaymentTerms] = useState('3');
  const [orderItems, setOrderItems] = useState<{ productId: number; quantity: number }[]>([
    { productId: 1, quantity: 25 },
    { productId: 2, quantity: 50 },
  ]);
  const [generatedContract, setGeneratedContract] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleItemChange = (index: number, field: 'productId' | 'quantity', value: string) => {
    const newItems = [...orderItems];
    if (field === 'quantity') {
      const qty = parseInt(value, 10);
      if (isNaN(qty) || qty < 0) {
        newItems[index] = { ...newItems[index], quantity: 0 };
      } else {
        newItems[index] = { ...newItems[index], quantity: qty };
      }
    } else {
      newItems[index] = { ...newItems[index], productId: parseInt(value, 10) };
    }
    setOrderItems(newItems);
    setGeneratedContract(null);
    setError(null);
  };

  const addItem = () => {
    setOrderItems([...orderItems, { productId: 1, quantity: 10 }]);
    setGeneratedContract(null);
    setError(null);
  };
  
  const removeItem = (index: number) => {
    const newItems = orderItems.filter((_, i) => i !== index);
    setOrderItems(newItems);
    setGeneratedContract(null);
    setError(null);
  }

  const calculatePrice = (productId: number, quantity: number) => {
    const product = mockProducts.find(p => p.id === productId);
    if (!product) return { pricePerItem: 0, subtotal: 0, discount: 0 };
    
    let pricePerItem = product.basePrice;
    let discount = 0;
    if (quantity >= 50) {
      discount = 0.15; // 15%
    } else if (quantity >= 20) {
      discount = 0.10; // 10%
    }
    pricePerItem *= (1 - discount);
    const subtotal = pricePerItem * quantity;
    return { pricePerItem: parseFloat(pricePerItem.toFixed(2)), subtotal: parseFloat(subtotal.toFixed(2)), discount };
  };

  const { totalAmount, subtotal, interest } = useMemo(() => {
    let currentSubtotal = orderItems.reduce((sum, item) => sum + calculatePrice(item.productId, item.quantity).subtotal, 0);
    const totalQuantity = orderItems.reduce((sum, item) => sum + item.quantity, 0);

    let currentInterest = 0;
    const terms = parseInt(paymentTerms, 10);
    if (terms > 3 && totalQuantity > 0) {
      currentInterest = currentSubtotal * (totalQuantity / 1000); // Dynamic interest based on quantity and terms
    }

    const currentTotal = currentSubtotal + currentInterest;
    return { totalAmount: parseFloat(currentTotal.toFixed(2)), subtotal: parseFloat(currentSubtotal.toFixed(2)), interest: parseFloat(currentInterest.toFixed(2)) };
  }, [orderItems, paymentTerms]);

  const generateContract = () => {
    if (!clientName.trim()) {
      setError('Client name is required.');
      return;
    }
    if (orderItems.some(item => item.quantity <= 0)) {
      setError('All item quantities must be greater than zero.');
      return;
    }
    if (orderItems.length === 0) {
      setError('Please add at least one item to the order.');
      return;
    }
    setError(null);
    
    const contract = `
      <div class="p-6 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 shadow-md">
        <h3 class="text-2xl font-bold mb-4 text-center text-green-600 dark:text-green-400">Bulk Order Agreement</h3>
        <p class="mb-2"><strong>Client:</strong> ${clientName}</p>
        <p class="mb-2"><strong>Order Date:</strong> ${new Date().toLocaleDateString()}</p>
        <p class="mb-4"><strong>Payment Terms:</strong> ${paymentTerms} days</p>
        <table class="w-full mt-2 border-collapse">
          <thead>
            <tr class="bg-gray-200 dark:bg-gray-700">
              <th class="p-2 border text-left">Product</th>
              <th class="p-2 border text-center">Qty</th>
              <th class="p-2 border text-right">Price/Item</th>
              <th class="p-2 border text-right">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            ${orderItems.map(item => {
              const { pricePerItem, subtotal, discount } = calculatePrice(item.productId, item.quantity);
              return `
                <tr>
                  <td class="p-2 border">${mockProducts.find(p => p.id === item.productId)?.name} ${discount > 0 ? `<span class="text-xs text-green-500 ml-1">(${discount*100}% off)</span>` : ''}</td>
                  <td class="p-2 border text-center">${item.quantity}</td>
                  <td class="p-2 border text-right">₱${pricePerItem.toFixed(2)}</td>
                  <td class="p-2 border text-right">₱${subtotal.toFixed(2)}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
        <div class="text-right mt-4 space-y-1 border-t border-gray-300 dark:border-gray-600 pt-3">
          <p><strong>Subtotal:</strong> ₱${subtotal.toFixed(2)}</p>
          <p><strong>Interest:</strong> ₱${interest.toFixed(2)}</p>
          <p class="text-xl font-bold"><strong>Grand Total:</strong> ₱${totalAmount.toFixed(2)}</p>
        </div>
      </div>
    `;
    setGeneratedContract(contract);
  };

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/portfolio", text: "Portfolio" },
    { href: "/portfolio/menstribe-bulk-order", text: "Menstribe Bulk Order" },
  ];

  return (
    <>
      <HeroSub
        title="Menstribe Bulk Order & Contract Creator"
        description="Simulate the creation of a bulk order with dynamic pricing and contract generation."
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className="bg-gray-50 dark:bg-darkmode text-gray-900 dark:text-white min-h-screen py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6 border-b-2 border-green-500 pb-2 text-center">
              Interactive Bulk Order & Contract Generator
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Order Form */}
              <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Order Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2 font-medium">Client Name</label>
                    <input type="text" value={clientName} onChange={(e) => { setClientName(e.target.value); setGeneratedContract(null); setError(null); }} className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Payment Terms (Days)</label>
                    <input type="number" value={paymentTerms} onChange={(e) => { setPaymentTerms(e.target.value); setGeneratedContract(null); setError(null);}} className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary" />
                  </div>
                  <hr className="my-4 border-gray-300 dark:border-gray-600"/>
                  <h4 className="font-semibold text-lg mb-2">Order Items</h4>
                  {orderItems.map((item, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 items-center mb-2">
                      <select value={item.productId} onChange={(e) => handleItemChange(index, 'productId', e.target.value)} className="w-full p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600">
                        {mockProducts.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                      </select>
                      <input type="number" value={item.quantity} onChange={(e) => handleItemChange(index, 'quantity', e.target.value)} className="w-1/3 p-2 rounded bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary" placeholder="Qty" />
                      <button onClick={() => removeItem(index)} className="text-red-500 hover:text-red-700 p-2 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
                      </button>
                    </div>
                  ))}
                  <button onClick={addItem} className="text-blue-500 hover:underline mt-2">
                    + Add Item
                  </button>
                </div>
                 <div className="mt-6 border-t border-gray-300 dark:border-gray-600 pt-4">
                   <p className="text-xl font-bold">Total: ₱{totalAmount.toFixed(2)}</p>
                   {error && <p className="text-red-500 mt-2">{error}</p>}
                   <button onClick={generateContract} className="w-full mt-4 bg-primary text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-xl font-bold">
                     Generate Contract
                   </button>
                 </div>
              </div>
              
              {/* Generated Contract */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Generated Contract</h3>
                <div className="bg-gray-100 dark:bg-gray-900 p-6 rounded-lg min-h-[400px] border border-gray-300 dark:border-gray-600 overflow-auto">
                  {generatedContract ? (
                    <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: generatedContract }} />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-gray-500">Contract will appear here once generated.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenstribeBulkOrderPage;
