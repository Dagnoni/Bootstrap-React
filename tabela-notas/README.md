# Tabela de Notas

Projeto React com tabela de notas de alunos, busca por nome e badges para notas baixas.

## Como rodar

```bash
npm install
npm start
```

## Características

✅ **8 alunos** com dados estáticos
✅ **4 colunas** — Nome, Matemática, Português, História
✅ **Campo de busca** — filtra alunos por nome (case-insensitive)
✅ **Filtro com filter()** — sobre o array original
✅ **Badges vermelhos** — notas abaixo de 6 recebem destaque
✅ **Tabela responsiva** — div com `overflowX: auto` envolve a tabela
✅ **Mensagem de vazio** — quando nenhum aluno é encontrado
✅ **Key única** — cada linha tem `key={aluno.id}`

## Validações

- Busca é **case-insensitive** (maiúsculas e minúsculas)
- Badges aparecem apenas em notas < 6
- Tabela adapta em telas pequenas (scroll horizontal)

## Dados

Cada aluno tem:
- `id` (único)
- `nome` (string)
- `matematica`, `portugues`, `historia` (notas de 0 a 10)
