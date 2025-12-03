# 🎓 OPALBYTES EAD - Monorepo Angular

> Plataforma de Educação a Distância desenvolvida com Angular Workspace

Este projeto é um **monorepo Angular** com 3 aplicações e múltiplas bibliotecas compartilhadas, criado para validar a arquitetura proposta em `monorepo.md`.

---

## 📦 Estrutura do Projeto

```
opalbytes-ead/
├── projects/
│   ├── portal-publico/        ✅ Landing pages
│   ├── aluno-pwa/             ✅ Ambiente do aluno (PWA)
│   ├── admin-dashboard/       ✅ Painel administrativo
│   │
│   ├── shared-data-access/    📚 Serviços HTTP
│   ├── shared-models/         📚 Interfaces, DTOs, Enums
│   ├── shared-ui/             📚 Componentes UI
│   ├── shared-utils/          📚 Helpers, Validators
│   │
│   ├── feature-video-player/  🎬 Player de vídeo
│   ├── feature-biometria/     🔐 Validação biométrica
│   └── feature-relatorios/    📊 Relatórios
│
├── ESTRUTURA.md              📖 Documentação da arquitetura
├── ROTAS.md                  🗺️ Documentação completa das rotas
└── COMANDOS.md               ⚡ Guia de comandos úteis
```

---

## 🚀 Quick Start

### 1. Instalar Dependências

```bash
npm install
```

### 2. Build das Bibliotecas

```bash
# Build libs essenciais
ng build shared-models
ng build shared-data-access
ng build feature-video-player
```

### 3. Servir Aplicações

```bash
# Portal Público (porta 4200)
ng serve portal-publico

# Aluno PWA (porta 4201)
ng serve aluno-pwa --port 4201

# Admin Dashboard (porta 4202)
ng serve admin-dashboard --port 4202
```

---

## 🌐 Aplicações

### 1️⃣ Portal Público

**URL:** http://localhost:4200
**Descrição:** Landing pages para visitantes e pré-inscrições

#### Rotas:
- `/` - Home
- `/catalogo` - Catálogo de cursos
- `/pre-inscricao` - Formulário de pré-inscrição

[📖 Ver documentação completa das rotas](./ROTAS.md#-1-portal-público-portal-publico)

---

### 2️⃣ Aluno PWA

**URL:** http://localhost:4201
**Descrição:** Ambiente completo do aluno com funcionalidades offline (PWA)
**PWA:** ✅ Service Worker configurado

#### Rotas:
- `/login` - Autenticação (aceita qualquer credencial para demo)
- `/dashboard` - Dashboard principal
- `/curso` - Player de vídeo com progresso
- `/avaliacao` - Sistema de avaliações
- `/tutoria` - Mensagens com tutores

#### Features:
- ✅ Progressive Web App (PWA)
- 📱 Manifest e ícones configurados
- 🔄 Service Worker para cache
- 📊 Integração com libs compartilhadas
- 🎬 Componente VideoPlayer da feature lib

[📖 Ver documentação completa das rotas](./ROTAS.md#-2-aluno-pwa-aluno-pwa)

---

### 3️⃣ Admin Dashboard

**URL:** http://localhost:4202
**Descrição:** Painel administrativo completo

#### Rotas:
- `/dashboard` - Visão geral e métricas
- `/cursos` - Gestão de cursos
- `/alunos` - Gestão de alunos
- `/relatorios` - Relatórios e analytics

#### Features:
- 📊 Dashboard com métricas em tempo real
- 📚 CRUD completo de cursos
- 👥 Gerenciamento de alunos
- 📈 Relatórios detalhados
- 🎨 Interface administrativa profissional

[📖 Ver documentação completa das rotas](./ROTAS.md#-3-admin-dashboard-admin-dashboard)

---

## 📚 Bibliotecas Compartilhadas

### Shared Libraries

#### `@opalbytes/shared/data-access`
Serviços HTTP e APIs:
- `AuthService` - Autenticação
- `CursoService` - Gestão de cursos e progresso

#### `@opalbytes/shared/models`
Tipos TypeScript:
- **Entities:** `Curso`, `Aluno`
- **DTOs:** `LoginDto`, `AuthResponseDto`
- **Enums:** `Perfil`

#### `@opalbytes/shared/ui`
Componentes UI reutilizáveis

#### `@opalbytes/shared/utils`
Helpers, validators e constantes

### Feature Libraries

#### `@opalbytes/feature-video-player`
- Componente `VideoPlayer` com controles
- Sistema de heartbeat e progresso
- Usado pelo aluno-pwa

#### `@opalbytes/feature-biometria`
Validação biométrica (estrutura criada)

#### `@opalbytes/feature-relatorios`
Relatórios administrativos (estrutura criada)

---

## 🔧 Path Mapping

O projeto usa path mapping para imports limpos:

```typescript
// Ao invés de: import { AuthService } from '../../../libs/shared/data-access'
import { AuthService } from '@opalbytes/shared/data-access';
import { Curso, Aluno } from '@opalbytes/shared/models';
import { VideoPlayer } from '@opalbytes/feature-video-player';
```

**Configuração:** `tsconfig.json`

---

## 🛠️ Comandos Principais

### Desenvolvimento

```bash
# Servir aplicação específica
ng serve portal-publico
ng serve aluno-pwa --port 4201
ng serve admin-dashboard --port 4202
```

### Build

```bash
# Build libs
ng build shared-models
ng build shared-data-access
ng build feature-video-player

# Build apps (development)
ng build portal-publico --configuration=development
ng build aluno-pwa --configuration=development
ng build admin-dashboard --configuration=development

# Build apps (production)
ng build portal-publico --configuration=production
ng build aluno-pwa --configuration=production
ng build admin-dashboard --configuration=production
```

### PWA - Build de Produção

```bash
# Build do PWA (necessário para Service Worker funcionar)
ng build aluno-pwa --configuration=production

# Servir build de produção
npx http-server dist/aluno-pwa -p 8080
```

[⚡ Ver mais comandos](./COMANDOS.md)

---

## ✅ Validação

Todos os builds foram testados e estão funcionando:

```bash
✅ ng build shared-models
✅ ng build shared-data-access
✅ ng build feature-video-player
✅ ng build portal-publico
✅ ng build aluno-pwa
✅ ng build admin-dashboard
```

---

## 📖 Documentação

- **[ESTRUTURA.md](./ESTRUTURA.md)** - Documentação completa da arquitetura do monorepo
- **[ROTAS.md](./ROTAS.md)** - Documentação detalhada de todas as rotas
- **[COMANDOS.md](./COMANDOS.md)** - Guia de comandos úteis para desenvolvimento

---

## 🎯 Exemplo de Uso (Cross-Library)

Veja como as bibliotecas são usadas no `aluno-pwa`:

```typescript
// projects/aluno-pwa/src/app/features/curso/video.component.ts
import { Component } from '@angular/core';
import { CursoService } from '@opalbytes/shared/data-access';      // ✅
import { Curso } from '@opalbytes/shared/models';                  // ✅
import { VideoPlayer } from '@opalbytes/feature-video-player';     // ✅

@Component({
  selector: 'app-curso-video',
  standalone: true,
  imports: [VideoPlayer],
  template: `
    <opb-video-player
      [moduloId]="moduloId"
      (progresso)="onProgresso($event)">
    </opb-video-player>
  `
})
export class CursoVideoComponent {
  moduloId = 'modulo-123';
  curso?: Curso;

  constructor(private cursoService: CursoService) {}

  onProgresso(evento: any): void {
    this.cursoService.registrarProgresso(this.moduloId, evento.progresso)
      .subscribe();
  }
}
```

---

## 🎨 Features Principais

### ✅ Implementado

- [x] Monorepo Angular com workspace
- [x] 3 aplicações standalone
- [x] 7 bibliotecas (4 shared + 3 features)
- [x] Path mapping configurado
- [x] PWA configurado (aluno-pwa)
- [x] Rotas completas em todas as apps
- [x] Componentes funcionais com dados mock
- [x] Integração cross-library validada
- [x] Builds funcionando

### 🚧 Próximos Passos

- [ ] Adicionar Nx para cache e affected commands
- [ ] Implementar guards de autenticação
- [ ] Adicionar lazy loading nas rotas
- [ ] Implementar interceptors HTTP
- [ ] Configurar CI/CD
- [ ] Adicionar testes unitários
- [ ] Implementar NgRx para gerenciamento de estado
- [ ] Conectar com backend real

---

## 🔗 Tecnologias

- **Angular:** 21.0.2
- **Angular CLI:** 21.0.1
- **TypeScript:** 5.9.3
- **Node.js:** 24.10.0
- **NPM:** 11.6.0

---

## 📱 PWA - Aluno App

O app `aluno-pwa` está configurado como Progressive Web App:

- ✅ Service Worker (`ngsw-config.json`)
- ✅ Manifest (`manifest.webmanifest`)
- ✅ Ícones em múltiplas resoluções
- ✅ Funciona offline (após primeiro acesso)

**Para testar PWA:**
```bash
ng build aluno-pwa --configuration=production
npx http-server dist/aluno-pwa -p 8080
```

---

## 🤝 Contribuindo

Este projeto foi criado para validar a arquitetura de monorepo. Para adicionar novas features:

1. **Nova biblioteca:** `ng generate library nome --prefix=opb`
2. **Novo componente em lib:** `ng generate component components/nome --project=lib-name`
3. **Nova rota:** Adicionar em `app.routes.ts` do app específico
4. **Build da lib:** `ng build nome-da-lib`

---

## 📄 Licença

Este é um projeto de demonstração/validação.

---

## 👨‍💻 Desenvolvido com

- ❤️ Angular
- 🎯 TypeScript
- 📦 Angular Workspace
- 🚀 Progressive Web Apps

---

**Documentação criada em:** 03/12/2025
**Versão:** 1.0.0
