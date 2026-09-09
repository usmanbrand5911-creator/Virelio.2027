'use client';
import { useState, useEffect } from 'react';

export default function UserNotificationsPage() {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Task Approved!', desc: 'Your submission for "Follow on TikTok" was verified and PKR 150 added to your wallet.', time: '2 hours ago' },
    { id: 2, title: 'Withdrawal Processed', desc: 'Your payout request of PKR 1,500 via EasyPaisa has been successfully sent.', time: 'Yesterday' }
  ]);

  return (
    <div className="min-h-[80vh] py-12 px-4 max-w-3xl mx-auto text-gray-300">
      <h1 className="text-3xl font-extrabold text-white mb-6">Your Notifications</h1>
      <div className="space-y-4">
        {notifications.map((n) => (
          <div key={n.id} className="p-5 bg-gray-900 border border-gray-800 rounded-2xl flex flex-col space-y-1">
            <div className="flex justify-between items-center">
              <h2 className="text-base font-bold text-cyan-400">{n.title}</h2>
              <span className="text-xs text-gray-500">{n.time}</span>
            </div>
            <p className="text-xs text-gray-300">{n.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
