import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center px-8 text-center">
      <div>
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
          404
        </p>
        <h1 className="mt-4 font-display text-[64px] font-light leading-none tracking-tight">
          Página não encontrada
        </h1>
        <Link
          to="/"
          className="mt-8 inline-block border-b border-ink pb-0.5 font-mono text-[12px] uppercase tracking-[0.14em] hover:text-burgundy hover:border-burgundy"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
