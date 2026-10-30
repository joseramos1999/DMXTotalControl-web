---
title: Cómo elegir una interfaz DMX USB
description: Tipo Open o tipo Pro, aislamiento, entrada DMX, uno o dos universos, o pasar a la red — qué mirar según lo que vayas a hacer.
---

## Qué hace la interfaz

La interfaz DMX USB es el puente entre el ordenador y las luces: recibe del programa los valores de los canales y los saca por un conector XLR como señal DMX. Hay muchas, de muchos precios, pero casi todas son de dos tipos.

## Tipo Open o tipo Pro

**Tipo Open** (como la Enttec Open DMX USB y muchas compatibles):

- Por dentro, un chip USB a serie (normalmente FTDI) y poco más. **Es el ordenador el que genera la señal DMX**.
- Son las más **baratas** y funcionan bien para practicar, fiestas y montajes pequeños.
- Si el ordenador va muy cargado, el ritmo de la señal puede variar, y algunos aparatos lo notan con parpadeos.
- Solo salida: no reciben DMX.

**Tipo Pro** (como la Enttec DMX USB Pro, las DMXKing ultraDMX o la Eurolite USB-DMX512 PRO):

- Llevan un **microcontrolador que genera la señal él solo**, siempre al mismo ritmo, aunque el ordenador esté ocupado.
- Suelen tener **entrada DMX**, y algunas **dos universos** de salida.
- Cuestan más, pero son las recomendables para bolos y salas.

## Qué mirar

- **Aislamiento óptico** (galvánico): separa eléctricamente el ordenador de la línea DMX. Protege el ordenador de derivaciones y evita ruidos. Para el directo, muy recomendable.
- **Cuántos universos**: suma los canales de tus aparatos. Hasta 512, uno. Para más, una interfaz de dos universos o [Art-Net y sACN](../art-net-y-sacn/).
- **Entrada DMX**: solo si quieres controlar el programa desde otra mesa.
- **Conector**: XLR de 3 o de 5 pines; se adapta fácilmente, pero mejor que coincida con tus cables.
- **Compatibilidad**: comprueba que el programa la admite. En DMX Total Control, mira la [lista de hardware compatible](../../hardware/).

## Las «compatibles con Enttec»

Muchas interfaces baratas se venden como compatibles con la Enttec Open DMX USB o con la DMX USB Pro. Si llevan un chip FTDI suelen funcionar como la original, pero la calidad varía mucho: si la tuya da problemas, [cuéntanoslo](https://github.com/joseramos1999/DMXTotalControl/issues/new?template=compatibilidad.md) y lo añadimos a la lista.

## USB o red

A partir de dos o tres universos, o si las luces están lejos del ordenador, suele compensar un **nodo Art-Net o sACN**: un cable de red lleva todos los universos, y el nodo saca las líneas DMX junto a las luces.

## Según lo que vayas a hacer

| Uso | Lo recomendable |
|---|---|
| Aprender y practicar, fiestas en casa | Una tipo Open, o ninguna: puedes programar sin luces |
| DJ y bolos pequeños | Una tipo Pro con aislamiento |
| Teatro y salas | Tipo Pro con aislamiento, o el nodo de la sala |
| Muchos universos o festivales | Nodos Art-Net o sACN en red |

Con la interfaz en la mano, sigue con [cómo conectar luces al ordenador](../conectar-luces-al-ordenador/).
