export default function LatestArticlesPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-white p-6 max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-extrabold mb-4 screenshot-gradient">Latest Articles</h1>
      <p className="text-gray-400 text-sm mb-8">Recently published micro-tasking updates and online earning strategies.</p>
      <div className="space-y-4">
        <div className="bg-gray-900 border border-gray-800 p-6 rounded-3xl">
          <span className="text-xs text-emerald-400 font-bold">New • Today</span>
          <h2 className="text-lg font-bold mt-1">New TikTok & YouTube Task Categories Added</h2>
          <p className="text-xs text-gray-400 mt-2">Check out the latest high-paying tasks available now in your dashboard.</p>
        </div>
      </div>
    </div>
  );
}
