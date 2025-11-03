import { Landmark, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full bg-card border-t">
      <div className="container mx-auto py-16 px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4 flex flex-col gap-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="https://i.imgur.com/BCfU42W.png"
                alt="We the People Stage Logo"
                width={180}
                height={40}
                className="object-contain"
               />
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
             A national trust dedicated to strengthening democracy and driving inclusive socio-economic development.
            </p>
            <div className="flex gap-2 mt-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
              </Button>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="grid gap-3">
              <h4 className="font-semibold font-headline text-lg">About Us</h4>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Our Mission</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Our Vision</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Focus Areas</Link>
            </div>
            <div className="grid gap-3">
              <h4 className="font-semibold font-headline text-lg">Get Involved</h4>
              <Link href="/get-involved" className="text-sm text-muted-foreground hover:text-primary">Volunteer</Link>
              <Link href="/policy-reform" className="text-sm text-muted-foreground hover:text-primary">Campaigns</Link>
              <Link href="/gallery" className="text-sm text-muted-foreground hover:text-primary">Events</Link>
            </div>
            <div className="grid gap-3">
              <h4 className="font-semibold font-headline text-lg">Support</h4>
              <Link href="/donate" className="text-sm text-muted-foreground hover:text-primary">Donate Now</Link>
              <Link href="/get-involved" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
            </div>
            <div className="grid gap-3">
              <h4 className="font-semibold font-headline text-lg">Newsletter</h4>
              <p className="text-sm text-muted-foreground">Stay updated with our latest news and initiatives.</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Your Email" className="bg-background"/>
                <Button type="submit" size="sm">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} We the People Stage. All Rights Reserved. | <Link href="#" className="hover:text-primary">Privacy Policy</Link> | <Link href="#" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}