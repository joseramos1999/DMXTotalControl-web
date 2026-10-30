---
title: Art-Net e sACN — il DMX in rete
description: Come portare molti universi DMX su un cavo di rete, cos'è un nodo, come impostare gli indirizzi IP e come vedere lo show in un visualizzatore.
---

## Il DMX su un cavo di rete

**Art-Net** e **sACN** (chiamato anche E1.31) sono due modi di inviare il DMX su una rete Ethernet, la stessa che usano i computer. Hanno due vantaggi rispetto alla linea DMX classica:

- **Molti universi sullo stesso cavo**: decine o centinaia, invece di 512 canali per cavo.
- **Distanze e distribuzione** di una rete normale: uno switch e dei cavi di rete portano il segnale dove serve.

Fanno entrambi la stessa cosa. Art-Net è molto diffuso negli apparecchi per il live e nei visualizzatori; sACN è uno standard ANSI molto usato nei teatri e negli impianti grandi. DMX Total Control invia e riceve entrambi.

## Il nodo

Un **nodo** converte la rete in DMX: riceve Art-Net o sACN dal cavo di rete e fa uscire il DMX dai suoi connettori XLR, uno per universo. Molti apparecchi moderni, come gli schermi e le teste grandi, hanno già la rete e non hanno bisogno di un nodo.

Un impianto tipico:

1. Computer → cavo di rete → **switch**.
2. Dallo switch, un cavo verso ogni **nodo** (o verso ogni apparecchio con rete).
3. Da ogni nodo, linee DMX verso gli apparecchi, come in [come collegare le luci al computer](../connect-lights-to-a-computer/).

## Indirizzi IP

Il computer e i nodi devono essere **sulla stessa rete**:

- Dai loro **indirizzi IP fissi** dello stesso intervallo, per esempio 192.168.1.10 al computer e 192.168.1.20, .21… ai nodi, con la subnet mask 255.255.255.0.
- Molti apparecchi Art-Net escono di fabbrica nell'intervallo **2.x.x.x** o **10.x.x.x**: metti il computer nello stesso intervallo, o porta il nodo nel tuo.
- Se il computer ha più schede di rete (wifi e cavo), scegli nel programma quella che va alle luci.

## Inviare: a tutti o a uno

- **Broadcast o multicast**: il computer invia alla rete e ogni nodo prende i suoi universi. È il modo più semplice per iniziare.
- **Unicast**: il computer invia ogni universo all'IP del suo nodo. Carica meno la rete quando ci sono molti universi e apparecchi.

## Il numero di universo

È l'errore più tipico: **Art-Net conta gli universi da 0 e sACN da 1**. Inoltre, ogni programma e ogni nodo li numerano a modo loro. Se non vedi luce, controlla da entrambe le parti quale universo esce e quale ascolta il nodo.

## In DMX Total Control

In [Uscite](../../manual/salidas/), scegli per ogni universo l'uscita **Art-Net** o **E1.31** della scheda di rete che va alle luci. In **Livelli DMX** vedi cosa esce da ogni universo. Il programma può anche ricevere DMX, così lo controlli da un'altra console: quell'ingresso si attiva come dispositivo in [Mappature](../../manual/mapeos/#dispositivi).

## Vedere lo show senza luci: i visualizzatori

Un **visualizzatore** è un programma che disegna il palco in 3D e riceve il DMX via Art-Net o sACN. Così programmi lo show sul computer prima di avere le luci davanti:

- Se il visualizzatore è **sullo stesso computer**, invia all'indirizzo **127.0.0.1** (il computer stesso).
- Se è su un altro computer, mettili sulla stessa rete, come se fosse un nodo.

## Consigli per il live

- Usa il **cavo**, non il wifi, per la rete delle luci: il wifi può cadere o andare in ritardo nel momento peggiore.
- Meglio una **rete solo per le luci**, separata da internet e dall'audio.
- Uno **switch** semplice va bene per quasi tutto; con molti universi in multicast, uno gestito (managed) funziona meglio.
- Annota gli IP e gli universi di ogni nodo e attacca il foglio sul nodo stesso.
