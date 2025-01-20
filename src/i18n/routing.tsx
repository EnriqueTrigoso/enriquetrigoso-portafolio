import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({

  locales: ['es', 'en'],
  localePrefix: "as-needed",
  localeDetection: false,
  defaultLocale: 'es',
  pathnames: {
    '/': '/',

    '/projects': {
      'es': '/proyectos',
      'en': '/projects'
    },
    // '/funeral/comparator': {
    //   'es-MX': '/seguro-de-funeral/comparador',
    // },
    // '/funeral/comparator/results': {
    //   'es-MX': '/seguro-de-funeral/comparador/resultados',
    // },
    // '/funeral/blog': {
    //   'es-MX': '/seguro-de-funeral/blog',
    // },
    // '/funeral/blog/[slug]': {
    //   'es-MX': '/seguro-de-funeral/blog/[slug]',
    // },


  }
});

export type Locale = typeof routing.locales[number];

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);