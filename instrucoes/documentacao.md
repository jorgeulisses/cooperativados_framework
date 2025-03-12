# Documentação do Sistema Cooperativados

## Visão Geral

O Cooperativados é um sistema web para gerenciamento de uma cooperativa de mão de obra. O sistema permite o cadastro de trabalhadores, empresas contratantes e administradores, facilitando a alocação de mão de obra para empresas terceiras.

## Tipos de Usuários

O sistema possui três tipos de usuários:

1. **Administrador**: Responsável pela gestão da plataforma, podendo ativar/desativar trabalhadores, gerar relatórios, definir valores de hora e percentuais de lucro.

2. **Trabalhador**: Profissional cadastrado na cooperativa que pode visualizar solicitações de serviço e valores a receber.

3. **Empresa**: Contratante que pode selecionar trabalhadores e gerar relatórios de pagamentos.

## Estrutura do Projeto

O projeto foi desenvolvido utilizando Next.js com App Router e Tailwind CSS para estilização. A estrutura de pastas é organizada da seguinte forma:

- `/app`: Contém as páginas da aplicação
  - `/admin`: Páginas do painel administrativo
  - `/trabalhador`: Páginas do painel do trabalhador
  - `/empresa`: Páginas do painel da empresa
- `/components`: Componentes reutilizáveis
- `/hooks`: Hooks personalizados
- `/lib`: Utilitários e funções auxiliares
- `/instrucoes`: Documentação e instruções do projeto

## Banco de Dados

### Estrutura do Banco de Dados

O sistema utiliza uma arquitetura baseada em API que pode ser conectada a diferentes bancos de dados. A estrutura de tabelas recomendada é:

#### Tabela: Usuarios

| Campo       | Tipo         | Descrição                                      |
|-------------|--------------|------------------------------------------------|
| id          | INT          | Identificador único (PK)                       |
| nome        | VARCHAR(255) | Nome do usuário                                |
| email       | VARCHAR(255) | Email do usuário (único)                       |
| senha       | VARCHAR(255) | Senha criptografada                            |
| telefone    | VARCHAR(20)  | Número de telefone                             |
| tipo        | ENUM         | Tipo de usuário (admin, trabalhador, empresa)  |
| status      | ENUM         | Status do usuário (ativo, inativo)             |
| data_criacao| DATETIME     | Data de criação do registro                    |
| data_atualizacao| DATETIME | Data da última atualização                     |

#### Tabela: Trabalhadores

| Campo           | Tipo         | Descrição                                  |
|-----------------|--------------|---------------------------------------------|
| id              | INT          | Identificador único (PK)                    |
| usuario_id      | INT          | ID do usuário (FK)                          |
| cpf             | VARCHAR(14)  | CPF do trabalhador                          |
| area            | VARCHAR(100) | Área de atuação                             |
| valor_hora      | DECIMAL(10,2)| Valor da hora de trabalho                   |
| percentual_lucro| DECIMAL(5,2) | Percentual de lucro da cooperativa          |
| disponivel      | BOOLEAN      | Indica se está disponível para contratação  |

#### Tabela: Empresas

| Campo       | Tipo         | Descrição                                      |
|-------------|--------------|------------------------------------------------|
| id          | INT          | Identificador único (PK)                       |
| usuario_id  | INT          | ID do usuário (FK)                             |
| cnpj        | VARCHAR(18)  | CNPJ da empresa                                |
| razao_social| VARCHAR(255) | Razão social da empresa                        |
| setor       | VARCHAR(100) | Setor de atuação da empresa                    |

#### Tabela: Contratos

| Campo           | Tipo         | Descrição                                  |
|-----------------|--------------|---------------------------------------------|
| id              | INT          | Identificador único (PK)                    |
| empresa_id      | INT          | ID da empresa contratante (FK)              |
| trabalhador_id  | INT          | ID do trabalhador contratado (FK)           |
| data_inicio     | DATE         | Data de início do contrato                  |
| data_fim        | DATE         | Data de término do contrato                 |
| valor_total     | DECIMAL(10,2)| Valor total do contrato                     |
| status          | ENUM         | Status do contrato (pendente, ativo, concluído, cancelado) |
| observacoes     | TEXT         | Observações sobre o contrato                |

#### Tabela: Servicos

| Campo           | Tipo         | Descrição                                  |
|-----------------|--------------|---------------------------------------------|
| id              | INT          | Identificador único (PK)                    |
| contrato_id     | INT          | ID do contrato (FK)                         |
| data            | DATE         | Data do serviço                             |
| horas_trabalhadas| DECIMAL(5,2)| Quantidade de horas trabalhadas             |
| valor           | DECIMAL(10,2)| Valor do serviço                            |
| status          | ENUM         | Status do serviço (pendente, concluído, cancelado) |
| descricao       | TEXT         | Descrição do serviço realizado              |

#### Tabela: Pagamentos

| Campo           | Tipo         | Descrição                                  |
|-----------------|--------------|---------------------------------------------|
| id              | INT          | Identificador único (PK)                    |
| contrato_id     | INT          | ID do contrato (FK)                         |
| valor           | DECIMAL(10,2)| Valor do pagamento                          |
| data_pagamento  | DATE         | Data do pagamento                           |
| tipo            | ENUM         | Tipo de pagamento (empresa para cooperativa, cooperativa para trabalhador) |
| status          | ENUM         | Status do pagamento (pendente, realizado, cancelado) |
| comprovante     | VARCHAR(255) | Caminho para o comprovante de pagamento     |

## API

A API do sistema segue uma arquitetura RESTful e é independente do banco de dados utilizado. Abaixo estão os principais endpoints:

### Autenticação

- `POST /api/auth/login`: Autenticação de usuários
- `POST /api/auth/register`: Registro de novos usuários
- `POST /api/auth/logout`: Logout de usuários

### Usuários

- `GET /api/users`: Listar usuários
- `GET /api/users/:id`: Obter detalhes de um usuário
- `PUT /api/users/:id`: Atualizar usuário
- `DELETE /api/users/:id`: Desativar usuário

### Trabalhadores

- `GET /api/workers`: Listar trabalhadores
- `GET /api/workers/:id`: Obter detalhes de um trabalhador
- `PUT /api/workers/:id`: Atualizar trabalhador
- `PATCH /api/workers/:id/status`: Atualizar status do trabalhador
- `GET /api/workers/:id/services`: Listar serviços de um trabalhador

### Empresas

- `GET /api/companies`: Listar empresas
- `GET /api/companies/:id`: Obter detalhes de uma empresa
- `PUT /api/companies/:id`: Atualizar empresa
- `PATCH /api/companies/:id/status`: Atualizar status da empresa
- `GET /api/companies/:id/contracts`: Listar contratos de uma empresa

### Contratos

- `GET /api/contracts`: Listar contratos
- `POST /api/contracts`: Criar novo contrato
- `GET /api/contracts/:id`: Obter detalhes de um contrato
- `PUT /api/contracts/:id`: Atualizar contrato
- `PATCH /api/contracts/:id/status`: Atualizar status do contrato

### Serviços

- `GET /api/services`: Listar serviços
- `POST /api/services`: Registrar novo serviço
- `GET /api/services/:id`: Obter detalhes de um serviço
- `PUT /api/services/:id`: Atualizar serviço

### Relatórios

- `GET /api/reports/workers`: Relatório de trabalhadores
- `GET /api/reports/companies`: Relatório de empresas
- `GET /api/reports/contracts`: Relatório de contratos
- `GET /api/reports/financial`: Relatório financeiro

## Instruções de Execução

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Configure as variáveis de ambiente no arquivo `.env.local`
4. Execute o servidor de desenvolvimento com `npm run dev`
5. Acesse o sistema em `http://localhost:3000`

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

### Configuração do Servidor
```env
PORT=3000              # Porta onde o servidor irá rodar
NODE_ENV=development   # Ambiente de execução (development/production)
```

### Configuração do JWT
```env
JWT_SECRET=           # Chave secreta para geração de tokens JWT
JWT_EXPIRES_IN=1d     # Tempo de expiração dos tokens (1d = 1 dia)
```

### Configuração do Banco de Dados
```env
DATABASE_URL=         # URL de conexão com o banco de dados
DATABASE_TYPE=        # Tipo do banco (postgres, mysql, sqlite, mongodb)
```

### Configurações de Email
```env
SMTP_HOST=           # Host do servidor SMTP
SMTP_PORT=           # Porta do servidor SMTP
SMTP_USER=           # Usuário para autenticação SMTP
SMTP_PASS=           # Senha para autenticação SMTP
```

### Configurações de API
```env
API_URL=             # URL base da API (interno)
NEXT_PUBLIC_API_URL= # URL base da API (público/frontend)
```

### Configurações de Upload
```env
UPLOAD_DIR=uploads   # Diretório para upload de arquivos
MAX_FILE_SIZE=5242880 # Tamanho máximo de arquivo (5MB)
```

### Configurações de Segurança
```env
CORS_ORIGIN=         # Origem permitida para CORS
RATE_LIMIT_WINDOW=   # Janela de tempo para rate limiting (ms)
RATE_LIMIT_MAX=      # Máximo de requisições por janela
```

> **IMPORTANTE**: Nunca comite o arquivo `.env.local` no repositório. Mantenha suas credenciais seguras.

