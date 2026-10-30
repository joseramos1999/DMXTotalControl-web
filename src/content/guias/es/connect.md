---
title: Cómo conectar luces DMX al ordenador
description: De la caja al primer destello — la interfaz, los cables, las direcciones, el patch y qué revisar si no se enciende nada.
---

## Lo que necesitas

- Un ordenador con Windows 10 u 11 y [DMX Total Control](../../descargar/).
- Una **interfaz DMX USB**, o un **nodo Art-Net o sACN** si vas por red (consulta [cómo elegir una interfaz](../elegir-interfaz-dmx-usb/)).
- **Cable DMX** para unir la interfaz con el primer aparato y cada aparato con el siguiente.
- Un **terminador** de 120 Ω para el último aparato (muchas veces viene con la interfaz).

## 1. Prepara los aparatos

En cada aparato:

1. Ponlo en **modo DMX** (no en automático ni en modo música).
2. Elige su **modo de canales** y apúntalo: por ejemplo, «7 canales».
3. Ponle una **dirección** que no pise a los demás. Con PAR de 7 canales: 1, 8, 15, 22…

Apunta en un papel qué aparato es, su modo y su dirección. Te hará falta en el patch. Si estas palabras te suenan raras, empieza por [¿Qué es DMX?](../que-es-dmx/).

## 2. Conecta los cables

1. Conecta la interfaz al USB del ordenador.
2. De la salida DMX de la interfaz, un cable a la entrada DMX (DMX IN) del primer aparato.
3. De su salida (DMX OUT) a la entrada del siguiente, y así hasta el último.
4. Pon el terminador en la salida del último.

Las interfaces con chip FTDI (muchas de las DMX USB) necesitan su driver: si no lo tienes, el instalador de DMX Total Control te ofrece al terminar la página para descargarlo. Para otras interfaces, instala el driver de su fabricante.

## 3. Elige la salida en el programa

Abre DMX Total Control y ve a **Salidas** (F7). Cada universo tiene una salida: elige tu interfaz para el **Universo 1**. Si vas por red a un nodo, elige la salida Art-Net o E1.31 (sACN) de la tarjeta de red que va a las luces. Todos los detalles, en [Salidas](../../manual/salidas/).

## 4. Patchea tus aparatos

Ve a **Patch** (F5) y pulsa **«Añadir fixtures»**:

1. Busca la marca y el modelo en la biblioteca.
2. Elige **el mismo modo** que pusiste en el aparato.
3. Pon **la misma dirección** y el universo.
4. Si tienes varios iguales, indica cuántos: el programa les da direcciones seguidas.

Si tu modelo no está, prueba con la Open Fixture Library, importa su archivo GDTF o créalo en el creador de fixtures (consulta [Fixtures](../../manual/fixtures/)). Para PAR sencillos, los fixtures genéricos (RGB, RGBW, dimmer) suelen bastar.

## 5. Prueba

- En el Patch, **«Identificar»** hace parpadear en blanco los fixtures seleccionados: así compruebas que cada uno es el que crees.
- En **Programar** (F3), selecciona los fixtures y sube el dimmer, o elige un color.
- En **Salidas › Niveles DMX** ves los valores que se están enviando a cada canal.

Si ves que el valor cambia en Niveles DMX pero el aparato no responde, el problema está entre la interfaz y el aparato. Si el valor no cambia, está en el programa (el patch o el gran master).

## Si no se enciende nada

- **El aparato no está en modo DMX**, o tiene otra dirección u otro modo que en el patch.
- **El gran master está bajado o el blackout puesto**: mira la barra superior.
- **El universo no tiene salida** o es otro distinto al del patch.
- **Cable o terminador**: prueba con un solo aparato y un cable corto. Un cable de micrófono puede fallar.
- **La interfaz no aparece**: revisa el driver, prueba otro puerto USB y vuelve a buscar en Salidas.
- **Parpadeos o saltos raros**: falta el terminador, hay demasiados aparatos en la línea o un cable está mal.

## Sin luces todavía

No necesitas los aparatos para empezar: abre un show de ejemplo, patchea tus fixtures y prográmalo todo. Los niveles DMX se ven en el programa, y con un visualizador 3D que reciba Art-Net o sACN puedes ver el show en la pantalla (consulta [Art-Net y sACN](../art-net-y-sacn/)).
