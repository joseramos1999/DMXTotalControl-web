---
title: Comment connecter des projecteurs DMX à un ordinateur
description: Du déballage au premier flash — l’interface, les câbles, les adresses, le patch et ce qu’il faut vérifier si rien ne s’allume.
---

## Ce qu’il vous faut

- Un ordinateur sous Windows 10 ou 11 et [DMX Total Control](../../download/).
- Une **interface DMX USB**, ou un **nœud Art-Net ou sACN** si vous passez par le réseau (voir [comment choisir une interface](../choosing-a-usb-dmx-interface/)).
- Du **câble DMX** pour relier l’interface au premier appareil, puis chaque appareil au suivant.
- Un **bouchon de terminaison** de 120 Ω pour le dernier appareil (il est souvent fourni avec l’interface).

## 1. Préparez les appareils

Sur chaque appareil :

1. Mettez-le en **mode DMX** (ni en mode automatique ni en mode son).
2. Choisissez son **mode de canaux** et notez-le : par exemple, « 7 canaux ».
3. Donnez-lui une **adresse** qui ne chevauche pas celles des autres. Avec des PAR de 7 canaux : 1, 8, 15, 22…

Notez sur un papier quel appareil c’est, son mode et son adresse. Vous en aurez besoin pour le patch. Si ces mots ne vous disent rien, commencez par [Qu’est-ce que le DMX ?](../what-is-dmx/).

## 2. Branchez les câbles

1. Branchez l’interface sur un port USB de l’ordinateur.
2. De la sortie DMX de l’interface, un câble vers l’entrée DMX (DMX IN) du premier appareil.
3. De sa sortie (DMX OUT) vers l’entrée du suivant, et ainsi de suite jusqu’au dernier.
4. Mettez le bouchon de terminaison sur la sortie du dernier.

Les interfaces à puce FTDI (beaucoup d’interfaces DMX USB) ont besoin de leur pilote : si vous ne l’avez pas, l’installateur de DMX Total Control vous propose à la fin la page pour le télécharger. Pour les autres interfaces, installez le pilote de leur fabricant.

## 3. Choisissez la sortie dans le programme

Ouvrez DMX Total Control et allez dans **Sorties** (F7). Chaque univers a une sortie : choisissez votre interface pour l’**Univers 1**. Si vous passez par le réseau vers un nœud, choisissez la sortie Art-Net ou E1.31 (sACN) de la carte réseau qui va vers les projecteurs. Tous les détails dans [Sorties](../../manual/salidas/).

## 4. Patchez vos appareils

Allez dans **Patch** (F5) et appuyez sur **« Ajouter des fixtures »** :

1. Cherchez la marque et le modèle dans la bibliothèque.
2. Choisissez **le même mode** que celui réglé sur l’appareil.
3. Mettez **la même adresse** et l’univers.
4. Si vous en avez plusieurs identiques, indiquez combien : le programme leur donne des adresses consécutives.

Si votre modèle n’y est pas, essayez l’Open Fixture Library, importez son fichier GDTF ou créez-le dans le créateur de fixtures (voir [Fixtures](../../manual/fixtures/)). Pour des PAR simples, les fixtures génériques (RGB, RGBW, dimmer) suffisent souvent.

## 5. Testez

- Dans le Patch, **« Identifier »** fait clignoter en blanc les fixtures sélectionnés : vous vérifiez ainsi que chacun est bien celui que vous croyez.
- Dans **Programmer** (F3), sélectionnez les fixtures et montez le dimmer, ou choisissez une couleur.
- Dans **Sorties › Niveaux DMX**, vous voyez les valeurs envoyées sur chaque canal.

Si la valeur change dans Niveaux DMX mais que l’appareil ne réagit pas, le problème se situe entre l’interface et l’appareil. Si la valeur ne change pas, il est dans le programme (le patch ou le grand master).

## Si rien ne s’allume

- **L’appareil n’est pas en mode DMX**, ou il a une autre adresse ou un autre mode que dans le patch.
- **Le grand master est baissé ou le blackout est activé** : regardez la barre du haut.
- **L’univers n’a pas de sortie**, ou ce n’est pas le même que dans le patch.
- **Câble ou bouchon** : essayez avec un seul appareil et un câble court. Un câble micro peut poser problème.
- **L’interface n’apparaît pas** : vérifiez le pilote, essayez un autre port USB et relancez la recherche dans Sorties.
- **Scintillements ou sauts bizarres** : il manque le bouchon de terminaison, il y a trop d’appareils sur la ligne ou un câble est défectueux.

## Pas encore de projecteurs

Vous n’avez pas besoin des appareils pour commencer : ouvrez un show d’exemple, patchez vos fixtures et programmez tout. Les niveaux DMX se voient dans le programme, et avec un visualiseur 3D qui reçoit l’Art-Net ou le sACN, vous pouvez voir le show à l’écran (voir [Art-Net et sACN](../art-net-and-sacn/)).
