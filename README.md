# 🚀 Portfólio - Guilherme Escobar Lopes

Portfólio profissional moderno e responsivo desenvolvido para apresentar minhas habilidades, experiência e projetos como Fullstack Developer e Machine Learning Engineer.

## ✨ Características

- **Design Moderno**: Interface dark mode com gradientes e animações suaves
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Multilíngue**: Suporte completo para Português, Inglês e Espanhol 🌐
- **Performance**: HTML, CSS e JavaScript puros - sem frameworks pesados
- **Animações Interativas**: Efeitos de scroll, hover e transições fluidas
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Acessível**: Seguindo boas práticas de acessibilidade web

## 📋 Seções

1. **Hero/Início**: Apresentação com chamadas para ação
2. **Sobre**: Informações pessoais e destaques profissionais
3. **Experiência**: Timeline detalhada da carreira profissional
4. **Projetos**: Showcase dos principais projetos desenvolvidos
5. **Habilidades**: Visualização das competências técnicas com barras de progresso
6. **Contato**: Informações de contato e links sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com variáveis CSS, Grid, Flexbox, animações
- **JavaScript**: Interatividade, scroll effects, navegação mobile, sistema de i18n
- **Font Awesome**: Ícones
- **Google Fonts (Inter)**: Tipografia moderna

## 🌐 Sistema de Localização (i18n)

O site oferece suporte completo para três idiomas:

- 🇧🇷 **Português** (padrão)
- 🇺🇸 **Inglês**
- 🇪🇸 **Espanhol**

### Como Funciona

1. **Seletor de Idioma**: Localizado na barra de navegação superior
2. **Persistência**: O idioma escolhido é salvo no `localStorage` do navegador
3. **Troca Dinâmica**: Todo o conteúdo do site é atualizado instantaneamente
4. **Sem Recarregamento**: Mudança de idioma sem necessidade de recarregar a página

### Estrutura de Tradução

As traduções estão organizadas no arquivo `translations.js`:

```javascript
const translations = {
    pt: { /* traduções em português */ },
    en: { /* traduções em inglês */ },
    es: { /* traduções em espanhol */ }
};
```

### Adicionar Novo Idioma

1. Adicione as traduções no objeto `translations` em `translations.js`
2. Adicione um botão no seletor de idiomas em `index.html`
3. O sistema detectará automaticamente o novo idioma

## 🚀 Como Usar

### Opção 1: Abrir Localmente

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` em seu navegador

### Opção 2: Servidor Local

```bash
# Usando Python 3
python3 -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## 📱 Compatibilidade

- ✅ Chrome/Edge (últimas versões)
- ✅ Firefox (últimas versões)
- ✅ Safari (últimas versões)
- ✅ Mobile browsers (iOS/Android)

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `styles.css` nas variáveis CSS:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #3b82f6;
    --accent-color: #60a5fa;
    /* ... */
}
```

### Conteúdo

Edite o arquivo `index.html` para atualizar:
- Informações pessoais
- Experiências profissionais
- Projetos
- Habilidades
- Links de contato

## 📄 Estrutura de Arquivos

```
portfolio/
│
├── index.html          # Estrutura principal
├── styles.css          # Estilos e animações
├── script.js           # Interatividade
├── translations.js     # Sistema de localização (i18n)
└── README.md          # Documentação
```

## 🌟 Features Técnicas

- **Smooth Scrolling**: Navegação suave entre seções
- **Intersection Observer**: Animações ao entrar no viewport
- **Responsive Navigation**: Menu hamburger para mobile
- **Language Switcher**: Sistema de tradução dinâmico sem recarregar página
- **LocalStorage**: Persistência de preferências do usuário (idioma)
- **Scroll Indicator**: Mouse animado na hero section
- **Active Nav Links**: Destaque automático do link ativo
- **Scroll to Top**: Botão flutuante para voltar ao topo
- **Particle Effects**: Efeitos visuais sutis (desktop only)

## 📞 Contato

- **Email**: guieslopes99@hotmail.com
- **LinkedIn**: [Guilherme Escobar](https://www.linkedin.com/in/guilherme-escobar-21b873164/)
- **GitHub**: [guiesco](https://github.com/guiesco)
- **Localização**: Florianópolis, SC, Brasil

## 📝 Licença

Este projeto é de código aberto e está disponível para uso pessoal e educacional.

---

Desenvolvido com ❤️ e muito ☕ por Guilherme Escobar
