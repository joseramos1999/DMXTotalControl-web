---
title: Come collegare le luci DMX al computer
description: Dalla scatola al primo lampo — l'interfaccia DMX USB, i cavi, gli indirizzi, il patch e cosa controllare se non si accende niente.
---

## Cosa ti serve

- Un computer con Windows 10 o 11 e [DMX Total Control](../../download/).
- Un'**interfaccia DMX USB**, o un **nodo Art-Net o sACN** se lavori in rete (vedi [come scegliere un'interfaccia](../choosing-a-usb-dmx-interface/)).
- **Cavo DMX** per collegare l'interfaccia al primo apparecchio e ogni apparecchio al successivo.
- Un **terminatore** da 120 Ω per l'ultimo apparecchio (spesso è incluso con l'interfaccia).

## 1. Prepara gli apparecchi

Su ogni apparecchio:

1. Mettilo in **modalità DMX** (non in automatico né in modalità musica).
2. Scegli la sua **modalità di canali** e annotala: per esempio, «7 canali».
3. Dagli un **indirizzo** che non si sovrapponga agli altri. Con PAR a 7 canali: 1, 8, 15, 22…

Annota su un foglio quale apparecchio è, la sua modalità e il suo indirizzo: ti servirà nel patch. Se queste parole ti suonano strane, inizia da [Che cos'è il DMX?](../what-is-dmx/).

## 2. Collega i cavi

1. Collega l'interfaccia a una porta USB del computer.
2. Dall'uscita DMX dell'interfaccia, un cavo all'ingresso DMX (DMX IN) del primo apparecchio.
3. Dalla sua uscita (DMX OUT) all'ingresso del successivo, e così via fino all'ultimo.
4. Metti il terminatore sull'uscita dell'ultimo.

Le interfacce con chip FTDI (molte di quelle DMX USB) hanno bisogno del loro driver: se non ce l'hai, l'installer di DMX Total Control ti offre alla fine la pagina per scaricarlo. Per le altre interfacce, installa il driver del produttore.

## 3. Scegli l'uscita nel programma

Apri DMX Total Control e vai in **Uscite** (F7). Ogni universo ha un'uscita: scegli la tua interfaccia per l'**Universo 1**. Se lavori in rete con un nodo, scegli l'uscita Art-Net o E1.31 (sACN) della scheda di rete che va alle luci. Tutti i dettagli in [Uscite](../../manual/salidas/).

## 4. Patcha i tuoi apparecchi

Vai in **Patch** (F5) e premi **«Aggiungi fixture»**:

1. Cerca la marca e il modello nella libreria.
2. Scegli **la stessa modalità** impostata sull'apparecchio.
3. Metti **lo stesso indirizzo** e l'universo.
4. Se ne hai diversi uguali, indica quanti: il programma assegna loro indirizzi consecutivi.

Se il tuo modello non c'è, prova con la Open Fixture Library, importa il suo file GDTF o crealo nel creatore di fixture (vedi [Fixture](../../manual/fixtures/)). Per i PAR semplici, di solito bastano le fixture generiche (RGB, RGBW, dimmer).

## 5. Prova

- Nel Patch, **«Identifica»** fa lampeggiare in bianco le fixture selezionate: così verifichi che ognuna sia quella che pensi.
- In **Programma** (F3), seleziona le fixture e alza il dimmer, o scegli un colore.
- In **Uscite › Livelli DMX** vedi i valori che vengono inviati a ogni canale.

Se il valore cambia in Livelli DMX ma l'apparecchio non risponde, il problema è tra l'interfaccia e l'apparecchio. Se il valore non cambia, è nel programma (il patch o il grand master).

## Se non si accende niente

- **L'apparecchio non è in modalità DMX**, o ha un indirizzo o una modalità diversi da quelli del patch.
- **Il grand master è abbassato o il blackout è attivo**: guarda la barra superiore.
- **L'universo non ha un'uscita** o non è lo stesso del patch.
- **Cavo o terminatore**: prova con un solo apparecchio e un cavo corto. Un cavo microfonico può dare problemi.
- **L'interfaccia non compare**: controlla il driver, prova un'altra porta USB e premi «Cerca di nuovo» in Uscite.
- **Sfarfallii o salti strani**: manca il terminatore, ci sono troppi apparecchi sulla linea o un cavo è difettoso.

## Ancora senza luci

Non ti servono gli apparecchi per iniziare: apri uno show di esempio, patcha le tue fixture e programma tutto. I livelli DMX si vedono nel programma, e con un visualizzatore 3D che riceve Art-Net o sACN puoi vedere lo show sullo schermo (vedi [Art-Net e sACN](../art-net-and-sacn/)).
