---
title: O que é DMX?
description: O básico do DMX para controlar luzes de show a partir de um computador ou de uma mesa de luz — universos, canais, endereços, cabos e terminadores.
---

## Uma linguagem comum para as luzes

**DMX512** (ou simplesmente DMX) é o padrão com que uma mesa de luz ou um computador conversa com os aparelhos de iluminação: PAR de LED, moving heads, strobos, máquinas de fumaça, dimmers… Quase todo aparelho de show tem uma entrada DMX, então com um mesmo controle você opera equipamentos de marcas diferentes.

A ideia é simples: o controle envia o tempo todo uma lista de números, e cada aparelho escuta os que são dele.

## Universos e canais

- Um **universo** é uma linha DMX com **512 canais**.
- Cada **canal** leva um valor de **0 a 255**: 0 é desligado ou o mínimo, 255 é o máximo.
- O controle repete o universo inteiro muitas vezes por segundo (até umas 44), então as mudanças aparecem na hora.

Se o seu equipamento precisa de mais de 512 canais, você usa mais universos: cada um sai pela sua interface ou pela rede (veja [Art-Net e sACN](../art-net-and-sacn/)).

## Quantos canais cada aparelho usa

Cada aparelho ocupa vários canais seguidos, conforme o seu **modo** (ou “personalidade”):

| Aparelho | Canais comuns | O que cada um controla |
|---|---|---|
| PAR de LED simples | 3 a 4 | Vermelho, verde, azul (e branco) |
| PAR de LED completo | 6 a 8 | Dimmer, cores, strobo, programas internos |
| Moving head | 12 a 30 ou mais | Pan, tilt, cor, gobo, foco, prisma, dimmer… |
| Máquina de fumaça | 1 a 2 | Quantidade de fumaça, ventilador |

O modo é escolhido no próprio aparelho, e o manual dele diz o que cada canal faz. Por isso os programas de controle usam **bibliotecas de fixtures**: definições com os canais de cada modelo, para que você não precise decorá-los. O DMX Total Control traz milhares, além da Open Fixture Library e da importação de GDTF (veja [Fixtures](../../manual/fixtures/)).

## O endereço DMX

O **endereço** é o primeiro canal que um aparelho escuta. Ele é ajustado no próprio aparelho, no display ou com umas chavinhas (dip switches).

Por exemplo, com PAR de 7 canais:

- O primeiro, no endereço **1**, usa os canais 1 a 7.
- O segundo, no endereço **8**, usa os canais 8 a 14.
- O terceiro, no endereço **15**, e assim por diante.

Dois aparelhos iguais com o **mesmo endereço** fazem exatamente a mesma coisa: às vezes é o que você quer (dois PAR sempre iguais) e às vezes é um erro. Ao patchear no programa, use o mesmo endereço e o mesmo modo que estão no aparelho. O [Patch](../../manual/patch/) sugere o próximo endereço livre.

## Cabos, cadeia e terminador

- Os aparelhos são ligados **em cadeia**: do controle ao primeiro aparelho, da saída dele (DMX OUT) à entrada do seguinte (DMX IN), e assim até o último.
- Use **cabo DMX** (de 110 a 120 Ω). O cabo de microfone tem os mesmos conectores XLR, mas não foi feito para dados e dá problema em lances longos ou com muitos aparelhos.
- Os conectores podem ser **XLR de 3 ou de 5 pinos**; com um adaptador você passa de um para o outro.
- Em uma mesma linha cabem uns **32 aparelhos**. Para mais, ou para dividir o sinal em várias direções, use um **splitter** DMX.
- Coloque um **terminador** (um resistor de 120 Ω dentro de um conector) na saída do último aparelho. Sem ele o sinal reflete e aparecem piscadas estranhas.

## 8 e 16 bits

Alguns parâmetros precisam de mais precisão do que 256 passos, principalmente o pan e o tilt dos moving heads. Para isso eles usam **dois canais**: um grosso e um fino (**16 bits**, 65.536 passos). Se a biblioteca tiver o modo correto do aparelho, o programa cuida disso sozinho.

## Quem vence quando duas coisas mexem no mesmo canal

Quando duas cenas mandam no mesmo canal, há duas regras clássicas:

- **HTP** (o mais alto vence): para as intensidades. Se uma cena coloca um dimmer em 50 % e outra em 80 %, sai 80 %.
- **LTP** (o último vence): para o resto (cor, posição, gobo…). Manda a última cena que mexeu no canal.

O DMX Total Control acrescenta **prioridades** de 0 a 10 por cena: a de maior prioridade manda, também nas intensidades. Isso é explicado em [Ao vivo](../../manual/directo/#prioridades).

## Próximo passo

Com isso você já pode [conectar suas luzes ao computador](../connect-lights-to-a-computer/). Se ainda não tem interface, veja [como escolher uma interface DMX USB](../choosing-a-usb-dmx-interface/).
