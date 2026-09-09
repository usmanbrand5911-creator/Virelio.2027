export default function WalletPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-black text-amber-400">My Wallet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <p className="text-xs text-slate-400">Total Balance</p>
          <p className="text-3xl font-black text-amber-400 mt-2">$0.00</p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
          <p className="text-xs text-slate-400">Pending Withdrawals</p>
          <p className="text-3xl font-black text-green-400 mt-2">$0.00</p>
        </div>
      </div>
    </div>
  );
}
