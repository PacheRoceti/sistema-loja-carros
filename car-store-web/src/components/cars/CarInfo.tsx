type CarInfoProps = {
  brand: string;
  name: string;
  year: number;
  price: number;
  description?: string;
};

export function CarInfo({
  brand,
  name,
  year,
  price,
  description,
}: CarInfoProps) {
  return (
    <section className="space-y-6">
      {/* Marca + ano */}
      <p className="text-xs uppercase tracking-widest text-neutral-500">
        {brand} • {year}
      </p>

      {/* Nome do carro */}
      <h1 className="text-4xl font-semibold leading-tight text-neutral-900">
        {name}
      </h1>

      {/* Preço */}
      <div className="pt-2">
        <p className="text-sm text-neutral-500">Preço</p>
        <p className="text-3xl font-bold text-neutral-900">
          {price
            ? `R$ ${price.toLocaleString('pt-BR')}`
            : 'Sob consulta'}
        </p>
      </div>

      {/* Descrição */}
      {description && (
        <div className="pt-6 border-t border-neutral-200">
          <p className="text-base leading-relaxed text-neutral-600">
            {description}
          </p>
        </div>
      )}
    </section>
  );
}
