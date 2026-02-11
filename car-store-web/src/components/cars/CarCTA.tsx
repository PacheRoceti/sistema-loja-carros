type CarCTAProps = {
  price: number;
};

export function CarCTA({ price }: CarCTAProps) {
  return (
    <aside className="sticky top-24">
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 space-y-6 shadow-sm">
        {/* Preço */}
        <div>
          <p className="text-sm uppercase tracking-wide text-neutral-500">
            Valor
          </p>
          <p className="text-3xl font-bold text-neutral-900">
            {price
              ? `R$ ${price.toLocaleString('pt-BR')}`
              : 'Sob consulta'}
          </p>
        </div>

        {/* Botão principal */}
        <button
          className="w-full rounded-xl bg-black px-5 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800"
        >
          Entrar em contato
        </button>

        {/* Info auxiliar */}
        <p className="text-xs text-neutral-500 text-center">
          Fale diretamente com o vendedor
        </p>
      </div>
    </aside>
  );
}
