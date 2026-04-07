export const SERVICE_CATEGORIES = [
  {
    id: "seguridad",
    title: "SEGURIDAD DE LA INFORMACIÓN Y GOBIERNO DE TI",
    slug: "seguridad-de-la-informacion",
    image: "/icons/servicios/hero-1.webp",
    services: [
      {
        id: "sgsi",
        name: "Implementación de SGSI (ISO 27001)",
        slogan: "Estrategias inteligentes para proteger y optimizar su negocio.",
        fullDescription: "Diseño e implementación de sistemas de gestión de seguridad de la información en sistemas y procesos, alineando la seguridad con sus objetivos estratégicos.",
        essential: ["Incremento de ciberamenazas", "Necesidad de confianza ante clientes", "Protección de activos críticos"],
        features: ["Diagnóstico inicial (Gap Analysis)", "Diseño de políticas de seguridad", "Plan de gestión de riesgos"],
        quote: "La seguridad no es un producto, es un proceso.",
        results: ["Certificación internacional", "Control total de activos", "Cultura de seguridad organizacional"],
        benefits: [
          { title: "Confianza", desc: "Mejore su reputación en el mercado." },
          { title: "Reducción de Riesgos", desc: "Identifique amenazas antes de que ocurran." }
        ],
        images: ["/icons/servicios/sgsi-1.webp"]
      },
      {
        id: "gobierno",
        name: "Gobierno de TI para Sistemas de Información",
        slogan: "Estructura y control para una gestión tecnológica eficiente.",
        fullDescription: "Definición de estructuras, roles, controles y lineamientos para asegurar que las inversiones en TI generen valor real al negocio.",
        essential: ["Desorden en toma de decisiones", "Inversiones tecnológicas sin retorno claro", "Falta de roles definidos"],
        features: ["Definición de frameworks (COBIT/ITIL)", "Asignación de roles y responsabilidades", "Establecimiento de KPIs"],
        quote: "Gobierne su tecnología para liderar su mercado.",
        results: ["Eficiencia presupuestaria", "Transparencia operativa", "Mejor toma de decisiones"],
        benefits: [
          { title: "Alineación", desc: "TI y Negocio trabajando en una sola dirección." },
          { title: "Control", desc: "Visibilidad total de la gestión de sistemas." }
        ],
        images: ["/icons/servicios/sgsi-1.webp"]
      },
      {
        id: "auditoria",
        name: "Auditoría y Evaluación de Sistemas",
        slogan: "Visión objetiva para garantizar el cumplimiento y la seguridad.",
        fullDescription: "Análisis integral del estado de seguridad, controles y cumplimiento en sistemas y aplicaciones para detectar brechas críticas.",
        essential: ["Incertidumbre sobre la eficacia de controles", "Requisitos de auditoría externa", "Detección de fraudes o fugas"],
        features: ["Revisión de logs y accesos", "Evaluación de cumplimiento de políticas", "Informe de hallazgos y recomendaciones"],
        quote: "Lo que no se mide y evalúa, no se puede mejorar.",
        results: ["Identificación de fallas ocultas", "Plan de remediación detallado", "Cumplimiento garantizado"],
        benefits: [
          { title: "Transparencia", desc: "Claridad sobre el estado real de sus sistemas." },
          { title: "Seguridad Operativa", desc: "Validación de la efectividad de sus defensas." }
        ],
        images: ["/icons/servicios/sgsi-1.webp"]
      },
      {
        id: "vulnerabilidades",
        name: "Gestión de Vulnerabilidades",
        slogan: "Anticípese a los ataques con blindaje proactivo.",
        fullDescription: "Identificación y mitigación de debilidades en sistemas web y software empresarial mediante escaneos y pruebas de penetración.",
        essential: ["Nuevas amenazas emergiendo diariamente", "Software desactualizado o mal configurado", "Riesgo de ataques dirigidos"],
        features: ["Análisis de vulnerabilidades (SAST/DAST)", "Pruebas de intrusión (Pentesting)", "Priorización de parches críticos"],
        quote: "Es mejor encontrar la puerta abierta antes que el atacante.",
        results: ["Sistemas robustos y resistentes", "Minimización de la superficie de ataque", "Respuesta rápida ante fallas"],
        benefits: [
          { title: "Resiliencia", desc: "Capacidad de resistir ataques externos." },
          { title: "Ahorro", desc: "Evite los altos costos de una recuperación post-ataque." }
        ],
        images: ["/icons/servicios/sgsi-1.webp"]
      },
      {
        id: "cumplimiento",
        name: "Cumplimiento Normativo",
        slogan: "Navegue con seguridad entre leyes y estándares.",
        fullDescription: "Adecuación a estándares y buenas prácticas aplicables (ISO 27001 y otros) para cumplir con las exigencias legales del sector.",
        essential: ["Multas por incumplimiento de protección de datos", "Exigencias de socios internacionales", "Leyes de ciberseguridad locales"],
        features: ["Mapeo de obligaciones legales", "Ajuste de procesos internos", "Generación de evidencia de cumplimiento"],
        quote: "El cumplimiento es la base de la confianza digital.",
        results: ["Cero sanciones legales", "Acceso a nuevos mercados regulados", "Estandarización de procesos"],
        benefits: [
          { title: "Legalidad", desc: "Operación dentro del marco jurídico vigente." },
          { title: "Ventaja Comercial", desc: "Diferenciación mediante el cumplimiento de normas." }
        ],
        images: ["/icons/servicios/sgsi-1.webp"]
      },
      {
        id: "capacitacion",
        name: "Capacitación en Seguridad",
        slogan: "Fortalezca el eslabón más importante: el humano.",
        fullDescription: "Formación orientada al uso seguro de sistemas y protección de datos para todos los niveles de la organización.",
        essential: ["El 90% de ataques inician por error humano", "Falta de conciencia sobre el Phishing", "Mal manejo de contraseñas y datos"],
        features: ["Talleres de concientización", "Simulacros de ataques controlados", "Buenas prácticas de teletrabajo"],
        quote: "Un equipo entrenado es el mejor firewall de su empresa.",
        results: ["Reducción de incidentes por error humano", "Personal alerta y responsable", "Cultura de ciberseguridad sólida"],
        benefits: [
          { title: "Prevención", desc: "Empleados que saben identificar amenazas." },
          { title: "Cultura Digital", desc: "Modernización del pensamiento operativo." }
        ],
        images: ["/icons/servicios/sgsi-1.webp"]
      }
    ]
  },
  {
    id: "infraestructura",
    title: "INFRAESTRUCTURA Y SOPORTE DE TI",
    slug: "infraestructura-y-soporte",
    image: "/icons/servicios/hero-1.webp",
    services: [
      {
        id: "outsourcing",
        name: "Outsourcing y Soporte TI",
        slogan: "Su tecnología en manos de expertos 24/7.",
        fullDescription: "Gestión integral del soporte técnico, mantenimiento y atención a usuarios para asegurar que su empresa nunca se detenga.",
        essential: ["Altos costos de personal interno", "Interrupciones frecuentes por fallas técnicas", "Necesidad de soporte especializado"],
        features: ["Mesa de ayuda multicanal", "Soporte presencial y remoto", "Mantenimiento proactivo"],
        quote: "Nosotros cuidamos sus sistemas, usted cuida su negocio.",
        results: ["Operación continua", "Reducción de costos operativos", "Satisfacción del usuario final"],
        benefits: [
          { title: "Disponibilidad", desc: "Atención inmediata ante cualquier incidencia." },
          { title: "Ahorro", desc: "Optimización de recursos de TI." }
        ],
        images: ["/icons/servicios/soporte-1.png"]
      },
      {
        id: "administracion",
        name: "Administración de Infraestructura TI",
        slogan: "Entornos tecnológicos optimizados y bajo control.",
        fullDescription: "Instalación, configuración y gestión de equipos, redes y entornos tecnológicos para un rendimiento superior.",
        essential: ["Redes lentas o inestables", "Servidores mal configurados", "Crecimiento tecnológico desordenado"],
        features: ["Gestión de servidores y almacenamiento", "Configuración de redes y seguridad", "Monitoreo de rendimiento"],
        quote: "Una base sólida para un crecimiento sin límites.",
        results: ["Infraestructura escalable", "Alta disponibilidad de servicios", "Seguridad perimetral robusta"],
        benefits: [
          { title: "Rendimiento", desc: "Sistemas que responden a la velocidad de su empresa." },
          { title: "Escalabilidad", desc: "Listo para crecer cuando el negocio lo requiera." }
        ],
        images: ["/icons/servicios/soporte-1.png"]
      },
      {
        id: "cableado",
        name: "Cableado Estructurado",
        slogan: "Conectividad física de alto desempeño.",
        fullDescription: "Diseño e implementación de redes físicas organizadas, certificadas y escalables que garantizan la comunicación total.",
        essential: ["Interferencias y pérdida de datos", "Cables desordenados difíciles de gestionar", "Redes que no soportan nuevas velocidades"],
        features: ["Diseño de canalizaciones y racks", "Certificación de puntos de red", "Instalación de fibra óptica y cobre"],
        quote: "El orden físico es el principio de la eficiencia lógica.",
        results: ["Redes limpias y organizadas", "Máxima velocidad de transferencia", "Fácil mantenimiento futuro"],
        benefits: [
          { title: "Durabilidad", desc: "Instalaciones diseñadas para durar años." },
          { title: "Certificación", desc: "Garantía de cumplimiento con normas internacionales." }
        ],
        images: ["/icons/servicios/soporte-1.png"]
      },
      {
        id: "energia",
        name: "Energía y Continuidad (UPS)",
        slogan: "Protección eléctrica para su inversión tecnológica.",
        fullDescription: "Implementación y mantenimiento de sistemas de respaldo eléctrico para evitar pérdidas de datos y daños en equipos por fallas de energía.",
        essential: ["Cortes de energía inesperados", "Picos de voltaje que dañan hardware", "Pérdida de información no guardada"],
        features: ["Dimensionamiento de sistemas UPS", "Sistemas de respaldo redundante", "Mantenimiento de baterías y tableros"],
        quote: "No permita que un apagón detenga su productividad.",
        results: ["Protección total de hardware", "Continuidad operativa sin pausas", "Seguridad eléctrica certificada"],
        benefits: [
          { title: "Seguridad", desc: "Evite daños costosos en sus equipos." },
          { title: "Continuidad", desc: "Siga trabajando incluso sin suministro eléctrico." }
        ],
        images: ["/icons/servicios/soporte-1.png"]
      },
      {
        id: "mantenimiento",
        name: "Mantenimiento Preventivo y Correctivo",
        slogan: "Prolongue la vida útil de su tecnología.",
        fullDescription: "Diagnóstico y solución de incidencias en infraestructura tecnológica, además de limpiezas y ajustes periódicos para evitar fallas.",
        essential: ["Desgaste natural de equipos", "Acumulación de suciedad y calor", "Fallas recurrentes por falta de cuidado"],
        features: ["Limpieza física interna de equipos", "Actualización de firmware y drivers", "Reparación de componentes dañados"],
        quote: "Prevenir es más económico que reparar.",
        results: ["Equipos con mayor vida útil", "Reducción de fallas críticas", "Entornos de trabajo óptimos"],
        benefits: [
          { title: "Ahorro", desc: "Menor inversión en reemplazo de equipos." },
          { title: "Estabilidad", desc: "Menos interrupciones por hardware fallido." }
        ],
        images: ["/icons/servicios/soporte-1.png"]
      }
    ]
  },
  {
    id: "software",
    title: "DESARROLLO DE SOFTWARE Y SOLUCIONES DIGITALES",
    slug: "desarrollo-de-software",
    image: "/icons/servicios/hero-1.webp",
    services: [
      {
        id: "web-ecommerce",
        name: "Desarrollo Web y Comercio Electrónico",
        slogan: "Su vitrina al mundo con la mejor tecnología.",
        fullDescription: "Creación de sitios web corporativos, plataformas web y tiendas online diseñadas para convertir y escalar.",
        essential: ["Presencia digital inexistente o anticuada", "Baja tasa de conversión en ventas", "Necesidad de plataformas autogestionables"],
        features: ["Diseño UI/UX moderno y responsive", "Integración de pasarelas de pago", "Optimización SEO técnica"],
        quote: "Si no está en la web, su negocio no existe.",
        results: ["Aumento de ventas online", "Posicionamiento de marca", "Experiencia de usuario fluida"],
        benefits: [
          { title: "Visibilidad", desc: "Llegue a clientes en cualquier parte del mundo." },
          { title: "Ventas 24/7", desc: "Su tienda abierta todo el día, todos los días." }
        ],
        images: ["/icons/servicios/web-1.png"]
      },
      {
        id: "mobile",
        name: "Desarrollo de Aplicaciones Móviles",
        slogan: "Su negocio en la palma de la mano de sus clientes.",
        fullDescription: "Diseño y desarrollo de apps para Android / iOS con alto rendimiento y experiencias intuitivas.",
        essential: ["Usuarios prefieren el uso móvil", "Necesidad de notificaciones push", "Servicios que requieren movilidad"],
        features: ["Desarrollo nativo e híbrido", "Publicación en tiendas (App Store/Play Store)", "Integración con APIs"],
        quote: "Conecte con sus usuarios dondequiera que estén.",
        results: ["Fidelización de usuarios", "Acceso rápido a servicios", "Innovación tecnológica percibida"],
        benefits: [
          { title: "Fidelización", desc: "Presencia constante en el móvil del usuario." },
          { title: "Accesibilidad", desc: "Facilidad de uso en cualquier momento." }
        ],
        images: ["/icons/servicios/web-1.png"]
      },
      {
        id: "medida",
        name: "Sistemas Empresariales a Medida",
        slogan: "Software diseñado para adaptarse a su negocio.",
        fullDescription: "Soluciones personalizadas para la gestión y procesos de negocio que los softwares genéricos no logran cubrir.",
        essential: ["Procesos internos únicos o complejos", "Dificultad para integrar herramientas existentes", "Uso excesivo de Excels desordenados"],
        features: ["Análisis de procesos de negocio", "Arquitectura escalable en la nube", "Desarrollo ágil iterativo"],
        quote: "No adapte su empresa al software; nosotros adaptamos el software a su empresa.",
        results: ["Automatización total de flujos", "Datos centralizados y reportes reales", "Reducción de errores manuales"],
        benefits: [
          { title: "Exclusividad", desc: "Funcionalidades creadas solo para sus necesidades." },
          { title: "Propiedad", desc: "Usted es dueño de su solución tecnológica." }
        ],
        images: ["/icons/servicios/web-1.png"]
      }
    ]
  },
  {
    id: "automatizacion",
    title: "AUTOMATIZACIÓN E INTELIGENCIA ARTIFICIAL",
    slug: "automatizacion-e-ia",
    image: "/icons/servicios/hero-1.webp",
    services: [
      {
        id: "rpa",
        name: "Automatización de Procesos (RPA)",
        slogan: "Libere a su talento de las tareas repetitivas.",
        fullDescription: "Optimización y automatización de tareas operativas y flujos digitales mediante robots de software.",
        essential: ["Tareas manuales lentas y propensas a errores", "Personal valioso perdiendo tiempo en digitación", "Necesidad de procesar grandes volúmenes de datos"],
        features: ["Bots de automatización de escritorio", "Integración de flujos entre apps", "Extracción automática de datos"],
        quote: "Deje que las máquinas hagan lo repetitivo, y los humanos lo creativo.",
        results: ["Aumento radical de la velocidad", "Cero errores de digitación", "Ahorro de horas hombre"],
        benefits: [
          { title: "Productividad", desc: "Haga más con los mismos recursos." },
          { title: "Precisión", desc: "Elimine el factor de error humano en datos." }
        ],
        images: ["/icons/servicios/rpa-1.png"]
      },
      {
        id: "chatbots",
        name: "Chatbots y Asistentes Virtuales",
        slogan: "Atención inteligente inmediata, sin esperas.",
        fullDescription: "Implementación de soluciones conversacionales para atención al cliente, ventas y soporte técnico usando NLP.",
        essential: ["Saturación en canales de atención", "Clientes que exigen respuesta inmediata 24/7", "Altos costos en centros de contacto"],
        features: ["Chatbots con Inteligencia Artificial", "Integración con WhatsApp y redes sociales", "Escalamiento a agentes humanos"],
        quote: "Responda a sus clientes en el segundo en que lo necesitan.",
        results: ["Atención inmediata 24/7", "Calificación automática de leads", "Reducción de carga en soporte"],
        benefits: [
          { title: "Omnicanalidad", desc: "Atienda por WhatsApp, Web y Facebook." },
          { title: "Satisfacción", desc: "Elimine las colas de espera para sus clientes." }
        ],
        images: ["/icons/servicios/rpa-1.png"]
      },
      {
        id: "ia-aplicada",
        name: "IA Aplicada al Negocio",
        slogan: "Transforme sus datos en decisiones inteligentes.",
        fullDescription: "Uso de IA para análisis, predicción, automatización y mejora en la toma de decisiones empresariales.",
        essential: ["Grandes volúmenes de datos sin utilizar", "Necesidad de predecir tendencias de mercado", "Complejidad en la toma de decisiones estratégicas"],
        features: ["Modelos de Machine Learning", "Análisis predictivo de ventas", "Procesamiento de lenguaje natural"],
        quote: "La inteligencia artificial es el nuevo motor de la competitividad.",
        results: ["Predicciones precisas", "Segmentación avanzada de clientes", "Optimización de la cadena de valor"],
        benefits: [
          { title: "Inteligencia", desc: "Decisiones basadas en datos, no en intuiciones." },
          { title: "Innovación", desc: "Posicione su empresa a la vanguardia tecnológica." }
        ],
        images: ["/icons/servicios/rpa-1.png"]
      }
    ]
  }
];