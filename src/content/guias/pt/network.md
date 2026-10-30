---
title: Art-Net e sACN — DMX pela rede
description: Como levar muitos universos DMX por um cabo de rede, o que é um nó Art-Net ou sACN, como configurar os endereços IP e como ver o show em um visualizador.
---

## DMX por um cabo de rede

**Art-Net** e **sACN** (também chamado de E1.31) são duas formas de enviar DMX por uma rede Ethernet, a mesma que os computadores usam. Eles têm duas vantagens sobre a linha DMX clássica:

- **Muitos universos pelo mesmo cabo**: dezenas ou centenas, em vez de 512 canais por cabo.
- **Distâncias e distribuição** de uma rede comum: um switch e cabos de rede levam o sinal aonde for preciso.

Os dois fazem a mesma coisa. O Art-Net é muito comum em equipamentos de show e em visualizadores; o sACN é um padrão ANSI muito usado em teatros e em instalações grandes. O DMX Total Control envia e recebe os dois.

## O nó

Um **nó** converte a rede em DMX: recebe Art-Net ou sACN pelo cabo de rede e entrega DMX pelos conectores XLR, um por universo. Muitos aparelhos modernos, como painéis de LED e moving heads grandes, já vêm com rede e não precisam de nó.

Uma montagem típica:

1. Computador → cabo de rede → **switch**.
2. Do switch, um cabo para cada **nó** (ou para cada aparelho com rede).
3. De cada nó, linhas DMX até os aparelhos, como em [como conectar luzes ao computador](../connect-lights-to-a-computer/).

## Endereços IP

O computador e os nós precisam estar **na mesma rede**:

- Dê a eles **endereços IP fixos** da mesma faixa, por exemplo 192.168.1.10 para o computador e 192.168.1.20, .21… para os nós, com a máscara 255.255.255.0.
- Muitos equipamentos Art-Net vêm de fábrica na faixa **2.x.x.x** ou **10.x.x.x**: coloque o computador nessa mesma faixa, ou mude o nó para a sua.
- Se o computador tiver várias placas de rede (Wi-Fi e cabo), escolha no programa a que vai para as luzes.

## Enviar: para todos ou para um

- **Broadcast ou multicast**: o computador envia para a rede e cada nó pega os seus universos. É o mais simples para começar.
- **Unicast**: o computador envia cada universo para o IP do seu nó. Carrega menos a rede quando há muitos universos e equipamentos.

## O número do universo

É o erro mais comum: **o Art-Net conta os universos a partir de 0 e o sACN a partir de 1**. Além disso, cada programa e cada nó os numera do seu jeito. Se não houver luz, confira dos dois lados qual universo sai e qual o nó escuta.

## No DMX Total Control

Em [Saídas](../../manual/salidas/), escolha para cada universo a saída **Art-Net** ou **E1.31** da placa de rede que vai para as luzes. Em **Níveis DMX** você vê o que sai por cada universo. O programa também pode receber DMX, para que você o controle a partir de outra mesa: essa entrada é ativada como dispositivo em [Mapeamentos](../../manual/mapeos/#dispositivos).

## Ver o show sem luzes: os visualizadores

Um **visualizador** é um programa que desenha o palco em 3D e recebe DMX via Art-Net ou sACN. Assim você programa o show no computador antes de ter as luzes na frente:

- Se o visualizador estiver **no mesmo computador**, envie para o endereço **127.0.0.1** (o próprio computador).
- Se estiver em outro, coloque os dois na mesma rede, como se fosse um nó.

## Dicas para o ao vivo

- Use **cabo**, não Wi-Fi, para a rede das luzes: o Wi-Fi pode cair ou atrasar na pior hora.
- Melhor ainda: uma **rede só para as luzes**, separada da internet e do som.
- Um **switch** simples serve para quase tudo; com muitos universos em multicast, um gerenciável funciona melhor.
- Anote os IPs e os universos de cada nó e cole na caixa do nó.
