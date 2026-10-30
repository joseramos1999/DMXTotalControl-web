---
title: Art-Net y sACN — DMX por la red
description: Cómo llevar muchos universos DMX por un cable de red, qué es un nodo, cómo poner las direcciones IP y cómo ver el show en un visualizador.
---

## DMX por un cable de red

**Art-Net** y **sACN** (también llamado E1.31) son dos formas de enviar DMX por una red Ethernet, la misma que usan los ordenadores. Tienen dos ventajas sobre la línea DMX clásica:

- **Muchos universos por el mismo cable**: decenas o cientos, en lugar de 512 canales por cable.
- **Distancias y repartos** de red normales: un switch y cables de red llevan la señal donde haga falta.

Los dos hacen lo mismo. Art-Net es muy común en equipos de directo y visualizadores; sACN es un estándar de ANSI muy usado en teatros y equipos grandes. DMX Total Control envía y recibe los dos.

## El nodo

Un **nodo** convierte la red en DMX: le llega Art-Net o sACN por el cable de red y saca DMX por sus conectores XLR, uno por universo. Muchos aparatos modernos, como pantallas y cabezas grandes, ya traen la red y no necesitan nodo.

Un montaje típico:

1. Ordenador → cable de red → **switch**.
2. Del switch, un cable a cada **nodo** (o a cada aparato con red).
3. De cada nodo, líneas DMX a los aparatos, como en [cómo conectar luces al ordenador](../conectar-luces-al-ordenador/).

## Direcciones IP

El ordenador y los nodos tienen que estar **en la misma red**:

- Dales **direcciones IP fijas** del mismo rango, por ejemplo 192.168.1.10 el ordenador y 192.168.1.20, .21… los nodos, con la máscara 255.255.255.0.
- Muchos equipos Art-Net vienen de fábrica en el rango **2.x.x.x** o **10.x.x.x**: pon el ordenador en ese mismo rango, o cambia el nodo al tuyo.
- Si el ordenador tiene varias tarjetas de red (wifi y cable), elige en el programa la que va a las luces.

## Enviar: a todos o a uno

- **Broadcast o multicast**: el ordenador envía a la red y cada nodo coge sus universos. Es lo más sencillo para empezar.
- **Unicast**: el ordenador envía cada universo a la IP de su nodo. Carga menos la red cuando hay muchos universos y equipos.

## El número de universo

Es el error más típico: **Art-Net cuenta los universos desde 0 y sACN desde 1**. Además, cada programa y cada nodo los numeran a su manera. Si no ves luz, comprueba en los dos lados qué universo sale y cuál escucha el nodo.

## En DMX Total Control

En [Salidas](../../manual/salidas/), elige para cada universo la salida **Art-Net** o **E1.31** de la tarjeta de red que va a las luces. En **Niveles DMX** ves lo que sale por cada universo. El programa también puede recibir DMX, para que lo controles desde otra mesa: esa entrada se activa como dispositivo en [Mapeos](../../manual/mapeos/#dispositivos).

## Ver el show sin luces: los visualizadores

Un **visualizador** es un programa que dibuja el escenario en 3D y recibe DMX por Art-Net o sACN. Así programas el show en el ordenador antes de tener las luces delante:

- Si el visualizador está **en el mismo ordenador**, envía a la dirección **127.0.0.1** (el propio ordenador).
- Si está en otro, ponlos en la misma red como si fuera un nodo.

## Consejos para el directo

- Usa **cable**, no wifi, para la red de las luces: el wifi puede cortarse o retrasarse en el peor momento.
- Mejor una **red solo para las luces**, separada de internet y del sonido.
- Un **switch** sencillo vale para casi todo; con muchos universos en multicast, uno gestionable va mejor.
- Apunta las IP y los universos de cada nodo y pégalo en la caja del nodo.
