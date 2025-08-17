---
publishDate: 2025-07-24T00:00:00Z
title: Harpo em Ação Transferência Privada com Segurança Criptográfica
excerpt: Se no último post exploramos o SWAP privado com provas ZK, hoje vamos mergulhar em outra operação essencial
image: https://media.licdn.com/dms/image/v2/D4D22AQHRUiHPzpUFBw/feedshare-shrink_800/B4DZhcXIbyGgAk-/0/1753896225892?e=1756944000&v=beta&t=djcCJ-4ZzztZ9-t4qol0P7FUdMgwK5Lasy7SeiE0ggg
tags:
  - markdown
  - blog
---
Se no último post exploramos o **SWAP privado com provas ZK**, hoje vamos mergulhar em outra operação essencial:  
> **A transferência entre carteiras**, onde N UTXOs de entrada são transformados em 1 ou 2 UTXOs de saída (valor transferido + troco).

Essa operação vai muito além de uma simples movimentação de saldo — ela representa uma transação **criptograficamente verificada**, com **privacidade garantida por ZKPs** e **conformidade auditável**.

---

## ⚙️ Como funciona essa transferência?

### Entradas e Saídas

- Os ativos são representados por **UTXOs** (como cédulas digitais)
- Ao transferir, você seleciona **N UTXOs de entrada** e gera:
  - 1 UTXO de saída com o valor transferido  
  - 1 UTXO de troco (opcional)  
- Tudo acontece de forma **privada**, sem revelar valor ou destinatário publicamente

---

## 🧪 Verificações feitas na transação

### 🌳 Prova de Existência

- Cada UTXO é um **commitment** na Merkle Tree privada  
- A prova ZK mostra que o UTXO existe na árvore (sem revelar qual)  
- A **raiz da Merkle Tree** é publicada na blockchain pública

### 🕰️ Histórico de Raízes

- Garante que o UTXO existia em um estado válido da árvore no passado recente  
- Evita fraudes e manipulações

### 🔑 Prova de Propriedade

- Apenas quem possui a **chave secreta** pode gastar o UTXO  
- A relação é provada via ZKP, **sem revelar a chave**

### ⚖️ Conservação de Massa

- A soma dos valores de entrada = soma dos valores de saída  
- Evita **criação ou destruição indevida** de tokens

### 🚫 Nullifier (Prevenção de Gasto Duplo)

- Cada UTXO gasto gera um **nullifier único**  
- Publicado na blockchain pública  
- Harpo verifica se o nullifier já foi usado antes de validar a transação

### 🛡️ Verificação de Bloqueio

- Se um UTXO foi **bloqueado pela autoridade**, ele não pode ser gasto  
- O circuito ZK considera isso na prova

### 📤 Auditoria Seletiva

- Harpo permite auditoria seletiva para fins de compliance  
- A ZKP garante que os dados enviados à autoridade são **consistentes com a transação original**, sem revelar segredos

---

## ✅ Resultado da Transação

- Nullifiers são adicionados à lista pública  
- Novos commitments são criados na Merkle Tree com os novos saldos  
- A transação está registrada — com **privacidade para os usuários** e **verificabilidade para as autoridades**

---

## 🔍 Compromisso com Integridade e Privacidade

No Harpo, cada transferência carrega um compromisso com a **segurança criptográfica**, a **privacidade verificável** e a **conformidade regulatória**.  
Tudo isso é possível graças à arquitetura baseada em:

> **UTXO + ZKPs + Merkle Trees + Nullifiers**

---

