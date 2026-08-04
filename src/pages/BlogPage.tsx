import React from 'react';
import { BLOG_POSTS } from '../data/storeData';
import { NotebookText, Timer, ArrowRight } from 'lucide-react';

export const BlogPage: React.FC = () => {
  return (
    <div className="bg-zinc-950 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <NotebookText className="w-3.5 h-3.5" />
            Engineering, Focus & Acoustics Journal
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight">DropFlow Technical Journal</h1>
          <p className="text-xs text-zinc-400 max-w-lg mx-auto">
            Deep-dive articles on circadian lighting science, acoustic driver physics, and ergonomic desk architecture.
          </p>
        </div>

        {/* Blog Posts List */}
        <div className="space-y-8">
          {BLOG_POSTS.map(post => (
            <div key={post.id} className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 rounded-3xl bg-zinc-900 border border-zinc-800 items-center">
              <div className="md:col-span-5 relative overflow-hidden rounded-2xl aspect-[16/10]">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="md:col-span-7 space-y-3">
                <div className="flex items-center gap-3 text-xs text-amber-400 font-bold">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span className="text-zinc-500 flex items-center gap-1 font-normal"><Timer className="w-3 h-3" /> {post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white hover:text-amber-300 transition cursor-pointer">{post.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{post.excerpt}</p>
                <div className="pt-2 text-[11px] text-zinc-500 flex items-center justify-between">
                  <span>By {post.author}</span>
                  <button className="text-amber-400 font-bold flex items-center gap-1 hover:underline">Read Article <ArrowRight className="w-3 h-3" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
