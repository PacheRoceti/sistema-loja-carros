import Image from "next/image";
import Link from "next/link";

type CarCardProps = {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: number;
  coverImage: string | null;
};

export function CarCard({
  id,
  name,
  brand,
  year,
  price,
  coverImage,
}: CarCardProps) {
  return (
    <Link
      href={`/cars/${id}`}
      className="group block overflow-hidden rounded-xl border border-neutral-200 transition hover:border-neutral-400"
    >
      {/* Imagem */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        {coverImage ? (
          <Image
            src={coverImage}
            alt={name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
            Sem imagem
          </div>
        )}
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          {brand} • {year}
        </p>

        <h2 className="mt-1 text-base font-medium">
          {name}
        </h2>

        <p className="mt-3 text-lg font-semibold">
          R$ {price.toLocaleString("pt-BR")}
        </p>
      </div>
    </Link>
  );
}
