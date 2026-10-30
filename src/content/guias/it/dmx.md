---
title: Che cos'è il DMX?
description: Le basi del DMX512 per controllare le luci da spettacolo da un computer o da una console — universi, canali, indirizzi, cavi e terminatori.
---

## Una lingua comune per le luci

Il **DMX512** (o semplicemente DMX) è lo standard con cui una console luci o un computer parla con gli apparecchi di illuminazione: PAR LED, teste mobili, strobo, macchine del fumo, dimmer… Quasi ogni apparecchio da spettacolo ha un ingresso DMX, quindi con un solo controllo gestisci apparecchi di marche diverse.

L'idea è semplice: il controllo invia di continuo un elenco di numeri, e ogni apparecchio ascolta quelli che lo riguardano.

## Universi e canali

- Un **universo** è una linea DMX con **512 canali**.
- Ogni **canale** porta un valore da **0 a 255**: 0 è spento o il minimo, 255 il massimo.
- Il controllo ripete l'intero universo molte volte al secondo (fino a circa 44), quindi i cambiamenti si vedono subito.

Se il tuo impianto ha bisogno di più di 512 canali, usi più universi: ognuno esce dalla sua interfaccia o dalla rete (vedi [Art-Net e sACN](../art-net-and-sacn/)).

## Quanti canali usa ogni apparecchio

Ogni apparecchio occupa più canali consecutivi, secondo la sua **modalità** (o «personalità»):

| Apparecchio | Canali tipici | Cosa controlla ciascuno |
|---|---|---|
| PAR LED semplice | da 3 a 4 | Rosso, verde, blu (e bianco) |
| PAR LED completo | da 6 a 8 | Dimmer, colori, strobo, programmi interni |
| Testa mobile | da 12 a 30 o più | Pan, tilt, colore, gobo, fuoco, prisma, dimmer… |
| Macchina del fumo | da 1 a 2 | Quantità di fumo, ventola |

La modalità si sceglie sull'apparecchio stesso, e il suo manuale dice cosa fa ogni canale. Per questo i programmi di controllo usano le **librerie di fixture**: definizioni con i canali di ogni modello, così non devi impararli. DMX Total Control ne ha migliaia, oltre alla Open Fixture Library e all'importazione GDTF (vedi [Fixture](../../manual/fixtures/)).

## L'indirizzo DMX

L'**indirizzo** è il primo canale che un apparecchio ascolta. Si imposta sull'apparecchio stesso, dal suo display o con dei dip switch.

Per esempio, con PAR a 7 canali:

- Il primo, all'indirizzo **1**, usa i canali da 1 a 7.
- Il secondo, all'indirizzo **8**, usa i canali da 8 a 14.
- Il terzo all'indirizzo **15**, e così via.

Due apparecchi uguali con lo **stesso indirizzo** fanno esattamente la stessa cosa: a volte è ciò che vuoi (due PAR sempre uguali), a volte è un errore. Quando patchi nel programma, metti lo stesso indirizzo e la stessa modalità impostati sull'apparecchio. Il [Patch](../../manual/patch/) ti propone l'indirizzo libero successivo.

## Cavi, cascata e terminatore

- Gli apparecchi si collegano **in cascata**: dal controllo al primo apparecchio, dalla sua uscita (DMX OUT) all'ingresso del successivo (DMX IN), e così via fino all'ultimo.
- Usa **cavo DMX** (da 110 a 120 Ω). Il cavo microfonico ha gli stessi connettori XLR, ma non è fatto per i dati e dà problemi sulle tratte lunghe o con molti apparecchi.
- I connettori possono essere **XLR a 3 o a 5 pin**; con un adattatore si passa dall'uno all'altro.
- Su una stessa linea stanno circa **32 apparecchi**. Per averne di più, o per distribuire il segnale in più direzioni, si usa uno **splitter** DMX.
- Metti un **terminatore** (una resistenza da 120 Ω dentro un connettore) sull'uscita dell'ultimo apparecchio. Senza, il segnale rimbalza e compaiono strani sfarfallii.

## 8 e 16 bit

Alcuni parametri hanno bisogno di più precisione di 256 livelli, soprattutto il pan e il tilt delle teste mobili. Per questo usano **due canali**: uno grossolano e uno fine (**16 bit**, 65.536 livelli). Se la libreria ha la modalità giusta dell'apparecchio, il programma se ne occupa da solo.

## Chi vince quando due cose toccano lo stesso canale

Quando due scene comandano lo stesso canale, ci sono due regole classiche:

- **HTP** (vince il più alto): per le intensità. Se una scena mette un dimmer al 50 % e un'altra all'80 %, esce l'80 %.
- **LTP** (vince l'ultimo): per il resto (colore, posizione, gobo…). Comanda l'ultima scena che ha toccato il canale.

DMX Total Control aggiunge le **priorità** da 0 a 10 per scena: comanda quella con la priorità più alta, anche sulle intensità. Lo spiega [Live](../../manual/directo/#priorità).

## Prossimo passo

Con questo puoi già [collegare le tue luci al computer](../connect-lights-to-a-computer/). Se non hai ancora un'interfaccia, guarda [come scegliere un'interfaccia DMX USB](../choosing-a-usb-dmx-interface/).
