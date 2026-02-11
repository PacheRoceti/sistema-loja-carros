import Image from 'next/image';

type CarGalleryProps = {
  images: string[];
};

export function CarGallery({ images }: CarGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={images[0]}
          alt="Imagem principal do carro"
          fill
          className="object-cover"
        />
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.slice(1).map((img, index) => (
          <div
            key={index}
            className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100"
          >
            <Image
              src={img}
              alt={`Imagem ${index + 2}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
