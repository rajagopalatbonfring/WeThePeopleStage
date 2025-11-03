import {
  Card, CardContent, CardHeader, CardTitle
} from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Shield, Building, Globe, Landmark, Scale, BookOpen } from 'lucide-react';
import Image from 'next/image';

const electoralInitiatives = [
    "100% voter participation and electoral literacy",
    "Campaign finance transparency and ethical funding",
    "Digitization and accountability in election processes",
    "Collaboration with Election Commission and civic bodies",
];

const economicInitiatives = [
    "Employment generation through skill-based reforms",
    "Micro, small, and social enterprise development",
    "Financial literacy and empowerment for marginalized groups",
    "Advocacy for equitable access to economic opportunities",
];

const environmentalInitiatives = [
    "Clean energy and renewable resource management",
    "Waste reduction and environmental education",
    "Green innovation and sustainability awareness campaigns"
];

export default function PolicyReformPage() {
  const reformImage = PlaceHolderImages.find(img => img.id === 'policyReform');

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
            <span className="text-primary font-semibold uppercase tracking-wider">Policy Reforms</span>
            <h1 className="text-5xl font-bold font-headline tracking-tighter sm:text-6xl">
                Driving Transparency. Strengthening Democracy. Empowering Citizens.
            </h1>
            <p className="text-muted-foreground md:text-xl">
                At We the People Stage (WTPS), we believe that good governance is the foundation of a strong democracy. Our Policy Reforms Division works to influence and support evidence-based, people-driven policies that promote transparency, accountability, and inclusive development.
            </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
            <div className="space-y-8">
                <Card className="bg-card flex flex-col transition-all hover:shadow-primary/20 hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Landmark className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Electoral and Governance Reforms</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p className="text-muted-foreground">We actively advocate for clean elections and a corruption-free political process through awareness, research, and citizen engagement.</p>
                        <ul className="space-y-2 text-muted-foreground">
                            {electoralInitiatives.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-muted-foreground pt-4 border-t">By fostering responsible participation, WTPS helps build a culture of trust and integrity in governance.</p>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
                <Card className="bg-card flex flex-col transition-all hover:shadow-primary/20 hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Scale className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Economic and Social Policy Reforms</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p className="text-muted-foreground">WTPS supports reforms that strengthen India’s economic liberalization, entrepreneurship, and social equity. We facilitate dialogue between citizens, experts, and policymakers to ensure that growth remains inclusive and sustainable.</p>
                        <ul className="space-y-2 text-muted-foreground">
                            {economicInitiatives.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-8">
                <Card className="bg-card flex flex-col transition-all hover:shadow-primary/20 hover:-translate-y-1">
                    <CardHeader>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <Globe className="h-6 w-6" />
                            </div>
                            <CardTitle className="font-headline text-2xl">Environmental and Sustainable Development Policies</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-4">
                        <p className="text-muted-foreground">In alignment with the United Nations Sustainable Development Goals (SDGs), WTPS encourages eco-conscious policy frameworks that ensure sustainable resource use and climate resilience.</p>
                        <ul className="space-y-2 text-muted-foreground">
                            {environmentalInitiatives.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>

        <div className="mt-24 md:mt-32 p-8 md:p-12 rounded-lg bg-card border flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="h-10 w-10" />
                </div>
            </div>
            <div className="flex-grow">
                <h3 className="text-3xl font-bold font-headline">Constitutional Awareness and Civic Education</h3>
                <p className="mt-4 text-muted-foreground text-lg">
                    A strong democracy begins with informed citizens. Our programmes on constitutional literacy help students, NGOs, and communities understand their rights, duties, and responsibilities as active participants in governance. Through workshops, seminars, and research forums, we aim to bridge the gap between people and policy, nurturing a more aware and empowered electorate.
                </p>
            </div>
        </div>
        
        <div className="mt-24 text-center">
            <h2 className="text-4xl font-headline font-bold">Collaborate for Change</h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                We invite academia, policymakers, NGOs, and citizens to join us in shaping India’s reform journey. Together, we can create policies that serve people — not just systems.
            </p>
        </div>
      </div>
    </div>
  );
}