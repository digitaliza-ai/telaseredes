# Configuração de Variáveis de Ambiente

## Configuração Necessária

Para que o projeto funcione corretamente, você precisa configurar as variáveis de ambiente com suas credenciais do Google Drive API.

### 1. Criar arquivos de ambiente

#### Para desenvolvimento:
Copie o arquivo `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

#### Para produção:
Copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

### 2. Configurar as variáveis

Edite o arquivo correspondente (`.env.local` para desenvolvimento ou `.env` para produção) e substitua os valores pelos seus:

```env
# Google Drive API Configuration
NEXT_PUBLIC_GOOGLE_DRIVE_API_KEY=sua_chave_da_api_aqui

# Google Drive Folder IDs
NEXT_PUBLIC_DRIVE_FOLDER_DESTAQUES=id_da_pasta_destaques
NEXT_PUBLIC_DRIVE_FOLDER_PROTECAO=id_da_pasta_protecao
NEXT_PUBLIC_DRIVE_FOLDER_MOSQUITEIRO=id_da_pasta_mosquiteiro
```

### 3. Como obter as credenciais

#### API Key do Google Drive:
1. Acesse o [Google Cloud Console](https://console.cloud.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Ative a API do Google Drive
4. Crie uma chave de API
5. Configure as restrições necessárias

#### IDs das Pastas do Google Drive:
1. Acesse o Google Drive
2. Navegue até a pasta desejada
3. Copie o ID da URL (parte após `/folders/`)

### 4. Segurança

⚠️ **IMPORTANTE**: 
- Nunca commite os arquivos `.env` ou `.env.local`
- Ambos os arquivos já estão incluídos no `.gitignore`
- Use apenas o `.env.example` como template
- `.env.local` tem prioridade sobre `.env` no Next.js

### 5. Reiniciar o servidor

Após configurar as variáveis, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```
