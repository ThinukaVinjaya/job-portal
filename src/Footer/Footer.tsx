import React from 'react';
import { IconAnchor, IconBrandFacebook, IconBrandInstagram, IconBrandX } from '@tabler/icons-react';
import { footerLinks } from '../Data/Data';

const Footer = () => {
  return (
    <div className="mt-20 pb-10 flex flex-wrap gap-10 justify-around">

      {/* Left Section */}
      <div className="w-full md:w-1/4 flex flex-col gap-4">
        <div className="flex gap-2 items-center text-bright-sun-400">
          <IconAnchor className="h-6 w-6" stroke={2.5} />
          <div className="text-xl font-semibold">FindMyJob</div>
        </div>

        <p className="text-sm text-mine-shaft-300">
          Job portal with user profile, skill updates, certifications, work experience, and admin job postings.
        </p>

        {/* Social Icons */}
        <div className="flex gap-3 text-bright-sun-400">
          {[IconBrandFacebook, IconBrandInstagram, IconBrandX].map((Icon, i) => (
            <div
              key={i}
              className="bg-mine-shaft-900 p-2 rounded-full cursor-pointer transition hover:bg-mine-shaft-700"
            >
              <Icon size={20} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Links */}
      {footerLinks.map((item, idx) => (
        <div key={idx} className="min-w-[150px]">
          <div className="text-lg font-semibold mb-4 text-bright-sun-400">
            {item.title}
          </div>

          {item.links.map((link, i) => (
            <div
              key={i}
              className="text-mine-shaft-300 text-sm cursor-pointer mb-1 transition duration-300 hover:text-bright-sun-400 hover:translate-x-2"
            >
              {link}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer;
