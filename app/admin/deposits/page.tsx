'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DepositRequest {
  id: string;
  userName: string;
  userEmail: string;
  amount: number;
  mobileNumber: string;
  accountHolderName: string;
  idCardNumber: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

export default function AdminWalletDeposits() {
  const [deposits, setDeposits] = useState<DepositRequest[]>([]);
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending');

  useEffect(() => {
    // Initial dummy records simulating user submissions (Mobile, Account Name, CNIC)
    const mockRequests: DepositRequest[] = [
      {
        id: 'req-1',
        userName: 'Usman Brand',
        userEmail: 'usmanbrand5911@gmail.com',
        amount: 5000,
        mobileNumber: '03217351168',
        accountHolderName: 'Usman Ali',
        idCardNumber: '35202-9876543-1',
        status: 'pending',
        createdAt: '2026-06-09 14:30',
      },
      {
        id: 'req-2',
        userName: 'Ali Raza',
        userEmail: 'aliraza@example.com',
        amount: 12500,
        mobileNumber: '03001234567',
        accountHolderName: 'Ali Raza Khan',
        idCardNumber: '35201-1234567-9',
        status: 'pending',
        createdAt: '2026-06-09 15:10',
      },
    ];
    setDeposits(mockRequests);
  }, []);

  const handleAction = (id: string, newStatus: 'approved' | 'rejected') => {
    setDeposits(prev =>
      prev.map(item => (item.id === id ? { ...item, status: newStatus } : item))
    );
    alert(`Deposit request has been successfully ${newStatus}! User wallet updated.`);
  };

  const filteredDeposits = deposits.filter(item => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto">
      {/* Admin Top Navigation Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 border-b border-gray-800 pb-6">
        <div>
          <div className="flex items-center space-x-3 mb-1">
            <span className="px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold rounded-full">ADMIN PORTAL</span>
            <span className="text-xs text-gray-400">Secure Management</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Manual Wallet Deposit Approvals</h1>
        </div>
        <div className="flex items-center space-x-3">
          <Link href="/admin" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm rounded-xl transition border border-gray-700 font-medium">
            ← Back to Dashboard
          </Link>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {(['pending', 'approved', 'rejected', 'all'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold capitalize transition ${
              filter === tab
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-950 shadow-lg shadow-emerald-500/20'
                : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Deposits Table */}
      <div className="bg-gray-900/80 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-800/50 text-gray-400 text-xs uppercase tracking-wider border-b border-gray-800">
                <th className="p-4">User Info</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Mobile Number</th>
                <th className="p-4">Account Holder</th>
                <th className="p-4">CNIC / ID Card</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-sm">
              {filteredDeposits.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-gray-500">
                    No deposit requests found in this section.
                  </td>
                </tr>
              ) : (
                filteredDeposits.map(item => (
                  <tr key={item.id} className="hover:bg-gray-800/30 transition">
                    <td className="p-4">
                      <div className="font-bold text-white">{item.userName}</div>
                      <div className="text-xs text-gray-400">{item.userEmail}</div>
                      <div className="text-[10px] text-gray-500 mt-0.5">{item.createdAt}</div>
                    </td>
                    <td className="p-4 font-black text-emerald-400 text-base">
                      Rs. {item.amount.toLocaleString()}
                    </td>
                    <td className="p-4 font-mono text-cyan-300">{item.mobileNumber}</td>
                    <td className="p-4 text-gray-200 font-medium">{item.accountHolderName}</td>
                    <td className="p-4 font-mono text-xs text-gray-300 bg-gray-950/40 px-2 py-1 rounded border border-gray-800 w-fit">
                      {item.idCardNumber}
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                          item.status === 'pending'
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : item.status === 'approved'
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      {item.status === 'pending' ? (
                        <div className="flex items-center justify-center space-x-2">
                          <button
                            onClick={() => handleAction(item.id, 'approved')}
                            className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-emerald-600/20 transition"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleAction(item.id, 'rejected')}
                            className="px-3 py-1.5 bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs rounded-xl shadow-lg shadow-rose-600/20 transition"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-500 font-medium">Processed</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
