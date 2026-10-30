---
title: Qu’est-ce que le DMX ?
description: Les bases pour piloter des projecteurs de spectacle depuis un ordinateur ou une console — univers, canaux, adresses, câbles et bouchons de terminaison.
---

## Une langue commune pour les projecteurs

**DMX512** (ou simplement DMX) est le standard avec lequel une console lumière ou un ordinateur parle aux appareils d’éclairage : PAR LED, lyres, stroboscopes, machines à fumée, gradateurs… Presque tous les appareils de spectacle ont une entrée DMX : avec une même console ou un même logiciel, vous pilotez du matériel de marques différentes.

L’idée est simple : la console envoie en permanence une liste de nombres, et chaque appareil écoute ceux qui le concernent.

## Univers et canaux

- Un **univers** est une ligne DMX de **512 canaux**.
- Chaque **canal** porte une valeur de **0 à 255** : 0, c’est éteint ou le minimum ; 255, le maximum.
- La console répète l’univers entier de nombreuses fois par seconde (jusqu’à 44 environ), donc les changements se voient immédiatement.

Si votre installation a besoin de plus de 512 canaux, vous utilisez plusieurs univers : chacun sort par son interface ou par le réseau (voir [Art-Net et sACN](../art-net-and-sacn/)).

## Combien de canaux utilise chaque appareil

Chaque appareil occupe plusieurs canaux consécutifs, selon son **mode** (ou « personnalité ») :

| Appareil | Canaux habituels | Ce que contrôle chacun |
|---|---|---|
| PAR LED simple | 3 à 4 | Rouge, vert, bleu (et blanc) |
| PAR LED complet | 6 à 8 | Dimmer, couleurs, strobe, programmes internes |
| Lyre | 12 à 30 ou plus | Pan, tilt, couleur, gobo, focus, prisme, dimmer… |
| Machine à fumée | 1 à 2 | Quantité de fumée, ventilateur |

Le mode se choisit sur l’appareil lui-même, et le manuel de l’appareil indique ce que fait chaque canal. C’est pour cela que les logiciels de contrôle utilisent des **bibliothèques de fixtures** : des définitions avec les canaux de chaque modèle, pour que vous n’ayez pas à les apprendre. DMX Total Control en contient des milliers, plus l’Open Fixture Library et l’import GDTF (voir [Fixtures](../../manual/fixtures/)).

## L’adresse DMX

L’**adresse** est le premier canal qu’écoute un appareil. Elle se règle sur l’appareil lui-même, sur son afficheur ou avec des micro-interrupteurs.

Par exemple, avec des PAR de 7 canaux :

- Le premier, à l’adresse **1**, utilise les canaux 1 à 7.
- Le deuxième, à l’adresse **8**, utilise les canaux 8 à 14.
- Le troisième à l’adresse **15**, et ainsi de suite.

Deux appareils identiques à la **même adresse** font exactement la même chose : parfois c’est ce que vous voulez (deux PAR toujours identiques), parfois c’est une erreur. Quand vous patchez dans le programme, mettez la même adresse et le même mode que sur l’appareil. Le [Patch](../../manual/patch/) vous propose l’adresse libre suivante.

## Câbles, chaîne et bouchon de terminaison

- Les appareils se branchent **en chaîne** : de la console au premier appareil, de sa sortie (DMX OUT) à l’entrée du suivant (DMX IN), et ainsi de suite jusqu’au dernier.
- Utilisez du **câble DMX** (110 à 120 Ω). Le câble micro a les mêmes connecteurs XLR, mais il n’est pas fait pour les données et provoque des erreurs sur les grandes longueurs ou avec beaucoup d’appareils.
- Les connecteurs peuvent être des **XLR 3 ou 5 broches** ; un adaptateur permet de passer de l’un à l’autre.
- Une même ligne accepte environ **32 appareils**. Au-delà, ou pour répartir le signal dans plusieurs directions, on utilise un **splitter** DMX.
- Mettez un **bouchon de terminaison** (une résistance de 120 Ω dans un connecteur) sur la sortie du dernier appareil. Sans lui, le signal rebondit et des scintillements bizarres apparaissent.

## 8 et 16 bits

Certains paramètres ont besoin de plus de précision que 256 niveaux, surtout le pan et le tilt des lyres. Pour cela, ils utilisent **deux canaux** : un grossier et un fin (**16 bits**, 65 536 niveaux). Si la bibliothèque a le bon mode de l’appareil, le programme s’en charge tout seul.

## Qui gagne quand deux choses touchent le même canal

Quand deux scènes commandent le même canal, il y a deux règles classiques :

- **HTP** (le plus haut gagne) : pour les intensités. Si une scène met un dimmer à 50 % et une autre à 80 %, c’est 80 % qui sort.
- **LTP** (le dernier gagne) : pour le reste (couleur, position, gobo…). C’est la dernière scène qui a touché le canal qui l’emporte.

DMX Total Control ajoute des **priorités** de 0 à 10 par scène : celle qui a la priorité la plus haute l’emporte, intensités comprises. C’est expliqué dans [Direct](../../manual/directo/#priorités).

## Étape suivante

Avec cela, vous pouvez déjà [connecter vos projecteurs à l’ordinateur](../connect-lights-to-a-computer/). Si vous n’avez pas encore d’interface, voyez [comment choisir une interface DMX USB](../choosing-a-usb-dmx-interface/).
