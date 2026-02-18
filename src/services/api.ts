const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api<T>(path: string): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Erro ao buscar dados da API');
  }

  return res.json();
}
