import React from 'react';

interface FooterLink {
  href: string;
  label: string;
}

const links: FooterLink[] = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" }
];

export function FooterLinks() {
  return (
    <div className="flex justify-center space-x-4 mb-4">
      {links.map((link) => (
        <a 
          key={link.label}
          href={link.href} 
          className="hover:text-[#019863]"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}