---
title: Como escolher uma interface DMX USB
description: Tipo Open ou tipo Pro, isolamento, entrada DMX, um ou dois universos, ou partir para a rede — o que olhar numa interface DMX USB conforme o que você vai fazer.
---

## O que a interface faz

A interface DMX USB é a ponte entre o computador e as luzes: recebe do programa os valores dos canais e os envia por um conector XLR como sinal DMX. Há muitas, de muitos preços, mas quase todas são de dois tipos.

## Tipo Open ou tipo Pro

**Tipo Open** (como a Enttec Open DMX USB e muitas compatíveis):

- Por dentro, um chip conversor USB-serial (normalmente FTDI) e pouco mais. **É o computador que gera o sinal DMX**.
- São as mais **baratas** e funcionam bem para praticar, festas e montagens pequenas.
- Se o computador estiver muito carregado, o ritmo do sinal pode variar, e alguns aparelhos sentem isso e piscam.
- Só saída: não recebem DMX.

**Tipo Pro** (como a Enttec DMX USB Pro, as DMXKing ultraDMX ou a Eurolite USB-DMX512 PRO):

- Têm um **microcontrolador que gera o sinal sozinho**, sempre no mesmo ritmo, mesmo com o computador ocupado.
- Costumam ter **entrada DMX**, e algumas têm **dois universos** de saída.
- Custam mais, mas são as recomendadas para shows e casas de show.

## O que olhar

- **Isolamento óptico** (galvânico): separa eletricamente o computador da linha DMX. Protege o computador de fugas de corrente e evita ruídos. Para o ao vivo, muito recomendável.
- **Quantos universos**: some os canais dos seus aparelhos. Até 512, um. Para mais, uma interface de dois universos ou [Art-Net e sACN](../art-net-and-sacn/).
- **Entrada DMX**: só se você quiser controlar o programa a partir de outra mesa.
- **Conector**: XLR de 3 ou de 5 pinos; dá para adaptar fácil, mas é melhor que combine com os seus cabos.
- **Compatibilidade**: confira se o programa tem suporte para ela. No DMX Total Control, veja a [lista de hardware compatível](../../hardware/).

## As “compatíveis com Enttec”

Muitas interfaces baratas são vendidas como compatíveis com a Enttec Open DMX USB ou com a DMX USB Pro. Se tiverem um chip FTDI, costumam funcionar como a original, mas a qualidade varia muito: se a sua der problema, [conte para a gente](https://github.com/joseramos1999/DMXTotalControl/issues/new?template=compatibilidad.md) e nós a adicionamos à lista.

## USB ou rede

A partir de dois ou três universos, ou se as luzes estiverem longe do computador, costuma valer a pena um **nó Art-Net ou sACN**: um cabo de rede leva todos os universos, e o nó entrega as linhas DMX perto das luzes.

## Conforme o que você vai fazer

| Uso | O recomendado |
|---|---|
| Aprender e praticar, festas em casa | Uma tipo Open, ou nenhuma: dá para programar sem luzes |
| DJ e shows pequenos | Uma tipo Pro com isolamento |
| Teatro e casas de show | Tipo Pro com isolamento, ou o nó da casa |
| Muitos universos ou festivais | Nós Art-Net ou sACN em rede |

Com a interface em mãos, siga para [como conectar luzes ao computador](../connect-lights-to-a-computer/).
