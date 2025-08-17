---
publishDate: 2025-08-01T00:00:00Z
title: Entrando nas entranhas técnicas do Harpo UTXO, Merkle Tree, Commitments e Nullifiers
excerpt: Depois de apresentar a motivação e os fundamentos da solução Harpo, vamos começar a abrir a caixa preta.
image: https://media.licdn.com/dms/image/v2/D4D22AQG3GAx0y9kRKg/feedshare-shrink_2048_1536/B4DZhSC07PGkAw-/0/1753723130171?e=1756944000&v=beta&t=P6N61V7Ci-Qt45kuaa04eZrhGU-hDvBEhhPg9OpSVgo
tags:
  - markdown
  - blog
---

Depois de apresentar a motivação e os fundamentos da solução Harpo, vamos começar a abrir a caixa preta.

💡 O Harpo é uma solução **EVM compatível** que traz **privacidade verificável** para transações em ambientes como o Drex ou qualquer rede Ethereum-like.

A arquitetura da solução é baseada em três pilares técnicos:

---

## ⚙️ UTXO (Unspent Transaction Output)

Modelo inspirado no Bitcoin, onde cada "valor" é representado como uma saída de transação individual, facilitando o **controle de fluxo** e **anonimização**.  
Um UTXO pode ser **fungível ou não fungível** — como um carro, um imóvel ou uma nota de R$ 20,57, por exemplo.

---

## 🌳 Merkle Tree de Commitments

Em vez de publicar os UTXOs diretamente, Harpo utiliza uma **árvore de Merkle** contendo **commitments criptográficos** dos UTXOs.  
Isso garante **integridade dos dados** sem revelar seu conteúdo.

---

## ❌ Nullifiers

Quando um UTXO é gasto, um **nullifier** é publicado para impedir que ele seja reutilizado (evitando *double spending*) — sem revelar qual UTXO foi gasto.

---

## 🔐 Como funciona um ZKP (Zero-Knowledge Proof)?

ZKP permite provar que você sabe uma informação **sem revelar a informação em si**. Parece mágica? Aqui vão dois exemplos simples:

### 📦 O Cofre

Você quer provar que sabe a senha de um cofre, sem dizer qual é.  
Você entra sozinho, digita a senha, abre o cofre e sai com um objeto que só estaria lá dentro.  
Quem está do lado de fora **não viu a senha**, mas viu o objeto — prova suficiente de que você sabe a senha.

### 🌀 O Labirinto

Você está em um labirinto com duas entradas: uma leva à saída, a outra não.  
Alguém escolhe uma entrada aleatória e te pede para sair por ela.  
Se você **realmente sabe o caminho**, consegue obedecer ao desafio — **sem mostrar por onde passou**.

---

## 👉 Aplicações no Harpo

Esses princípios são aplicados para:

- Provar que um UTXO existe (Commitment na Merkle Tree)  
- Que pertence ao dono  
- Que não foi gasto antes  
- Que a soma dos valores de entrada é igual à soma dos valores de saída  

**Tudo isso sem expor valores, remetentes ou destinatários.**

---

## 🔗 Resultado

Essa arquitetura abre portas para **casos de uso com privacidade** em transações que ocorrem em redes originalmente públicas — como Ethereum e Drex — sem comprometer a auditabilidade e a conformidade regulatória.