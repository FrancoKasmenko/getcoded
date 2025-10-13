import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    es: {
        translation: {
            brand: "GetCoded",
            nav: { services: "Servicios", work: "Proyectos", process: "Proceso", faq: "FAQ", contact: "Contacto" },

            hero: {
                eyebrow: "Agencia de desarrollo + IA",
                title_1: "Webs muy rápidas.",
                title_2: "Automatizaciones inteligentes.",
                lead: "Creamos sitios modernos y soluciones impulsadas por IA que convierten: landings, sitios a medida, integraciones y e-commerce (Shopify, WordPress/WooCommerce).",
                cta_primary: "Empezar proyecto",
                cta_secondary: "Ver trabajos",
                bullet_1: "⚡ Performance 90+ Lighthouse",
                bullet_2: "🧠 Integraciones IA reales",
                bullet_3: "🛒 E-commerce (Shopify/Woo)"
            },


            sections: {
                services_h: "Lo que hacemos",
                services_p: "De la idea al deploy, con un stack moderno y enfoque en conversión.",
                work_h: "Proyectos",
                work_p: "Selección de trabajos recientes y componentes reutilizables.",
                process_h: "Cómo trabajamos",
                process_p: "Proceso corto, entregas claras, cero humo.",
                faq_h: "FAQ",
                faq_p: "Preguntas frecuentes antes de empezar.",
                pricing_h: "Paquetes base",
                pricing_p: "Elegí un punto de partida. Ajustamos el alcance a tu proyecto para maximizar resultados.",
                contact_h: "Hablemos de tu proyecto",
                contact_p: "Contanos qué necesitás y te proponemos un camino claro."
            },

            services: {
                items: [
                    {
                        title: "Landing PRO",
                        desc: "Diseño limpio, animaciones sutiles y velocidad extrema.",
                        bullets: ["SEO técnico y OG listo", "Animaciones a 60fps", "Formularios y analytics"]
                    },
                    {
                        title: "E-commerce",
                        desc: "Tiendas optimizadas para vender en Shopify o WordPress/WooCommerce.",
                        bullets: [
                            "Internacionalización (moneda/idioma)",
                            "Plantillas y secciones personalizadas",
                            "Métricas de conversión y checkout UX"
                        ]
                    },
                    {
                        title: "Automatización + IA",
                        desc: "Bots, asistentes y flujos: pedidos, lead qualify, contenidos.",
                        bullets: ["Integración con APIs", "RPA liviano", "Dashboards y alertas"]
                    }
                ]
            },

            process: {
                steps: [
                    { h: "Brief & estrategia", p: "Definimos objetivos, scope y KPIs." },
                    { h: "UI kit + copy", p: "Paleta, tipografías, componentes y mensajes." },
                    { h: "Dev & QA", p: "Performance, accesibilidad y SEO técnico." },
                    { h: "Go-live & medición", p: "Analytics, heatmaps y mejoras rápidas." }
                ]
            },

            pricing: {
                basic: {
                    name: "Básico", price: "USD 350", cta: "Elegir Básico",
                    desc: "Landing moderna enfocada en conversión: arquitectura clara, carga rápida y mensajes precisos. Ideal para campañas o validar una propuesta.",
                    features: ["Secciones clave (Hero, Servicios, Contacto)", "SEO/OG inicial y medición", "Animaciones sutiles (Framer Motion)", "Deploy y soporte por email"]
                },
                essential: {
                    name: "Esencial", price: "USD 650", cta: "Elegir Esencial",
                    desc: "Sitio institucional con más secciones y contenido escalable. Ideal para marcas que necesitan profundidad y posicionamiento.",
                    features: ["Hasta 6 secciones (incluye Blog opcional)", "Componentes reutilizables y UI Kit", "Integración Analytics y eventos", "Soporte por WhatsApp"]
                },
                pro: {
                    name: "Profesional", price: "USD 1100", cta: "Ir por Profesional",
                    desc: "Experiencia de alto rendimiento con micro-interacciones, contenido dinámico e integraciones. Enfoque integral en performance y CRO.",
                    features: ["UI Kit avanzado + patrones de diseño", "Integraciones con APIs (básicas)", "Optimización de performance y accesibilidad", "Soporte extendido con SLA"]
                },
                ecommerce: {
                    name: "E\u2011commerce", price: "Desde USD 1200", cta: "Vender online",
                    desc: "Tienda online optimizada para vender: catálogo, internacionalización (moneda/idioma) y checkout con UX cuidada. Trabajamos con Shopify o WordPress/WooCommerce.",
                    features: [
                        "Internacionalización (moneda/idioma)",
                        "Plantillas / secciones personalizadas",
                        "Optimización de imágenes y rendimiento",
                        "Asesoría de apps/plugins y mejores prácticas"
                    ]
                }
            },

            faq: {
                items: [
                    {
                        q: "¿Cuánto demora una landing?",
                        a: [
                            "La V1 suele estar lista en 1–2 semanas, dependiendo de contenido y alcance.",
                            "Trabajamos en sprints cortos: primero la estructura y el diseño base; luego copy y animaciones. Entregamos un preview navegable para feedback y cerramos con ajustes de performance (Lighthouse 90+) y SEO técnico."
                        ]
                    },
                    {
                        q: "¿Qué incluye la Web básica (V1)?",
                        a: [
                            "Entrega funcional lista para publicar, con foco en conversión, performance y estética profesional."
                        ],
                        list: [
                            "Arquitectura de información y copy base",
                            "Secciones clave: Hero, Servicios, Proyectos/Portfolio, Contacto y FAQ",
                            "Animaciones sutiles con Framer Motion",
                            "SEO técnico (meta/OG, sitemap, robots) y accesibilidad AA",
                            "Optimización de imágenes y rendimiento (Lighthouse ≥ 90)",
                            "Deploy y guía de edición/handoff"
                        ],
                        a2: "Si necesitás blog, e-commerce o integraciones con IA/APIs, lo sumamos como módulos adicionales."
                    },
                    {
                        q: "¿Pueden automatizar flujos con IA?",
                        a: [
                            "Sí. Implementamos asistentes para atención, calificación de leads, generación de contenido y conexión con tus herramientas (CRM/ERP).",
                            "Priorizamos soluciones livianas y medibles: dashboard con KPIs, logs de conversaciones y alertas."
                        ]
                    },
                    {
                        q: "¿Cómo manejan el mantenimiento?",
                        a: [
                            "Ofrecemos planes mensuales con mejoras continuas (UI/UX), performance, seguridad y creación de secciones/landings.",
                            "Soporte priorizado por WhatsApp/Email. Podemos sumar horas de diseño o desarrollo según picos de demanda."
                        ]
                    },
                    {
                        q: "¿Qué necesitan para empezar?",
                        list: [
                            "Objetivo del sitio y público",
                            "Contenidos iniciales (o los redactamos)",
                            "Accesos (dominio/hosting, si aplica)"
                        ],
                        a: ["Con eso armamos la propuesta y la línea de tiempo."]
                    },
                    {
                        q: "¿Cómo se organiza el pago?",
                        a: [
                            "Trabajamos por hitos: 50% al inicio y 50% al entregar la versión final aprobada.",
                            "En e-commerce o integraciones, podemos fraccionar por funcionalidades. Entregamos acceso al sistema al finalizar."
                        ]
                    }
                ]
            },


            contact: {
                name: "Nombre",
                email: "Email",
                message: "Mensaje",
                send: "Enviar",
                also: "También podés escribirnos a contact@getcoded.agency",
                bullets: ["Propuesta en 48 h", "Sin letra chica", "Entrega por etapas"]
            }
        }
    },

    en: {
        translation: {
            brand: "GetCoded",
            nav: { services: "Services", work: "Projects", process: "Process", faq: "FAQ", contact: "Contact" },

            hero: {
                eyebrow: "Development agency + AI",
                title_1: "Blazing-fast websites.",
                title_2: "Smart automations.",
                lead: "We build modern sites and AI-powered solutions that convert: landing pages, custom sites, integrations and e-commerce (Shopify, WordPress/WooCommerce).",
                cta_primary: "Start project",
                cta_secondary: "See work",
                bullet_1: "⚡ 90+ Lighthouse performance",
                bullet_2: "🧠 Real AI integrations",
                bullet_3: "🛒 E-commerce (Shopify/Woo)"
            },


            sections: {
                services_h: "What we do",
                services_p: "From idea to deploy, with a modern stack and conversion focus.",
                work_h: "Projects",
                work_p: "A selection of recent work and reusable components.",
                process_h: "How we work",
                process_p: "Short process, clear deliverables, no fluff.",
                faq_h: "FAQ",
                faq_p: "Common questions before we start.",
                pricing_h: "Base packages",
                pricing_p: "Pick a starting point. We tailor the scope to maximize results.",
                contact_h: "Tell us about your project",
                contact_p: "Share your needs and we’ll propose a clear plan."
            },

            faq: {
                items: [
                    {
                        q: "How long does a landing page take?",
                        a: [
                            "The first version (V1) is usually ready in 1–2 weeks, depending on content and scope.",
                            "We work in short sprints: structure and base design first; then copy and animations. We deliver a navigable preview for feedback and finish with performance (Lighthouse 90+) and technical SEO adjustments."
                        ]
                    },
                    {
                        q: "What’s included in the Basic website (V1)?",
                        a: [
                            "A functional, ready-to-publish version focused on conversion, performance and professional aesthetics."
                        ],
                        list: [
                            "Information architecture and base copy",
                            "Key sections: Hero, Services, Projects/Portfolio, Contact and FAQ",
                            "Subtle animations with Framer Motion",
                            "Technical SEO (meta/OG, sitemap, robots) and AA accessibility",
                            "Image & performance optimization (Lighthouse ≥ 90)",
                            "Deploy and editing/handoff guide"
                        ],
                        a2: "If you need a blog, e-commerce or AI/API integrations, we add them as modules."
                    },
                    {
                        q: "Can you automate flows with AI?",
                        a: [
                            "Yes. We implement assistants for support, lead qualification, content generation and connections to your tools (CRM/ERP).",
                            "We prioritize lightweight, measurable solutions: KPI dashboards, conversation logs and alerts."
                        ]
                    },
                    {
                        q: "How do you handle maintenance?",
                        a: [
                            "Monthly plans with continuous improvements (UI/UX), performance, security and new sections/landings.",
                            "Priority support via WhatsApp/Email. We can add design/dev hours for demand peaks."
                        ]
                    },
                    {
                        q: "What do you need to get started?",
                        list: [
                            "Website goal and audience",
                            "Initial content (or we can draft it)",
                            "Access (domain/hosting, if applicable)"
                        ],
                        a: ["With that we create the proposal and timeline."]
                    },
                    {
                        q: "How is payment structured?",
                        a: [
                            "Milestones: 50% upfront and 50% upon approval of the final version.",
                            "For e-commerce or integrations, we can split by features. We hand over system access at the end."
                        ]
                    }
                ]
            },


            services: {
                items: [
                    {
                        title: "PRO Landing",
                        desc: "Clean design, subtle animations and extreme speed.",
                        bullets: ["Technical SEO & OG ready", "60fps animations", "Forms and analytics"]
                    },
                    {
                        title: "E-commerce",
                        desc: "Stores optimized to sell on Shopify or WordPress/WooCommerce.",
                        bullets: [
                            "Internationalization (currency/language)",
                            "Custom templates and sections",
                            "Conversion metrics & checkout UX"
                        ]
                    },
                    {
                        title: "Automation + AI",
                        desc: "Bots, assistants and flows: orders, lead qualify, content.",
                        bullets: ["API integrations", "Lightweight RPA", "Dashboards and alerts"]
                    }
                ]
            },

            process: {
                steps: [
                    { h: "Brief & strategy", p: "We define goals, scope and KPIs." },
                    { h: "UI kit + copy", p: "Palette, type, components and messaging." },
                    { h: "Dev & QA", p: "Performance, accessibility and technical SEO." },
                    { h: "Go-live & measurement", p: "Analytics, heatmaps and quick improvements." }
                ]
            },

            pricing: {
                basic: {
                    name: "Basic", price: "USD 350", cta: "Choose Basic",
                    desc: "Modern landing focused on conversion: clear architecture, fast load and precise messaging. Ideal for campaigns or validation.",
                    features: ["Key sections (Hero, Services, Contact)", "Initial SEO/OG and tracking", "Subtle animations (Framer Motion)", "Deploy and email support"]
                },
                essential: {
                    name: "Essential", price: "USD 650", cta: "Choose Essential",
                    desc: "Company site with more sections and scalable content. Strong positioning.",
                    features: ["Up to 6 sections (optional Blog)", "Reusable components and UI Kit", "Analytics integration and events", "WhatsApp support"]
                },
                pro: {
                    name: "Professional", price: "USD 1100", cta: "Go Professional",
                    desc: "High-performance experience with micro-interactions, dynamic content and integrations. CRO-oriented.",
                    features: ["Advanced UI Kit + design patterns", "API integrations (basic)", "Performance & accessibility optimization", "Extended support with SLA"]
                },
                ecommerce: {
                    name: "E\u2011commerce", price: "From USD 1200", cta: "Sell online",
                    desc: "Online store optimized to sell: catalog, internationalization (currency/language) and refined checkout UX. We work with Shopify or WordPress/WooCommerce.",
                    features: [
                        "Internationalization (currency/language)",
                        "Custom templates/sections",
                        "Image & performance optimization",
                        "Apps/plugins advisory & best practices"
                    ]
                }

            },

            contact: {
                name: "Name",
                email: "Email",
                message: "Message",
                send: "Send",
                also: "You can also email contact@getcoded.agency",
                bullets: ["Quote in 48h", "No fine print", "Staged delivery"]
            }
        }
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        supportedLngs: ['es', 'en'],
        nonExplicitSupportedLngs: true,
        detection: { order: ['localStorage', 'navigator', 'htmlTag'], caches: ['localStorage'] },
        interpolation: { escapeValue: false }
    })

i18n.on('languageChanged', lng => {
    document.documentElement.setAttribute('lang', lng || 'es')
})

export default i18n
