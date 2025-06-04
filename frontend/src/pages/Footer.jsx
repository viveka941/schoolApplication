import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-emerald-400 mb-4">
            Discovery✶
          </h3>
          <p className="text-gray-400">
            Nurturing curious minds since 1982. Accredited by International
            Schools Association.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Admissions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Academics
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                Student Life
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                News & Events
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <address className="not-italic text-gray-400 space-y-2">
            <p>123 Education Lane</p>
            <p>Learning City, LC 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@discovery.edu</p>
          </address>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex gap-4">
            {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors"
                aria-label={social}
              >
                <span className="sr-only">{social}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Discovery Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
