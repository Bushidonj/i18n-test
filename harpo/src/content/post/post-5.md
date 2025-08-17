---
publishDate: 2025-08-02T00:00:00Z
title: Você confiaria num sistema onde é possível "fabricar dinheiro"?
excerpt: No mundo das CBDCs e ativos digitais, isso é inadmissível — e por isso o **Harpo** foi projetado com um princípio fundamental de segurança.
image: https://media.licdn.com/dms/image/v2/D4D22AQFGPKKdrWgZJA/feedshare-shrink_800/B4DZhWEttjHwAo-/0/1753790735650?e=1756944000&v=beta&t=prwAtl13L3egYcBaWeHDwG7Q9JkpCZVsPyTlslPQ7KU
tags:
  - markdown
  - blog
---

No mundo das **CBDCs** e **ativos digitais**, isso é inadmissível — e por isso o **Harpo** foi projetado com um princípio fundamental de segurança:  
> **A soma das entradas precisa ser igual à soma das saídas.**

---

## 📦 Swap com Conservação de Massa

Quando um ativo é transferido do ambiente público para o privado, usamos uma abordagem conhecida como **swap com conservação de massa**.  
Isso garante que **nada é criado ou perdido**, apenas **movido de forma segura e privada**.

---

## 🔐 Como funciona na prática?

Imagine que você tem um ativo num contrato **ERC-20 público**. Ao fazer o swap:

- 🔥 O ativo público é **queimado (burn)**  
- 🧾 Uma prova **ZKP** é gerada atestando:
  - Que o saldo no endereço remetente é suficiente  
  - Que o valor é positivo (> 0)  
  - Que você é realmente o proprietário  
- 🧱 Um novo **UTXO** é **mintado** no ambiente privado, com todas as garantias de integridade — **sem revelar identidade, valor ou destino**

---

## 🔄 Processo inverso: Saque

- Um **nullifier** (identificador de gasto) é publicado  
- O ativo é **mintado novamente** no ambiente público

---

## 🧭 O ponto-chave

Mesmo que os **depósitos e saques sejam visíveis**, o que acontece **dentro do ambiente privado** é completamente **opaco**, assegurando:

- ✅ Privacidade total  
- ✅ Sem perder auditabilidade

---

## 💥 Compatibilidade com EVM

Essa arquitetura torna o Harpo **compatível com contratos existentes e EVM**,  
**sem exigir mudanças drásticas na infraestrutura pública.**