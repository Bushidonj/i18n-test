# Guia Completo de Internacionalização (i18n) no Qwik

## Visão Geral

Este documento fornece um guia detalhado para implementar um sistema de internacionalização (i18n) em aplicações Qwik, baseado no repositório de referência. A solução utiliza o pacote `@angular/localize` adaptado para o Qwik.

## Estrutura do Projeto

```
src/
├── components/
│   └── header/          # Componente de cabeçalho com seletor de idioma
├── locale/              # Arquivos de tradução
│   ├── message.en.json  # Traduções em inglês
│   ├── message.sk.json  # Traduções em eslovaco
│   ├── message.fr.json  # Traduções em francês
│   ├── message.sp.json  # Traduções em espanhol
│   └── message.pt-br.json # Traduções em português brasileiro
├── routes/
│   └── [...locale]/     # Roteamento dinâmico para suporte a múltiplos idiomas
│       ├── index.tsx    # Página inicial
│       ├── blog/        # Página de blog
│       └── layout.tsx   # Layout com configuração de roteamento
├── i18n.ts             # Configuração principal do i18n
└── root.tsx            # Ponto de entrada da aplicação
```

## Configuração Detalhada dos Arquivos

### 1. `root.tsx`
**Localização**: `/src/root.tsx`
**Propósito**: Ponto de entrada principal da aplicação que configura o provedor Qwik City e inicializa o sistema de i18n.

```tsx
import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";
import "./global.css";
import { useI18n } from "./i18n";

export default component$(() => {
  // Inicializa o sistema de i18n
  useI18n();
  
  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
```

**Pontos Importantes**:
- Chama `useI18n()` para inicializar o sistema de internacionalização
- Fornece a estrutura base do documento HTML
- Inclui o `RouterOutlet` para renderização das rotas

### 2. `i18n.ts`
**Localização**: `/src/i18n.ts`
**Propósito**: Configuração central do sistema de internacionalização.

```typescript
import "@angular/localize/init";
import { loadTranslations } from "@angular/localize";
import { getLocale, withLocale, useOnDocument, $ } from "@builder.io/qwik";
import type { RenderOptions } from "@builder.io/qwik/server";

// 1. Importar todos os arquivos de tradução
import EN from "./locale/message.en.json";
import SK from "./locale/message.sk.json";
import FR from "./locale/message.fr.json";
import SP from "./locale/message.sp.json";
import PTBR from "./locale/message.pt-br.json";

// 2. Definir idioma padrão
const defaultLocale = "sk";

// 3. Função para carregar traduções
export function initTranslations() {
  console.log("  ➜  Loading translations...");
  [SK, EN, FR, SP, PTBR].forEach(({ translations, locale }) => {
    withLocale(locale, () => loadTranslations(translations));
  });
}

// 4. Configuração do $localize para múltiplos idiomas
const $localizeFn = $localize as any as {
  TRANSLATIONS: Record<string, any>;
  TRANSLATION_BY_LOCALE: Map<string, Record<string, any>>;
};

if (!$localizeFn.TRANSLATION_BY_LOCALE) {
  $localizeFn.TRANSLATION_BY_LOCALE = new Map([["", {}]]);
  Object.defineProperty($localizeFn, "TRANSLATIONS", {
    get: function () {
      const locale = getLocale();
      let translations = this.TRANSLATION_BY_LOCALE.get(locale);
      if (!translations) {
        this.TRANSLATION_BY_LOCALE.set(locale, (translations = {}));
      }
      return translations;
    },
  });
}

// 5. Função para extrair idioma da requisição
export function extractLang(request: Request, url: URL): string {
  let locale = url.searchParams.get("locale") || undefined;
  if (locale) {
    url.searchParams.delete("locale");
    locale = validateLocale(locale);
    if (locale) return locale;
  }
  
  const locales = request.headers.get("accept-language")?.split(",");
  if (locales) {
    for (const entry of locales) {
      locale = validateLocale(entry);
      if (locale) return locale;
    }
  }

  return defaultLocale;
}

// 6. Hook para uso nos componentes
export function useI18n() {
  if (import.meta.env.DEV) {
    useOnDocument("qinit", $(initTranslations));
  }
}
```

**Configurações Principais**:
- Importação de todos os arquivos de tradução
- Definição do idioma padrão
- Configuração do sistema de carregamento de traduções
- Lógica de detecção de idioma
- Hook para uso nos componentes

### 3. `layout.tsx` (Roteamento)
**Localização**: `/src/routes/[...locale]/layout.tsx`
**Propósito**: Configura o roteamento baseado em localização.

```tsx
import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";
import type { RequestHandler } from "@builder.io/qwik-city";
import { extractLang } from "~/i18n";

// 1. Lista de idiomas suportados
const locales = new Set(["en", "fr", "sk", "sp", "pt-br"]);

// 2. Manipulador de requisição para roteamento
export const onGet: RequestHandler = async ({
  request,
  url,
  redirect,
  pathname,
  params,
  locale,
  cacheControl,
}) => {
  // Verifica se o locale da URL é suportado
  if (locales.has(params.locale)) {
    locale(params.locale);
  } else {
    // Redireciona para o idioma detectado
    const guessedLocale = extractLang(request, url);
    let path;
    
    if (params.locale === "__" || /^[a-z][a-z](-[a-z][a-z])?/i.test(params.locale)) {
      path = "/" + pathname.split("/").slice(2).join("/");
    } else {
      path = pathname;
    }
    throw redirect(301, `/${guessedLocale}${path}${url.search}`);
  }

  // Configuração de cache
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7, // 1 semana
    maxAge: 5, // 5 segundos
  });
};

// 3. Componente de layout
export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
    </>
  );
});
```

**Funcionalidades**:
- Define os idiomas suportados
- Gerencia redirecionamentos com base no idioma
- Configura políticas de cache
- Fornece um layout comum para todas as páginas

### 4. `header.tsx` (Componente de Navegação)
**Localização**: `/src/components/header/header.tsx`
**Propósito**: Barra de navegação com seletor de idioma.

```tsx
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.css?inline";
import { Link, RouteLocation, useLocation } from "@builder.io/qwik-city";

// Componente para links de idioma
const LocaleLink = ({
  locale,
  location,
}: {
  locale: string;
  location: RouteLocation;
}) => (
  <li>
    {locale === location.params.locale ? (
      <div>{locale}</div>
    ) : (
      <a href={`/${locale}${location.url.pathname.slice(3)}${location.url.search}`}>
        {locale}
      </a>
    )}
  </li>
);

export default component$(() => {
  const location = useLocation();
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <a href="https://qwik.builder.io/" target="_blank">
          <QwikLogo />
        </a>
      </div>
      <ul>
        <LocaleLink locale="en" location={location} />
        <LocaleLink locale="fr" location={location} />
        <LocaleLink locale="sk" location={location} />
        <LocaleLink locale="sp" location={location} />
        <LocaleLink locale="pt-br" location={location} />
        <li><span>|</span></li>
        <li>
          <Link href={$localize`/__/blog`}>{$localize`Blog`}</Link>
        </li>
      </ul>
    </header>
  );
});
```

**Características**:
- Seletor de idioma interativo
- Links de navegação localizados
- Estilização com módulos CSS
- Uso do `$localize` para textos traduzíveis

### 5. Arquivos de Tradução
**Localização**: `/src/locale/message.[idioma].json`
**Estrutura**:

```json
{
  "locale": "pt-br",
  "translations": {
    "ID_ÚNICO": "Texto traduzido",
    "OUTRO_ID": "Texto com {VARIÁVEL}"
  }
}
```

**Exemplo Prático** (`message.pt-br.json`):
```json
{
  "locale": "pt-br",
  "translations": {
    "7751010942038334793": "Blog",
    "7683568525587144503": "/pt-br/blog",
    "8399228546444251220": "Exemplo de Contador",
    "6030848919533485936": "Bem vindo ao blog",
    "2023484548631819319": "Olá Mundo",
    "3957345415493603866": "/pt-br/blog/{$PH}/",
    "4608414764123111425": "contagem: {$PH}",
    "2954233255021387859": "incrementar"
  }
}
```

### Sobre os IDs Numéricos nas Traduções

Os IDs numéricos longos (como `"8399228546444251220"`) são gerados automaticamente pelo sistema de build do Qwik e servem como identificadores únicos para cada string traduzível. Aqui está o que você precisa saber:

1. **Geração dos IDs**:
   - São gerados automaticamente durante o build
   - Baseados em um hash do conteúdo original em inglês
   - Garantem que cada string traduzível tenha um ID único e consistente

2. **Por que usar IDs numéricos?**
   - Estabilidade: Se o texto em inglês mudar, mas o significado permanecer o mesmo, o ID pode permanecer o mesmo
   - Desempenho: Comparação numérica é mais rápida que comparação de strings
   - Tamanho do bundle: Números ocupam menos espaço que strings longas

3. **Como trabalhar com esses IDs**:
   - **Adicionar nova tradução**: 
     1. Adicione a string em inglês no código com `$localize`
     2. Execute o build do projeto
     3. O sistema gerará um ID para a nova string
     4. Adicione a tradução no arquivo correspondente ao idioma

   - **Localizar uma string para traduzir**:
     ```typescript
     // No seu código:
     $localize`Texto que precisa ser traduzido`
     
     // Após o build, procure no console por mensagens como:
     // "No translation found for 'Texto que precisa ser traduzido' in 'pt-br'"
     // O ID gerado será mostrado na mensagem
     ```

4. **Dicas para manutenção**:
   - Mantenha um arquivo de referência em inglês atualizado
   - Use ferramentas de extração de strings para gerenciar as traduções
   - Documente strings com contexto para os tradutores quando necessário

5. **IDs em diferentes ambientes**:
   - Em desenvolvimento: IDs podem mudar frequentemente
   - Em produção: Mantenha os IDs consistentes entre os builds para evitar problemas de cache

6. **Personalização (avançado)**:
   Você pode personalizar a geração de IDs criando um plugin de build, mas isso é raramente necessário.

## Guia de Implementação Passo a Passo

### 1. Configuração Inicial

1. Instale as dependências necessárias:
   ```bash
   npm install @angular/localize
   ```

2. Crie a estrutura de pastas:
   ```
   src/
   ├── components/
   │   └── header/
   ├── locale/
   └── routes/
       └── [...locale]/
   ```

### 2. Configuração dos Arquivos Principais

1. **`root.tsx`**: Adicione o hook `useI18n()`
2. **`i18n.ts`**: Configure com seus idiomas
3. **`layout.tsx`**: Implemente o roteamento
4. **`header.tsx`**: Adicione a navegação
5. **Arquivos de tradução**: Crie um para cada idioma

### 3. Uso nos Componentes

```tsx
// Importe o $localize
import { $localize } from "@builder.io/qwik";

// Uso básico
<h1>{$localize`Título da Página`}</h1>

// Com variáveis
<p>{$localize`Contagem: ${count}`}</p>

// Em links
<Link href={$localize`/__/rota`}>{$localize`Texto do Link`}</Link>
```

## Boas Práticas e Dicas

1. **Gerenciamento de IDs**: Use ferramentas para gerenciar os IDs de tradução
2. **Validação**: Valide os arquivos de tradução em CI/CD
3. **Extração**: Considere automatizar a extração de strings para tradução
4. **Testes**: Teste todos os idiomas suportados
5. **Performance**: Carregue apenas os idiomas necessários

## Solução de Problemas Comuns

1. **Traduções não carregando**:
   - Verifique se o idioma está na lista de suportados
   - Confirme se o arquivo de tradução está no formato correto
   - Verifique os logs do navegador

2. **Erros de roteamento**:
   - Confira se o parâmetro `locale` está sendo definido corretamente
   - Verifique as regras de redirecionamento

3. **Problemas de cache**:
   - Limpe o cache do navegador
   - Verifique as configurações de cache no servidor
