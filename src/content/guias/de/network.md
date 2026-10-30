---
title: Art-Net und sACN – DMX über das Netzwerk
description: Wie Sie viele DMX-Universen über ein Netzwerkkabel übertragen, was ein Node ist, wie Sie die IP-Adressen einstellen und die Show in einem Visualizer sehen.
---

## DMX über ein Netzwerkkabel

**Art-Net** und **sACN** (auch E1.31 genannt) sind zwei Wege, DMX über ein Ethernet-Netzwerk zu senden, also über dasselbe Netzwerk, das Computer verwenden. Gegenüber der klassischen DMX-Linie haben sie zwei Vorteile:

- **Viele Universen über dasselbe Kabel**: Dutzende oder Hunderte, statt 512 Kanälen pro Kabel.
- **Übliche Netzwerk-Distanzen und -Verteilung**: Ein Switch und Netzwerkkabel bringen das Signal dorthin, wo es gebraucht wird.

Beide tun dasselbe. Art-Net ist bei Live-Equipment und Visualizern sehr verbreitet; sACN ist ein ANSI-Standard, der in Theatern und großen Anlagen viel genutzt wird. DMX Total Control sendet und empfängt beide.

## Der Node

Ein **Node** wandelt das Netzwerk in DMX um: Über das Netzwerkkabel kommt Art-Net oder sACN an, und über seine XLR-Buchsen gibt er DMX aus, eine pro Universum. Viele moderne Geräte, etwa LED-Wände und große Moving Heads, haben den Netzwerkanschluss schon eingebaut und brauchen keinen Node.

Ein typischer Aufbau:

1. Computer → Netzwerkkabel → **Switch**.
2. Vom Switch ein Kabel zu jedem **Node** (oder zu jedem netzwerkfähigen Gerät).
3. Von jedem Node DMX-Linien zu den Geräten, wie in [DMX-Scheinwerfer an den Computer anschließen](../connect-lights-to-a-computer/).

## IP-Adressen

Computer und Nodes müssen **im selben Netzwerk** sein:

- Geben Sie ihnen **feste IP-Adressen** aus demselben Bereich, zum Beispiel 192.168.1.10 für den Computer und 192.168.1.20, .21… für die Nodes, mit der Subnetzmaske 255.255.255.0.
- Viele Art-Net-Geräte sind ab Werk auf den Bereich **2.x.x.x** oder **10.x.x.x** eingestellt: Setzen Sie den Computer in denselben Bereich oder stellen Sie den Node auf Ihren um.
- Hat der Computer mehrere Netzwerkkarten (WLAN und Kabel), wählen Sie im Programm die, die zum Licht führt.

## Senden: an alle oder an einen

- **Broadcast oder Multicast**: Der Computer sendet ins Netzwerk, und jeder Node nimmt sich seine Universen. Für den Anfang am einfachsten.
- **Unicast**: Der Computer sendet jedes Universum an die IP seines Nodes. Das belastet das Netzwerk weniger, wenn es viele Universen und Geräte gibt.

## Die Universumsnummer

Das ist der häufigste Fehler: **Art-Net zählt die Universen ab 0, sACN ab 1**. Außerdem nummeriert jedes Programm und jeder Node sie auf seine Weise. Sehen Sie kein Licht, prüfen Sie auf beiden Seiten, welches Universum gesendet wird und auf welches der Node hört.

## In DMX Total Control

Wählen Sie unter [Ausgänge](../../manual/salidas/) für jedes Universum den Ausgang **Art-Net** oder **E1.31** der Netzwerkkarte, die zum Licht führt. Unter **DMX-Pegel** sehen Sie, was über jedes Universum ausgegeben wird. Das Programm kann auch DMX empfangen, damit Sie es von einem anderen Pult aus steuern: Dieser Eingang wird unter [Zuordnungen](../../manual/mapeos/#geräte) als Gerät aktiviert.

## Die Show ohne Licht sehen: Visualizer

Ein **Visualizer** ist ein Programm, das die Bühne in 3D darstellt und DMX über Art-Net oder sACN empfängt. So programmieren Sie die Show am Computer, bevor Sie das Licht vor sich haben:

- Läuft der Visualizer **auf demselben Computer**, senden Sie an die Adresse **127.0.0.1** (den Computer selbst).
- Läuft er auf einem anderen, bringen Sie beide ins selbe Netzwerk, als wäre er ein Node.

## Tipps für den Live-Einsatz

- Verwenden Sie für das Lichtnetz **Kabel**, kein WLAN: WLAN kann im ungünstigsten Moment abbrechen oder sich verzögern.
- Besser ist ein **eigenes Netzwerk nur für das Licht**, getrennt vom Internet und vom Ton.
- Ein einfacher **Switch** reicht für fast alles; mit vielen Universen per Multicast ist ein Managed Switch besser.
- Notieren Sie die IPs und Universen jedes Nodes und kleben Sie den Zettel auf das Gehäuse des Nodes.
