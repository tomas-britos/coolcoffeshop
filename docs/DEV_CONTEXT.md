# coolcoffeshop — Contexto de Desarrollo

## Stack Tecnológico

| Capa | Tecnología | Versión |
|------|------------|---------|
| **Framework** | Next.js (App Router) | latest |
| **Lenguaje** | TypeScript | latest |
| **Animaciones** | Framer Motion | latest |
| **Estilos** | Tailwind CSS | latest |
| **UI Icons** | Lucide React | latest |
| **Deploy** | Vercel | auto-deploy |

---

## Estructura del Proyecto

```
coolcoffeshop/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Landing page (todas las secciones)
│   └── globals.css         # Tailwind + custom styles
├── components/             # Componentes reutilizables
│   ├── ui/                 # Componentes base (Button, Card, etc.)
│   ├── sections/           # Secciones de la landing
│   └── animations/         # Componentes de animación
├── public/                 # Assets estáticos (imágenes, fonts)
├── lib/                    # Utilidades, constantes, datos
├── docs/                   # Documentación
│   ├── CONTEXT.md          # Contexto de marca y diseño
│   └── DEV_CONTEXT.md      # Este archivo
├── .github/                # GitHub Actions (future)
└── package.json
```

---

## Comandos de Desarrollo

```bash
# Instalar dependencias
npm install

# Levantar dev server (http://localhost:3000)
npm run dev

# Build de producción
npm run build

# Start producción (después de build)
npm start

# Lint
npm run lint

# Typecheck
npx tsc --noEmit
```

---

## Variables de Entorno

```env
# .env.local (desarrollo)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## Convenciones de Código

### Estructura de Componentes

```tsx
// components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* contenido */}
    </motion.section>
  )
}
```

### Estilos con Tailwind

- Mobile-first: siempre diseñar para móvil primero, luego `md:`, `lg:`
- Colores: usar la paleta definida en `tailwind.config.ts`
- Espaciado: usar escala de 4px (4, 8, 12, 16, 24, 32, 48, 64...)

### Nombres

- **Componentes**: PascalCase (`HeroSection`, `ProductCard`)
- **Archivos**: kebab-case (`hero-section.tsx`, `product-card.tsx`)
- **CSS classes**: utility-first, mínimo custom CSS

---

## Paleta en Tailwind

```ts
// tailwind.config.ts
colors: {
  verde: {
    DEFAULT: '#5e7a63',
    light: '#7a9a7f',
    dark: '#4a624d',
  },
  mostaza: '#f4a42a',
  crema: '#ebeebf',
  rosa: {
    dusty: '#e58888',
  },
  vino: '#873636',
}
```

---

## Flujo de Desarrollo

1. **Setup**: `npm install`
2. **Desarrollo**: `npm run dev` (trabajar en componentes en `components/`)
3. **Verificar**: `npm run build` + `npm run lint`
4. **Deploy**: push a `main` → Vercel auto-deploy

---

## Git Workflow

```
main (production)
├── develop (development)
│   ├── feature/animaciones-hero
│   ├── feature/sucursales-section
│   └── ...
```

**Por ahora**: work en `main` directamente (proyecto个人的).

---

## Recursos

- [Next.js Docs](https://nextjs.org/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vercel Deploy](https://vercel.com/docs/deployments)

---

## Notas

- Todas las animaciones usan `framer-motion` para consistencia
- Componentes con interacción van con `'use client'`
- Imágenes en `public/` optimizadas para web
- Favicon y meta tags en `app/layout.tsx`