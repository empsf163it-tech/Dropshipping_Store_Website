import React, { useState } from 'react';
import { Github, X, Copy, Check, ExternalLink, Globe, Terminal, Sparkles, Layers, Server } from 'lucide-react';

interface GitHubDeployModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubDeployModal: React.FC<GitHubDeployModalProps> = ({ isOpen, onClose }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);
  const [username, setUsername] = useState('your-username');
  const [repoName, setRepoName] = useState('dropflow-dtc');

  if (!isOpen) return null;

  const publicUrl = `https://${username || 'your-username'}.github.io/${repoName || 'dropflow-dtc'}/`;

  const gitCommands = `# 1. Initialize Git repository (if not already initialized)
git init
git add .
git commit -m "Deploy DropFlow to GitHub Pages"

# 2. Add your GitHub repository remote
git remote add origin https://github.com/${username || 'your-username'}/${repoName || 'dropflow-dtc'}.git
git branch -M main

# 3. Push code to GitHub (Triggers automated GitHub Pages deployment)
git push -u origin main`;

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800 text-white shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black tracking-tight flex items-center gap-2">
                Host on GitHub Pages
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Ready & Configured
                </span>
              </h3>
              <p className="text-xs text-zinc-400">Deploy your store for free and get custom permanent URLs for multiple usages</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Quick Answer Box */}
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs leading-relaxed space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-400 text-sm">
              <Sparkles className="w-4 h-4" /> Yes! You can host this app on GitHub Pages completely for free!
            </div>
            <p>
              We have pre-configured <code className="text-amber-200 bg-amber-950/50 px-1 py-0.5 rounded">vite.config.ts</code> with relative base paths and included a turnkey <code className="text-amber-200 bg-amber-950/50 px-1 py-0.5 rounded">.github/workflows/deploy.yml</code> workflow. Simply push your code to GitHub, and your app will automatically deploy to a live URL!
            </p>
          </div>

          {/* Interactive URL Generator */}
          <div className="p-5 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Globe className="w-4 h-4 text-amber-400" /> Interactive URL Generator for Multiple Usages
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Your GitHub Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value.trim())}
                  placeholder="e.g. john-doe"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500/50"
                />
              </div>
              <div>
                <label className="text-[11px] font-semibold text-zinc-400 block mb-1">Repository Name (or Project Instance)</label>
                <input
                  type="text"
                  value={repoName}
                  onChange={(e) => setRepoName(e.target.value.trim())}
                  placeholder="e.g. dropflow-dtc or shop-v2"
                  className="w-full px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-500/50"
                />
              </div>
            </div>

            {/* Generated URL Box */}
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <span className="text-[10px] text-zinc-500 font-bold uppercase block">Your Live GitHub Pages URL:</span>
                <span className="text-xs font-mono font-bold text-amber-400 truncate block">{publicUrl}</span>
              </div>
              <button
                onClick={() => handleCopy(publicUrl, 'url')}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-white flex items-center gap-1.5 transition shrink-0"
              >
                {copiedCmd === 'url' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copiedCmd === 'url' ? 'Copied URL!' : 'Copy URL'}
              </button>
            </div>
          </div>

          {/* Deployment Step-by-Step */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
              <Terminal className="w-4 h-4 text-emerald-400" /> Step-by-Step Deployment Instructions
            </h4>

            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-zinc-950 text-[11px] font-black flex items-center justify-center">1</span>
                  Push Code to GitHub
                </span>
                <button
                  onClick={() => handleCopy(gitCommands, 'commands')}
                  className="text-xs text-amber-400 hover:underline flex items-center gap-1"
                >
                  {copiedCmd === 'commands' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCmd === 'commands' ? 'Copied Commands' : 'Copy Commands'}
                </button>
              </div>
              <pre className="p-3 rounded-xl bg-zinc-900 text-amber-200/90 font-mono text-[11px] overflow-x-auto border border-zinc-800 leading-relaxed">
                {gitCommands}
              </pre>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-zinc-950 text-[11px] font-black flex items-center justify-center">2</span>
                Enable GitHub Actions Deployment in Repo Settings
              </span>
              <ol className="text-xs text-zinc-400 list-decimal list-inside space-y-1 pl-1 leading-relaxed">
                <li>Go to your GitHub repository at <code className="text-zinc-200">github.com/{username}/{repoName}</code>.</li>
                <li>Click <strong>Settings</strong> → <strong>Pages</strong> (on the left menu).</li>
                <li>Under <strong>Build and deployment</strong> → <strong>Source</strong>, select <strong className="text-amber-400">GitHub Actions</strong>.</li>
                <li>Wait 1-2 minutes for the automated workflow to run!</li>
              </ol>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 space-y-2">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-amber-500 text-zinc-950 text-[11px] font-black flex items-center justify-center">3</span>
                Multiple Usages & Multiple URLs
              </span>
              <p className="text-xs text-zinc-400 leading-relaxed">
                You can create multiple GitHub repositories (e.g. <code className="text-zinc-200">store-us</code>, <code className="text-zinc-200">store-eu</code>, <code className="text-zinc-200">demo-app</code>) or multiple branches, and each will give you a distinct live URL!
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-zinc-300">
                  <span className="text-zinc-500 block">Main Store URL:</span>
                  https://{username}.github.io/{repoName}/
                </div>
                <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-zinc-300">
                  <span className="text-zinc-500 block">Staging/Secondary Store URL:</span>
                  https://{username}.github.io/dropflow-staging/
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-950 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] text-zinc-400">
            <Server className="w-4 h-4 text-emerald-400" />
            <span>Static SPA Build • Pre-configured for GitHub Pages</span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs transition"
          >
            Got it, Close
          </button>
        </div>
      </div>
    </div>
  );
};
