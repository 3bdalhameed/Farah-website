import React from "react";
import logo from '../../pages/newimg/logo1.png';
import G1 from '../../pages/newimg/G1.png';
import G2 from '../../pages/newimg/G2.png';
import G3 from '../../pages/newimg/G3.png';
import G4 from '../../pages/newimg/G4.png';

function Social() {
  return (
    <>
      {/* Footer Section */}
      <footer className="bg-black text-white text-sm">
        {/* Middle Content */}
        <div className="flex flex-wrap justify-between items-center gap-8 py-8 px-4">
          {/* Contact Details */}
          <div className="flex-1 text-center md:text-left px-64 md:px-64">
            <h3 className="text-lg font-semibold mb-4">CONTACT DETAILS</h3>
            <p>1st Floor, 142 Northwood St, West Leederville</p>
            <p>(by appointment)</p>
            <p>PO Box 101, Mount Hawthorn WA 6915</p>
            <p>
              <a href="mailto:farah@whiteevents.com" className="hover:text-gray-400">
                farah@whiteevents.com
              </a>
            </p>
            <p>0414 184 341</p>
          </div>


          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <img src={logo} alt="Logo" className="w-40" />
          </div>

          {/* Footer Menu */}
          <div className="flex-1 text-center md:text-right px-64 md:px-64">
            <h3 className="text-lg font-semibold mb-4">MENU</h3>
            <ul className="space-y-2">
              {["HOME", "ABOUT", "SERVICES", "GALLERY", "TESTIMONIALS", "CONTACT"].map((menu, index) => (
                <li key={index}>
                  <a
                    href={`#${menu.toLowerCase()}`}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-4 text-center">
          <p>© White Events | Designed by Abdalhameed Aldaradkeh</p>
        </div>
      </footer>
    </>
  );
}

export default Social;
