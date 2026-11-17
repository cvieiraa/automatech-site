<div align="center">

# Automatech

### Site institucional da Automatech e da assistente virtual Sofia

Automação do atendimento de clínicas pelo WhatsApp: uma startup com origem em um projeto acadêmico (TCC)

<br />

[![React](https://img.shields.io/badge/React-18.3-149ECA?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Lucide](https://img.shields.io/badge/Lucide_React-0.460-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)

![Status](https://img.shields.io/badge/site_institucional-desenvolvido-0fb5aa?style=flat-square)
![Status](https://img.shields.io/badge/assistente_Sofia-em_desenvolvimento-f59e0b?style=flat-square)
![Contexto](https://img.shields.io/badge/contexto-TCC-1f3460?style=flat-square)

[Sobre](#-sobre-o-projeto) ·
[Funcionalidades](#-funcionalidades) ·
[Tecnologias](#-tecnologias-utilizadas) ·
[Arquitetura](#-arquitetura-e-organização-do-projeto) ·
[Supabase](#-integração-com-supabase) ·
[Instalação](#-instalação-e-execução) ·
[Status](#-status-do-projeto-e-próximos-passos)

</div>

---

## 📌 Apresentação

A **Automatech** é uma startup de automação voltada ao atendimento de clínicas. O projeto nasceu no ambiente acadêmico, como Trabalho de Conclusão de Curso (TCC), a partir de uma pergunta prática: *como tirar da recepção as tarefas repetitivas sem perder o cuidado com o paciente?*

A resposta proposta é a **Sofia**, uma assistente virtual para o WhatsApp da clínica, baseada em inteligência artificial, que está **em desenvolvimento**.

**Este repositório contém o site institucional da Automatech.** O site apresenta a empresa, explica a proposta da Sofia, demonstra visualmente como seria uma conversa com a assistente e oferece canais de contato (WhatsApp, e-mail e um formulário integrado ao Supabase).

> **Objetivo da solução:** automatizar as etapas repetitivas do atendimento inicial e do agendamento de consultas pelo WhatsApp, para que a equipe da clínica possa se dedicar às atividades que exigem atenção humana.

---

## 💡 Sobre o projeto

### O problema

Boa parte do dia da recepção de uma clínica é ocupada por tarefas que seguem sempre o mesmo roteiro:

- **Perguntas repetitivas**, como endereço, horário de funcionamento e convênios aceitos, que chegam várias vezes por dia.
- **Busca manual por horários**: cada pedido de consulta exige consultar a agenda, listar opções e aguardar a resposta do paciente, muitas vezes em várias conversas ao mesmo tempo.
- **Confirmações uma a uma**: confirmar e lembrar consultas manualmente consome tempo e aumenta o risco de esquecimentos e faltas.

### A proposta de solução

A Automatech propõe automatizar esse roteiro no canal que os pacientes já usam no dia a dia, o WhatsApp, por meio de uma assistente virtual configurada com as informações e o tom de voz de cada clínica.

### O papel da Sofia

A Sofia foi pensada para **trabalhar ao lado da equipe, e não no lugar dela**. Sua proposta é:

- responder às dúvidas frequentes com as informações definidas pela própria clínica;
- conduzir o paciente pelo fluxo de agendamento (especialidade → horários → pré-agendamento);
- organizar as solicitações para revisão da equipe;
- transferir a conversa para uma pessoa da recepção sempre que o paciente pedir ou o assunto exigir.

> [!IMPORTANT]
> **A Sofia está em desenvolvimento.** A solução ainda não está em uso por clínicas. As conversas exibidas no site são **demonstrações ilustrativas com dados fictícios**, e o site **não se conecta** ao WhatsApp nem a sistemas de clínicas.

---

## ✨ Funcionalidades

Funcionalidades **implementadas neste site**:

| Funcionalidade | Descrição | Onde está |
| --- | --- | --- |
| **Apresentação institucional** | Seção inicial, problema e solução, missão, visão, valores e próximos passos da Automatech. | `Hero`, `ProblemSolution`, `About` |
| **Apresentação da Sofia** | Explica o que a assistente foi pensada para fazer, com um passo a passo sincronizado à demonstração. | `SofiaSection` |
| **Demonstração visual de conversa** | Simulação animada de um agendamento no estilo de um chat de WhatsApp (solicitação → especialidade → horários → confirmação). Começa ao entrar na tela e pode ser reiniciada. | `ChatDemo` |
| **Funcionalidades e etapas da solução** | Seis recursos planejados para a Sofia e uma proposta de implantação em quatro etapas (Mapeamento, Configuração, Atendimento e Acompanhamento). | `Features`, `HowItWorks` |
| **Contato via WhatsApp** | Links `wa.me` com mensagem pré-preenchida, que funcionam no celular, no WhatsApp Desktop e no WhatsApp Web. | `lib/contact.ts` |
| **Contato via e-mail** | Link que abre a tela de composição do Gmail já com o destinatário, além de um botão para copiar o endereço. | `lib/contact.ts`, `Contact` |
| **Formulário de contato** | Envio de dúvidas, sugestões e feedbacks gravados na tabela `mensagens_contato` do Supabase, com validação, consentimento LGPD e alternativa via Gmail caso o envio falhe. | `Contact`, `lib/supabase.ts` |
| **Navegação responsiva** | Cabeçalho fixo com menu móvel, rolagem suave entre seções e animações de entrada. | `Header`, `Reveal` |

---

## 🛠 Tecnologias utilizadas

As versões abaixo foram verificadas no `package.json` e nos pacotes instalados.

### Aplicação

| Tecnologia | Versão | Finalidade no projeto |
| --- | --- | --- |
| [**React**](https://react.dev/) | 18.3 | Biblioteca para construção da interface em componentes. Cada seção do site é um componente independente, e os estados (demonstração do chat, menu móvel, formulário) são controlados com hooks como `useState` e `useEffect`. |
| [**TypeScript**](https://www.typescriptlang.org/) | 5.6 | Superset do JavaScript com tipagem estática. Todo o código-fonte está em `.tsx`/`.ts` com modo `strict`, o que evita erros como enviar ao banco um campo com tipo incorreto (ver o tipo `MensagemContato`). O código é convertido em JavaScript no build. |
| [**Vite**](https://vite.dev/) | 6 | Ferramenta de build e servidor de desenvolvimento, com recarregamento rápido. Também expõe as variáveis de ambiente `VITE_*` para a aplicação. |
| [**Tailwind CSS**](https://tailwindcss.com/) | 4 | Framework de CSS utilitário. Integrado via plugin `@tailwindcss/vite`; o tema (cores, fontes e animações) é definido diretamente no CSS com a diretiva `@theme`, sem arquivo `tailwind.config`. |
| [**Lucide React**](https://lucide.dev/) | 0.460 | Biblioteca de ícones SVG usada em todo o site (cards, botões e indicadores do chat). |
| [**Supabase**](https://supabase.com/) | — | Backend como serviço baseado em PostgreSQL. Armazena as mensagens do formulário de contato. O acesso é feito pela **API REST** do Supabase com `fetch`, sem SDK adicional. |
| **HTML5** | — | Estrutura base em `index.html` (idioma `pt-BR`, metadados e ponto de montagem do React) e marcação semântica nos componentes (`header`, `main`, `section`, `nav`, `footer`, `ol`, `dl`). |
| **CSS3** | — | Estilos globais em `src/index.css`: animações com `@keyframes`, transições, gradientes, além de suporte a `prefers-reduced-motion`. |
| [**Google Fonts**](https://fonts.google.com/) | — | Fontes [Inter](https://fonts.google.com/specimen/Inter) (textos) e [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (títulos). |

### Ferramentas de desenvolvimento

| Ferramenta | Finalidade |
| --- | --- |
| [**Node.js**](https://nodejs.org/) e **npm** | Execução dos scripts e gerenciamento das dependências (`package-lock.json`). |
| [**@vitejs/plugin-react**](https://github.com/vitejs/vite-plugin-react) | Suporte a JSX/TSX e Fast Refresh no Vite. |
| [**Vercel**](https://vercel.com/) | Plataforma de hospedagem do site (ver [Deploy](#-deploy)). |
| [**Git**](https://git-scm.com/) e [**GitHub**](https://github.com/) | Controle de versão e hospedagem do código-fonte. |

---

## 🧱 Arquitetura e organização do projeto

O site é uma **aplicação de página única (SPA)** construída com React. Não há roteamento entre páginas: as seções ficam empilhadas em `App.tsx` e a navegação acontece por âncoras (`#sofia`, `#contato` etc.).

### Estrutura de pastas

```
automatech-site/
├── index.html                 # HTML base: metadados, fontes e ponto de montagem (#root)
├── package.json               # dependências e scripts (dev, build, preview)
├── vite.config.ts             # plugins do Vite: React e Tailwind CSS
├── tsconfig.json              # configuração do TypeScript (modo strict)
├── .env.example               # modelo das variáveis de ambiente (sem valores)
├── public/
│   └── favicon.svg            # ícone do site
└── src/
    ├── main.tsx               # ponto de entrada: monta o <App /> no #root
    ├── App.tsx                # composição das seções da página
    ├── index.css              # tema (cores, fontes, animações) e estilos base
    ├── vite-env.d.ts          # tipagem das variáveis de ambiente VITE_*
    ├── components/
    │   ├── Header.tsx         # cabeçalho fixo, navegação e menu móvel
    │   ├── Hero.tsx           # seção inicial com prévia visual da conversa
    │   ├── SofiaSection.tsx   # apresentação da Sofia + etapas sincronizadas ao chat
    │   ├── ChatDemo.tsx       # demonstração animada da conversa (dados fictícios)
    │   ├── ProblemSolution.tsx# comparação entre o problema e a solução proposta
    │   ├── Features.tsx       # funcionalidades planejadas para a Sofia
    │   ├── HowItWorks.tsx     # etapas de implantação da solução
    │   ├── About.tsx          # missão, visão, valores e próximos passos
    │   ├── Contact.tsx        # canais de contato + formulário (Supabase)
    │   ├── Footer.tsx         # rodapé com navegação e contatos
    │   ├── Logo.tsx           # logotipo em texto (versões clara e escura)
    │   ├── SectionHeading.tsx # título padrão das seções
    │   └── Reveal.tsx         # animação de entrada ao rolar a página
    └── lib/
        ├── contact.ts         # contatos oficiais e geração de links (WhatsApp, Gmail, mailto)
        └── supabase.ts        # envio do formulário para a tabela mensagens_contato
```

### Separação de responsabilidades

O projeto é organizado em três camadas:

| Camada | Local | Responsabilidade |
| --- | --- | --- |
| **Componentes** | `src/components/` | Interface e comportamento visual. Cada arquivo corresponde a uma seção da página ou a um componente reutilizável (`Reveal`, `SectionHeading`, `Logo`). |
| **Estilos** | `src/index.css` + classes Tailwind | O tema (paleta, fontes e animações) é centralizado em `@theme`. Classes reutilizáveis, como `.btn-primary`, `.card`, `.field` e `.container-x`, ficam em `@layer components`. Os componentes usam classes utilitárias do Tailwind diretamente no JSX. |
| **Integrações** | `src/lib/` | Código sem interface. `contact.ts` é a **fonte única** dos contatos oficiais: todos os links de WhatsApp e e-mail do site usam essas constantes. `supabase.ts` isola a comunicação com o banco de dados. |

### Componentes principais

- **`ChatDemo`**: o roteiro da conversa é um array de mensagens tipadas (paciente, Sofia ou cartão de confirmação). A animação começa apenas quando o componente aparece na tela (`IntersectionObserver`), simula o indicador "digitando…" e informa a etapa atual ao componente pai pela prop `onStageChange`.
- **`SofiaSection`**: recebe a etapa atual do `ChatDemo` e destaca o passo correspondente na lista ao lado, conectando texto e demonstração.
- **`Contact`**: valida os dados no navegador, chama `enviarMensagemContato()` e controla os estados do envio (`idle`, `loading`, `success`, `validation`, `error`). Em caso de falha, oferece um link do Gmail com a mensagem já preenchida.
- **`Reveal`**: componente genérico que aplica uma animação suave de entrada aos elementos conforme a página é rolada.

---

## 🗄 Integração com Supabase

### Como funciona o formulário de contato

```
Visitante preenche o formulário
        │
        ▼
Validação no navegador (Contact.tsx)
        │
        ▼
POST {VITE_SUPABASE_URL}/rest/v1/mensagens_contato   (lib/supabase.ts)
  headers: apikey = chave publicável · Prefer: return=minimal
        │
        ▼
Supabase aplica RLS + restrições CHECK e grava o registro
        │
        ▼
A equipe consulta as mensagens no painel do Supabase
```

1. O visitante informa nome, e-mail ou WhatsApp para resposta, assunto e mensagem, e marca o consentimento de uso dos dados (LGPD).
2. O componente `Contact` valida os campos antes do envio.
3. A função `enviarMensagemContato()` envia os dados à API REST do Supabase usando **apenas a chave publicável**. O cabeçalho `Prefer: return=minimal` evita pedir os dados de volta, já que visitantes não têm permissão de leitura.
4. Se o envio falhar, o usuário vê uma mensagem de erro e um botão para enviar o mesmo conteúdo pelo Gmail.

### Tabela `public.mensagens_contato`

Campos enviados pelo site:

| Coluna | Tipo (TypeScript) | Regras de validação |
| --- | --- | --- |
| `nome` | `string` | 2 a 100 caracteres |
| `contato` | `string` | 5 a 150 caracteres; e-mail válido ou telefone com 10 a 13 dígitos |
| `assunto` | `string` | Um dos valores: `Dúvida`, `Sugestão`, `Feedback sobre o site`, `Outro assunto` |
| `mensagem` | `string` | 10 a 2000 caracteres |
| `consentimento_lgpd` | `boolean` | Deve ser verdadeiro para o envio |

As regras são aplicadas **em duas camadas**: no formulário, para dar retorno imediato ao usuário, e no próprio banco, por meio de restrições `CHECK`, que garantem a integridade mesmo se alguém chamar a API diretamente.

### RLS e permissões de acesso

A tabela usa **Row Level Security (RLS)**, recurso do PostgreSQL que controla o acesso por regras definidas no banco:

| Papel | INSERT | SELECT | UPDATE | DELETE |
| --- | :---: | :---: | :---: | :---: |
| `anon` (visitante do site) | ✅ apenas nas 5 colunas acima | ❌ | ❌ | ❌ |

Na prática, o site consegue **apenas enviar** mensagens. Ninguém consegue ler, alterar ou apagar mensagens usando a chave pública. A leitura é feita pela equipe no painel do Supabase.

> [!NOTE]
> A estrutura da tabela, as restrições e as políticas de RLS são gerenciadas diretamente no projeto Supabase e não estão versionadas como migrações neste repositório.

### Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `VITE_SUPABASE_URL` | URL do projeto Supabase (`https://<id-do-projeto>.supabase.co`) |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Chave **publicável** do projeto (`sb_publishable_...`) |

Os dois valores ficam em **Project Settings → API Keys** no painel do Supabase. Se não estiverem configurados, o site funciona normalmente, mas o formulário exibe um erro ao enviar e oferece a alternativa pelo Gmail.

### Cuidados com chaves e credenciais

> [!WARNING]
> Toda variável com prefixo `VITE_` é **incluída no código enviado ao navegador** e pode ser vista por qualquer visitante.
>
> - Use **somente** a chave publicável (`sb_publishable_...`), que foi feita para ser exposta e depende do RLS para proteger os dados.
> - **Nunca** use a chave `service_role` / secreta nem a senha do banco no front-end: elas ignoram o RLS e dão acesso total ao banco.

---

## 🎨 Identidade visual

### Proposta visual

O visual busca transmitir **confiança, tecnologia e cuidado**, adequados ao contexto da saúde. O azul-marinho é usado como cor de base, em seções escuras que transmitem solidez. O turquesa aparece como destaque em botões, ícones e indicadores de progresso, remetendo a saúde e tecnologia. A interface é limpa, com cards, bastante espaço em branco e hierarquia tipográfica clara.

### Paleta de cores

Definida em `@theme` no arquivo `src/index.css`:

| Cor | Token | Hex | Uso principal |
| --- | --- | --- | --- |
| ![#060f22](https://img.shields.io/badge/-%20%20%20-060f22?style=flat-square) | `navy-950` | `#060f22` | Fundo do topo, da seção "Como funciona" e do rodapé |
| ![#0b1a36](https://img.shields.io/badge/-%20%20%20-0b1a36?style=flat-square) | `navy-900` | `#0b1a36` | Texto principal, cards escuros e botão escuro |
| ![#2c4677](https://img.shields.io/badge/-%20%20%20-2c4677?style=flat-square) | `navy-600` | `#2c4677` | Textos secundários |
| ![#f1f5fb](https://img.shields.io/badge/-%20%20%20-f1f5fb?style=flat-square) | `navy-50` | `#f1f5fb` | Fundos claros alternados entre seções |
| ![#22d3c5](https://img.shields.io/badge/-%20%20%20-22d3c5?style=flat-square) | `teal-400` | `#22d3c5` | Cor de destaque: botões principais e avatar da Sofia |
| ![#5fe4d6](https://img.shields.io/badge/-%20%20%20-5fe4d6?style=flat-square) | `teal-300` | `#5fe4d6` | Destaques sobre fundos escuros |
| ![#0e7370](https://img.shields.io/badge/-%20%20%20-0e7370?style=flat-square) | `teal-700` | `#0e7370` | Destaques sobre fundos claros (contraste adequado) |

**Tipografia:** *Plus Jakarta Sans* nos títulos e *Inter* nos textos.

### Responsividade e experiência do usuário

- **Layout responsivo** (mobile-first) com breakpoints do Tailwind: grades que passam de uma para duas ou quatro colunas e menu adaptado para telas pequenas.
- **Acessibilidade**: link "Pular para o conteúdo", foco visível em links e botões, atributos `aria-*` (menu, chat ao vivo, alertas do formulário) e textos alternativos para leitores de tela.
- **Movimento consciente**: animações de entrada e do chat são reduzidas automaticamente quando o sistema do usuário ativa `prefers-reduced-motion`.
- **Transparência**: avisos de "demonstração ilustrativa" e "dados fictícios" aparecem junto às simulações, deixando claro o estágio atual da solução.

---

## 🚀 Instalação e execução

### Pré-requisitos

- [Node.js](https://nodejs.org/) **18 ou superior** (exigido pelo Vite 6) e npm
- [Git](https://git-scm.com/)
- (Opcional) Um projeto no [Supabase](https://supabase.com/) com a tabela `mensagens_contato`, para testar o formulário

### 1. Clonar o repositório

```bash
git clone https://github.com/<usuario>/automatech-site.git
cd automatech-site
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Configurar o arquivo `.env.local`

Copie o modelo de variáveis de ambiente:

```bash
cp .env.example .env.local
```

Preencha com os dados do seu projeto Supabase:

```env
VITE_SUPABASE_URL=https://<id-do-projeto>.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_...
```

> O `.env.local` está no `.gitignore` e **não deve ser versionado**.

### 4. Executar localmente

```bash
npm run dev
```

O site ficará disponível em `http://localhost:5173`.

### 5. Gerar e visualizar a versão de produção

```bash
npm run build     # verifica os tipos (tsc -b) e gera os arquivos otimizados em dist/
npm run preview   # serve localmente o conteúdo de dist/ para conferência
```

### Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com recarregamento automático |
| `npm run build` | Checagem de tipos com TypeScript + build de produção com Vite |
| `npm run preview` | Pré-visualiza o build de produção |

---

## ☁️ Deploy

O projeto é um site estático (HTML, CSS e JavaScript gerados em `dist/`) e pode ser hospedado na [**Vercel**](https://vercel.com/), plataforma à qual este projeto está vinculado.

1. Importe o repositório na Vercel. O framework **Vite** é detectado automaticamente:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
2. Em **Settings → Environment Variables**, cadastre as mesmas variáveis do `.env.local`:

   | Variável | Ambiente |
   | --- | --- |
   | `VITE_SUPABASE_URL` | Production (e Preview, se desejado) |
   | `VITE_SUPABASE_PUBLISHABLE_KEY` | Production (e Preview, se desejado) |

3. Faça o deploy. Como as variáveis `VITE_` são incorporadas **durante o build**, qualquer alteração nelas exige um novo deploy.

**Site publicado:** `<adicionar a URL de produção>`

---

## 🔒 Segurança

- **Variáveis de ambiente protegidas do versionamento:** o `.gitignore` ignora `.env*` e `*.local` (exceto o modelo `.env.example`, que não contém valores), evitando que credenciais sejam publicadas no repositório.
- **Somente chave publicável no front-end:** o código usa exclusivamente `VITE_SUPABASE_PUBLISHABLE_KEY`. Chaves secretas e a senha do banco nunca fazem parte da aplicação.
- **RLS no Supabase:** visitantes podem apenas **inserir** mensagens, e somente nas colunas permitidas. Leitura, edição e exclusão são bloqueadas para o papel público.
- **Validação em duas camadas:** regras no formulário e restrições `CHECK` no banco.
- **Privacidade (LGPD):** o envio exige o consentimento explícito do usuário, e o formulário informa a finalidade e o local de armazenamento dos dados.
- **Links externos seguros:** links que abrem em nova aba usam `rel="noopener noreferrer"`.

> [!CAUTION]
> Credenciais privadas (chave `service_role`/secreta, senha do banco, tokens de acesso) **nunca devem ser publicadas**, seja no código, em issues, em commits ou em capturas de tela. Caso uma delas seja exposta, gere uma nova chave imediatamente no painel do Supabase.

---

## 📍 Status do projeto e próximos passos

### ✅ Implementado (este repositório)

- [x] Site institucional completo e responsivo
- [x] Apresentação da Automatech, da proposta e da assistente Sofia
- [x] Demonstração animada de uma conversa de agendamento (dados fictícios)
- [x] Seções de funcionalidades planejadas e etapas de implantação
- [x] Contato por WhatsApp (`wa.me`) e e-mail (Gmail)
- [x] Formulário de contato integrado ao Supabase com RLS e consentimento LGPD

### 🚧 Em desenvolvimento (solução Sofia)

As funcionalidades abaixo fazem parte da proposta da Sofia e **ainda não estão concluídas**:

- [ ] Integração com a API oficial do **WhatsApp Business** para conversas reais
- [ ] **Integração com agendas** para consulta de horários direto do sistema da clínica
- [ ] **Adequação à LGPD** no tratamento dos dados de pacientes
- [ ] Recursos planejados da assistente: agendamento guiado, respostas a dúvidas frequentes, lembretes e confirmações, encaminhamento para atendimento humano e organização das solicitações

---

## 🎓 Equipe e contexto acadêmico

A Automatech foi desenvolvida no contexto acadêmico, como Trabalho de Conclusão de Curso, e evoluiu para a proposta de uma startup.

| Item | Informação |
| --- | --- |
| Instituição | `<preencher>` |
| Curso | `<preencher>` |
| Período / ano | `<preencher>` |
| Orientador(a) | `<preencher>` |

### Integrantes

| Nome | Função no projeto | GitHub / LinkedIn |
| --- | --- | --- |
| `<preencher>` | `<preencher>` | `<preencher>` |
| `<preencher>` | `<preencher>` | `<preencher>` |

### Contato

- **WhatsApp:** [+55 61 99661-9403](https://wa.me/5561996619403)
- **E-mail:** [automatechn8n@gmail.com](mailto:automatechn8n@gmail.com)

---

<div align="center">

<sub>As conversas exibidas no site são demonstrações ilustrativas com dados fictícios. A assistente virtual Sofia está em desenvolvimento.</sub>

<br />

<sub>© Automatech · Startup com origem em projeto acadêmico</sub>

</div>
