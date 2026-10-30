---
title: Como conectar luzes DMX ao computador
description: Passo a passo para conectar luzes DMX ao computador — a interface DMX USB, os cabos, os endereços, o patch no programa e o que verificar se nada acende.
---

## Do que você precisa

- Um computador com Windows 10 ou 11 e o [DMX Total Control](../../download/).
- Uma **interface DMX USB**, ou um **nó Art-Net ou sACN** se você for pela rede (veja [como escolher uma interface](../choosing-a-usb-dmx-interface/)).
- **Cabo DMX** para ligar a interface ao primeiro aparelho e cada aparelho ao seguinte.
- Um **terminador** de 120 Ω para o último aparelho (muitas vezes ele vem com a interface).

## 1. Prepare os aparelhos

Em cada aparelho:

1. Coloque-o em **modo DMX** (não em automático nem no modo som).
2. Escolha o **modo de canais** e anote: por exemplo, “7 canais”.
3. Dê a ele um **endereço** que não se sobreponha aos outros. Com PAR de 7 canais: 1, 8, 15, 22…

Anote em um papel qual aparelho é, o modo e o endereço dele. Você vai precisar disso no patch. Se essas palavras parecem estranhas, comece por [O que é DMX?](../what-is-dmx/).

## 2. Ligue os cabos

1. Conecte a interface a uma porta USB do computador.
2. Da saída DMX da interface, um cabo até a entrada DMX (DMX IN) do primeiro aparelho.
3. Da saída dele (DMX OUT) até a entrada do seguinte, e assim até o último.
4. Coloque o terminador na saída do último.

As interfaces com chip FTDI (muitas das DMX USB) precisam do driver delas: se você não o tiver, o instalador do DMX Total Control oferece, ao terminar, a página para baixá-lo. Para outras interfaces, instale o driver do fabricante.

## 3. Escolha a saída no programa

Abra o DMX Total Control e vá para **Saídas** (F7). Cada universo tem uma saída: escolha sua interface para o **Universo 1**. Se você for pela rede até um nó, escolha a saída Art-Net ou E1.31 (sACN) da placa de rede que vai para as luzes. Todos os detalhes em [Saídas](../../manual/salidas/).

## 4. Patcheie seus aparelhos

Vá para **Patch** (F5) e pressione **“Adicionar fixtures”**:

1. Procure a marca e o modelo na biblioteca.
2. Escolha **o mesmo modo** que você definiu no aparelho.
3. Coloque **o mesmo endereço** e o universo.
4. Se tiver vários iguais, informe quantos: o programa dá a eles endereços consecutivos.

Se o seu modelo não estiver lá, tente a Open Fixture Library, importe o arquivo GDTF dele ou crie-o no criador de fixtures (veja [Fixtures](../../manual/fixtures/)). Para PAR simples, os fixtures genéricos (RGB, RGBW, dimmer) costumam bastar.

## 5. Teste

- No Patch, **“Identificar”** faz os fixtures selecionados piscarem em branco: assim você confere se cada um é o que você pensa.
- Em **Programar** (F3), selecione os fixtures e suba o dimmer, ou escolha uma cor.
- Em **Saídas › Níveis DMX** você vê os valores que estão sendo enviados para cada canal.

Se o valor muda em Níveis DMX mas o aparelho não responde, o problema está entre a interface e o aparelho. Se o valor não muda, está no programa (o patch ou o grand master).

## Se nada acende

- **O aparelho não está em modo DMX**, ou tem outro endereço ou outro modo, diferente do patch.
- **O grand master está abaixado ou o blackout está ligado**: olhe a barra superior.
- **O universo não tem saída**, ou não é o mesmo do patch.
- **Cabo ou terminador**: teste com um só aparelho e um cabo curto. Um cabo de microfone pode falhar.
- **A interface não aparece**: confira o driver, teste outra porta USB e busque de novo em Saídas.
- **Piscadas ou saltos estranhos**: falta o terminador, há aparelhos demais na linha ou um cabo está com problema.

## Ainda sem luzes

Você não precisa dos aparelhos para começar: abra um show de exemplo, patcheie seus fixtures e programe tudo. Os níveis DMX aparecem no programa, e com um visualizador 3D que receba Art-Net ou sACN você vê o show na tela (veja [Art-Net e sACN](../art-net-and-sacn/)).
