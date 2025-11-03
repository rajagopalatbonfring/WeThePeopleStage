import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Handshake, Megaphone, Pencil, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function GetInvolvedPage() {
  const involvedImage = PlaceHolderImages.find((img) => img.id === 'getInvolved');

  return (
    <>
      <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
        {involvedImage && (
            <Image
                alt={involvedImage.description}
                className="absolute inset-0 w-full h-full object-cover"
                fill
                src={involvedImage.imageUrl}
                data-ai-hint={involvedImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative container px-4 md:px-6 text-center text-foreground">
            <div className="max-w-3xl mx-auto">
                <span className="text-primary font-semibold uppercase tracking-wider">Join the Movement</span>
                <h1 className="text-5xl font-bold font-headline tracking-tighter sm:text-6xl mt-4">
                    Be part of our mission to build a cleaner, fairer, and more empowered India.
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-muted-foreground md:text-xl">
                   Act as a Pressure Group for Policy making. Your support — through partnerships, volunteering, or donations — helps us take one step closer to a stronger democracy.
                </p>
                <div className="mt-10 flex flex-col gap-4 min-[400px]:flex-row justify-center">
                    <Button asChild size="lg">
                    <a href="mailto:volunteer@peoplestageindia.com">Volunteer With Us</a>
                    </Button>
                    <Button asChild size="lg" variant="secondary">
                    <Link href="/donate">Donate Now</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      <section id="volunteer" className="w-full py-20 md:py-32 bg-muted/50 scroll-mt-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-3">
              <h2 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">How You Can Contribute</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                We offer diverse roles to match your interests and availability. Find where your skills can create the most impact.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
            <Card className="shadow-lg bg-card text-center transition-transform transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Handshake className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl">Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Collaborate with us on projects, co-host events, or become a strategic partner to amplify our collective impact.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-card text-center transition-transform transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Pencil className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl">Volunteering</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Lend your skills in research, community outreach, event management, or digital campaigns.</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg bg-card text-center transition-transform transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                  <Megaphone className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-2xl">Donations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Your financial support fuels our on-the-ground initiatives and helps us reach more communities.</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-16 bg-card rounded-lg p-8 max-w-3xl mx-auto border">
              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-headline font-bold">Ready to Get Involved?</h3>
              <p className="text-lg mt-2 text-muted-foreground">We'd love to hear from you. Send us an email to get started.</p>
              <Button asChild className="mt-6">
                <a href="mailto:info@peoplestageindia.com" className="font-semibold">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4"/>
                </a>
              </Button>
          </div>
        </div>
      </section>
    </>
  );
}