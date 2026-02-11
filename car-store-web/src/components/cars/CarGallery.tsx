'use client';

import { useState } from 'react';
import Image from 'next/image';

type CarGalleryProps = {
  images: string[];
};

export function CarGallery({ images }: CarGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      {/* Imagem principal */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-neutral-100">
        <Image
          src={selectedImage}
          alt="Imagem principal do carro"
          fill
          className="object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((img, index) => {
          const isActive = img === selectedImage;

          return (
            <button
              key={index}
              type="button"
              onClick={() => setSelectedImage(img)}
              className={`relative aspect-[4/3] overflow-hidden rounded-lg border transition
                ${isActive
                  ? 'border-black'
                  : 'border-transparent hover:border-neutral-400'}
              `}
            >
              <Image
                src={img}
                alt={`Imagem ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
