# Marca de DMX Total Control

Los archivos están en [`public/marca/`](public/marca/) y se publican en la web en `/marca/` para la prensa y los usuarios. Los genera `node scripts/make-brand.mjs` a partir del icono del programa (`dtc/icons/dtc-icon.svg`).

## El nombre

- Siempre **DMX Total Control**: tres palabras, con esas mayúsculas.
- Nunca «DMX Control» ni «Total Control»: existe otro programa libre llamado DMXControl y no queremos que se confundan.
- `DMXTotalControl` solo en nombres de archivo, carpetas y código. «DTC» solo dentro del icono.

## Logo e icono

| Archivo | Para qué |
|---|---|
| `dtc-logo-fondo-oscuro.png` | El logo (icono + nombre) sobre fondos oscuros |
| `dtc-logo-fondo-claro.png` | El logo sobre fondos claros |
| `dtc-icono.svg`, `dtc-icono-512.png` | El icono en color: donde no cabe el nombre (avatares, favicon) |
| `dtc-icono-blanco.svg`, `…-512.png` | Icono en un color, blanco: sobre fotos o fondos de color |
| `dtc-icono-negro.svg`, `…-512.png` | Icono en un color, negro: impresión en blanco y negro |

- **Espacio libre** alrededor: al menos un cuarto de la altura del icono.
- **Tamaño mínimo**: 32 px de icono. Por debajo, el programa usa una versión con solo la D (`dtc/icons/dtc-icon-small.svg`).
- **No**: deformarlo, girarlo, cambiar los colores del degradado, añadirle sombras o contornos, ni poner el logo en color sobre una foto con mucho detalle (para eso está el blanco).

## Colores

Salen del tema oscuro del programa y de su icono.

| Uso | Color |
|---|---|
| Degradado de la marca (icono) | `#3d8bfd` → `#ae3ec9` |
| Fondo de la web | `#0b0d11` |
| Fondo del programa | `#0e1014` |
| Superficies (tarjetas, paneles) | `#161920`, `#1d212a` |
| Acento (enlaces, adornos) | `#3d8bfd` (en fondo claro, `#1a62cc`) |
| Botones con texto blanco | `#2b6be6`, que da el contraste que pide la accesibilidad (4,8:1) |
| Texto | `#eef0f4`; secundario `#a6acb9` |
| Colores de los grupos (adornos) | azul `#3d8bfd`, morado `#ae3ec9`, verde `#30a46c` |

## Tipografía

- **El nombre**, en Segoe UI Bold, la letra del propio programa.
- **La web**, en [Inter](https://rsms.me/inter/) (SIL Open Font License), que se sirve desde la propia web.

## Insignia «Hecho con DMX Total Control»

Para que los usuarios la pongan en sus vídeos, carteles o webs.

| Archivo | Fondo |
|---|---|
| `hecho-con-dtc-oscuro.svg` / `.png` | Oscuro |
| `hecho-con-dtc-claro.svg` / `.png` | Claro |
| `made-with-dtc-oscuro.svg` / `.png` | Oscuro, en inglés |
| `made-with-dtc-claro.svg` / `.png` | Claro, en inglés |

El SVG mide 225 × 56; el PNG, el doble (450 × 112). En una web:

```html
<a href="https://joseramos1999.github.io/DMXTotalControl-web/">
  <img src="https://joseramos1999.github.io/DMXTotalControl-web/marca/hecho-con-dtc-oscuro.svg"
       alt="Hecho con DMX Total Control" width="225" height="56">
</a>
```

(Con el dominio propio, cambiar la dirección.)

## Textos del proyecto

Para directorios de programas, notas de prensa, redes y la descripción de GitHub.

**Frase**: «Control DMX gratis, pensado para el directo.» / «Free DMX control, made for live shows.»

**Corta** (unos 160 caracteres):

> Control de iluminación DMX libre y gratuito para Windows, pensado para el directo: escenas por grupos, programador con FX, playbacks y el SHOW en el móvil.

> Free and open-source DMX lighting control for Windows, made for live shows: scenes by groups, a programmer with FX, playbacks and the SHOW on your phone.

**Larga**:

> DMX Total Control es un programa libre y gratuito para controlar iluminación DMX desde un ordenador con Windows. Está pensado para el directo: lanzas escenas por grupos con un botón, programas rápido con paletas, FX y una línea de comandos, operas cuelists con GO en los playbacks y montas tu propia pantalla de show, que también se abre en el móvil o la tablet. Funciona con interfaces DMX USB, Art-Net y sACN, controladoras MIDI como la Akai APC mini y miles de fixtures. Está en seis idiomas, con su manual completo, y no pide licencias, llaves USB ni cuenta.

> DMX Total Control is a free and open-source program to control DMX lighting from a Windows computer. It is made for live shows: you fire scenes by groups with one button, program fast with palettes, FX and a command line, run cuelists with GO on the playbacks and build your own show screen, which also opens on a phone or tablet. It works with USB DMX interfaces, Art-Net and sACN, MIDI controllers such as the Akai APC mini and thousands of fixtures. It is in six languages, with its full manual, and needs no licence, USB key or account.

## GitHub como escaparate

Se cambia en github.com, en el repositorio del programa:

1. **About** (el engranaje junto a «About», en la portada del repositorio):
   - *Description*: `Free and open-source DMX lighting control for Windows, made for live shows · Control de iluminación DMX libre y gratuito para Windows`
   - *Website*: la dirección de la web (`https://joseramos1999.github.io/DMXTotalControl-web/` hasta que haya dominio).
   - *Topics*: `dmx`, `dmx512`, `lighting-control`, `stage-lighting`, `lighting`, `art-net`, `sacn`, `e131`, `midi`, `osc`, `akai-apc`, `live-show`, `windows`, `qt6`, `qml`, `open-source`.
   - Desmarcar *Packages* y *Deployments* si no se usan, para que la portada quede limpia.
2. **Settings › General › Social preview**: subir `public/marca/github-social.png` (1280 × 640). Es la imagen que sale al compartir el repositorio.
3. **Settings › General › Features › Discussions**: activarlas y dejar las categorías **Anuncios**, **Preguntas** (formato Q&A), **Ideas** y **Enseña tu show** (renombrando las que GitHub crea: Announcements, Q&A, Ideas, Show and tell; las demás se pueden borrar).
4. **Issues › Labels**: crear la etiqueta `hardware` y añadirla a la plantilla `compatibilidad.md` (ahora va sin etiqueta, porque las plantillas solo usan las que existen).
