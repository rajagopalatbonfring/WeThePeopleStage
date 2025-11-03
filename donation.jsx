"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';
import { Copy, Banknote, CreditCard, Heart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function DonatePage() {
  const qrImage = PlaceHolderImages.find((img) => img.id === 'donationQR');
  const { toast } = useToast();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: 'Copied to clipboard!',
        description: text,
      });
    });
  };

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center space-y-4">
            <div className="inline-block rounded-full bg-primary/10 p-4 text-primary">
                <Heart className="h-10 w-10" />
            </div>
          <h1 className="text-5xl font-bold font-headline tracking-tighter sm:text-6xl">
            Your Support Builds a Stronger Nation
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Every contribution — big or small — helps us take one step closer to a cleaner, fairer, and more empowered India. At We the People Stage (WTPS), we rely on the generosity of citizens, institutions, and corporate partners to sustain our initiatives in education, health, women empowerment, skill development, and democratic reforms.
          </p>
           <p className="text-muted-foreground md:text-xl">
            Your donation directly supports programs that educate youth, empower women, promote clean elections, and strengthen civic participation across India.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
                <Card className="shadow-lg bg-card sticky top-24">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">Why Donate to WTPS?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>Registered Non-Profit Trust under the Indian Registration Act</p>
                        <p>80G Tax Exemption available under the Income Tax Act, 1961</p>
                        <p>Transparent accounting and donor reporting system</p>
                        <p>Real impact through education, empowerment, and advocacy</p>
                        <p>Supporting national goals aligned with UN Sustainable Development Goals (SDGs)</p>
                    </CardContent>
                </Card>
            </div>
            <div className="md:col-span-3">
                 <Card className="shadow-lg bg-card">
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl">Direct Bank Transfer</CardTitle>
                    <CardDescription>
                        Use the details below for NEFT/RTGS/IMPS transfers.
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-5 text-base">
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Account Name:</span>
                            <span className="font-medium text-foreground">We the People Stage</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Account Number:</span>
                            <span className="font-medium text-foreground">[Insert Number]</span>
                        </div>
                         <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Bank Name:</span>
                            <span className="font-medium text-foreground">Bank of Baroda</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">IFSC Code:</span>
                            <span className="font-medium text-foreground">[Insert IFSC]</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-muted-foreground">Branch:</span>
                            <span className="font-medium text-foreground">[Insert Branch Name]</span>
                        </div>
                        <p className="text-sm text-muted-foreground pt-4 border-t">
                            Please email your transaction details to <a href="mailto:info@peoplestageindia.com" className="text-primary hover:underline">info@peoplestageindia.com</a> to receive your 80G donation receipt.
                        </p>
                    </CardContent>
                </Card>
                <Card className="shadow-lg mt-8 bg-card">
                    <CardHeader>
                        <CardTitle className="font-headline text-2xl">How Your Contribution Helps</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p><span className="font-bold">₹5,000</span> → Supports skill training for 10 rural youth</p>
                        <p><span className="font-bold">₹10,000</span> → Funds awareness workshops on clean elections</p>
                        <p><span className="font-bold">₹25,000</span> → Enables vocational programs for women and students</p>
                        <p><span className="font-bold">₹50,000+</span> → Empowers community-level campaigns and NGO partnerships</p>
                    </CardContent>
                </Card>
                 <Card className="shadow-lg mt-8 bg-card">
                    <CardHeader>
                    <CardTitle className="font-headline text-2xl">Other Ways to Support</CardTitle>
                    <CardDescription>
                       You may also support us through:
                    </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-base">
                       <ul className="list-disc list-inside text-muted-foreground space-y-2">
                           <li>Event Sponsorships (e.g., National Conclave on Clean Election)</li>
                           <li>Souvenir Advertisements & CSR Collaborations</li>
                           <li>Business Promotion Stalls at major WTPS events</li>
                       </ul>
                       <p className="text-muted-foreground pt-4 border-t">
                        All contributions are utilized ethically and transparently for socio-democratic development.
                       </p>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="mt-24 text-center">
             <h2 className="text-4xl font-headline font-bold">Join Hands with Us</h2>
             <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
               Be part of a movement that empowers citizens and transforms India. Together, let’s build a future driven by knowledge, equality, and participation.
            </p>
             <Button asChild size="lg" className="mt-8">
              <Link href="/get-involved">
                Join The Movement <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
        </div>
      </div>
    </div>
  );
}