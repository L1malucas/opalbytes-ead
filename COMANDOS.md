# Comandos Úteis - OPALBYTES EAD Monorepo

## 🚀 Desenvolvimento

### Servir Aplicações em Modo de Desenvolvimento

```bash
# Portal Público (porta padrão 4200)
ng serve portal-publico

# Aluno PWA (porta 4201)
ng serve aluno-pwa --port 4201

# Admin Dashboard (porta 4202)
ng serve admin-dashboard --port 4202

# Com live reload e open browser
ng serve aluno-pwa --open
```

## 🏗️ Build

### Build de Bibliotecas (ordem de dependência)

```bash
# Libs sem dependências (podem rodar em paralelo)
ng build shared-models
ng build shared-utils

# Libs que dependem das anteriores
ng build shared-data-access
ng build shared-ui

# Features libs
ng build feature-video-player
ng build feature-biometria
ng build feature-relatorios

# Build todas as libs de uma vez
ng build shared-models && \
ng build shared-data-access && \
ng build shared-ui && \
ng build shared-utils && \
ng build feature-video-player && \
ng build feature-biometria && \
ng build feature-relatorios
```

### Build de Aplicações

```bash
# Development builds
ng build portal-publico --configuration=development
ng build aluno-pwa --configuration=development
ng build admin-dashboard --configuration=development

# Production builds (com otimizações)
ng build portal-publico --configuration=production
ng build aluno-pwa --configuration=production
ng build admin-dashboard --configuration=production

# Build todos os apps
ng build portal-publico && \
ng build aluno-pwa && \
ng build admin-dashboard
```

## 🧪 Testes

```bash
# Testar uma lib específica
ng test shared-models
ng test shared-data-access

# Testar um app específico
ng test aluno-pwa
ng test portal-publico
ng test admin-dashboard
```

## ⚙️ Geração de Código

### Criar nova biblioteca

```bash
# Biblioteca compartilhada
ng generate library shared-nome --prefix=opb

# Feature library
ng generate library feature-nome --prefix=opb
```

### Criar componentes

```bash
# Componente em uma lib
cd projects/shared-ui
ng generate component components/button --export

# Componente em um app
cd projects/aluno-pwa
ng generate component features/dashboard/home
```

### Criar serviços

```bash
# Serviço em shared-data-access
ng generate service services/aluno --project=shared-data-access

# Serviço em um app
ng generate service core/auth --project=aluno-pwa
```

## 📦 Path Mapping - Como Usar

### Importar de bibliotecas compartilhadas

```typescript
// Models
import { Curso, Aluno, Perfil } from '@opalbytes/shared/models';

// Services
import { AuthService, CursoService } from '@opalbytes/shared/data-access';

// UI Components
import { ButtonComponent } from '@opalbytes/shared/ui';

// Utils
import { cpfValidator } from '@opalbytes/shared/utils';

// Features
import { VideoPlayer } from '@opalbytes/feature-video-player';
import { BiometriaComponent } from '@opalbytes/feature-biometria';
```

## 🔍 Verificação e Linting

```bash
# Verificar erros de TypeScript
ng build aluno-pwa --configuration=development

# Verificar todas as libs
ng build shared-models && \
ng build shared-data-access && \
ng build feature-video-player
```

## 🧹 Limpeza

```bash
# Limpar builds
rm -rf dist/

# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar cache Angular
rm -rf .angular/cache
```

## 📊 PWA - Aluno App

### Verificar Service Worker

```bash
# Build production (necessário para PWA funcionar)
ng build aluno-pwa --configuration=production

# Servir build de produção
npx http-server dist/aluno-pwa -p 8080
```

### Arquivos PWA importantes

```
projects/aluno-pwa/
├── ngsw-config.json           # Configuração do Service Worker
├── public/
│   ├── manifest.webmanifest   # Manifesto PWA
│   └── icons/                 # Ícones em várias resoluções
```

## 🎯 Comandos por Caso de Uso

### Primeiro setup do projeto

```bash
# Clonar/entrar no projeto
cd opalbytes-ead

# Instalar dependências
npm install

# Build libs necessárias
ng build shared-models
ng build shared-data-access
ng build feature-video-player

# Rodar app
ng serve aluno-pwa
```

### Desenvolvimento diário

```bash
# Apenas rodar o app (libs já buildadas)
ng serve aluno-pwa

# Se modificou uma lib, rebuilda antes
ng build shared-data-access
ng serve aluno-pwa
```

### Deploy

```bash
# Build tudo em produção
ng build portal-publico --configuration=production
ng build aluno-pwa --configuration=production
ng build admin-dashboard --configuration=production

# Arquivos de deploy estarão em:
# dist/portal-publico/
# dist/aluno-pwa/
# dist/admin-dashboard/
```

## 🔧 Troubleshooting

### Erro: "Cannot find module '@opalbytes/...'"

```bash
# Rebuilde a lib específica
ng build shared-models
ng build shared-data-access

# Limpe o cache e rebuilde
rm -rf .angular/cache
ng build aluno-pwa
```

### Mudanças na lib não aparecem no app

```bash
# Rebuilde a lib
ng build nome-da-lib

# Rebuilde o app
ng build aluno-pwa
```

### Performance de build lento

```bash
# Use mode development (mais rápido)
ng build aluno-pwa --configuration=development

# Ou rode em watch mode
ng build shared-data-access --watch
```

## 📝 Scripts NPM Sugeridos

Adicione no `package.json`:

```json
{
  "scripts": {
    "serve:portal": "ng serve portal-publico",
    "serve:aluno": "ng serve aluno-pwa --port 4201",
    "serve:admin": "ng serve admin-dashboard --port 4202",

    "build:libs": "ng build shared-models && ng build shared-data-access && ng build feature-video-player",
    "build:all:dev": "npm run build:libs && ng build portal-publico && ng build aluno-pwa && ng build admin-dashboard",
    "build:all:prod": "npm run build:libs && ng build portal-publico --configuration=production && ng build aluno-pwa --configuration=production && ng build admin-dashboard --configuration=production",

    "clean": "rm -rf dist .angular/cache",
    "fresh": "npm run clean && npm install && npm run build:libs"
  }
}
```

## 🌐 Referências Úteis

- Angular CLI: https://angular.dev/cli
- Angular Workspace: https://angular.dev/reference/configs/file-structure
- PWA com Angular: https://web.dev/articles/creating-pwa-with-angular-cli
- Service Worker: https://angular.dev/ecosystem/service-workers
