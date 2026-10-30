---
title: Ein DMX-USB-Interface auswählen
description: Open- oder Pro-Typ, galvanische Trennung, DMX-Eingang, ein oder zwei Universen oder gleich übers Netzwerk – worauf Sie je nach Einsatz achten sollten.
---

## Was das Interface tut

Das DMX-USB-Interface ist die Brücke zwischen Computer und Licht: Es bekommt vom Programm die Werte der Kanäle und gibt sie über eine XLR-Buchse als DMX-Signal aus. Es gibt viele, in allen Preisklassen, aber fast alle gehören zu einem von zwei Typen.

## Open- oder Pro-Typ

**Open-Typ** (wie das Enttec Open DMX USB und viele kompatible):

- Innen ein USB-Seriell-Chip (meist FTDI) und kaum mehr. **Das DMX-Signal erzeugt der Computer**.
- Sie sind am **günstigsten** und eignen sich gut zum Üben, für Partys und kleine Aufbauten.
- Ist der Computer stark ausgelastet, kann das Timing des Signals schwanken, und manche Geräte zeigen das durch Flackern.
- Nur Ausgang: Sie empfangen kein DMX.

**Pro-Typ** (wie das Enttec DMX USB Pro, das DMXKing ultraDMX oder das Eurolite USB-DMX512 PRO):

- Sie haben einen **Mikrocontroller, der das Signal selbst erzeugt**, immer im selben Takt, auch wenn der Computer beschäftigt ist.
- Sie haben oft einen **DMX-Eingang**, manche **zwei Universen** als Ausgang.
- Sie kosten mehr, sind aber die Empfehlung für Gigs und feste Locations.

## Worauf Sie achten sollten

- **Galvanische Trennung** (optisch): trennt den Computer elektrisch von der DMX-Linie. Sie schützt den Computer vor Fehlerströmen und verhindert Störungen. Für den Live-Einsatz sehr zu empfehlen.
- **Wie viele Universen**: Zählen Sie die Kanäle Ihrer Geräte zusammen. Bis 512 reicht eines. Für mehr ein Interface mit zwei Universen oder [Art-Net und sACN](../art-net-and-sacn/).
- **DMX-Eingang**: nur, wenn Sie das Programm von einem anderen Pult aus steuern möchten.
- **Stecker**: 3- oder 5-poliges XLR; das lässt sich leicht adaptieren, aber besser passt es zu Ihren Kabeln.
- **Kompatibilität**: Prüfen Sie, ob das Programm es unterstützt. Für DMX Total Control finden Sie das in der [Liste der kompatiblen Hardware](../../hardware/).

## Die „Enttec-kompatiblen“

Viele günstige Interfaces werden als kompatibel mit dem Enttec Open DMX USB oder dem DMX USB Pro verkauft. Haben sie einen FTDI-Chip, funktionieren sie meist wie das Original, aber die Qualität schwankt stark: Macht Ihres Probleme, [sagen Sie es uns](https://github.com/joseramos1999/DMXTotalControl/issues/new?template=compatibilidad.md), und wir nehmen es in die Liste auf.

## USB oder Netzwerk

Ab zwei oder drei Universen, oder wenn das Licht weit vom Computer entfernt ist, lohnt sich meist ein **Art-Net- oder sACN-Node**: Ein Netzwerkkabel trägt alle Universen, und der Node gibt die DMX-Linien direkt beim Licht aus.

## Je nach Einsatz

| Einsatz | Die Empfehlung |
|---|---|
| Lernen und Üben, Partys zu Hause | Ein Open-Typ, oder gar keins: Sie können ohne Licht programmieren |
| DJ und kleine Gigs | Ein Pro-Typ mit galvanischer Trennung |
| Theater und Clubs | Pro-Typ mit galvanischer Trennung, oder der Node des Hauses |
| Viele Universen oder Festivals | Art-Net- oder sACN-Nodes im Netzwerk |

Mit dem Interface in der Hand geht es weiter mit [DMX-Scheinwerfer an den Computer anschließen](../connect-lights-to-a-computer/).
