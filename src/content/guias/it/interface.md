---
title: Come scegliere un'interfaccia DMX USB
description: Tipo Open o tipo Pro, isolamento, ingresso DMX, uno o due universi, o passare alla rete — cosa guardare in base a quello che devi fare.
---

## Cosa fa l'interfaccia

L'interfaccia DMX USB è il ponte tra il computer e le luci: riceve dal programma i valori dei canali e li fa uscire da un connettore XLR come segnale DMX. Ce ne sono tante, di tutti i prezzi, ma quasi tutte sono di due tipi.

## Tipo Open o tipo Pro

**Tipo Open** (come la Enttec Open DMX USB e molte compatibili):

- Dentro c'è un chip da USB a seriale (di solito FTDI) e poco altro. **È il computer a generare il segnale DMX**.
- Sono le più **economiche** e vanno bene per fare pratica, per le feste e per i piccoli impianti.
- Se il computer è molto carico, il ritmo del segnale può variare, e alcuni apparecchi se ne accorgono con degli sfarfallii.
- Solo uscita: non ricevono DMX.

**Tipo Pro** (come la Enttec DMX USB Pro, le DMXKing ultraDMX o la Eurolite USB-DMX512 PRO):

- Hanno un **microcontrollore che genera il segnale da solo**, sempre allo stesso ritmo, anche se il computer è occupato.
- Spesso hanno l'**ingresso DMX**, e alcune **due universi** in uscita.
- Costano di più, ma sono quelle da consigliare per le serate e i locali.

## Cosa guardare

- **Isolamento ottico** (galvanico): separa elettricamente il computer dalla linea DMX. Protegge il computer dalle dispersioni ed evita i disturbi. Per il live, molto consigliato.
- **Quanti universi**: somma i canali dei tuoi apparecchi. Fino a 512, uno. Oltre, un'interfaccia a due universi o [Art-Net e sACN](../art-net-and-sacn/).
- **Ingresso DMX**: solo se vuoi controllare il programma da un'altra console.
- **Connettore**: XLR a 3 o a 5 pin; si adatta facilmente, ma è meglio che corrisponda ai tuoi cavi.
- **Compatibilità**: controlla che il programma la supporti. Per DMX Total Control, guarda l'[elenco dell'hardware compatibile](../../hardware/).

## Le «compatibili Enttec»

Molte interfacce economiche si vendono come compatibili con la Enttec Open DMX USB o con la DMX USB Pro. Se hanno un chip FTDI di solito funzionano come l'originale, ma la qualità varia molto: se la tua dà problemi, [faccelo sapere](https://github.com/joseramos1999/DMXTotalControl/issues/new?template=compatibilidad.md) e la aggiungiamo all'elenco.

## USB o rete

Da due o tre universi in su, o se le luci sono lontane dal computer, di solito conviene un **nodo Art-Net o sACN**: un cavo di rete porta tutti gli universi, e il nodo fa uscire le linee DMX vicino alle luci.

## In base a quello che devi fare

| Uso | Cosa conviene |
|---|---|
| Imparare e fare pratica, feste in casa | Una di tipo Open, o nessuna: puoi programmare senza luci |
| DJ e piccole serate | Una di tipo Pro con isolamento |
| Teatro e locali | Tipo Pro con isolamento, o il nodo della sala |
| Molti universi o festival | Nodi Art-Net o sACN in rete |

Con l'interfaccia in mano, prosegui con [come collegare le luci al computer](../connect-lights-to-a-computer/).
