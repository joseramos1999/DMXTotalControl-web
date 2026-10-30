# Web de DMX Total Control

La web del programa [DMX Total Control](https://github.com/joseramos1999/DMXTotalControl): inicio, descarga, preguntas frecuentes, novedades, aviso legal y el manual en seis idiomas. Hecha con [Astro](https://astro.build) y [Starlight](https://starlight.astro.build) (el manual), y publicada en GitHub Pages.

La hoja de ruta de la web y de la campaña está en el repositorio del programa, en `promocion/` (no se sube).

## Qué sale de dónde

| Contenido | De dónde sale |
|---|---|
| El manual (`/manual/`, `/en/manual/`, `/pt/manual/`…) | `docs/manual` del repositorio del programa, copiado por `scripts/sync-app.mjs` a `src/content/docs/` (no se sube) |
| Las novedades en español | `docs/novedades/vX.Y.Z.md` del programa, copiadas a `src/content/novedades/es/` (no se suben) |
| Las novedades en inglés | `src/content/novedades/en/vX.Y.Z.md`, traducidas aquí |
| Versión, fecha, tamaño y SHA-256 del instalador | La API de GitHub (`releases/latest`), guardada en `src/data/release.json` para compilar sin conexión |
| Las capturas de la web | `src/assets/shots/es` y `en`, hechas con el programa (ver abajo) |
| Los textos de las páginas | `src/views/*.astro`, en español e inglés |

`scripts/sync-app.mjs` busca el programa en `../DMXTotalControl`; con `APP_REPO` se le da otra ruta.

## Trabajar en local

Necesita Node.js 22 o posterior (aquí, la LTS 26).

```bash
npm install
npm run dev        # copia el manual y abre http://localhost:4321/DMXTotalControl-web/
npm run build      # la web completa en dist/
npm run preview    # sirve dist/
```

Mientras no haya dominio, la web vive en `https://joseramos1999.github.io/DMXTotalControl-web/`, por eso las direcciones locales llevan `/DMXTotalControl-web/`. Con un dominio propio, la publicación cambia sola a la raíz (ver «Dominio propio»).

## Publicar

`.github/workflows/deploy.yml` compila y publica en GitHub Pages en cada push a `main`, cada día a las 6:17 (UTC) para recoger una Release nueva o cambios del manual, y a mano desde Actions.

Una sola vez, en GitHub:

1. Crear el repositorio `joseramos1999/DMXTotalControl-web` (público) y subir este.
2. **Settings › Pages › Build and deployment › Source: GitHub Actions**.
3. Lanzar el workflow «Web» (o hacer un push).

GitHub desactiva los workflows programados de un repositorio sin commits en 60 días: si pasa, se vuelve a activar desde Actions.

### Dominio propio

Al registrar el dominio (por ejemplo `dmxtotalcontrol.com`): en **Settings › Pages › Custom domain**, el dominio; en el DNS, los registros que indica GitHub; y activar **Enforce HTTPS**. El workflow lee la dirección de Pages, así que la siguiente publicación ya sale en la raíz del dominio, sin tocar el código.

## Con cada versión del programa

- La descarga, la huella y las novedades en español se actualizan solas (en la siguiente publicación, como mucho al día siguiente).
- Escribir las novedades en inglés en `src/content/novedades/en/vX.Y.Z.md` (mismo formato que `v1.0.0.md`).
- Si la interfaz ha cambiado a la vista, rehacer las capturas.

## Capturas

Se hacen con el propio programa (`--grab`), a 1440 × 900 y con el tema oscuro, desde los shows de ejemplo de `dtc/examples`. Las inglesas, desde copias de esos shows con los nombres traducidos (Azul → Blue, Colores → Colours…), para que no salgan escenas en español.

```bash
dmxtotalcontrol.exe --locale es_ES --theme dark --size 1440x900 --page 0 --grab src/assets/shots/es/live.png "Bolo pequeño.qxw"
```

| Captura | Show | Opciones |
|---|---|---|
| `live` | Bolo pequeño | `--page 0` |
| `mixer` | Bolo pequeño | `--page 0 --mixer` |
| `show` | Bolo pequeño | `--page 1` |
| `fx` | Concierto con cabezas móviles | `--page 2 --select-all --fx` |
| `program` | Concierto con cabezas móviles | `--page 2 --select-all` |
| `scenes` | Concierto con cabezas móviles | `--page 3 --scene 0` |
| `patch` | Concierto con cabezas móviles | `--page 4 --patch-view plan` |
| `playbacks` | Sala con playbacks | `--page 9` |

Las imágenes para redes sociales (`public/og/es.png` y `en.png`, 1200 × 630) salen de la captura `live`: `node scripts/make-og.mjs` las rehace.

## Marca

El logo, el icono en un color, la insignia «Hecho con DMX Total Control», la imagen de GitHub y los textos del proyecto: en [MARCA.md](MARCA.md). Los archivos de `public/marca/` los rehace `node scripts/make-brand.mjs` (necesita Windows, por la letra Segoe UI del nombre).
