# 🎯 Checklist Rápido - Customizações

Use este arquivo para fazer as personalizações básicas da landing page.

---

## 📞 WhatsApp

**Arquivo**: `index.html`

Procure por `href="https://wa.me/` e substitua seu número:

```html
<!-- ANTES -->
<a href="https://wa.me/SEU_NUMERO" target="_blank" class="btn btn-primary">

<!-- DEPOIS (exemplo: +55 11 99999-9999) -->
<a href="https://wa.me/5511999999999" target="_blank" class="btn btn-primary">
```

---

## 📊 Estatísticas

**Arquivo**: `index.html`

Seção "STATS" - modifique os números:

```html
<div class="stat">
    <div class="stat-number">1000+</div>  <!-- ← Mude aqui -->
    <div class="stat-label">Clientes Satisfeitos</div>
</div>
```

---

## 🎨 Cores

**Arquivo**: `css/style.css` (linhas 10-20)

Altere as variáveis CSS:

```css
:root {
    /* Verde padrão - #00d084 */
    --primary: #00d084;           /* ← Cor principal */
    --primary-dark: #00a366;      /* ← Mais escura */
    --primary-light: #33e0a8;     /* ← Mais clara */
    --accent: #0d8b7f;            /* ← Cor de acentor */
    
    /* Fundos */
    --dark-bg: #0a0e27;           /* ← Background principal */
    --darker-bg: #050812;         /* ← Background mais escuro */
}
```

**Dica**: Use [colordot.peterjolly.com](https://color.hailpixel.com/) para gerar paletas harmônicas.

---

## ✉️ Email

**Arquivo**: `index.html` (Footer)

```html
<a href="mailto:seu.email@example.com">
    <i class="fas fa-envelope"></i> seu.email@example.com
</a>
```

---

## 📍 Endereço

**Arquivo**: `index.html` (Footer)

```html
<a href="https://maps.google.com/?q=seu+endereco">
    <i class="fas fa-map-marker-alt"></i> Seu Endereço, Cidade, Estado
</a>
```

---

## 📱 Telefone

**Arquivo**: `index.html` (Footer)

```html
<a href="tel:+55119999999">
    <i class="fas fa-phone"></i> (11) 9999-9999
</a>
```

---

## 🏢 Seu Nome/Logo

**Arquivo**: `index.html` (Header & Footer)

```html
<!-- Header -->
<div class="logo-text">SEU NOME | Digital Systems</div>

<!-- Footer -->
<div class="footer-section">
    <h4>SEU NOME</h4>
    <p>© 2024 SEU NOME. Todos os direitos reservados.</p>
</div>
```

---

## 🔗 Redes Sociais

**Arquivo**: `index.html` (Footer - Social Links)

```html
<a href="https://facebook.com/seu-perfil" target="_blank">
    <i class="fab fa-facebook-f"></i>
</a>

<a href="https://instagram.com/seu-perfil" target="_blank">
    <i class="fab fa-instagram"></i>
</a>

<a href="https://linkedin.com/in/seu-perfil" target="_blank">
    <i class="fab fa-linkedin-in"></i>
</a>
```

---

## 📝 Textos Principais

### Hero Section
**Arquivo**: `index.html`

```html
<h1>Fernando Carvalho</h1>
<p class="subtitle">Desenvolvedor Full Stack | Especialista em Digital Systems</p>
<p class="description">Transformando ideias em soluções digitais inovadoras...</p>
```

### Serviços
**Arquivo**: `index.html`

```html
<div class="card">
    <div class="card-icon">
        <i class="fas fa-globe"></i>
    </div>
    <h3>Web Development</h3>
    <p>Descrição do seu serviço aqui...</p>
</div>
```

### Sobre
**Arquivo**: `index.html`

```html
<h2>Sobre Mim</h2>
<p>Seu texto de descrição aqui...</p>

<div class="feature">
    <div class="feature-icon">
        <i class="fas fa-check-circle"></i>
    </div>
    <div class="feature-text">
        <h4>Seu Diferencial</h4>
        <p>Descrição...</p>
    </div>
</div>
```

---

## 🏷️ Tipos de Ícones Disponíveis

FontAwesome oferece centenas de ícones. Alguns populares:

```
fa-code              - Código
fa-rocket            - Lançamento/Speed
fa-shield-alt        - Segurança
fa-lock              - Bloqueado
fa-unlock            - Desbloqueado
fa-database          - Database
fa-server            - Servidor
fa-cloud             - Nuvem
fa-refresh           - Atualizar
fa-download          - Download
fa-upload            - Upload
fa-arrow-right       - Seta
fa-star              - Estrela
fa-heart             - Coração
fa-thumbs-up         - Polegar
fa-check             - Checkmark
fa-times             - X/Fechar
fa-bell              - Notificação
```

**Trocar ícone**: Procure em [fontawesome.com/icons](https://fontawesome.com/icons) e substitua a classe.

---

## 🔧 Trocar Logo

1. Coloque sua imagem na pasta `imagens/`
2. Atualize em `index.html`:

```html
<img src="imagens/seu-logo.png" alt="Logo">
```

---

## 🎯 Checklist de Customização

- [ ] Número WhatsApp atualizado
- [ ] Email configurado
- [ ] Telefone adicionado
- [ ] Endereço preenchido
- [ ] Nome/Logo personalizado
- [ ] Redes sociais adicionadas
- [ ] Textos principais revisados
- [ ] Estatísticas atualizadas
- [ ] Serviços descritos
- [ ] Sobre seção completa
- [ ] Cores ajustadas (se desejado)
- [ ] Logo/imagens trocadas

---

## 📤 Deploy

### Opção 1: GitHub Pages (Grátis)
1. Crie repo no GitHub
2. Push dos arquivos
3. Ative GitHub Pages nas settings
4. Site ao vivo em `usuario.github.io/repo-name`

### Opção 2: Vercel (Grátis)
1. Connect GitHub repo no [vercel.com](https://vercel.com)
2. Deploy automático
3. URL customizada disponível

### Opção 3: Netlify (Grátis)
1. Drag & drop folder ou connect GitHub
2. Deploy em minutos
3. HTTPS automático

---

**Dúvidas?** Consulte o arquivo `README.md` para mais informações!
