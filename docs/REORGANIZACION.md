# Auditoría y consolidación

Base: único commit local y remoto 93a0d87. Presentacion_Liderazgo_Web_Completa contenía la única aplicación ejecutable y las últimas conexiones breves, ajustes de espacio de la diapositiva 5 y «91,1 % menos» en la 11. revision_trazabilidad contenía informes, prueba y parche histórico; no otra versión.

Los cuatro archivos ejecutables se movieron a raíz sin cambiar su contenido. Los cuatro respaldos editoriales se movieron a docs. Los informes y pruebas quedan en docs/revision_trazabilidad; README y VALIDACION anteriores en docs/archivo. data.json duplica intencionadamente el objeto PRESENTATION para respaldo; no se eliminó. El parche histórico permanece como evidencia y no se aplica.

Los tres PDF locales se conservan intactos y se excluyen del nuevo árbol de Git mediante .gitignore. El commit inicial público contiene los PDF: retirarlos del historial requiere una operación adicional explícitamente autorizada. No se reescribió el historial.

Pruebas superadas: sintaxis JS, simulación DOM de 18 diapositivas, navegación, índice, ayuda, referencias, controles flotantes, hash y llamadas de fullscreen. Rutas CSS/JS relativas; sin recursos remotos necesarios para abrir offline. Guiones preservados como datos con interfaz deshabilitada; portada orbital estática, sin animación orbital preexistente.

Pendiente: validación visual real en 1920×1080, 1600×900, 1366×768 y fullscreen. Brave falla al iniciar por restricciones de sockets del entorno. La simulación no prueba ausencia de superposiciones.

Publicación: los archivos están preparados para main y /(root). La integración y activación de Pages deben verificarse antes de afirmar publicación.
