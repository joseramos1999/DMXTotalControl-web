---
title: How to connect DMX lights to a computer
description: From the box to the first flash — the USB DMX interface, the cables, the DMX addresses, the patch in the program and what to check if nothing lights up.
---

## What you need

- A computer with Windows 10 or 11 and [DMX Total Control](../../download/).
- A **USB DMX interface**, or an **Art-Net or sACN node** if you go over the network (see [how to choose an interface](../choosing-a-usb-dmx-interface/)).
- **DMX cable** to link the interface to the first fixture and each fixture to the next.
- A 120 Ω **terminator** for the last fixture (it often comes with the interface).

## 1. Prepare the fixtures

On each fixture:

1. Set it to **DMX mode** (not auto or sound mode).
2. Choose its **channel mode** and write it down: for example, “7 channels”.
3. Give it an **address** that doesn’t overlap the others. With 7-channel PARs: 1, 8, 15, 22…

Write down on paper which fixture it is, its mode and its address. You will need it for the patch. If these words sound strange, start with [What is DMX?](../what-is-dmx/).

## 2. Connect the cables

1. Plug the interface into a USB port on the computer.
2. From the DMX output of the interface, run a cable to the DMX input (DMX IN) of the first fixture.
3. From its output (DMX OUT) to the input of the next one, and so on to the last one.
4. Put the terminator on the output of the last one.

Interfaces with an FTDI chip (many USB DMX ones) need their driver: if you don’t have it, the DMX Total Control installer offers the page to download it when it finishes. For other interfaces, install the manufacturer’s driver.

## 3. Choose the output in the program

Open DMX Total Control and go to **Outputs** (F7). Each universe has an output: choose your interface for **Universe 1**. If you go over the network to a node, choose the Art-Net or E1.31 (sACN) output of the network card that goes to the lights. All the details are in [Outputs](../../manual/salidas/).

## 4. Patch your fixtures

Go to **Patch** (F5) and press **“Add fixtures”**:

1. Look up the brand and model in the library.
2. Choose **the same mode** you set on the fixture.
3. Set **the same address** and the universe.
4. If you have several identical ones, say how many: the program gives them consecutive addresses.

If your model isn’t there, try the Open Fixture Library, import its GDTF file or build it in the fixture creator (see [Fixtures](../../manual/fixtures/)). For simple PARs, the generic fixtures (RGB, RGBW, dimmer) are usually enough.

## 5. Test

- In the Patch, **“Identify”** makes the selected fixtures blink in white: that way you check that each one is the one you think.
- In **Program** (F3), select the fixtures and raise the dimmer, or choose a colour.
- In **Outputs › DMX levels** you see the values being sent on each channel.

If the value changes in DMX levels but the fixture doesn’t respond, the problem is between the interface and the fixture. If the value doesn’t change, it is in the program (the patch or the grand master).

## If nothing lights up

- **The fixture isn’t in DMX mode**, or its address or mode is different from the patch.
- **The grand master is down or blackout is on**: check the top bar.
- **The universe has no output**, or it isn’t the one in the patch.
- **Cable or terminator**: try with a single fixture and a short cable. A microphone cable can fail.
- **The interface doesn’t show up**: check the driver, try another USB port and press “Rescan” in Outputs.
- **Flickering or odd jumps**: the terminator is missing, there are too many fixtures on the line or a cable is faulty.

## No lights yet

You don’t need the fixtures to get started: open an example show, patch your fixtures and program everything. The DMX levels show in the program, and with a 3D visualiser that receives Art-Net or sACN you can see the show on screen (see [Art-Net and sACN](../art-net-and-sacn/)).
