import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-24" style={{ backgroundColor: '#050a12' }} id="contacto">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-12 gap-16 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-3xl font-bold tracking-[0.2em] mb-6" style={{ color: 'var(--gold)' }}>
              REYTEK
            </h4>
            <p className="text-sm font-light leading-relaxed mb-8 max-w-sm" style={{ color: 'var(--cream-dark)' }}>
              El laboratorio dental de los especialistas.<br />
              40 años creando sonrisas perfectas en México.
            </p>
            <p className="text-xs font-light mb-8" style={{ color: 'var(--text-light)' }}>
              Certificado ADA • NBC • PTC
            </p>
          </div>

          {/* Products */}
          <div className="md:col-span-2">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-white">
              Productos
            </h5>
            <ul className="space-y-3 text-sm font-light" style={{ color: 'var(--cream-dark)' }}>
              <li>Alta Estética</li>
              <li>Libres de Metal</li>
              <li>Sobre Implante</li>
              <li>Removibles</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-white">
              Recursos
            </h5>
            <ul className="space-y-3 text-sm font-light" style={{ color: 'var(--cream-dark)' }}>
              <li>
                <a href="#" className="hover:opacity-70 transition-premium">
                  Descargar Receta
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70 transition-premium">
                  Lista de Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70 transition-premium">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-70 transition-premium">
                  Facturación
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h5 className="text-xs uppercase tracking-[0.2em] font-bold mb-6 text-white">
              Contacto
            </h5>
            <ul className="space-y-3 text-sm font-light" style={{ color: 'var(--cream-dark)' }}>
              <li>
                <a href="mailto:info@reyteklab.com" className="hover:opacity-70 transition-premium">
                  info@reyteklab.com
                </a>
              </li>
              <li>
                <a href="tel:+529999446160" className="hover:opacity-70 transition-premium">
                  (999) 944-6160
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs opacity-60">Mérida, Yucatán</span>
              </li>
              <li>
                <span className="text-xs opacity-60">CDMX</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-light" style={{ color: 'var(--text-light)' }}>
            © 2025 REYTEK LABORATORIO DENTAL. 40 AÑOS DEFINIENDO EL FUTURO.
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.facebook.com/Reyteklab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-medium transition-premium hover:opacity-70"
              style={{ color: 'var(--gold)' }}
            >
              FB
            </a>
            <a
              href="https://www.instagram.com/reyteklab/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-medium transition-premium hover:opacity-70"
              style={{ color: 'var(--gold)' }}
            >
              IG
            </a>
            <a
              href="https://mx.linkedin.com/company/laboratorio-dental-reytek"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-medium transition-premium hover:opacity-70"
              style={{ color: 'var(--gold)' }}
            >
              LI
            </a>
            <a
              href="https://www.youtube.com/channel/UCEQXDxzChUCXDYdnBFNHZfg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider font-medium transition-premium hover:opacity-70"
              style={{ color: 'var(--gold)' }}
            >
              YT
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
