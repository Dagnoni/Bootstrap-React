# Formulário de Matrícula

Projeto React com formulário de matrícula e validação em tempo real.

## Como rodar

```bash
npm install
npm start
```

## Características

✅ **Campos controlados** — nome, email e curso gerenciados por estado
✅ **Validação nome** — mínimo 3 letras
✅ **Validação email** — precisa conter @
✅ **Select de curso** — obrigatório
✅ **Feedback visual** — campos inválidos ficam com borda vermelha e fundo claro
✅ **Mensagens de erro** — aparecem abaixo de cada campo
✅ **Labels ligadas** — htmlFor conecta rótulos aos inputs
✅ **Sucesso** — alerta ao enviar válido + limpa campos

## Validações

- **Nome**: mínimo 3 caracteres
- **E-mail**: precisa conter `@`
- **Curso**: seleção obrigatória

Ao enviar válido, um alerta confirma a matrícula e os campos são zerados.
