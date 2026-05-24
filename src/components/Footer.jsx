import React from 'react';

function Footer() {
  return (
    <footer className="border-t border-slate-700/50 bg-slate-950/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-2xl">🤖</span> AI Growth
            </h3>
            <p className="text-slate-400 text-sm">Exploring the exponential growth of artificial intelligence</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#hero" className="hover:text-indigo-400 transition">Home</a></li>
              <li><a href="#milestones" className="hover:text-indigo-400 transition">Milestones</a></li>
              <li><a href="#achievements" className="hover:text-indigo-400 transition">Achievements</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">Research</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">News</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition">Twitter</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">GitHub</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700/50 pt-8 text-center text-slate-400 text-sm">
          <p>&copy; 2026 The Growth of AI. Built with React & Tailwind CSS. Deployed on GitHub Pages.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;