---
title: Was ist DMX?
description: DMX einfach erklärt – wie Sie Showlicht vom Computer oder Lichtpult aus steuern, mit Universen, Kanälen, Adressen, Kabeln und Abschlusswiderstand.
---

## Eine gemeinsame Sprache für das Licht

**DMX512** (oder einfach DMX) ist der Standard, mit dem ein Lichtpult oder ein Computer mit den Lichtgeräten spricht: LED-PARs, Moving Heads, Stroboskope, Nebelmaschinen, Dimmer… Fast jedes Showgerät hat einen DMX-Eingang, deshalb steuern Sie mit derselben Steuerung Geräte verschiedener Hersteller.

Die Idee ist einfach: Die Steuerung sendet ständig eine Liste von Zahlen, und jedes Gerät hört auf die, die für es bestimmt sind.

## Universen und Kanäle

- Ein **Universum** ist eine DMX-Linie mit **512 Kanälen**.
- Jeder **Kanal** trägt einen Wert von **0 bis 255**: 0 ist aus oder das Minimum, 255 das Maximum.
- Die Steuerung wiederholt das ganze Universum viele Male pro Sekunde (bis zu etwa 44-mal), deshalb sieht man Änderungen sofort.

Braucht Ihr Rig mehr als 512 Kanäle, verwenden Sie mehr Universen: Jedes wird über sein eigenes Interface oder über das Netzwerk ausgegeben (siehe [Art-Net und sACN](../art-net-and-sacn/)).

## Wie viele Kanäle ein Gerät belegt

Jedes Gerät belegt mehrere aufeinanderfolgende Kanäle, je nach seinem **Modus** (oder seiner „Personality“):

| Gerät | Übliche Kanäle | Was sie steuern |
|---|---|---|
| Einfacher LED-PAR | 3 bis 4 | Rot, Grün, Blau (und Weiß) |
| Kompletter LED-PAR | 6 bis 8 | Dimmer, Farben, Stroboskop, interne Programme |
| Moving Head | 12 bis 30 oder mehr | Pan, Tilt, Farbe, Gobo, Fokus, Prisma, Dimmer… |
| Nebelmaschine | 1 bis 2 | Nebelmenge, Lüfter |

Den Modus stellen Sie am Gerät selbst ein, und in seiner Bedienungsanleitung steht, was jeder Kanal tut. Deshalb verwenden Steuerprogramme **Fixture-Bibliotheken**: Definitionen mit den Kanälen jedes Modells, damit Sie sie nicht auswendig lernen müssen. DMX Total Control bringt Tausende mit, dazu die Open Fixture Library und den GDTF-Import (siehe [Fixtures](../../manual/fixtures/)).

## Die DMX-Adresse

Die **Adresse** ist der erste Kanal, auf den ein Gerät hört. Sie wird am Gerät selbst eingestellt, über sein Display oder mit DIP-Schaltern.

Zum Beispiel mit PARs mit 7 Kanälen:

- Der erste auf Adresse **1** belegt die Kanäle 1 bis 7.
- Der zweite auf Adresse **8** belegt die Kanäle 8 bis 14.
- Der dritte auf Adresse **15**, und so weiter.

Zwei gleiche Geräte mit **derselben Adresse** tun genau dasselbe: Manchmal ist das gewollt (zwei PARs, die immer gleich leuchten), manchmal ist es ein Fehler. Stellen Sie beim Patchen im Programm dieselbe Adresse und denselben Modus ein wie am Gerät. Der [Patch](../../manual/patch/) schlägt Ihnen die nächste freie Adresse vor.

## Kabel, Kette und Abschlusswiderstand

- Die Geräte werden **in Reihe** verbunden: von der Steuerung zum ersten Gerät, von dessen Ausgang (DMX OUT) zum Eingang des nächsten (DMX IN) und so weiter bis zum letzten.
- Verwenden Sie **DMX-Kabel** (110 bis 120 Ω). Mikrofonkabel hat dieselben XLR-Stecker, ist aber nicht für Daten gemacht und macht bei langen Strecken oder vielen Geräten Probleme.
- Die Stecker können **3- oder 5-polige XLR** sein; mit einem Adapter kommen Sie vom einen zum anderen.
- Auf eine Linie passen etwa **32 Geräte**. Für mehr, oder um das Signal in mehrere Richtungen zu verteilen, verwenden Sie einen DMX-**Splitter**.
- Stecken Sie einen **Abschlusswiderstand** (einen Widerstand von 120 Ω in einem Stecker, auch Terminator genannt) in den Ausgang des letzten Geräts. Ohne ihn wird das Signal reflektiert, und es kommt zu seltsamem Flackern.

## 8 und 16 Bit

Manche Parameter brauchen mehr Genauigkeit als 256 Stufen, vor allem Pan und Tilt der Moving Heads. Dafür verwenden sie **zwei Kanäle**: einen groben und einen feinen (**16 Bit**, 65.536 Stufen). Hat die Bibliothek den richtigen Modus des Geräts, kümmert sich das Programm selbst darum.

## Wer gewinnt, wenn zwei Dinge denselben Kanal steuern

Steuern zwei Szenen denselben Kanal, gibt es zwei klassische Regeln:

- **HTP** (der höchste Wert gewinnt): für die Intensitäten. Setzt eine Szene einen Dimmer auf 50 % und eine andere auf 80 %, kommen 80 % heraus.
- **LTP** (der letzte gewinnt): für den Rest (Farbe, Position, Gobo…). Es gilt die letzte Szene, die den Kanal berührt hat.

DMX Total Control fügt **Prioritäten** von 0 bis 10 pro Szene hinzu: Die mit der höheren Priorität gewinnt, auch bei den Intensitäten. Das erklärt [Live](../../manual/directo/#prioritäten).

## Nächster Schritt

Damit können Sie schon [Ihre Scheinwerfer an den Computer anschließen](../connect-lights-to-a-computer/). Haben Sie noch kein Interface, lesen Sie, [wie Sie ein DMX-USB-Interface auswählen](../choosing-a-usb-dmx-interface/).
