---
title: Comment choisir une interface DMX USB
description: Type Open ou type Pro, isolation, entrée DMX, un ou deux univers, ou passer au réseau — ce qu’il faut regarder selon ce que vous allez faire.
---

## Ce que fait l’interface

L’interface DMX USB est le pont entre l’ordinateur et les projecteurs : elle reçoit du programme les valeurs des canaux et les sort sur un connecteur XLR sous forme de signal DMX. Il en existe beaucoup, à tous les prix, mais presque toutes sont de deux types.

## Type Open ou type Pro

**Type Open** (comme l’Enttec Open DMX USB et beaucoup de compatibles) :

- À l’intérieur, une puce USB-série (généralement FTDI) et pas grand-chose de plus. **C’est l’ordinateur qui génère le signal DMX**.
- Ce sont les moins **chères**, et elles conviennent bien pour s’exercer, pour les soirées et les petites installations.
- Si l’ordinateur est très chargé, le rythme du signal peut varier, et certains appareils le trahissent par des scintillements.
- Sortie uniquement : elles ne reçoivent pas de DMX.

**Type Pro** (comme l’Enttec DMX USB Pro, les DMXKing ultraDMX ou l’Eurolite USB-DMX512 PRO) :

- Elles ont un **microcontrôleur qui génère le signal tout seul**, toujours au même rythme, même si l’ordinateur est occupé.
- Elles ont souvent une **entrée DMX**, et certaines **deux univers** de sortie.
- Elles coûtent plus cher, mais ce sont celles à recommander pour les concerts et les salles.

## Ce qu’il faut regarder

- **Isolation optique** (galvanique) : elle sépare électriquement l’ordinateur de la ligne DMX. Elle protège l’ordinateur des fuites de courant et évite les parasites. Pour le live, c’est très recommandé.
- **Combien d’univers** : additionnez les canaux de vos appareils. Jusqu’à 512, un seul. Au-delà, une interface deux univers ou [Art-Net et sACN](../art-net-and-sacn/).
- **Entrée DMX** : seulement si vous voulez piloter le programme depuis une autre console.
- **Connecteur** : XLR 3 ou 5 broches ; cela s’adapte facilement, mais mieux vaut qu’il corresponde à vos câbles.
- **Compatibilité** : vérifiez que le programme la prend en charge. Pour DMX Total Control, consultez la [liste du matériel compatible](../../hardware/).

## Les « compatibles Enttec »

Beaucoup d’interfaces bon marché sont vendues comme compatibles avec l’Enttec Open DMX USB ou avec la DMX USB Pro. Si elles ont une puce FTDI, elles fonctionnent généralement comme l’originale, mais la qualité varie beaucoup : si la vôtre pose problème, [dites-le-nous](https://github.com/joseramos1999/DMXTotalControl/issues/new?template=compatibilidad.md) et nous l’ajouterons à la liste.

## USB ou réseau

À partir de deux ou trois univers, ou si les projecteurs sont loin de l’ordinateur, un **nœud Art-Net ou sACN** vaut souvent le coup : un câble réseau transporte tous les univers, et le nœud sort les lignes DMX à côté des projecteurs.

## Selon ce que vous allez faire

| Usage | Ce qui est recommandé |
|---|---|
| Apprendre et s’exercer, soirées à la maison | Une type Open, ou aucune : vous pouvez programmer sans projecteurs |
| DJ et petits concerts | Une type Pro avec isolation |
| Théâtre et salles | Type Pro avec isolation, ou le nœud de la salle |
| Beaucoup d’univers ou festivals | Des nœuds Art-Net ou sACN en réseau |

Avec l’interface en main, continuez avec [comment connecter des projecteurs à un ordinateur](../connect-lights-to-a-computer/).
