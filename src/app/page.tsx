import FractalAngel from "./FractalAngel";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-start justify-items-center min-h-screen px-4 sm:px-0 pb-20 gap-12 sm:gap-16 font-sans bg-bg text-fg">
      <main className="flex flex-col gap-8 sm:gap-[32px] row-start-1 items-center sm:items-start w-full">
        <FractalAngel />
        <p
          className="mx-auto w-full max-w-[420px] rounded-xl px-5 py-3 text-base sm:text-lg font-medium text-center sm:text-left leading-6 mt-[-1.2rem] text-white"
        >
          I’m Luxsan — a builder on-chain, driven by a vision to help humanity
          reach Kardashev Scale 1. Rooted in Christ, inspired by ancient wisdom,
          and obsessed with code, I see technology, spirit, and matter as one. In
          this new era of freedom, I’m here to create, connect, and lead the
          movement toward a more conscious world.
        </p>
        <div className="mb-12 mt-2 web3-logos move-up-socials">
          <a
            href="#"
            className="transition-transform hover:scale-110"
            style={{ color: "#00e0ff" }}
            aria-label="GitHub"
          >
            <img
              src="/Github.svg"
              alt="GitHub Logo"
              width={45}
              height={45}
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </a>
          <a
            href="#"
            className="transition-transform hover:scale-110"
            style={{ color: "#00e0ff" }}
            aria-label="X / Twitter"
          >
            <img
              src="/X.svg"
              alt="X Logo"
              width={45}
              height={45}
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </a>
          <a
            href="#"
            className="transition-transform hover:scale-110"
            style={{ color: '#8D5BFF' }}
            aria-label="Farcaster"
          >
            <img
              src="/Farcaster.svg"
              alt="Farcaster Logo"
              width={45}
              height={45}
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </a>
          <a
            href="#"
            className="transition-transform hover:scale-110"
            style={{ color: '#16FF99' }}
            aria-label="Zora"
          >
            <img
              src="/Zora.svg"
              alt="Zora Logo"
              width={45}
              height={45}
              style={{ display: 'inline-block', verticalAlign: 'middle' }}
            />
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-subtle text-xs">
        © {new Date().getFullYear()} Luxsan. All rights reserved.
      </footer>
    </div>
  );
}
