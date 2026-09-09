export default function TermsPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-black text-amber-400">Terms & Conditions</h1>
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl space-y-4 text-slate-300 text-sm">
        <p>Welcome to Virelio. By accessing our platform, you agree to comply with our community guidelines and terms of service.</p>
        <h3 className="font-bold text-white">1. Account Security</h3>
        <p>Users are responsible for maintaining the confidentiality of their login credentials and Firebase accounts.</p>
        <h3 className="font-bold text-white">2. Fair Usage</h3>
        <p>Any malicious activity or automated bot usage will result in permanent account suspension.</p>
      </div>
    </div>
  );
}
