import FractalAngel from "./FractalAngel";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-start justify-items-center min-h-screen p-0 pb-20 gap-16 sm:p-0 font-sans bg-bg text-fg">
      <main className="flex flex-col gap-[32px] row-start-1 items-center sm:items-start w-full">
        <FractalAngel />
        <p className="text-base font-medium max-w-md text-left mx-auto" style={{
          color: '#fff',
          borderRadius: '0.75rem',
          padding: '0.75rem 1.25rem',
          lineHeight: 1.5,
          fontWeight: 500,
          marginTop: '-1.2rem',
          width: '100%',
          maxWidth: '420px',
        }}>
          I’m Luxsan — a builder on-chain, driven by a vision to help humanity
          reach Kardashev Scale 1. Rooted in Christ, inspired by ancient wisdom,
          and obsessed with code, I see technology, spirit, and matter as one. In
          this new era of freedom, I’m here to create, connect, and lead the
          movement toward a more conscious world.
        </p>
        <div className="flex gap-4 mb-8">
          <a
            href="#"
            className="transition-transform hover:scale-105"
            style={{ color: "#00e0ff" }}
            aria-label="GitHub"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
          </a>
          <a
            href="#"
            className="transition-transform hover:scale-105"
            style={{ color: "#9b5cff" }}
            aria-label="LinkedIn"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z" />
            </svg>
          </a>
          <a
            href="#"
            className="transition-transform hover:scale-105"
            style={{ color: "#00e0ff" }}
            aria-label="X / Twitter"
          >
            <svg
              width="28"
              height="28"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.162 0h-4.327l-5.835 8.26-5.835-8.26h-4.327l8.26 11.7-8.26 12.3h4.327l5.835-8.26 5.835 8.26h4.327l-8.26-12.3z" />
            </svg>
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-subtle text-xs">
        © {new Date().getFullYear()} Luxsan. All rights reserved.
      </footer>
    </div>
  );
}
