# 🗺️ Documentação de Rotas - OPALBYTES EAD

Este documento detalha todas as rotas disponíveis em cada aplicação do monorepo.

---

## 📱 1. Portal Público (`portal-publico`)

**Porta padrão:** 4200
**Comando:** `ng serve portal-publico`

### Rotas Disponíveis

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `HomeComponent` | Página inicial com apresentação da plataforma |
| `/catalogo` | `CatalogoComponent` | Catálogo completo de cursos disponíveis |
| `/pre-inscricao` | `PreInscricaoComponent` | Formulário de pré-inscrição |

### Detalhes das Páginas

#### **Home** - `/`
- ✨ Página de boas-vindas
- 🎯 Links para catálogo e pré-inscrição
- 📍 Arquivo: `projects/portal-publico/src/app/pages/home/home.component.ts`

#### **Catálogo** - `/catalogo`
- 📚 Lista de cursos disponíveis
- 📊 Informações: nome, descrição, carga horária
- 🔙 Link para voltar à home
- 📍 Arquivo: `projects/portal-publico/src/app/pages/catalogo/catalogo.component.ts`

**Cursos de Exemplo:**
- Introdução ao Angular (40h)
- TypeScript Avançado (30h)
- Arquitetura de Software (60h)

#### **Pré-inscrição** - `/pre-inscricao`
- 📝 Formulário com validação
- 📋 Campos: nome, e-mail, telefone, curso
- ✅ Validação de formulário reativa
- 📍 Arquivo: `projects/portal-publico/src/app/pages/pre-inscricao/pre-inscricao.component.ts`

### Como Testar

```bash
# Servir a aplicação
ng serve portal-publico

# Acessar no navegador
# http://localhost:4200           - Home
# http://localhost:4200/catalogo  - Catálogo
# http://localhost:4200/pre-inscricao - Pré-inscrição
```

---

## 🎓 2. Aluno PWA (`aluno-pwa`)

**Porta padrão:** 4201 (sugerida)
**Comando:** `ng serve aluno-pwa --port 4201`
**PWA:** ✅ Configurado com Service Worker

### Rotas Disponíveis

| Rota | Componente | Descrição | Acesso |
|------|-----------|-----------|--------|
| `/` | *redirect* | Redireciona para `/login` | Público |
| `/login` | `LoginComponent` | Página de autenticação | Público |
| `/dashboard` | `DashboardComponent` | Dashboard principal do aluno | Protegido |
| `/curso` | `CursoVideoComponent` | Player de vídeo com progresso | Protegido |
| `/avaliacao` | `AvaliacaoComponent` | Listagem e realização de avaliações | Protegido |
| `/tutoria` | `TutoriaComponent` | Sistema de mensagens com tutores | Protegido |

### Detalhes das Páginas

#### **Login** - `/login`
- 🔐 Formulário de autenticação
- ✉️ Campos: e-mail e senha
- 🎭 **DEMO:** aceita qualquer e-mail/senha
- ➡️ Redireciona para `/dashboard` após login
- 📍 Arquivo: `projects/aluno-pwa/src/app/features/auth/login.component.ts`

#### **Dashboard** - `/dashboard`
- 🏠 Página principal do aluno
- 📊 Cards com métricas:
  - Progresso geral (60%)
  - Próxima avaliação
  - Mensagens do tutor (2 novas)
  - Tempo de estudo semanal
- 📚 Cursos em andamento
- 🧭 Menu de navegação
- 📍 Arquivo: `projects/aluno-pwa/src/app/features/dashboard/dashboard.component.ts`

**Menu de Navegação:**
- 🏠 Início → `/dashboard`
- 📚 Meus Cursos → `/curso`
- 📝 Avaliações → `/avaliacao`
- 💬 Tutoria → `/tutoria`

#### **Curso** - `/curso`
- 🎬 Player de vídeo (componente `VideoPlayer` da lib `@opalbytes/feature-video-player`)
- 📊 Registro de progresso via `CursoService`
- 🔄 Usa libs compartilhadas: `shared/data-access`, `shared/models`
- 📍 Arquivo: `projects/aluno-pwa/src/app/features/curso/video.component.ts`

**Exemplo de Importações:**
```typescript
import { CursoService } from '@opalbytes/shared/data-access';
import { Curso } from '@opalbytes/shared/models';
import { VideoPlayer } from '@opalbytes/feature-video-player';
```

#### **Avaliação** - `/avaliacao`
- 📝 Lista de avaliações disponíveis
- 🎯 Status: Disponível, Concluída, Bloqueada
- 📊 Informações: questões, duração, nota
- ✅ Notas de avaliações concluídas
- 📍 Arquivo: `projects/aluno-pwa/src/app/features/avaliacao/avaliacao.component.ts`

**Exemplo de Avaliações:**
- ✅ Introdução ao Angular - Concluída (Nota: 8.5)
- 🟢 TypeScript Avançado - Disponível
- 🔒 Arquitetura de Software - Bloqueada

#### **Tutoria** - `/tutoria`
- 💬 Sistema de mensagens em tempo real
- 👥 Lista de conversas com tutores
- 📬 Badge com mensagens não lidas
- ✍️ Envio de mensagens
- 📍 Arquivo: `projects/aluno-pwa/src/app/features/tutoria/tutoria.component.ts`

**Features:**
- Chat em tempo real
- Histórico de conversas
- Notificações de mensagens não lidas

### Como Testar

```bash
# Servir a aplicação PWA
ng serve aluno-pwa --port 4201

# Acessar no navegador
# http://localhost:4201              - Redireciona para login
# http://localhost:4201/login        - Fazer login (qualquer credencial)
# http://localhost:4201/dashboard    - Dashboard principal
# http://localhost:4201/curso        - Player de vídeo
# http://localhost:4201/avaliacao    - Avaliações
# http://localhost:4201/tutoria      - Mensagens
```

### Build PWA (Production)

```bash
# Build de produção (necessário para PWA funcionar)
ng build aluno-pwa --configuration=production

# Servir build de produção
npx http-server dist/aluno-pwa -p 8080

# Acessar: http://localhost:8080
# O Service Worker só funciona em HTTPS ou localhost
```

---

## 🔧 3. Admin Dashboard (`admin-dashboard`)

**Porta padrão:** 4202 (sugerida)
**Comando:** `ng serve admin-dashboard --port 4202`

### Rotas Disponíveis

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | *redirect* | Redireciona para `/dashboard` |
| `/dashboard` | `AdminDashboardComponent` | Dashboard administrativo |
| `/cursos` | `GestaoCursosComponent` | Gestão de cursos |
| `/alunos` | `GestaoAlunosComponent` | Gestão de alunos |
| `/relatorios` | `RelatoriosComponent` | Relatórios e analytics |

### Detalhes das Páginas

#### **Dashboard** - `/dashboard`
- 📊 Visão geral do sistema
- 📈 Métricas principais:
  - 👥 Total de Alunos: 1,234 (+12%)
  - 📚 Cursos Ativos: 45
  - ✅ Certificados Emitidos: 567 (+8%)
  - ⏱️ Horas Estudadas: 12,456 (+15%)
- 📉 Gráficos de evolução
- 🔔 Atividades recentes
- 🧭 Sidebar com navegação principal
- 📍 Arquivo: `projects/admin-dashboard/src/app/features/dashboard/admin-dashboard.component.ts`

**Menu Lateral:**
- 📊 Dashboard → `/dashboard`
- 📚 Gestão de Cursos → `/cursos`
- 👥 Gestão de Alunos → `/alunos`
- 📈 Relatórios → `/relatorios`

#### **Gestão de Cursos** - `/cursos`
- 📚 Tabela com todos os cursos
- 🔍 Busca e filtros
- ➕ Criar novo curso
- 📊 Informações: alunos matriculados, módulos, status, taxa de conclusão
- ✏️ Ações: editar, visualizar, arquivar
- 📍 Arquivo: `projects/admin-dashboard/src/app/features/gestao-cursos/gestao-cursos.component.ts`

**Colunas da Tabela:**
- Nome do curso + carga horária
- Número de alunos
- Quantidade de módulos
- Status (Ativo, Rascunho)
- Taxa de conclusão média
- Ações (editar, visualizar, arquivar)

**Cursos de Exemplo:**
- Introdução ao Angular - 234 alunos - 78% conclusão
- TypeScript Avançado - 189 alunos - 65% conclusão
- Arquitetura de Software - 156 alunos - 42% conclusão

#### **Gestão de Alunos** - `/alunos`
- 👥 Tabela com todos os alunos
- 🔍 Busca por nome ou e-mail
- 🎯 Filtro por curso
- ➕ Cadastrar novo aluno
- 📊 Informações: cursos matriculados, progresso, última atividade, status
- 👤 Ações: ver perfil, editar, enviar mensagem
- 📍 Arquivo: `projects/admin-dashboard/src/app/features/gestao-alunos/gestao-alunos.component.ts`

**Colunas da Tabela:**
- Avatar + Nome do aluno
- E-mail
- Cursos matriculados
- Progresso geral (barra de progresso)
- Última atividade
- Status (Ativo/Inativo)
- Ações (perfil, editar, mensagens)

**Alunos de Exemplo:**
- João Silva - 3 cursos - 75% progresso - Ativo
- Maria Santos - 2 cursos - 45% progresso - Ativo
- Pedro Oliveira - 4 cursos - 90% progresso - Ativo

#### **Relatórios** - `/relatorios`
- 📈 Analytics e métricas detalhadas
- 📅 Filtro por período
- 📥 Exportação de relatórios
- 📊 Métricas principais:
  - Taxa de engajamento: 87%
  - Taxa de conclusão: 62%
  - Satisfação média: 4.8/5
  - Tempo médio por curso/semana: 3.2h
- 🏆 Top 5 cursos mais acessados
- 📂 Performance por categoria
- 📉 Gráficos de evolução temporal
- 📍 Arquivo: `projects/admin-dashboard/src/app/features/relatorios/relatorios.component.ts`

**Top 5 Cursos:**
1. Introdução ao Angular - 95%
2. TypeScript Avançado - 82%
3. Arquitetura de Software - 78%
4. React Fundamentals - 65%
5. Node.js Essentials - 58%

### Como Testar

```bash
# Servir a aplicação
ng serve admin-dashboard --port 4202

# Acessar no navegador
# http://localhost:4202              - Redireciona para dashboard
# http://localhost:4202/dashboard    - Dashboard administrativo
# http://localhost:4202/cursos       - Gestão de cursos
# http://localhost:4202/alunos       - Gestão de alunos
# http://localhost:4202/relatorios   - Relatórios e analytics
```

---

## 🚀 Testando Todas as Aplicações Simultaneamente

```bash
# Terminal 1 - Portal Público
ng serve portal-publico

# Terminal 2 - Aluno PWA
ng serve aluno-pwa --port 4201

# Terminal 3 - Admin Dashboard
ng serve admin-dashboard --port 4202
```

**Acessar:**
- 🌐 Portal Público: http://localhost:4200
- 🎓 Aluno PWA: http://localhost:4201
- 🔧 Admin Dashboard: http://localhost:4202

---

## 📋 Resumo de Rotas por Aplicação

### Portal Público (3 rotas)
```
/                    → Home
/catalogo            → Catálogo de Cursos
/pre-inscricao       → Formulário de Pré-inscrição
```

### Aluno PWA (6 rotas)
```
/                    → Redirect para /login
/login               → Login
/dashboard           → Dashboard do Aluno
/curso               → Player de Vídeo
/avaliacao           → Avaliações
/tutoria             → Mensagens com Tutores
```

### Admin Dashboard (5 rotas)
```
/                    → Redirect para /dashboard
/dashboard           → Dashboard Administrativo
/cursos              → Gestão de Cursos
/alunos              → Gestão de Alunos
/relatorios          → Relatórios e Analytics
```

---

## 🎯 Fluxo de Navegação

### Portal Público
```
Home (/) → Catálogo (/catalogo) → Voltar (/)
        → Pré-inscrição (/pre-inscricao) → Voltar (/)
```

### Aluno PWA
```
Login (/login) → Dashboard (/dashboard) → Meus Cursos (/curso)
                                        → Avaliações (/avaliacao)
                                        → Tutoria (/tutoria)
                                        → Sair → Login
```

### Admin Dashboard
```
Sidebar permanente com acesso a:
  - Dashboard (/dashboard)
  - Cursos (/cursos)
  - Alunos (/alunos)
  - Relatórios (/relatorios)
```

---

## ✅ Validação das Rotas

Para validar que todas as rotas estão funcionando:

```bash
# Build todas as aplicações
ng build portal-publico --configuration=development
ng build aluno-pwa --configuration=development
ng build admin-dashboard --configuration=development

# Se todos os builds passarem, as rotas estão corretas
```

---

## 📝 Próximos Passos

1. **Guards de Autenticação**
   - Implementar `AuthGuard` para proteger rotas do aluno-pwa
   - Implementar `AdminGuard` para admin-dashboard

2. **Lazy Loading**
   - Converter rotas para lazy loading
   - Melhorar performance inicial

3. **Rotas Aninhadas**
   - Adicionar rotas filhas para sub-páginas
   - Ex: `/cursos/:id/modulos`

4. **Breadcrumbs**
   - Adicionar navegação breadcrumb
   - Melhorar UX de navegação

---

## 🔗 Links Úteis

- [Angular Router Guide](https://angular.dev/guide/routing)
- [ESTRUTURA.md](./ESTRUTURA.md) - Documentação da estrutura do projeto
- [COMANDOS.md](./COMANDOS.md) - Guia de comandos úteis
