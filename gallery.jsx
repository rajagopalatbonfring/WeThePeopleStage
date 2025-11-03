import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export default function GalleryPage() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery'));

  return (
    <div className="bg-background">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <span className="text-primary font-semibold uppercase tracking-wider">Visual Diary</span>
                <h1 className="text-5xl font-bold font-headline tracking-tighter sm:text-6xl">
                Our Journey in Pictures
                </h1>
                <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl">
                A glimpse into the heart of our activities, events, and the community we serve. See the change we're making, one moment at a time.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {galleryImages.map((image) => (
                <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-3">
                    <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    data-ai-hint={image.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4 md:p-6">
                        <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">{image.description}</p>
                    </div>
                </div>
                ))}
                {galleryImages.length === 0 && (
                <p className='col-span-full text-center text-muted-foreground py-12'>The gallery is currently empty. Check back soon for photos of our work!</p>
                )}
            </div>
        </div>
    </div>
  );
}