export default function PrivacyPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-black text-amber-400">Privacy Policy</h1>
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 text-slate-300 text-sm">
        <p>Your privacy is important to us. We collect necessary authentication data to secure your account and manage your dashboard.</p>
        <h3 className="font-bold text-white">Data Protection</h3>
        <p>All data stored in Firebase Firestore is encrypted and handled securely. We never share your personal information with third parties.</p>
      </div>
    </div>
  );
}
