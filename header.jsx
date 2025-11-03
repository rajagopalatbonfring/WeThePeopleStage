"use client";

import { Landmark, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/policy-reform", label: "Policy Reforms" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/gallery", label: "Gallery" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Image
            src="https://i.imgur.com/BCfU42W.png"
            alt="We the People Stage Logo"
            width={180}
            height={40}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300",
                pathname === link.href
                  ? "text-primary after:w-full"
                  : "text-foreground/70"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:flex">
            <Button asChild variant="secondary">
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-background">
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-10">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Image
                      src="https://i.imgur.com/BCfU42W.png"
                      alt="We the People Stage Logo"
                      width={150}
                      height={32}
                      className="object-contain"
                    />
                  </Link>
                </div>
                <nav className="flex flex-col gap-6 text-xl font-medium">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "transition-colors hover:text-primary",
                        pathname === link.href
                          ? "text-primary font-semibold"
                          : "text-foreground/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <Button asChild size="lg" variant="secondary">
                    <Link href="/donate" onClick={() => setIsMenuOpen(false)}>
                      Donate Now
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}