# El talento no basta

Presentación académica interactiva de 18 diapositivas sobre liderazgo y equipos de software, con los casos ING, BCP y Etsy. HTML, CSS y JavaScript; sin dependencias ni backend.

## Integrantes

- **Italo Sebastián Verona Flores** — Project Manager / Coordinador.
- **Leonardo Gamboa** — Frontend Móvil.
- **Guillermo Pérez** — Backend & Machine Learning Lead.

## Estructura y uso

`index.html`, `styles.css`, `app.js` y `data.json` forman el sitio en la raíz. `docs/` conserva guiones, evidencias, respaldos y revisiones históricas. No hay otra versión ejecutable. El HTML contiene el contenido visible; el objeto PRESENTATION de app.js y data.json deben mantenerse sincronizados.

Abre `index.html` en un navegador. Funciona offline; los enlaces externos necesitan conexión.

## Controles

Flechas, Espacio y Re/Av Pág: navegar. Inicio/Fin: extremos. **O**: índice. **F**: pantalla completa. **?**: ayuda. **Esc**: cerrar ventanas. Los controles flotantes aparecen al acercar el cursor al borde inferior; también admiten teclado y toque. «Ver fuente» abre las referencias; los indicadores de la diapositiva 12 son interactivos.

Los guiones del expositor permanecen en los datos y en docs; su interfaz y el atajo N siguen deshabilitados por decisión anterior. La portada conserva sus elementos orbitales estáticos; no contiene animación orbital implementada.

## GitHub Pages

Después de integrar los cambios en main: Settings → Pages → Deploy from a branch → **main** → **/(root)** → Save. La entrada es index.html y los recursos usan rutas relativas, compatibles con el subdirectorio expo_semana_10. No se declara publicado hasta verificar el despliegue.

## Fuentes

Haas y Mortensen (2016), *The Secrets of Great Teamwork*, Harvard Business Review; The Ken Blanchard Companies (2019), *High Performance Teams*; Boonstra (2018), *Perspectivas sobre el liderazgo*, Harvard Deusto 282. Las referencias completas y fuentes empresariales están en los modales.

Los PDF originales se conservan localmente e ignoran en Git. Retirarlos del árbol actual no elimina posibles copias del historial; no se ha reescrito el historial.

## Validación

`node --check app.js` y `node docs/revision_trazabilidad/verificar.cjs`. Esta última prueba simula el DOM y no certifica renderizado ni fullscreen nativo. Véase docs/REORGANIZACION.md para el estado de la auditoría.
