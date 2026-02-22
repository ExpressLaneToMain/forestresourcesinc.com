import Link from "next/link";
import Image from "next/image";
import { Facebook } from "lucide-react";

const serviceLinks = [
  { name: "Forest Stewardship Plans", href: "/services/forest-stewardship-plans" },
  { name: "Tree Planting", href: "/services/tree-planting" },
  { name: "Wildlife Enhancement", href: "/services/wildlife-enhancement" },
  { name: "Timber Appraisals & Sales", href: "/services/timber-appraisals-sales" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "All Services", href: "/services" },
  { name: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 relative overflow-hidden">
      {/* Organic top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-forest-600/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <Image
                src="/logo.png"
                alt="Forest Resources Inc."
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-white font-serif font-bold text-lg">
                Forest Resources Inc
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Comprehensive forestry services for Central & Southern Illinois.
              Over 20 years of experience in timber and land management.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-forest-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-forest-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-5">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p>Perry Bushue</p>
              <p>Shumway, IL</p>
              <a
                href="mailto:perrybushue@forestresourcesinc.com"
                className="block hover:text-forest-400 transition-colors"
              >
                perrybushue@forestresourcesinc.com
              </a>
              <a
                href="tel:2172591500"
                className="block text-white font-semibold hover:text-forest-400 transition-colors"
              >
                217-259-1500
              </a>
              <a
                href="https://www.facebook.com/forestresources007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-forest-400 transition-colors"
              >
                <Facebook size={18} />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-2">
          <p>
            Copyright &copy; {new Date().getFullYear()} - All rights reserved
            by Forest Resources Inc
          </p>
          <p>Serving Central & Southern Illinois</p>
        </div>
      </div>
    </footer>
  );
}
