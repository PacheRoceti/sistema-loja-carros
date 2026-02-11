import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <Container>
        <div className="py-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} Pache. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
