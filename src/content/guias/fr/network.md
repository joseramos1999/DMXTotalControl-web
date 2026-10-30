---
title: Art-Net et sACN — le DMX sur le réseau
description: Comment faire passer de nombreux univers DMX sur un câble réseau, ce qu’est un nœud, comment régler les adresses IP et voir le show dans un visualiseur.
---

## Le DMX sur un câble réseau

**Art-Net** et **sACN** (aussi appelé E1.31) sont deux façons d’envoyer du DMX sur un réseau Ethernet, le même que celui des ordinateurs. Ils ont deux avantages sur la ligne DMX classique :

- **De nombreux univers sur le même câble** : des dizaines ou des centaines, au lieu de 512 canaux par câble.
- **Les distances et la distribution** d’un réseau normal : un switch et des câbles réseau amènent le signal là où il faut.

Les deux font la même chose. Art-Net est très courant dans le matériel de live et les visualiseurs ; sACN est un standard ANSI très utilisé dans les théâtres et les grosses installations. DMX Total Control envoie et reçoit les deux.

## Le nœud

Un **nœud** convertit le réseau en DMX : il reçoit l’Art-Net ou le sACN par le câble réseau et sort du DMX sur ses connecteurs XLR, un par univers. Beaucoup d’appareils récents, comme les écrans et les grosses lyres, ont déjà le réseau et n’ont pas besoin de nœud.

Une installation type :

1. Ordinateur → câble réseau → **switch**.
2. Du switch, un câble vers chaque **nœud** (ou chaque appareil en réseau).
3. De chaque nœud, des lignes DMX vers les appareils, comme dans [comment connecter des projecteurs à un ordinateur](../connect-lights-to-a-computer/).

## Adresses IP

L’ordinateur et les nœuds doivent être **sur le même réseau** :

- Donnez-leur des **adresses IP fixes** de la même plage, par exemple 192.168.1.10 pour l’ordinateur et 192.168.1.20, .21… pour les nœuds, avec le masque 255.255.255.0.
- Beaucoup d’appareils Art-Net sortent d’usine dans la plage **2.x.x.x** ou **10.x.x.x** : mettez l’ordinateur dans cette même plage, ou passez le nœud dans la vôtre.
- Si l’ordinateur a plusieurs cartes réseau (Wi-Fi et câble), choisissez dans le programme celle qui va vers les projecteurs.

## Envoyer : à tous ou à un seul

- **Broadcast ou multicast** : l’ordinateur envoie sur le réseau et chaque nœud prend ses univers. C’est le plus simple pour commencer.
- **Unicast** : l’ordinateur envoie chaque univers à l’IP de son nœud. Cela charge moins le réseau quand il y a beaucoup d’univers et d’appareils.

## Le numéro d’univers

C’est l’erreur la plus fréquente : **Art-Net compte les univers à partir de 0 et sACN à partir de 1**. En plus, chaque logiciel et chaque nœud les numérote à sa façon. Si vous n’avez pas de lumière, vérifiez des deux côtés quel univers sort et lequel écoute le nœud.

## Dans DMX Total Control

Dans [Sorties](../../manual/salidas/), choisissez pour chaque univers la sortie **Art-Net** ou **E1.31** de la carte réseau qui va vers les projecteurs. Dans **Niveaux DMX**, vous voyez ce qui sort sur chaque univers. Le programme peut aussi recevoir du DMX, pour que vous le pilotiez depuis une autre console : cette entrée s’active comme appareil dans [Mappages](../../manual/mapeos/#appareils).

## Voir le show sans projecteurs : les visualiseurs

Un **visualiseur** est un logiciel qui dessine la scène en 3D et reçoit du DMX en Art-Net ou sACN. Vous programmez ainsi le show sur l’ordinateur avant d’avoir les projecteurs devant vous :

- Si le visualiseur est **sur le même ordinateur**, envoyez vers l’adresse **127.0.0.1** (l’ordinateur lui-même).
- S’il est sur un autre ordinateur, mettez-les sur le même réseau, comme pour un nœud.

## Conseils pour le live

- Utilisez du **câble**, pas le Wi-Fi, pour le réseau lumière : le Wi-Fi peut couper ou prendre du retard au pire moment.
- Mieux vaut un **réseau dédié à la lumière**, séparé d’internet et du son.
- Un **switch** simple suffit pour presque tout ; avec beaucoup d’univers en multicast, un switch manageable fait mieux.
- Notez les IP et les univers de chaque nœud et collez-les sur le boîtier du nœud.
