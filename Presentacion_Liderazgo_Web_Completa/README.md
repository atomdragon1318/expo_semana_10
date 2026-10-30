# El talento no basta · Presentación web

**18 diapositivas académicas**, elaboradas a partir de las tres lecturas y los casos ING, BCP y Etsy.

## Abrir sin conexión

Abre `index.html` en Chrome, Edge o Firefox. Todo el contenido y los estilos funcionan localmente; los enlaces a fuentes externas sí requieren internet. `data.json` contiene los textos y referencias estructurados como respaldo.

## Controles

- `→`, `←`, `Espacio`, `Re Pág`, `Av Pág`: navegar.
- `O`: índice de las 18 diapositivas.
- `F`: pantalla completa de la diapositiva.
- `?`: ayuda.
- `Esc`: cerrar ventanas.
- `Inicio` / `Fin`: primera / última diapositiva.
- Clic en «VER FUENTE»: detalles y enlaces a fuentes, con límites de interpretación.
- En diapositiva 12, selecciona cada indicador para ver su interpretación.

Los controles están ocultos al abrir la presentación. Acerca el mouse a los últimos 96 px de la pantalla para mostrarlos; se ocultan tras 2,4 segundos de inactividad. También puedes acceder con Tab o tocar una zona libre de la diapositiva. Los controles con foco de teclado permanecen visibles para facilitar su uso.

El lienzo conserva la proporción 16:9 y ocupa el máximo espacio disponible, con bandas discretas si la pantalla tiene otra proporción. No hay barras permanentes ni indicador público de expositor. Las notas del expositor no están disponibles en la interfaz ni mediante el teclado.

## GitHub Pages

Crea un repositorio público, sube `index.html`, `styles.css`, `app.js` y `data.json` en la raíz, entra a **Settings → Pages**, elige **Deploy from a branch**, rama **main**, carpeta **/(root)**. URL habitual: `https://USUARIO.github.io/REPOSITORIO/`. No requiere backend ni Node.js.

## Integridad académica

- Fuentes por pantalla y notas de limitación de los datos.
- Los porcentajes de Blanchard describen percepciones o comparaciones de encuestados.
- ING: comparar cadencia de lanzamientos no implica que las publicaciones tengan el mismo tamaño.
- BCP: 45→4 días para despliegue procede de entrevista patrocinada (2024); variaciones de 2025 proceden de memoria institucional. Son métricas distintas.
- Etsy: >60 y <2 minutos son límites, no valores exactos; reducción >96,7 % derivada de ellos, no retorno de inversión.
- No se distribuyen los PDF académicos originales.

## Fuentes y guion de respaldo

La aplicación carga los datos del objeto `PRESENTATION` en `app.js`, sin fetch y sin generador. `data.json` es su copia de respaldo: ambos deben actualizarse juntos. El HTML contiene el contenido visible. `Contenido_Presentacion_Web.json` y `Guion_Academico_Web_18_Diapositivas.md` son materiales editoriales de respaldo, no se ejecutan al abrir la presentación.

Los modales separan evidencia empresarial, marco académico, relación entre teoría y caso y limitación cuando corresponda. La paginación de Haas y Mortensen corresponde a la impresión web de 13 páginas incluida en el proyecto, no a la revista. Los guiones internos se conservan; su interfaz permanece deshabilitada por solicitud del usuario.

Validación de lógica y referencias (sin dependencias): `node revision_trazabilidad/verificar.cjs`, desde la raíz del proyecto. Este comando simula el DOM; no verifica el renderizado del navegador. El informe y el diff están en `revision_trazabilidad/`.
