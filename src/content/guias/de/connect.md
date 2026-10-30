---
title: DMX-Scheinwerfer an den Computer anschließen
description: Schritt für Schritt vom Auspacken bis zum ersten Licht – das DMX-Interface, die Kabel, die Adressen, der Patch und was Sie prüfen, wenn nichts leuchtet.
---

## Was Sie brauchen

- Einen Computer mit Windows 10 oder 11 und [DMX Total Control](../../download/).
- Ein **DMX-USB-Interface** oder einen **Art-Net- oder sACN-Node**, wenn Sie über das Netzwerk gehen (siehe [wie Sie ein Interface auswählen](../choosing-a-usb-dmx-interface/)).
- **DMX-Kabel**, um das Interface mit dem ersten Gerät und jedes Gerät mit dem nächsten zu verbinden.
- Einen **Abschlusswiderstand** von 120 Ω für das letzte Gerät (oft liegt er dem Interface bei).

## 1. Die Geräte vorbereiten

An jedem Gerät:

1. Stellen Sie es auf **DMX-Betrieb** (nicht auf Automatik- oder Musikbetrieb).
2. Wählen Sie seinen **Kanalmodus** und notieren Sie ihn: zum Beispiel „7 Kanäle“.
3. Geben Sie ihm eine **Adresse**, die sich nicht mit den anderen überschneidet. Bei PARs mit 7 Kanälen: 1, 8, 15, 22…

Notieren Sie auf einem Zettel, welches Gerät es ist, seinen Modus und seine Adresse. Sie brauchen das beim Patchen. Sind Ihnen diese Begriffe fremd, beginnen Sie mit [Was ist DMX?](../what-is-dmx/).

## 2. Die Kabel anschließen

1. Schließen Sie das Interface an einen USB-Anschluss des Computers an.
2. Vom DMX-Ausgang des Interfaces ein Kabel zum DMX-Eingang (DMX IN) des ersten Geräts.
3. Von dessen Ausgang (DMX OUT) zum Eingang des nächsten, und so weiter bis zum letzten.
4. Stecken Sie den Abschlusswiderstand in den Ausgang des letzten Geräts.

Interfaces mit FTDI-Chip (viele DMX-USB-Interfaces) brauchen dessen Treiber: Haben Sie ihn nicht, bietet der Installer von DMX Total Control am Ende die Seite zum Herunterladen an. Für andere Interfaces installieren Sie den Treiber des Herstellers.

## 3. Den Ausgang im Programm wählen

Öffnen Sie DMX Total Control und gehen Sie zu **Ausgänge** (F7). Jedes Universum hat einen Ausgang: Wählen Sie Ihr Interface für **Universum 1**. Gehen Sie über das Netzwerk zu einem Node, wählen Sie den Ausgang Art-Net oder E1.31 (sACN) der Netzwerkkarte, die zum Licht führt. Alle Details unter [Ausgänge](../../manual/salidas/).

## 4. Die Geräte patchen

Gehen Sie zu **Patch** (F5) und drücken Sie **„Fixtures hinzufügen“**:

1. Suchen Sie Hersteller und Modell in der Bibliothek.
2. Wählen Sie **denselben Modus**, den Sie am Gerät eingestellt haben.
3. Geben Sie **dieselbe Adresse** und das Universum ein.
4. Haben Sie mehrere gleiche, geben Sie an, wie viele: Das Programm vergibt ihnen aufeinanderfolgende Adressen.

Ist Ihr Modell nicht dabei, versuchen Sie es mit der Open Fixture Library, importieren Sie seine GDTF-Datei oder erstellen Sie es im Fixture-Editor (siehe [Fixtures](../../manual/fixtures/)). Für einfache PARs reichen meist die generischen Fixtures (RGB, RGBW, Dimmer).

## 5. Testen

- Im Patch lässt **„Identifizieren“** die ausgewählten Fixtures weiß blinken: So prüfen Sie, ob jedes das ist, für das Sie es halten.
- Unter **Programmieren** (F3) wählen Sie die Fixtures aus und ziehen den Dimmer hoch oder wählen eine Farbe.
- Unter **Ausgänge › DMX-Pegel** sehen Sie die Werte, die an jeden Kanal gesendet werden.

Ändert sich der Wert unter DMX-Pegel, aber das Gerät reagiert nicht, liegt das Problem zwischen Interface und Gerät. Ändert sich der Wert nicht, liegt es im Programm (im Patch oder beim Grand Master).

## Wenn nichts leuchtet

- **Das Gerät ist nicht im DMX-Betrieb**, oder es hat eine andere Adresse oder einen anderen Modus als im Patch.
- **Der Grand Master ist unten oder Blackout ist an**: Schauen Sie in die obere Leiste.
- **Das Universum hat keinen Ausgang** oder ist ein anderes als im Patch.
- **Kabel oder Abschlusswiderstand**: Testen Sie mit einem einzigen Gerät und einem kurzen Kabel. Ein Mikrofonkabel kann Probleme machen.
- **Das Interface erscheint nicht**: Prüfen Sie den Treiber, versuchen Sie einen anderen USB-Anschluss und drücken Sie unter Ausgänge **„Neu suchen“**.
- **Flackern oder seltsame Sprünge**: Der Abschlusswiderstand fehlt, an der Linie hängen zu viele Geräte oder ein Kabel ist defekt.

## Noch ohne Scheinwerfer

Sie brauchen die Geräte nicht, um anzufangen: Öffnen Sie eine Beispielshow, patchen Sie Ihre Fixtures und programmieren Sie alles. Die DMX-Pegel sehen Sie im Programm, und mit einem 3D-Visualizer, der Art-Net oder sACN empfängt, können Sie die Show auf dem Bildschirm sehen (siehe [Art-Net und sACN](../art-net-and-sacn/)).
