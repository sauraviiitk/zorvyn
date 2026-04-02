import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">
            FinTrackr
          </h2>
          <p className="text-sm">
            Smart financial management platform to track expenses,
            analyze spending, and grow your wealth efficiently.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Features
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">
              Expense Tracking
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Analytics Dashboard
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Financial Reports
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Budget Planning
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Support
          </h3>
          <p className="text-sm">Email: support@fintrackr.com</p>
          <p className="text-sm">Phone: +91 9876543210</p>
          <p className="text-sm mt-2">
            Built for modern finance management 🚀
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} FinTrackr. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;