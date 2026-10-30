---
title: How to choose a USB DMX interface
description: Open or Pro type, isolation, DMX input, one or two universes, or moving to the network — what to look for in a USB DMX interface for what you do.
---

## What the interface does

The USB DMX interface is the bridge between the computer and the lights: it receives the channel values from the program and sends them out of an XLR connector as a DMX signal. There are many, at many prices, but almost all of them are one of two types.

## Open type or Pro type

**Open type** (like the Enttec Open DMX USB and many compatible ones):

- Inside, a USB-to-serial chip (usually FTDI) and little else. **The computer generates the DMX signal**.
- They are the **cheapest** and work well for practice, parties and small setups.
- If the computer is heavily loaded, the timing of the signal can vary, and some fixtures show it by flickering.
- Output only: they don’t receive DMX.

**Pro type** (like the Enttec DMX USB Pro, the DMXKing ultraDMX or the Eurolite USB-DMX512 PRO):

- They have a **microcontroller that generates the signal by itself**, always at the same rate, even when the computer is busy.
- They usually have a **DMX input**, and some have **two output universes**.
- They cost more, but they are the ones to get for gigs and venues.

## What to look for

- **Optical (galvanic) isolation**: separates the computer electrically from the DMX line. It protects the computer from electrical faults and avoids noise. For live work, highly recommended.
- **How many universes**: add up the channels of your fixtures. Up to 512, one. For more, a two-universe interface or [Art-Net and sACN](../art-net-and-sacn/).
- **DMX input**: only if you want to control the program from another desk.
- **Connector**: 3-pin or 5-pin XLR; it is easy to adapt, but better if it matches your cables.
- **Compatibility**: check that the program supports it. For DMX Total Control, see the [compatible hardware list](../../hardware/).

## “Enttec compatible” interfaces

Many cheap interfaces are sold as compatible with the Enttec Open DMX USB or the DMX USB Pro. If they have an FTDI chip they usually work like the original, but quality varies a lot: if yours gives trouble, [tell us](https://github.com/joseramos1999/DMXTotalControl/issues/new?template=compatibilidad.md) and we will add it to the list.

## USB or network

From two or three universes up, or if the lights are far from the computer, an **Art-Net or sACN node** is usually worth it: one network cable carries all the universes, and the node puts out the DMX lines right next to the lights.

## Depending on what you do

| Use | What we recommend |
|---|---|
| Learning and practice, parties at home | An Open type, or none: you can program without lights |
| DJs and small gigs | A Pro type with isolation |
| Theatre and venues | A Pro type with isolation, or the venue’s node |
| Many universes or festivals | Art-Net or sACN nodes on a network |

With the interface in hand, go on to [how to connect lights to a computer](../connect-lights-to-a-computer/).
