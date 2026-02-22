"use client";

import Link from "next/link";
import Image from "next/image";
import { X, Phone, Mail, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  links: { name: string; href: string }[];
  pathname: string;
}

export function MobileNav({ isOpen, onClose, links, pathname }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-forest-950/95 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Content */}
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-forest-950 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Image
                src="/logo.png"
                alt="Forest Resources Inc."
                width={40}
                height={40}
                className="object-contain"
              />
              <button
                onClick={onClose}
                className="p-2 text-white/70 hover:text-white transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-8 gap-2">
              {links.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`block py-4 text-2xl font-serif font-bold transition-colors ${
                        isActive
                          ? "text-forest-400"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="p-8 border-t border-white/10 space-y-4"
            >
              <a
                href="tel:2172591500"
                className="flex items-center gap-3 text-forest-300 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span className="text-sm font-medium">217-259-1500</span>
              </a>
              <a
                href="mailto:perrybushue@forestresourcesinc.com"
                className="flex items-center gap-3 text-forest-300 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm font-medium">
                  perrybushue@forestresourcesinc.com
                </span>
              </a>
              <div className="flex items-center gap-3 text-forest-300/60">
                <MapPin size={16} />
                <span className="text-sm">Shumway, IL</span>
              </div>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
