# Trazabilidad académica: implementación y validación

## Estado

Implementación realizada y pruebas de lógica superadas. **Pendientes de aceptación:** renderizado real en las tres resoluciones, capturas comparativas y dictamen independiente de Antigravity. No se declara cerrada la validación visual ni la ausencia de errores de consola de navegador.

## Diagnóstico

La diapositiva 5 exponía decisiones de ING sin identificar sus correspondencias conceptuales y solo asociaba `ING` al modal. La 7 contenía hechos del banco, pero su pie citaba únicamente el marco. En BCP y Etsy había relaciones interpretativas cuya referencia no era suficientemente visible o no estaba asociada al modal.

No existe generador en el proyecto. El HTML contiene las diapositivas y `app.js` ejecuta un objeto `PRESENTATION` incrustado; `data.json` es una copia idéntica. Los materiales de contenido y guion son respaldos editoriales.

## Archivos modificados

- `Presentacion_Liderazgo_Web_Completa/index.html`: anotaciones y pies de fuentes.
- `Presentacion_Liderazgo_Web_Completa/styles.css`: estilos locales de las anotaciones, reutilizando los pasos existentes.
- `Presentacion_Liderazgo_Web_Completa/app.js`: fuentes, guiones, interpretaciones y agrupación del modal.
- `Presentacion_Liderazgo_Web_Completa/data.json`: copia sincronizada de los datos de ejecución.
- `Contenido_Presentacion_Web.json`: guiones, referencias y limitaciones de respaldo sincronizados.
- `Guion_Academico_Web_18_Diapositivas.md`: guion oral de las diapositivas 4, 5 y 7.
- `Presentacion_Liderazgo_Web_Completa/README.md`: documentación del origen de datos y prueba reproducible.
- `revision_trazabilidad/`: informe, diff y comprobación de lógica sin dependencias.

## Cambios por diapositiva

| Diapositiva | Cambio |
|---|---|
| 4 | Anotación identificada como lectura del equipo sobre subgrupos, barreras de información y coordinación. Pie con caso y marco. Guion ampliado. |
| 5 | Módulo «De la teoría a la práctica»: propósito → dirección; squads → estructura; coordinación y objetivos compartidos → mentalidad; DevOps → apoyo técnico posible y parcial. Se conserva íntegro el diagrama de squads. Pie con ambas fuentes. Guion y modal explican el razonamiento y sus límites. |
| 6 | Síntesis breve sobre reorganización y entrega continua que acompañaron mayor frecuencia. Se mantienen 5–6 grandes lanzamientos/año y 2–3 semanas, sin multiplicador ni equivalencia de tamaños. |
| 7 | Diagrama conservado, presentado como relación interpretativa. Se precisa la relación entre objetivos/información y mentalidad compartida; DevOps representa apoyo técnico parcial. Resultado identificado como reportado por ING. Pie con caso y marco. |
| 9–12 | Auditoría de distinción entre despliegue, time to market, volumen y costo. En la 10 se añade Forbes al pie porque la cronología también usa la entrevista de DevSecOps. Cifras intactas. |
| 13 | Referencias visibles a Haas–Mortensen y Blanchard; límite expreso sobre no demostrar las cuatro etapas de BCP. El modal añade Forbes para respaldar la mención de 45 → 4 días y separa interpretación de datos. |
| 15 | Caso empresarial conservado; sin atribuirlo a Boonstra. |
| 16 | Boonstra añadido al pie y al modal, que antes solo incluía Etsy. La conexión se identifica como interpretación. |
| 17 | Pie distingue caso y lectura teórica; modal aclara la interpretación con Boonstra y Haas–Mortensen. Sin atribución causal ni ROI. |

Los modales reutilizan el registro existente: A. Evidencia empresarial; B. Marco académico; C. Interpretación del equipo, cuando existe; D. Limitación. No hay registros duplicados ni nuevas dependencias.

## Referencias comprobadas

- Haas y Mortensen (2016), *The Secrets of Great Teamwork*. Se revisó el PDF local de 13 páginas, una impresión web. Dirección convincente: p. 3; estructura sólida: pp. 3–6; contexto de apoyo: pp. 6–7; mentalidad compartida: pp. 7–10; riesgos: pp. 2 y 7–9. **Son páginas de esta copia, no de la revista.** [Referencia pública](https://hbr.org/2016/06/the-secrets-of-great-teamwork).
- [McKinsey, entrevista a ejecutivos de ING (10/01/2017)](https://www.mckinsey.com/capabilities/people-and-organization/our-insights/ings-agile-transformation): se contrastaron propósito, organización multidisciplinaria, coordinación, DevOps y frecuencia de publicación. No se afirma que ING adoptara el artículo académico.
- Blanchard y Boonstra: PDFs locales revisados para la auditoría conceptual; no se atribuyen a esos autores investigaciones de BCP o Etsy.
- [Etsy Engineering, *Quantum of Deployment* (2010)](https://www.etsy.com/codeascraft/quantum-of-deployment): se contrastaron las funciones de Deployinator y el antes/después documentado.
- [Entrevista patrocinada de BCP en Forbes Perú (2024)](https://forbes.pe/brand-voice/2024-12-11/bcp-pionero-en-peru-en-el-uso-de-ia-generativa-para-desarrollar-software/): se comprobó el carácter patrocinado y la referencia al despliegue de 45 a 4 días.
- [Memoria Integrada BCP 2025, sección 3.3.2, p. 43](https://www.smv.gob.pe/ConsultasP8/temp/Memoria%20Integrada%20BCP%202025.pdf): se contrastaron el escalamiento desde 2018, tribus/unidades, centros de excelencia y los indicadores de tiempo, entregas y costo.

## Pruebas y resultados

- `node --check Presentacion_Liderazgo_Web_Completa/app.js`: correcto.
- `node revision_trazabilidad/verificar.cjs`: correcto. Simulación del DOM: 18 diapositivas, flechas y límites, Inicio/Fin/Espacio, índice, ayuda, hash, controles flotantes y temporizador; llamadas simuladas de entrada/salida de fullscreen.
- Modales 4, 5, 6 y 7: correctos en la simulación. En la 5 se comprueban ambas fuentes, las cuatro secciones del modal, el enlace académico y las páginas del PDF. También se comprueban las asociaciones BCP/Forbes y Etsy/Boonstra.
- Comparación de `data.json` con el objeto incrustado: idénticos. Todas las claves de fuentes resuelven a registros existentes.
- HTML: etiquetas equilibradas. Comparación numérica con el inicio de esta tarea: cifras del contenido intactas, excluyendo citas y el módulo de pasos sustituido. Los nombres y roles del equipo se conservan.
- No se reactivó el panel de notas ni `N`, retirados por petición anterior. Los guiones actualizados se conservan en los respaldos; la prueba confirma que `N` no abre nada.

**Límite:** una simulación del DOM no es una prueba visual ni una prueba de fullscreen nativo. Brave/Puppeteer no pudo arrancar dentro del entorno restringido; terminó con `TargetCloseError`, tras los problemas de sockets observados en la sesión anterior. No se certifican 1920×1080, 1600×900 ni 1366×768, ni ausencia de overflow o de errores de consola en un navegador real.

## Antes/después y capturas

No se pudieron obtener capturas reales. La descripción comparativa es:

- 4: problema empresarial solo → mismo diagrama más una anotación académica breve y atribuida.
- 5: tres pasos operativos → cuatro decisiones relacionadas con conceptos; diagrama de squads preservado, doble referencia y explicación detallada en el modal.
- 7: flechas genéricas y pie académico único → asociaciones interpretativas explícitas, resultado empresarial separado y doble referencia.

`cambios.patch` contiene el diff de los cuatro archivos de ejecución frente al inicio de esta tarea.

## Defectos y verificaciones pendientes

1. **Validación visual y consola:** ejecutar las tres resoluciones solicitadas, revisar las 18 diapositivas y capturar 4, 5 y 7. No hay evidencia suficiente para certificar ausencia de overflow.
2. **Antigravity:** se solicitó revisión de solo lectura después de implementar. El conector devolvió `user cancelled MCP tool call`; no hubo dictamen ni hallazgos independientes. No se atribuye aprobación al revisor.
3. **Precisión académica preexistente, diapositiva 10:** la fecha «2015 · Pilotos de innovación» no queda acreditada literalmente por el apartado de agilidad en p. 43. La p. 42 sí fecha la creación del Centro de InnovaCXión en 2015. Se informó al usuario y se conservó la fecha, sin corregirla silenciosamente. Conviene verificar la fuente exacta de los pilotos o precisar la etiqueta en una revisión posterior.
