---
title: Art-Net and sACN — DMX over the network
description: How to carry many DMX universes over one network cable with Art-Net and sACN, what a node is, how to set IP addresses and how to view the show in a visualiser.
---

## DMX over a network cable

**Art-Net** and **sACN** (also called E1.31) are two ways of sending DMX over an Ethernet network, the same kind computers use. They have two advantages over the classic DMX line:

- **Many universes on the same cable**: dozens or hundreds, instead of 512 channels per cable.
- Ordinary network **distances and distribution**: a switch and network cables take the signal wherever it is needed.

Both do the same job. Art-Net is very common in live gear and visualisers; sACN is an ANSI standard widely used in theatres and large rigs. DMX Total Control sends and receives both.

## The node

A **node** turns the network into DMX: Art-Net or sACN comes in over the network cable and DMX goes out of its XLR connectors, one per universe. Many modern fixtures, such as LED screens and large moving heads, already have a network port and don’t need a node.

A typical setup:

1. Computer → network cable → **switch**.
2. From the switch, a cable to each **node** (or to each networked fixture).
3. From each node, DMX lines to the fixtures, as in [how to connect lights to a computer](../connect-lights-to-a-computer/).

## IP addresses

The computer and the nodes must be **on the same network**:

- Give them **fixed IP addresses** in the same range, for example 192.168.1.10 for the computer and 192.168.1.20, .21… for the nodes, with the subnet mask 255.255.255.0.
- Many Art-Net devices come from the factory in the **2.x.x.x** or **10.x.x.x** range: put the computer in that same range, or change the node to yours.
- If the computer has several network cards (wifi and wired), choose in the program the one that goes to the lights.

## Sending: to everyone or to one

- **Broadcast or multicast**: the computer sends to the network and each node picks up its universes. It is the simplest way to start.
- **Unicast**: the computer sends each universe to the IP of its node. It puts less load on the network when there are many universes and devices.

## The universe number

It is the most common mistake: **Art-Net counts universes from 0 and sACN from 1**. On top of that, every program and every node numbers them its own way. If you get no light, check on both sides which universe goes out and which one the node listens to.

## In DMX Total Control

In [Outputs](../../manual/salidas/), choose for each universe the **Art-Net** or **E1.31** output of the network card that goes to the lights. In **DMX levels** you see what goes out on each universe. The program can also receive DMX, so you can control it from another desk: that input is turned on as a device in [Mappings](../../manual/mapeos/#devices).

## Seeing the show without lights: visualisers

A **visualiser** is a program that draws the stage in 3D and receives DMX over Art-Net or sACN. That way you can program the show on the computer before you have the lights in front of you:

- If the visualiser is **on the same computer**, send to the address **127.0.0.1** (the computer itself).
- If it is on another one, put them on the same network as if it were a node.

## Tips for live shows

- Use **cable**, not wifi, for the lighting network: wifi can drop out or lag at the worst moment.
- Better a **network just for the lights**, separate from the internet and the sound.
- A simple **switch** does for almost everything; with many universes in multicast, a managed one works better.
- Write down the IPs and universes of each node and stick the note on the node’s case.
