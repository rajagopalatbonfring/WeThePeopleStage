import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BookOpen, Scale, Telescope, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((img) => img.id === 'aboutUs');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-primary font-semibold uppercase tracking-wider">Our Story</span>
            <h1 className="text-5xl font-bold font-headline tracking-tighter sm:text-6xl">
              We the People Stage
            </h1>
            <p className="text-muted-foreground text-lg">
              We the People Stage (WTPS) is a registered non-profit trust in India committed to promoting education, health, and socio-economic development, with a special focus on the Public Policy. We work to create awareness of the United Nations Sustainable Development Goals (SDGs) and conduct vocational and skill training programs for underprivileged communities and students—irrespective of caste, creed, colour, or religion.
            </p>
            <p className="text-muted-foreground text-lg">
              Our mission is to build capabilities, enhance livelihoods, and empower individuals to contribute meaningfully to society.
            </p>
          </div>
          {aboutImage && (
            <div className="w-full h-full">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={600}
                height={600}
                className="rounded-lg object-cover shadow-xl aspect-square"
                data-ai-hint={aboutImage.imageHint}
              />
            </div>
          )}
        </div>

        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">Our Purpose</h2>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">WTPS also partners with organizations, NGOs, and social enterprises to design customized advisory and learning solutions that strengthen human capital and organizational effectiveness. Through our capacity-building initiatives, we help NGOs adapt to global challenges with scalable, sustainable, and impact-driven programs that foster inclusive growth and nation-building.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="flex flex-col items-center space-y-4 p-8 rounded-lg bg-card shadow-lg transition-all hover:shadow-primary/20 hover:-translate-y-2">
              <BookOpen className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold font-headline">Mission</h3>
              <p className="text-muted-foreground">
                To promote education, empowerment, and ethical governance through research, training, and community-driven programs that strengthen democratic values.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-8 rounded-lg bg-card shadow-lg transition-all hover:shadow-primary/20 hover:-translate-y-2">
              <Telescope className="h-12 w-12 text-primary" />
              <h3 className="text-2xl font-bold font-headline">Vision</h3>
              <p className="text-muted-foreground">
                To create a vibrant, cultural, religious, Social Values informed, and empowered society where every citizen contributes to nation-building and sustainable development.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 md:mt-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-headline">Focus Areas</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-lg">
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>Women and child empowerment</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>Education and health awareness</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>Skill development and vocational training</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>Sustainable development goals (SDGs) advocacy</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>NGO capacity building and advisory services</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <span>Social entrepreneurship and youth empowerment</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}