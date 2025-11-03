import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Goal, Users, Vote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'heroBanner');

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <section className="relative w-full h-[70vh] md:h-[90vh]">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl font-headline font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Empowering Citizens. Building the Nation.
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/90">
            We the People Stage (WTPS) is a national trust dedicated to strengthening democracy, Public Policy making and driving inclusive socio-economic development across the Nation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/get-involved">
                Join the Movement
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/policy-reform">
                Our Initiatives
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-primary font-semibold uppercase tracking-wider">Who We Are</span>
              <h2 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">
                We the People Stage
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Our mission is to empower citizens through education, awareness, and action — creating a society that values transparency, equality, and participation in nation-building. We work across the fields of education, health, women and child welfare, skill development, sustainable growth, and electoral awareness, aligning our efforts with the United Nations Sustainable Development Goals (SDGs).
              </p>
              <Button asChild variant="link" className="px-0 text-lg text-primary">
                <Link href="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <p className="text-muted-foreground md:text-lg">
                At We the People Stage, we believe that real change begins with informed citizens. By connecting communities, NGOs, policymakers, and youth leaders, we strive to make governance more responsive and development more people-centric.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center text-center p-6 bg-background rounded-lg shadow-md">
                  <Users className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold font-headline">Community First</h3>
                  <p className="text-sm text-muted-foreground mt-1">Building bridges and fostering dialogue.</p>
                </div>
                <div className="flex flex-col items-center justify-center text-center p-6 bg-background rounded-lg shadow-md mt-8">
                  <Goal className="h-10 w-10 text-primary mb-3" />
                  <h3 className="text-xl font-bold font-headline">Impact-Driven</h3>
                  <p className="text-sm text-muted-foreground mt-1">Empowering citizens and influencing policy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 md:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-4">
            <span className="text-primary font-semibold uppercase tracking-wider">Take Action</span>
            <h2 className="text-4xl font-headline font-bold tracking-tighter md:text-5xl">
              Ready to Make a Difference?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Your support is crucial to our mission. Whether you donate, volunteer, or spread the word, you are contributing to a more harmonious society.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/get-involved">
                Explore Ways to Contribute <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}