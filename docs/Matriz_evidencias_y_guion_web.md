# Matriz de evidencias y guion académico — Presentación web

**Fecha de trabajo:** 29 de octubre de 2026  
**Tema:** Liderazgo y equipos de alto rendimiento en proyectos de software  
**Objetivo de comunicación:** explicar conceptos y luego demostrar su utilidad mediante un caso con contexto, problema, intervención, resultados y reflexión.  
**Estado:** investigación documental inicial validada; todavía no se ha programado la presentación web.

## 1. Regla de rigor

Toda afirmación se identificará como:
- **[TEORÍA]** planteamiento de uno de los tres documentos asignados.
- **[DATO]** cifra cuantitativa con fuente, fecha, población, denominador y unidad.
- **[CASO]** hecho reportado sobre una organización real.
- **[INTERPRETACIÓN]** aplicación propuesta por los expositores, nunca atribuida como conclusión probada al autor o al caso.

**Nunca:** confundir asociación y causalidad, calcular ROI sin ingresos/beneficios atribuibles y costos de inversión, equiparar tamaños diferentes de lanzamientos, convertir fracasos de equipos nuevos en fracasos de proyectos de software ni asignar etapas de Blanchard retrospectivamente como hechos observados sin evidencia.

## 2. Matriz de los tres textos base

| Documento | Concepto fundamental | Aplicación al diagnóstico | Evidencia interna | Advertencia |
|---|---|---|---|---|
| Jaap Boonstra, *Perspectivas sobre el liderazgo* (2018) | Liderazgo como iniciativa colectiva; complementar dirección y gestión; decidir según contexto; ceder liderazgo para fortalecer capacidad comunitaria | ¿Qué cambió en el papel de directivos y responsables? | PDF *Harvard-Deusto-Liderazgo.pdf*, pp. 5–14, numeración interna 12–21 aprox. | No afirmar que toda iniciativa ágil demuestra de por sí la teoría. |
| Martine Haas y Mark Mortensen, *The Secrets of Great Teamwork* (2016) | Equipos 4-D; dirección convincente; estructura sólida; contexto de apoyo; mentalidad compartida | ¿Qué condiciones impedían o permitían colaborar? | PDF *The Secrets of Great Teamwork.pdf*, pp. 2–12 | El artículo contiene casos cualitativos sin porcentajes de mejoras específicas. |
| The Ken Blanchard Companies, *High Performance Teams: What It Takes to Make Them Work* (2019) | Etapas: orientación, insatisfacción, integración, producción; capacitación; liderazgo y rendición de cuentas | ¿Cómo adaptar liderazgo y desarrollo de equipo? | PDF *High Performance Teams.pdf*, pp. 2–7 | El modelo es marco analítico, no evidencia de que un caso haya recorrido formalmente sus cuatro etapas. |

## 3. Estadísticas de contexto extraídas del documento asignado Blanchard

1. **27 %** de 1.300 empleados/directivos encuestados dijo que sus equipos rinden al nivel óptimo la mayor parte del tiempo; **43 %** dijo que operan a nivel óptimo menos de la mitad del tiempo. *High Performance Teams*, p. 2. Son **percepciones**, no auditoría de productividad.
2. La estimación de **aprox. 60 %** alude a **equipos nuevos que no logran sus objetivos**, no a la tasa de fracaso de proyectos de software. Informe, pp. 1–2.
3. Capacitación de miembros: **53 %** entre quienes reportan equipos de alto rendimiento, frente a **26 %** en conjunto de comparación; capacitación de líderes **46 % vs 25 %**; apoyo organizacional **62 % vs 29 %**. Figura 4, p. 5. Son **comparaciones de grupos**, no cambios antes/después.
4. El artículo menciona un metaanálisis con más de **50 estudios** y **8.500 participantes** sobre entrenamiento del trabajo en equipo, pp. 4–5.

## 4. Caso principal en Perú: Banco de Crédito del Perú (BCP)

**Problema:** infraestructura anterior y numerosos procesos manuales para aprovisionamiento, validación de secretos, prueba y despliegue; necesidad de llevar productos digitales al mercado más rápido.

**Intervenciones reportadas:**
- Proyectos ágiles de tecnología desde 2015; expansión a transformación empresarial desde 2018 (Memoria BCP 2024).
- Adopción de DevSecOps desde 2019; automatización y rediseño de procesos de desarrollo y producción (Forbes Perú, contenido patrocinado del BCP, 2024).
- Equipos multidisciplinarios organizados en tribus y centros de expertise, con ajuste de gobierno y métricas (Memorias 2024 y 2025).
- Automatización de aprovisionamiento y gestión de secretos mediante Terraform/Vault en un caso relatado por su proveedor HashiCorp.

**Resultados observados / reportados, NO intercambiables:**
- **45 días → 4 días** para cierto tiempo de despliegue de software entre 2019–2024. Fuente: entrevista del banco en contenido patrocinado de Forbes Perú, 11-12-2024. Diferencia calculada desde extremos: **−91,1 %**. El artículo menciona 'más del 80 %'; presentamos valores brutos y declaramos la procedencia promocional.
- En **2024**, frente a 2023: **−23 %** en tiempo de entrega de soluciones, **+14 %** en cantidad de entregas trimestrales, **−16 %** en costos de puesta en producción. La memoria dice *time to market* de 34 días en el 70 % de casos. Fuente: Memoria Integrada BCP 2024.
- En **2025**, frente a 2024: **−21 %** time to market, **+33 %** entregas tecnológicas y **−12 %** costo de puesta en producción. Se reportan 29 días en el 70 % de casos. Fuente: Memoria Integrada BCP 2025. No calcular −21 % a partir de 34 y 29 porque no es aritméticamente equivalente: puede haber métricas/estadísticos distintos.
- Caso HashiCorp: **−96 %** en tiempos de aprovisionamiento cloud, de 2–3 días a horas, además de validación de secretos de 1 hora a segundos. **Métrica distinta** de los despliegues de software citados arriba.

**Mecanismo/interpretación — no atribución causal demostrada:**
- Haas/Mortensen: estructura sólida, contexto de apoyo, claridad del propósito, coordinación multifuncional.
- Boonstra: líderes que empoderan equipos y complementan gestión y cambio.
- Blanchard: desarrollo de capacidades, apoyo, rendición de cuentas y adaptación del papel de los líderes; no consta secuencia real de etapas en el caso.

**Fuentes:**
- Memoria BCP 2024, transcripción oficial reproducida: https://financialfilings.com/filings/banco-de-credito-del-peru/annual-report/2025/49264930/
- Memoria BCP 2025, transcripción oficial reproducida: https://financialfilings.com/filings/banco-de-credito-del-peru/annual-report/2026/49282356/
- Portal oficial de las memorias BCP: https://www.viabcp.com/relaciones-con-inversionistas
- Forbes Perú contenido patrocinado: https://forbes.pe/brand-voice/2024-12-11/bcp-pionero-en-peru-en-el-uso-de-ia-generativa-para-desarrollar-software/
- HashiCorp, estudio de proveedor: https://www.hashicorp.com/en/case-studies/bcp

**Conclusión provisional para exponer:** los procesos y la capacidad de entrega digital pueden mejorar con transformaciones organizativas y técnicas combinadas. Atribuir toda la mejora solamente al liderazgo sería una exageración.

## 5. Caso internacional complementario: ING Países Bajos

**Problema:** silos entre negocio, diseño y tecnología; transferencias de responsabilidad; necesidad de responder a clientes digitales.

**Intervención:** desde 2015, equipos multidisciplinarios pequeños llamados *squads*, organizados por *tribes*, responsabilidad de extremo a extremo, DevOps y mayor autonomía. La entrevista refiere aproximadamente 350 squads de 9 personas dentro de 13 tribes, y 3.500 trabajadores de la sede inicial.

**Resultado reportado:** cadencia de lanzamientos pasó de **5–6 grandes lanzamientos al año** a **lanzamientos de software cada 2–3 semanas**, además de mejoras cualitativas en satisfacción y compromiso. **Advertencia:** no afirmar multiplicador exacto de productividad porque la unidad/tamaño de lanzamiento cambió y no se publicaron datos suficientes de beneficio monetario.

**Teoría:** Haas/Mortensen: estructura, visión compartida; Boonstra: empoderar y reducir microgestión; Blanchard: apoyar a equipos sin afirmar estadios observados.

**Fuente:** entrevista a ejecutivos de ING, McKinsey, 10-01-2017: https://www.mckinsey.com/capabilities/people-and-organization/our-insights/ings-agile-transformation

## 6. Microcaso técnico complementario: Etsy / Deployinator

**Problema:** despliegues manuales, largos y con dependencia de 3 desarrolladores, 1 ingeniero de operaciones y otros de guardia; más de una hora aun cuando iban bien.

**Intervención:** herramienta Deployinator, flujo repetible en un botón, automatización de publicación, normalización del proceso.

**Resultado reportado:** de **más de 60 minutos** a **menos de 2 minutos**, y de al menos **4 personas** participando directamente a **1 persona**. No confundir menor número de ejecutores por despliegue con reducción de plantilla.

**Conexión académica:** mejor diseño de tareas, autonomía y contexto de apoyo; solución tecnológica y coordinación, no prueba aislada de efecto de un tipo de liderazgo.

**Fuente primaria:** Etsy Engineering, Erik Kastner, 20-05-2010: https://www.etsy.com/codeascraft/quantum-of-deployment

## 7. Opciones contextualizadoras no recomendadas como caso principal

- **Contraloría Perú, obras paralizadas a marzo 2026:** sirve para mostrar riesgos públicos de planificación, presupuesto o contratos; NO es muestra de proyectos de software ni ejemplo de intervención con medición posterior de éxito. https://www.gob.pe/institucion/contraloria/informes-publicaciones/8147812-informe-de-obras-paralizadas-en-el-territorio-nacional-a-marzo-2026
- **Centros MAC Perú / BID:** evaluación de impacto más rigurosa sobre servicios públicos: −18 minutos (~−22 %) de tiempo por trámite, −S/4 (~−50 %) de gasto de usuarios; ahorro agregado de S/53,4 millones en 2024 y costo operativo de S/9,3 millones. No es caso directo de proyectos de software y no se debe calcular un ROI sin otros costos/inversión. https://www.iadb.org/en/blog/modernization-state/public-administration/effectiveness-and-impact-experience-mac-centers-peru

## 8. Guion web propuesto (18 diapositivas; sujeto a tiempo de exposición)

El ciclo didáctico aplicado a cada caso es: **teoría → problema → intervención → indicador → reflexión**.

| # | Capítulo | Diapositiva (título de trabajo) | Visual recomendado | Evidencia |
|---:|---|---|---|---|
| 01 | Apertura | ¿Por qué los equipos talentosos no siempre rinden? | Portada tipográfica, problema central | Tres autores |
| 02 | Contexto | La brecha entre trabajar juntos y rendir bien | 27 % y 43 % con aclaración de encuesta | Blanchard p. 2 |
| 03 | Teoría I | Los cuatro habilitadores de Haas y Mortensen | Modelo 4-D + 4 condiciones | Haas/Mortensen pp. 2–3 |
| 04 | Caso ING | El problema: silos y transferencias de trabajo | Antes: flujo fragmentado | McKinsey 2017 |
| 05 | Caso ING | La solución: squads y propósito compartido | Antes/después organizacional | McKinsey 2017 |
| 06 | Caso ING | Resultado: nueva cadencia de lanzamientos | Línea de tiempo 5–6/año a 2–3 semanas | McKinsey 2017 |
| 07 | Reflexión I | Qué cambió y qué NO podemos inferir | Mapa teoría→decisión→resultado | Síntesis de autores |
| 08 | Teoría II | Las cuatro etapas del desarrollo de equipo | Orientación → insatisfacción → integración → producción | Blanchard pp. 6–7 |
| 09 | Caso BCP | El problema peruano: procesos manuales | Diagnóstico con evidencias | HashiCorp + memorias |
| 10 | Caso BCP | La intervención: de áreas funcionales a capacidades integradas | Cronología 2015–2019–2024–2025 | BCP memorias + Forbes |
| 11 | Caso BCP | Resultados: despliegue de 45 a 4 días | Gráfico antes/después con límite | Forbes contenido patrocinado |
| 12 | Caso BCP | Resultados 2025: más entregas, menor costo | Tres indicadores −21 %, +33 %, −12 % | Memoria BCP 2025 |
| 13 | Reflexión II | Qué pueden aprender los equipos de software peruanos | Conexión Blanchard + Haas | Interpretación delimitada |
| 14 | Teoría III | ¿Dirigir, liderar o hacer ambas cosas? | Dos roles que se complementan | Boonstra |
| 15 | Microcaso Etsy | El problema: la dependencia de despliegues manuales | Cuello de botella del pipeline | Etsy Engineering 2010 |
| 16 | Microcaso Etsy | El cambio: Deployinator y proceso repetible | Diagrama automatizado | Etsy Engineering 2010 |
| 17 | Resultados/reflexión III | De más de una hora a menos de dos minutos | Barras tiempo y participantes | Etsy + interpretación |
| 18 | Cierre | Qué aporta cada autor y cómo actuaría un gerente | Modelo integrado + fuentes/QR | Síntesis razonada |

**Distribución tentativa:** expositor 1, diapositivas 1–9 (teoría y caso ING, plantea problema de BCP); expositor 2, diapositivas 10–18 (solución/resultados BCP, Boonstra/Etsy y cierre). Ajustar tras medir tiempo.

## 9. Requisitos de aceptación antes de escribir HTML/CSS/JS

- [ ] Cada gráfico conserva la población/unidad y fuente visible.
- [ ] Al menos un caso peruano completo con cifras operativas verificables.
- [ ] Cada teoría se explica ANTES del caso al que se aplica.
- [ ] Cada caso tiene contexto, problema, intervención, resultado y reflexión.
- [ ] Se distingue observación, cálculo propio e interpretación.
- [ ] No se promete ROI cuando solo existe reducción de costo operativo.
- [ ] La exposición funciona sin conexión mediante un respaldo local.
- [ ] Los dos expositores pueden defender qué mide cada cifra y cómo se relaciona con los tres papers.

## 10. Decisión de alcance

**Recomendado:** BCP como caso peruano principal; ING como ejemplo internacional de cambio organizacional; Etsy como contraste técnico cuantificable. Contraloría y Centros MAC, solo si se necesita un caso complementario de gestión pública o impacto social sin desplazar el foco de software.
