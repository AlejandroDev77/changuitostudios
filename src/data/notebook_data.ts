export interface NotebookTopic {
  id: string;
  title: string;
  category: "Exposición" | "Tema";
  content: string; // Separado por ---page---
  summary: string;
}

export const notebookData: NotebookTopic[] = [
  // --- TEMAS ---
  {
    id: "tema-1-politica-gerencia",
    title: "Módulo I: Entorno Político y Gestión Estratégica",
    category: "Tema",
    summary: "Estudio de las dinámicas sociales, marcos legales en Bolivia y la evolución de los modelos de decisión.",
    content: `
# Análisis del Marco Político y Gerencial

## 1. El Desafío Tributario
Un aspecto crítico en la gestión es la proactividad frente al fisco. El **SIN** no envía recordatorios; el descuido en las fechas de pago puede acarrear sanciones severas.
*   **Riesgo de Multas:** Operar sin facturar servicios puede resultar en penalizaciones que duplican el monto de la transacción original.

## 2. Definición y Alcance de la Política
Entendemos la política como el estudio de cómo una sociedad se organiza y evoluciona. Sus niveles de aplicación son:
*   **Esfera Global:** Derechos humanos y tratados que dependen de la voluntad soberana de cada nación para su cumplimiento.
*   **Esfera Nacional y Regional:** Leyes y decretos que rigen a nivel país o departamento.
*   **Esfera Municipal/Local:** Normativas específicas de la alcaldía o municipio.
*   **Esfera Organizacional:** El reglamento interno que dicta el "cómo se hacen las cosas" dentro de una institución.
*   **Esfera Individual:** Son las políticas y valores personales que, en ocasiones, pueden generar fricciones al interactuar con otros.

---page---

## 3. Guía de Supervivencia Laboral en Bolivia
Navegar el sistema judicial boliviano requiere conocer sus reglas no escritas:
*   **La Vía Administrativa:** Ante cualquier atropello, el paso inicial obligatorio es el **Ministerio de Trabajo**. Proceder directamente a la fiscalía sin este paso suele invalidar el proceso.
*   **Incumplimiento de Contratos:** Si no existe un documento firmado, la demanda debe iniciarse citando al empleador ante un juez.
*   **Protocolo de Citaciones:** El sistema otorga tres oportunidades. Si el demandado ignora la tercera citación, se emite automáticamente una **orden de aprehensión**.
*   **El Proceso de Apelación:** Si una de las partes no está conforme, el caso escala al **Tribunal Supremo de Justicia**, lo cual reinicia el ciclo de tiempos casi desde cero.
*   **Estrategia de Dilatación:** Muchas empresas apuestan por el cansancio del demandante, dejando que el caso "duerma" (prescribe a los 5 años si no hay movimiento). Si el expediente físico se extravía, toca empezar de nuevo.

---page---

## 4. Curiosidades Legales y Sugerencias Críticas
*   **Tipografía Legal:** Por ley, la letra de un contrato no debe ser menor al tamaño 3; de hecho, el empleado tiene derecho a pedir un formato más legible.
*   **Derecho al Silencio:** En caso de acusaciones, uno puede decir "me sujeto al silencio" para evitar autoincriminarse mientras se evalúan las pruebas. 
*   **Pruebas Ilícitas:** Grabaciones o hackeos sin autorización judicial permiten contrademandar por violación a la privacidad.
*   **Costos del Litigio:** Considera que cada citación tiene un costo aproximado de 100 BS y formalizar el poder para un abogado ronda los 150 BS.

---
> [!IMPORTANT]
> **Consejo del día:** Nunca firmes algo sin leerlo por completo, evita las hojas en blanco y trata de formalizar tu vínculo laboral de inmediato para no caer en laberintos legales.

---page---

## 5. La Estrategia: De la Milicia a los Negocios
Planificar es coordinar acciones para obtener una ventaja clara.
*   **Herencia Militar:** Figuras como Alejandro Magno demostraron que debilitar al rival y proyectar una imagen de superioridad es media batalla ganada.
*   **Estrategia Biológica:** Es asombroso cómo el instinto de supervivencia del cuerpo se asemeja a la adaptación de las empresas ante las crisis.
*   **Enfoque en Diferenciación:** La clave es no ser "uno más del montón". Usar la **imaginación estratégica** para darle una vuelta creativa a lo que ya existe en el mercado.

## 6. Modernidad: Datos y Algoritmos
Hoy mandan los datos. Los negocios ya no se basan solo en intuición, sino en medir y experimentar. Las plataformas exitosas hoy usan algoritmos adaptativos que entienden el mercado en tiempo real, permitiendo una evolución constante bajo una buena gobernanza.
    `
  },
  {
    id: "tema-2-empresas-direccion",
    title: "Módulo II: Raíces Históricas y Esencia de la Empresa",
    category: "Tema",
    summary: "Trayectoria del comercio, hitos de la revolución industrial y el rol social de las organizaciones.",
    content: `
# Evolución y Concepto de Empresa

## 1. El Camino hacia el Dinero
Antes del sistema actual de tarjetas y clics, la humanidad pasó por fases críticas:
*   **Trueque Primitivo:** El intercambio directo de lo que sobraba por lo que faltaba.
*   **Moneda con Valor Real:** El dinero surgió para ser algo fácil de transportar, dividir y que no se pudriera con el tiempo.
*   **Confianza Fiduciaria:** El paso a los billetes y valores basados en la fe del sistema.

## 2. Hitos Jurídicos e Industriales
*   **El Legado de Roma:** Las bases del liderazgo que vemos hoy vienen de las leyes romanas, diseñadas para administrar desde ejércitos hasta grandes foros.
*   **La Transformación de 1789:** La máquina de vapor y la locomotora no solo movieron carga, sino que cambiaron para siempre la forma de vivir y producir.
*   **Expansión Bancaria (1795):** El National Bank en Europa marcó un antes y un después en el financiamiento de grandes sueños industriales.

---page---

## 3. La Lucha por la Jornada de 8 Horas
Los derechos que hoy damos por sentados costaron sangre y esfuerzo:
*   **Revuelta de 1871:** En Carolina del Norte se alzaron contra jornadas inhumanas de **20 horas** diarias provocadas por el afán de producción de la revolución industrial.
*   **Nacimiento de Derechos:** Tras incidentes graves (incendios y motines), se logró establecer la base de las 8 horas. 
*   *Dato alarmante:* Se estima que en algunos países, como Argentina para 2026, la presión económica podría empujar la jornada hacia las 12 horas nuevamente.

## 4. ¿Por qué importan las empresas?
Más allá de ganar dinero, las empresas:
*   Generan trabajo y mueven la economía.
*   Financian al Estado vía impuestos (en países como España o EE.UU. la carga es altísima).
*   **Aranceles y Divisas:** Son vehículos para traer capital externo (Chile, por ejemplo, aplica aranceles del 20% al tránsito de bienes).
*   Cumplen una función social al resolver necesidades de la gente.

---page---

## 5. Definiendo la Entidad Empresarial
Podemos ver a la empresa como un ente con tres dimensiones:
*   **Dimensión Jurídica:** Tiene identidad propia ante la ley. Es importante saber que el error de un integrante puede comprometer legalmente a todos los socios.
*   **Dimensión Económica:** Su motor es el ánimo de lucro y la gestión del riesgo.
*   **Dimensión Social:** Es un grupo de personas trabajando juntas con una responsabilidad colectiva.

---
> [!TIP]
> **Ojo con Impuestos:** En el contexto local, el Estado toma cerca del **25% de las utilidades (IUE)**. Un tip de oro: el NIT debe declararse siempre, aunque no hayas vendido nada (declaración en cero), porque el fisco no avisa de las multas acumuladas.

## 6. Categorías según su actividad
Las agrupamos principalmente en industriales (extractivas o de proceso), comerciales (quienes revenden) y de servicios (desde transporte hasta bancos con o sin aval estatal).
    `
  },
  {
    id: "tema-3-navegando-futuro",
    title: "Módulo III: Navegación Estratégica y Futuro",
    category: "Tema",
    summary: "Planificación de riesgos, diagnóstico DAFO y la salud financiera del emprendimiento.",
    content: `
# Estrategia: Guía para el Éxito Real

## 1. El Propósito de la Dirección
No se trata de "ser el jefe", sino de dar rumbo al barco:
*   **Enfoque Preciso:** Alinear cada peso y cada minuto de trabajo hacia un fin. Ejemplo: "La Cascada" domina el área rural porque su estrategia se adapta a sus recursos, mientras que otros grandes apuntan a las ciudades.
*   **Adaptación al Riesgo:** Saber qué podría salir mal (como Carpil en Tarija que prefiere no arriesgar fuera de su zona segura) y tener un plan B.

---page---

## 2. Diagnóstico FODA (DAFO)
La herramienta clásica para saber dónde estás pisando:
*   **Lo que controlas (Interno):** Tus Fortalezas (buena fama, tecnología, equipo) y tus Debilidades (procesos lentos, falta de dinero o variedad).
*   **Lo que NO controlas (Externo):** Las Oportunidades (un mercado nuevo, leyes que te ayudan) y las Amenazas (rivales que bajan precios, cambios de moda).

## 3. El Reloj Financiero (ROI)
El éxito se mide en el tiempo que tardas en recuperar tu inversión:
*   **Límite de Inversión:** Se considera que una inversión debe retornar en máximo **24 meses**. Más de eso es una señal de alerta.
*   *Caso Práctico:* Si pones 50,000 BS de capital, ocupas que te queden libres **2,083 BS al mes** para estar "a tablas" en dos años.
*   **Velocidad de Ajuste:** Las empresas que revisan sus números cada 3 meses logran corregir el rumbo 3 veces más rápido que las que esperan a final de año.

---page---

## 4. ADN de la Empresa Digital
Para sobrevivir hoy, se requiere:
*   **Liderazgo Dinámico:** Menos jerarquía y más colaboración.
*   **Cultura de Datos:** No puedes mejorar lo que no mides. Necesitas un sistema informático, una base de datos o una presencia digital real.
*   **Sincronización:** Que todos los empleados sepan exactamente para qué están trabajando y cómo ayudan a la meta principal.

---
> [!IMPORTANT]
> **Regla de Oro:** Si en **6 meses** tu negocio no está mostrando señales claras de ganancia, es hora de repensar seriamente la estrategia.
    `
  },

  // --- EXPOSICIONES ---
  {
    id: "expo-apertura-bolivia",
    title: "Pasos para Formalizar una Empresa en Bolivia",
    category: "Exposición",
    summary: "Checklist técnico: SEPREC, SIN, CNS, Gestora y trámites municipales.",
    content: `
# Hoja de Ruta para Emprendedores

Formalizar un negocio es un viaje burocrático, pero necesario para crecer:

## 1. El Nacimiento Legal (Testimonio)
Es el papel notariado que dice cómo se llama el negocio, quién pone la plata y quién manda (Representante Legal).

## 2. Identidad Comercial: SEPREC
Es el registro que te da la **Matrícula de Comercio**. Sin esto, la empresa no existe para el Estado ni para los bancos. Es la garantía de que eres un negocio serio.

## 3. Identidad Fiscal: El NIT
Inscripción obligatoria en Impuestos Nacionales para poder emitir facturas y estar en paz con el fisco.

---page---

## 4. Permisos Locales (Alcaldía)
La Licencia de Funcionamiento asegura que tu local es seguro, tiene baño y cumple con normas de higiene básicas para abrir al público.

## 5. El Escudo Social
*   **Salud (CNS):** Proteges a tu empleado y a su familia ante accidentes o enfermedades que no sean del trabajo.
*   **Jubilación (Gestora):** Es un aporte mensual. Del sueldo se descuenta el **10%** y la empresa pone otro **17.1%** encima.
*   **Marco Laboral:** Registar al personal en el Ministerio de Trabajo vía virtual (OVT).

## 6. Plus de Protección
*   **SENAPI:** Protege tu logo y marca. Que nadie más se robe tu identidad.
*   **PRO BOLIVIA:** Ideal si eres del sector productivo.

---
> [!CAUTION]
> **Dato Clave:** Si olvidas renovar tu matrícula de comercio cada año, el sistema te bloquea automáticamente. ¡Cuidado!
    `
  },
  {
    id: "expo-gerente-empresarial",
    title: "El Perfil del Gerente de Alto Impacto",
    category: "Exposición",
    summary: "Habilidades, diagnóstico basado en KPIs y resiliencia emocional del líder.",
    content: `
# ¿Qué define a un buen Gerente?

## 1. El "Radar" del Negocio
Un gerente exitoso siempre está dos pasos adelante. Sabe leer las tendencias y anticipar problemas antes de que estallen. No solo soluciona incendios, busca que el negocio sea **escalable**.

## 2. Bases de Datos, no de Humo
Nada de intuiciones vagas. Se usan los **KPIs** (Indicadores Clave de Desempeño). El gerente analiza objetivamente y evita "enamorarse" de malas ideas (sesgos personales).

---page---

## 3. Trato con la Gente
*   **Estar en el mismo canal:** Comunicación clara y asertiva. Nada de mensajes a medias.
*   **Saber Soltar:** Delegar tareas basándose en lo que cada quien hace mejor.
*   **Control Emocional:** Mantener la cabeza fría en crisis para poder ser el soporte del equipo.

## 4. Integridad y Foco
Ser el primero en llegar y el último en irse (ejemplo de valores). Su misión principal es quitarle piedras del camino al equipo para que el trabajo fluya sin trabas hacia la meta planeada.
    `
  },
  {
    id: "expo-caracteristicas-empresa",
    title: "Radiografía de la Organización Moderna",
    category: "Exposición",
    summary: "Tipos de sociedad, recursos esenciales y fines de la unidad económica.",
    content: `
# ¿Cómo funciona una Empresa?

## 1. Formas de unirse
*   **S.R.L.:** Ideal para grupos pequeños (hasta 50 personas).
*   **S.A.:** Para grandes ligas, donde el capital se divide en acciones que cualquiera puede comprar.

## 2. El "Combustible" del Negocio
Para que el motor funcione, ocupamos 4 cosas:
*   **Gente (Talento Humano).**
*   **Plata (Recursos Financieros).**
*   **Máquinas y Software (Tecnología).**
*   **Espacio (Materiales).**

## 3. El Norte del Negocio
Sin **Misión** (lo que hacemos hoy) ni **Visión** (donde estaremos en 10 años) el negocio es solo un puesto de paso.
    `
  },
  {
    id: "expo-dinamismo-competitividad",
    title: "Competir en un Mundo que no se Detiene",
    category: "Exposición",
    summary: "Dinamismo, innovación frente a la tradición y resiliencia logística.",
    content: `
# La Regla de Oro: Adaptarse o Morir

## 1. El Caso Kodak como Advertencia
El dinamismo mide qué tan rápido reaccionas. Quedarse cómodo con lo que ya tienes invalida tu historia. Hoy, si no eres proactivo, el mercado te borra.

## 2. Nuevas Reglas del Juego
*   **Innovación vs Tradición:** Mira a las **Fintech**. Son chiquitas pero le están quitando clientes a los bancos gigantes porque son rápidas y simples.
*   **Sinergias Inteligentes:** Los grandes ponen el dinero y los chicos ponen las ideas. Es la mejor forma de ganar juntos.

---page---

## 3. Desafíos a Escala Global
*   **Logística 4.0:** Todo se mueve con datos (Just in Time).
*   **El Cliente ya no es Local:** El consumidor de hoy exige que lo cuides y respete su privacidad a niveles internacionales.
*   **Fragilidad en Cadena:** Un bloqueo de carreteras o un desastre en otro país te puede dejar sin materia prima. Estamos todos conectados.

## 4. Pelear por el Cliente
La batalla ya no es por precio, es por **experiencia**. En mercados donde ya todo está inventado, la única forma de crecer es quitándole espacio a los rivales.
    `
  },
  {
    id: "expo-etapas-direccion",
    title: "Las Cuatro Estaciones de la Gestión",
    category: "Exposición",
    summary: "Análisis inicial, diseño del plan, ejecución y revisión de resultados.",
    content: `
# El Ciclo de Vida del Éxito

Gestionar un negocio no es una línea recta, es un círculo de mejora:

## 1. El Escaneo (Análisis)
Mirar para adentro (qué tengo) y para afuera (qué falta) para saber dónde estamos parados.

## 2. El Dibujo (Formulación)
Ponerle fecha y presupuesto a los sueños. Es decidir la Misión y la Visión.

## 3. La Acción (Implementación)
Dejar de hablar y empezar a hacer. Aquí entran los cronogramas y la asignación de recursos.

## 4. El Espejo (Control)
Sentarse a ver si lo que hicimos dio el resultado esperado. Si fallamos, se vuelve a empezar en la etapa 1.
    `
  },
  {
    id: "expo-planificacion-estrategica",
    title: "Planificación: El Escudo contra la Improvisación",
    category: "Exposición",
    summary: "Diferencia entre eficiencia y eficacia, y la arquitectura del mando.",
    content: `
# Planear es Anticipar

## 1. Hacer las cosas BIEN vs Hacer las cosas CORRECTAS
*   **Eficiencia:** Gastar lo mínimo al hacer algo. Es optimizar el recurso.
*   **Eficacia:** Lograr que pase lo que dijiste que iba a pasar, con calidad.
*   *Nota:* Para ganar, ocupas que ambas funcionen juntas.

## 2. Quién hace Qué (Estructura)
*   **General:** Define el rumbo del barco (Alta Dirección).
*   **Capitanes:** Coordinan al equipo (Mandos medios).
*   **Tripulación:** El trabajo pesado que hace que el barco se mueva (Operativo).

---page---

## 3. El Marco de Acción
Todo plan exitoso sigue la lógica de: **Objetivos -> Metas -> Estrategias -> Medidas.**

## 4. ¿Qué puede fallar?
Hay que ser flexibles. La falta de dinero, de gente capacitada o de materiales son "factores limitantes" que deben estar previstos en el plan desde el inicio.
    `
  },
  {
    id: "expo-que-es-direccion",
    title: "La Esencia de la Dirección Global",
    category: "Exposición",
    summary: "Misión, visión y los niveles de la arquitectura interna de la empresa.",
    content: `
# ¿Por qué Dirección Estratégica?

## 1. El Faro de la Organización
Tener una **Visión** te evita dar palos de ciego. Mejora cada decisión que tomas y te permite pelear contra la competencia con inteligencia, no solo con fuerza.

## 2. Los Pilares de la Identidad
*   **Misión:** Qué valor estamos dando hoy al mundo.
*   **Visión:** Donde nos imaginamos celebrando el éxito en un lustro o dos.
*   **Contextualización:** No puedes ignorar a tus proveedores ni a tus clientes.

## 3. La Maquinaria Interna
La **Arquitectura Organizacional** es saber cómo están repartidas las responsabilidades y qué sistemas usamos para controlar que todo vaya bien.
    `
  },
  {
    id: "expo-tipos-empresa",
    title: "Clasificación General del Mundo de los Negocios",
    category: "Exposición",
    summary: "Distinciones por tamaño, capital, sector y alcance geográfico.",
    content: `
# ¿Cómo se clasifican las empresas?

## 1. Por su Estatura
*   **Micro:** El negocio de la esquina.
*   **Pequeña/Mediana:** Empresas que ya mueven gente y servicios a nivel nacional.
*   **Grandes:** Gigantes con alcance global.

## 2. De Quién es la Plata
Hablamos de empresas **Públicas** (del Estado), **Privadas** (de socios particulares) o **Mixtas**.

---page---

## 3. Lo que producen
*   **Cosecha/Extracción:** Sector Primario.
*   **Fábricas:** Sector Secundario.
*   **Servicios:** Sector Terciario.
*   **Ciencia/Tech:** Sector Cuaternario (Software e investigación).

## 4. Hasta dónde llegan
Desde el negocio que solo vende en su cuidad (**Locales**) hasta las **Multinacionales** que tienen oficinas en todo el mundo.

## 5. El Contrato Social
Hay que elegir bien: desde ser tú solo (**Unipersonal**), a sociedades basadas en la confianza total (**Colectivas**) o en el capital aportado (**S.A.**).
    `
  }
];
