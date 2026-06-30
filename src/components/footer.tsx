import Logo from './logo';

const elsewhere = [
  { label: 'GitHub', href: 'https://github.com/danbovey' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/danbovey' },
  { label: 'Polycorp', href: 'https://polycorp.ltd' },
  { label: 'CV ↓', href: '/Dan-Bovey-CV.pdf' }
];

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[1180px] px-5 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8" />
            <div>
              <p className="text-base font-bold tracking-tight">Dan Bovey</p>
              <p className="meta mt-0.5">Software Engineer · London</p>
            </div>
          </div>

          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {elsewhere.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="navlink"
                  target="_blank"
                  rel="me noopener"
                >
                  {item.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
