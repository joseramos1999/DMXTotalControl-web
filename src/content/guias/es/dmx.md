---
title: ¿Qué es DMX?
description: Lo básico para controlar luces de espectáculo desde un ordenador o una mesa — universos, canales, direcciones, cables y terminadores.
---

## Un idioma común para las luces

**DMX512** (o simplemente DMX) es el estándar con el que una mesa de luces o un ordenador habla con los aparatos de iluminación: PAR LED, cabezas móviles, estrobos, máquinas de humo, dimmers… Casi cualquier aparato de espectáculo tiene una entrada DMX, así que con un mismo control manejas equipos de marcas distintas.

La idea es sencilla: el control envía todo el rato una lista de números, y cada aparato escucha los que le tocan.

## Universos y canales

- Un **universo** es una línea DMX con **512 canales**.
- Cada **canal** lleva un valor de **0 a 255**: 0 es apagado o el mínimo, 255 el máximo.
- El control repite el universo entero muchas veces por segundo (hasta unas 44), así que los cambios se ven al momento.

Si tu equipo necesita más de 512 canales, usas más universos: cada uno sale por su interfaz o por la red (consulta [Art-Net y sACN](../art-net-y-sacn/)).

## Cuántos canales usa cada aparato

Cada aparato ocupa varios canales seguidos, según su **modo** (o «personalidad»):

| Aparato | Canales habituales | Qué controla cada uno |
|---|---|---|
| PAR LED sencillo | 3 a 4 | Rojo, verde, azul (y blanco) |
| PAR LED completo | 6 a 8 | Dimmer, colores, estrobo, programas internos |
| Cabeza móvil | 12 a 30 o más | Pan, tilt, color, gobo, foco, prisma, dimmer… |
| Máquina de humo | 1 a 2 | Cantidad de humo, ventilador |

El modo se elige en el propio aparato, y el manual del aparato dice qué hace cada canal. Por eso los programas de control usan **bibliotecas de fixtures**: definiciones con los canales de cada modelo, para que no tengas que aprenderlos. DMX Total Control trae miles, además de la Open Fixture Library y la importación de GDTF (consulta [Fixtures](../../manual/fixtures/)).

## La dirección DMX

La **dirección** es el primer canal que escucha un aparato. Se ajusta en el propio aparato, en su pantalla o con unos interruptores.

Por ejemplo, con PAR de 7 canales:

- El primero en la dirección **1** usa los canales 1 a 7.
- El segundo en la dirección **8** usa los canales 8 a 14.
- El tercero en la dirección **15**, y así.

Dos aparatos iguales con la **misma dirección** hacen exactamente lo mismo: a veces es lo que quieres (dos PAR siempre iguales) y a veces es un error. Al patchear en el programa, pon la misma dirección y el mismo modo que en el aparato. El [Patch](../../manual/patch/) te propone la siguiente dirección libre.

## Cables, cadena y terminador

- Los aparatos se conectan **en cadena**: del control al primer aparato, de su salida (DMX OUT) a la entrada del siguiente (DMX IN), y así hasta el último.
- Usa **cable DMX** (de 110 a 120 Ω). El cable de micrófono tiene los mismos conectores XLR, pero no está hecho para datos y da fallos en tiradas largas o con muchos aparatos.
- Los conectores pueden ser **XLR de 3 o de 5 pines**; con un adaptador se pasa de uno a otro.
- En una misma línea caben unos **32 aparatos**. Para más, o para repartir la señal en varias direcciones, se usa un **splitter** DMX.
- Pon un **terminador** (una resistencia de 120 Ω en un conector) en la salida del último aparato. Sin él la señal rebota y aparecen parpadeos raros.

## 8 y 16 bits

Algunos parámetros necesitan más precisión que 256 pasos, sobre todo el pan y el tilt de las cabezas móviles. Para eso usan **dos canales**: uno grueso y otro fino (**16 bits**, 65.536 pasos). Si la biblioteca tiene el modo correcto del aparato, el programa se encarga solo.

## Quién gana cuando dos cosas tocan el mismo canal

Cuando dos escenas mandan sobre el mismo canal, hay dos reglas clásicas:

- **HTP** (el más alto gana): para las intensidades. Si una escena pone un dimmer al 50 % y otra al 80 %, sale el 80 %.
- **LTP** (el último gana): para el resto (color, posición, gobo…). Manda la última escena que tocó el canal.

DMX Total Control añade **prioridades** de 0 a 10 por escena: la de más prioridad manda, también en las intensidades. Lo explica [Directo](../../manual/directo/#prioridades).

## Siguiente paso

Con esto ya puedes [conectar tus luces al ordenador](../conectar-luces-al-ordenador/). Si aún no tienes interfaz, mira [cómo elegir una interfaz DMX USB](../elegir-interfaz-dmx-usb/).
