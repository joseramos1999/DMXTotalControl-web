---
title: What is DMX?
description: The basics of controlling stage lights from a computer or a lighting desk — DMX universes, channels, addresses, cables and terminators, explained simply.
---

## A common language for lights

**DMX512** (or just DMX) is the standard a lighting desk or a computer uses to talk to lighting fixtures: LED PARs, moving heads, strobes, smoke machines, dimmers… Almost every stage fixture has a DMX input, so one controller runs gear from different brands.

The idea is simple: the controller keeps sending a list of numbers, and each fixture listens to the ones meant for it.

## Universes and channels

- A **universe** is one DMX line with **512 channels**.
- Each **channel** carries a value from **0 to 255**: 0 is off or the minimum, 255 the maximum.
- The controller sends the whole universe again many times per second (up to about 44), so changes show at once.

If your rig needs more than 512 channels, you use more universes: each one goes out through its own interface or over the network (see [Art-Net and sACN](../art-net-and-sacn/)).

## How many channels each fixture uses

Each fixture takes up several consecutive channels, depending on its **mode** (or “personality”):

| Fixture | Usual channels | What each one controls |
|---|---|---|
| Simple LED PAR | 3 to 4 | Red, green, blue (and white) |
| Full LED PAR | 6 to 8 | Dimmer, colours, strobe, built-in programs |
| Moving head | 12 to 30 or more | Pan, tilt, colour, gobo, focus, prism, dimmer… |
| Smoke machine | 1 to 2 | Amount of smoke, fan |

You choose the mode on the fixture itself, and the fixture’s manual says what each channel does. That is why control programs use **fixture libraries**: definitions with the channels of each model, so you don’t have to learn them. DMX Total Control comes with thousands, plus the Open Fixture Library and GDTF import (see [Fixtures](../../manual/fixtures/)).

## The DMX address

The **address** is the first channel a fixture listens to. You set it on the fixture itself, on its display or with DIP switches.

For example, with 7-channel PARs:

- The first one, at address **1**, uses channels 1 to 7.
- The second one, at address **8**, uses channels 8 to 14.
- The third one at address **15**, and so on.

Two identical fixtures with the **same address** do exactly the same thing: sometimes that is what you want (two PARs that always match) and sometimes it is a mistake. When you patch in the program, use the same address and the same mode as on the fixture. The [Patch](../../manual/patch/) suggests the next free address.

## Cables, daisy chain and terminator

- Fixtures are connected in a **daisy chain**: from the controller to the first fixture, from its output (DMX OUT) to the input of the next one (DMX IN), and so on to the last one.
- Use **DMX cable** (110 to 120 Ω). Microphone cable has the same XLR connectors, but it isn’t made for data and causes errors on long runs or with many fixtures.
- Connectors can be **3-pin or 5-pin XLR**; an adapter takes you from one to the other.
- One line takes about **32 fixtures**. For more, or to send the signal in several directions, use a DMX **splitter**.
- Put a **terminator** (a 120 Ω resistor in a connector) on the output of the last fixture. Without it the signal bounces back and you get odd flickering.

## 8 and 16 bits

Some parameters need more precision than 256 steps, above all the pan and tilt of moving heads. For that they use **two channels**: a coarse one and a fine one (**16 bits**, 65,536 steps). If the library has the right mode for the fixture, the program takes care of it.

## Who wins when two things control the same channel

When two scenes control the same channel, there are two classic rules:

- **HTP** (highest takes precedence): for intensities. If one scene sets a dimmer at 50% and another at 80%, you get 80%.
- **LTP** (latest takes precedence): for everything else (colour, position, gobo…). The last scene that touched the channel wins.

DMX Total Control adds **priorities** from 0 to 10 per scene: the one with the higher priority wins, intensities included. [Live](../../manual/directo/#priorities) explains how.

## Next step

With this you are ready to [connect your lights to the computer](../connect-lights-to-a-computer/). If you don’t have an interface yet, see [how to choose a USB DMX interface](../choosing-a-usb-dmx-interface/).
