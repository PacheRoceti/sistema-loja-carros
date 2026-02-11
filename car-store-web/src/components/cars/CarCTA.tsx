type CarCTAProps = {
  price: number;
};

export function CarCTA({ price }: CarCTAProps) {
  return (
    <div className="rounded-xl border border-neutral-200 p-6 space-y-4">
      <p className="text-3xl font-semibold">
        R$ {price.toLocaleString('pt-BR')}
      </p>

      <button
        className="w-full rounded-lg bg-black px-4 py-3 text-white transition hover:bg-neutral-800"
      >
        Entrar em contato
      </button>
    </div>
  );
}
