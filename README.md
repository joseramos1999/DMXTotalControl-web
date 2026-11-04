# Web de DMX Total Control

La web del programa [DMX Total Control](https://github.com/joseramos1999/DMXTotalControl), en seis idiomas: inicio, funciones, una página por público (DJs, bandas, teatro, escuelas, salas), hardware compatible, aprende (con guías para empezar con DMX), descarga, preguntas, novedades, ¿vienes de QLC+?, colabora, hoja de ruta, prensa, aviso legal y el manual. Hecha con [Astro](https://astro.build) y [Starlight](https://starlight.astro.build) (el manual), y publicada en GitHub Pages.

La hoja de ruta de la web y de la campaña está en el repositorio del programa, en `promocion/` (no se sube).

## Idiomas y direcciones

El español va en la raíz con direcciones en español (`/descargar/`, `/para/djs/`, `/aprende/que-es-dmx/`); los demás idiomas, bajo su código y con direcciones en inglés (`/en/download/`, `/pt/for/djs/`, `/de/learn/what-is-dmx/`). La tabla de direcciones está en `src/routes.mjs`.

## Qué sale de dónde

| Contenido | De dónde sale |
|---|---|
| Los textos de las páginas | `src/i18n/<idioma>.ts`. `es.ts` es la fuente; los demás son traducciones con la misma forma (`typeof es`), así que si falta una clave, TypeScript lo dice |
| Las guías para empezar | `src/content/guias/<idioma>/{dmx,connect,network,interface}.md` |
| El manual (`/manual/`, `/en/manual/`, `/pt/manual/`…) | `docs/manual` del repositorio del programa, copiado por `scripts/sync-app.mjs` a `src/content/docs/` (no se sube) |
| Las novedades en español | `docs/novedades/vX.Y.Z.md` del programa, copiadas a `src/content/novedades/es/` (no se suben) |
| Las novedades en inglés | `src/content/novedades/en/vX.Y.Z.md`, traducidas aquí. Portugués, francés, italiano y alemán muestran las inglesas |
| La lista de hardware compatible | `src/data/hardware.ts` (con `tested: 'nombre'` cuando alguien lo ha probado) |
| Versión, fecha, tamaño y SHA-256 del instalador | La API de GitHub (`releases/latest`), guardada en `src/data/release.json` para compilar sin conexión |
| Las capturas de la web | `src/assets/shots/<idioma>/`, hechas con el programa (ver abajo) |

`scripts/sync-app.mjs` busca el programa en `../DMXTotalControl`; con `APP_REPO` se le da otra ruta.

### Enlaces dentro de los textos

En los diccionarios, los enlaces usan esquemas cortos que la web convierte en la dirección del idioma de la página: `manual:salidas#modo`, `page:download`, `for:schools`, `guide:connect`, `issues:`, `compat:` (el informe de compatibilidad), `repo:`, `repo:ROADMAP.md`, `readme:`, `releases:`. En las guías (Markdown) los enlaces son relativos (`../../manual/salidas/`, `../what-is-dmx/`), que funcionan igual en todos los idiomas porque las direcciones son paralelas.

### Comprobar una traducción

```bash
npx -y -p typescript tsc --ignoreConfig --noEmit --strict --skipLibCheck --target es2022 --module esnext --moduleResolution bundler src/i18n/fr.ts
```

No debe decir nada.

## Trabajar en local

Necesita Node.js 22 o posterior (aquí, la LTS 26).

```bash
npm install
npm run dev        # copia el manual y abre http://localhost:4321/
npm run build      # la web completa en dist/
npm run preview    # sirve dist/
```

La web vive en **https://dmxtotalcontrol.com**, en la raíz del dominio (ver «Dominio»).

## Publicar

`.github/workflows/deploy.yml` compila y publica en GitHub Pages en cada push a `main`, cada día a las 6:17 (UTC) para recoger una Release nueva o cambios del manual, y a mano desde Actions.

Una sola vez, en GitHub:

1. Crear el repositorio `joseramos1999/DMXTotalControl-web` (público) y subir este.
2. **Settings › Pages › Build and deployment › Source: GitHub Actions**.
3. Lanzar el workflow «Web» (o hacer un push).

GitHub desactiva los workflows programados de un repositorio sin commits en 60 días: si pasa, se vuelve a activar desde Actions.

### Dominio

`dmxtotalcontrol.com` está registrado en GoDaddy, verificado en la cuenta de GitHub (Settings › Pages, con el registro TXT `_github-pages-challenge-joseramos1999`) y puesto en **Settings › Pages › Custom domain** de este repositorio, con **Enforce HTTPS**.

En el DNS de GoDaddy, la web usa solo estos registros:

| Tipo | Nombre | Valor |
|---|---|---|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `joseramos1999.github.io` |
| TXT | `_github-pages-challenge-joseramos1999` | El código de verificación de GitHub |
| TXT | `@` | `google-site-verification=wzUpG4PM7wGvozEEzzTS2xy2qm_jWP_bEB9e8kxbj9M` (Google Search Console, propiedad de dominio). Es un registro TXT más en `@`, al lado del SPF del correo: no se toca el SPF |
| CNAME | `8146609655541d570d79a64970266d06` | `verify.bing.com` (Bing Webmaster Tools; verifica el sitio, y también da de alta la web en los buscadores que usan Bing) |

El resto (MX, `autodiscover`, los `_domainkey`, SPF, DMARC, `sip`, `lyncdiscover`, `msoid`…) es el correo de Microsoft 365: no hay que tocarlo.

El workflow lee la dirección de Pages, así que si el dominio cambia no hay que tocar el código. Pages da la dirección con `http://` hasta que se activa HTTPS; `astro.config.mjs` la pasa siempre a `https://`.

## Con cada versión del programa

- La descarga, la huella y las novedades en español se actualizan solas (en la siguiente publicación, como mucho al día siguiente).
- Escribir las novedades en inglés en `src/content/novedades/en/vX.Y.Z.md` (mismo formato que `v1.0.0.md`).
- Si la interfaz ha cambiado a la vista, rehacer las capturas.
- Si cambia lo que viene después, poner al día `roadmap` en los diccionarios (resume el `ROADMAP.md` del programa).

## Capturas

Se hacen con el propio programa (`--grab`), a 1440 × 900 y con el tema oscuro, desde los shows de ejemplo de `dtc/examples`, en cada idioma (`--locale es_ES`, `en_US`, `pt_BR`, `fr_FR`, `it_IT`, `de_DE`). Para los demás idiomas se usan copias de esos shows con los nombres de las escenas traducidos (Azul → Blue, Bleu, Blau…), para que no salgan escenas en español.

```bash
dmxtotalcontrol.exe --locale es_ES --theme dark --size 1440x900 --page 0 --grab src/assets/shots/es/live.png "Bolo pequeño.qxw"
```

| Captura | Show | Opciones |
|---|---|---|
| `live` | Bolo pequeño | `--page 0` |
| `mixer` | Bolo pequeño | `--page 0 --mixer` |
| `mappings` | Bolo pequeño | `--page 0 --learn` (el modo Mapear) |
| `show` | Bolo pequeño | `--page 1` |
| `outputs` | Bolo pequeño | `--page 6 --play 7` (los niveles DMX con el arcoíris sonando) |
| `fx` | Concierto con cabezas móviles | `--page 2 --select-all --fx` |
| `program` | Concierto con cabezas móviles | `--page 2 --select-all` |
| `scenes` | Concierto con cabezas móviles | `--page 3 --scene 0` |
| `patch` | Concierto con cabezas móviles | `--page 4 --patch-view plan` |
| `playbacks` | Sala con playbacks | `--page 9` |

No uses la vista de interfaces de Salidas (`--page 6` sin `--play`): lista las direcciones de red del ordenador.

Las imágenes para redes sociales (`public/og/<idioma>.png`, 1200 × 630) salen de la captura `live` y del titular de la portada de cada diccionario: `node scripts/make-og.mjs` las rehace.

## Marca

El logo, el icono en un color, la insignia «Hecho con DMX Total Control», la imagen de GitHub y los textos del proyecto: en [MARCA.md](MARCA.md). Los archivos de `public/marca/` los rehace `node scripts/make-brand.mjs` (necesita Windows, por la letra Segoe UI del nombre).
