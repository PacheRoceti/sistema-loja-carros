import Link from "next/link";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-neutral-200">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold tracking-tight"
          >
            CarStore
          </Link>

          <nav className="flex items-center gap-6 text-sm text-neutral-600">
            <Link href="/">Estoque</Link>
            <Link href="/admin/login">Admin</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}
