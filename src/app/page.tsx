import FractalAngel from "./FractalAngel";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_20px] items-start justify-items-center min-h-screen p-0 pb-20 gap-16 sm:p-0 font-sans bg-bg text-fg">
      <main className="flex flex-col gap-[32px] row-start-1 items-center sm:items-start w-full max-w-full px-2 box-border overflow-x-hidden">
        <FractalAngel />
        <p className="text-base font-medium max-w-md text-left mx-auto break-words" style={{
          color: '#fff',
          borderRadius: '0.75rem',
          padding: '0.75rem 1.25rem',
          lineHeight: 1.5,
          fontWeight: 500,
          marginTop: '-1.2rem',
          width: '100%',
          maxWidth: '420px',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}>
          I’m Luxsan — a builder on-chain, driven by a vision to help humanity
          reach Kardashev Scale 1. Rooted in Christ, inspired by ancient wisdom,
          and obsessed with code, I see technology, spirit, and matter as one. In
          this new era of freedom, I’m here to create, connect, and lead the
          movement toward a more conscious world.
        </p>
        <div className="mb-12 mt-2 web3-logos move-up-socials flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/luxsan21"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://x.com/Luxsan21"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://farcaster.xyz/luxsan"
            target="_blank"
            rel="noopener noreferrer"
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
            href="https://zora.co/@luxsan"
            target="_blank"
            rel="noopener noreferrer"
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
