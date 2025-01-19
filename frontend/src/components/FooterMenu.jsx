import React from "react";

const FooterMenu = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 sm:px-8 md:px-12 lg:px-24 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {/* Product Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Product</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Overview</li>
            <li>Features</li>
            <li className="flex items-center">
              Solutions
              <span className="ml-2 text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                New
              </span>
            </li>
            <li>Tutorials</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Blog</li>
            <li>Newsletter</li>
            <li>Events</li>
            <li>Help center</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>

        {/* Use Cases Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Use Cases</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Startups</li>
            <li>Enterprise</li>
            <li>Government</li>
            <li>SaaS center</li>
            <li>Marketplaces</li>
            <li>Ecommerce</li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Social</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Licenses</li>
            <li>Settings</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
