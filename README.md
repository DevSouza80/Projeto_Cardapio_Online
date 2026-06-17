# 🍔 Brasa Burger — Cardápio Online

> Projeto de estudos: cardápio digital com carrinho de pedidos e integração ao WhatsApp.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Bootstrap Icons](https://img.shields.io/badge/Bootstrap_Icons-7952B3?style=flat&logo=bootstrap&logoColor=white)

---

## 📋 Sobre o projeto

O **Brasa Burger** é um cardápio online desenvolvido como projeto de estudos de front-end. A aplicação simula um sistema real de pedidos para uma hamburgueria, com listagem de produtos, carrinho interativo e envio do pedido via WhatsApp.

---

## ✨ Funcionalidades

- **Cardápio completo** — Seção de lanches e bebidas com imagem, descrição e preço
- **Carrinho de pedidos** — Adicionar e remover itens com contagem e total atualizado em tempo real
- **Modal do carrinho** — Interface flutuante com lista dos itens selecionados
- **Cálculo automático do total** — Soma dos itens formatada em R$ (BRL)
- **Campo de endereço** — Validação do endereço de entrega antes de finalizar
- **Integração com WhatsApp** — Pedido enviado direto ao número da loja via link da API do WhatsApp
- **Notificações toast** — Feedback visual ao adicionar itens ao carrinho (via Toastify.js)
- **Layout responsivo** — Adaptado para mobile e desktop

---

## 🖼️ Layout

A interface é dividida em três áreas principais:

| Seção | Descrição |
|---|---|
| **Hero** | Banner com logo, endereço e horário de funcionamento |
| **Cardápio** | Grid de produtos (lanches e bebidas) |
| **Rodapé fixo** | Botão de acesso rápido ao carrinho |

---

## 🗂️ Estrutura de arquivos

```
brasa-burger/
├── index.html
├── assets/
│   ├── css/
│   │   ├── style.css       # Estilos principais
│   │   ├── color.css       # Variáveis de cor
│   │   ├── font.css        # Variáveis de tipografia
│   │   ├── resete.css      # Reset CSS
│   │   ├── media.css       # Media queries
│   │   └── frame.css       # Estilos de frame/layout
│   ├── js/
│   │   └── function.js     # Lógica do carrinho e integração WhatsApp
│   └── img/
│       └── ...             # Imagens dos produtos e logo
```

---

## 🧠 Conceitos praticados

Este projeto foi desenvolvido para praticar os seguintes conceitos:

- **Manipulação do DOM** com `querySelector`, `createElement`, `innerHTML` e eventos
- **Event delegation** — um único listener no menu captura cliques em qualquer botão de produto
- **Array de objetos** para gerenciar o estado do carrinho (`cart[]`)
- **`find()`** para verificar se o item já existe no carrinho antes de adicionar
- **`toFixed(2)`** e **`toLocaleString`** para formatação de valores monetários
- **`stopPropagation()`** para controle de eventos no modal
- **`data-*` attributes** no HTML para passar nome e preço ao JavaScript
- **Template literals** para renderizar dinamicamente os itens do carrinho
- **CSS Custom Properties** (variáveis CSS) para theming consistente
- **CSS Grid** para o layout dos cards de produtos
- **Position fixed** para o rodapé e o modal do carrinho

---

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/brasa-burger.git
   ```

2. Abra o arquivo `index.html` diretamente no navegador ou use uma extensão como o **Live Server** (VS Code).

> Não há dependências de build. O projeto é 100% HTML, CSS e JavaScript puro.

---

## 📦 Dependências externas (via CDN)

| Biblioteca | Uso |
|---|---|
| [Bootstrap Icons](https://icons.getbootstrap.com/) | Ícones de carrinho, localização e relógio |
| [Toastify.js](https://github.com/apvarun/toastify-js) | Notificações toast ao adicionar itens |

---

## 📱 Integração com WhatsApp

Ao clicar em **Finalizar Pedido**, a aplicação valida o endereço informado e redireciona o usuário para o WhatsApp com uma mensagem pré-formatada contendo todos os itens do carrinho, quantidades, valores e o endereço de entrega.

---

## 📌 Status do projeto

🟡 **Em desenvolvimento** — projeto de estudos em evolução contínua.

---

## 👨‍💻 Autor

Feito com 🔥 como projeto de estudos de desenvolvimento front-end.
