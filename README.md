# 🚀 Landing Page - Fernando Carvalho | Digital Systems

Uma landing page moderna e profissional desenvolvida com HTML5, CSS3 e JavaScript vanilla.

## 📁 Estrutura do Projeto

```
Projeto_LANDING_PAGE/
├── index.html              # Arquivo principal HTML
├── css/
│   └── style.css          # Estilos CSS separados
├── js/
│   └── script.js          # Scripts JavaScript separados
├── imagens/               # Pasta de imagens (logos e ícones)
│   ├── 4k_white.png
│   ├── 4k_black.png
│   ├── full_hd_white.png
│   └── ... (outros arquivos)
└── README.md              # Esta documentação
```

## ✨ Características

### Design
- 🎨 **Tema Escuro Moderno** - Interface com gradientes verde neon
- 📱 **Totalmente Responsivo** - Funciona em desktop, tablet e mobile
- ✨ **Animações Suaves** - Transições e efeitos visuais elegantes
- 🌐 **Cross-browser Compatible** - Funciona em todos os navegadores modernos

### Seções
1. **Header** - Navegação fixa com logo, menu e **menu mobile (hambúrguer)**
2. **Hero Section** - Banner principal com proposta de valor e call-to-action
3. **Serviços** - 6 cards com descrição de serviços
4. **Projetos** - Portfólio com 3 projetos reais e badges de tecnologia
5. **Tecnologias** - Stack de trabalho (10 ferramentas)
6. **Sobre** - Informações da marca com diferenciais
7. **Estatísticas** - Números defensáveis (sistemas, stack, código próprio)
8. **CTA / Contato** - Botões de WhatsApp e e-mail
9. **Footer** - Contato, redes sociais reais e links rápidos
10. **WhatsApp Button** + **Voltar ao topo** - Botões flutuantes

### Funcionalidades JavaScript
- ✓ Configuração central em `CONFIG` (WhatsApp, mensagem e e-mail em um só lugar)
- ✓ Navegação suave (scroll automático) + link ativo no menu (scrollspy)
- ✓ Efeito de header ao fazer scroll
- ✓ Menu mobile acessível (ARIA)
- ✓ Revelação de seções ao rolar (IntersectionObserver, com fallback)
- ✓ Contador de estatísticas corrigido (entende `10+`, `100%`, ignora `24/7`)
- ✓ Integração com WhatsApp e ano do rodapé automático

> **Análise completa e histórico de melhorias:** veja [`ANALISE_E_MELHORIAS.md`](ANALISE_E_MELHORIAS.md).

### ⚙️ Antes de publicar
Edite o bloco `CONFIG` no topo de [`js/script.js`](js/script.js):
```js
const CONFIG = {
    whatsapp: '5500000000000',  // 55 + DDD + número (só dígitos)
    whatsappMessage: 'Olá! Vim pelo site...',
    email: 'fernando.aafsc@gmail.com'
};
```

## 🎯 Como Usar

### 1. Abrir no Navegador
```bash
# Simplesmente abra o arquivo index.html em seu navegador
# Não é necessário servidor local
```

### 2. Personalização
Edite o arquivo `index.html` e substitua:
- `SEU_NUMERO` → Seu número do WhatsApp (no formato: +55XXXXXXXXXXX)
- `contato@fernandocarvalho.com` → Seu email
- Nomes e descrições dos serviços
- Números nas estatísticas

### 3. Mudar Logo
O ícone do header está em `imagens/logo-icon.png` — versão **com fundo transparente**
gerada a partir de `imagens/logoicon.png` (as originais `icon_branco.png` tinham um
xadrez cinza e contorno branco embutidos, que ficavam feios no tema escuro).
A arte da seção "Sobre" está em `imagens/Icon_logo_transparente.png`.
As demais imagens da pasta `imagens/` são grandes (1–2 MB) — vale comprimir antes de publicar.

## 🎨 Personalização de Cores

As cores principais estão definidas em `css/style.css` no `:root`:

```css
:root {
    --primary: #00d084;           /* Verde esmeralda */
    --primary-dark: #00a366;      /* Verde escuro */
    --primary-light: #33e0a8;     /* Verde claro / hover */
    --accent: #0d8b7f;            /* Verde azulado */
    --dark-bg: #0a0e27;           /* Fundo principal */
    --darker-bg: #050812;         /* Fundo mais escuro */
    --text-primary: #ffffff;
    --text-secondary: #b8bcc4;
}
```

## 📱 Responsividade

O projeto foi otimizado para:
- **Desktop** - 1920x1080 e maiores
- **Tablet** - 768px a 1024px
- **Mobile** - Até 768px

## 🔗 Links e Contato

### WhatsApp
Substitua `SEU_NUMERO` em todos os links WhatsApp pelo seu número:
```html
<!-- Formato: +55XXXXXXXXXXX (exemplo: +5511987654321) -->
<a href="https://wa.me/SEU_NUMERO">
```

### Redes Sociais
Atualize os links no footer:
```html
<a href="https://instagram.com/seu-usuario">
<a href="https://facebook.com/seu-usuario">
<a href="https://linkedin.com/in/seu-usuario">
```

## 🚀 Deploy

### Opções de Hospedagem Gratuita:
1. **GitHub Pages** - Perfeito para projetos estáticos
2. **Vercel** - Fácil integração com GitHub
3. **Netlify** - Deploy automático com Git
4. **Firebase Hosting** - Do Google
5. **000webhost** - Hospedagem gratuita

## 📝 Licença

Este projeto é livre para usar e modificar.

## 💬 Suporte

Para dúvidas sobre o código ou customizações:
- Abra uma issue no repositório
- Entre em contato via WhatsApp
- Envie um email

---

**Desenvolvido com ❤️ por Fernando Carvalho | Digital Systems**
