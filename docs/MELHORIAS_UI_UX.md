# Diretrizes de UI/UX e Lista de Melhorias — GTRAVEL HUB

> **Documento de referência para evolução contínua da interface e experiência do usuário (UI/UX), fundamentado nos princípios de Nielsen Norman Group (NN/g), Refactoring UI (Steve Schoger & Adam Wathan), Baymard Institute, Don Norman e diretrizes WCAG 2.1 AA / Apple HIG.**

---

## 📊 Diagnóstico Executivo

O site da **GTRAVEL HUB** possui uma base visual e conceitual de altíssimo nível, perfeitamente posicionada no segmento de **turismo de luxo / concierge de viagens**. 

* **Identidade Visual:** Paleta refinada (*Midnight Navy* `#111427` + *Ouro Champanhe* `#dec07f`) com excelente atmosfera de exclusividade.
* **Tipografia:** Combinação harmoniosa entre *Cinzel* (elegância serifada em títulos) e *Montserrat* (modernidade geométrica para leitura fluida).
* **Posicionamento de Autoridade:** O *Trust Bar* no Hero, a ênfase nas 3 Linhas Exclusivas (com selo de apoio na Linha Babymoon) e a seção pessoal da fundadora Gersiele Lima criam excelente valor e credibilidade imediata.

As melhorias catalogadas abaixo visam refinar a **usabilidade mobile**, a **taxa de conversão (CRO)**, a **acessibilidade** e a **coerência estética**.

---

## 📌 Checklist de Melhorias e Adequações

### 1. Usabilidade de Formulários & Conversão (Baymard Institute & CXL)

- [ ] **Campo de Contato de Segurança no Formulário (`#travelPlannerForm`):**
  - **Problema:** O formulário redireciona para o WhatsApp via URL montada. Caso o usuário feche o navegador ou esteja em um computador sem WhatsApp Web logado, o lead é perdido sem registro.
  - **Solução:** Adicionar um campo de telefone/WhatsApp com máscara (`(00) 00000-0000`) para garantir captura e redundância no contato com o cliente.
- [ ] **Pills/Seletores Rápidos para Datas de Viagem (`#plannerDate`):**
  - **Problema:** Campo de texto livre exige que usuários mobile abram o teclado e digitem.
  - **Solução:** Implementar botões de seleção rápida em formato de pílulas (*chips*), como:
    - `Próximo Mês`
    - `Em até 3 meses`
    - `Férias / Fim de Ano`
    - `Apenas pesquisando`

---

### 2. Hierarquia Visual & Lei de Hick (Refactoring UI)

- [ ] **Eliminar Competição de Botões nos Cards das 3 Linhas (`.comparison-grid`):**
  - **Problema:** Cada card apresenta **dois botões cheios empilhados** de peso visual similar (ex: *"Explore Nossos Roteiros"* vs *"Descubra o Próximo Destino"*), gerando atrito e sobrecarga de decisão (*Lei de Hick*).
  - **Solução:** Manter apenas **um botão principal de destaque** por card (CTA com estilo dourado `btn-gold`). O link secundário deve ser transformado em um link sutil com seta (`Ver detalhes dos destinos →`) ou unificado ao fluxo principal.

---

### 3. Coerência Iconográfica & Design System

- [ ] **Substituição de Emojis por Ícones Vetoriais SVG (`.services-grid`):**
  - **Problema:** A seção de serviços usa emojis nativos do sistema (`✈️`, `🏨`, `🚢`, `🛡️`), que renderizam de maneiras imprevisíveis entre iOS, Android e Windows, destoando da sofisticação da marca.
  - **Solução:** Substituir todos os emojis por ícones vetoriais SVG monocromáticos em tom dourado com traço fino (*stroke: 1.5px / 2px*, padrões de bibliotecas como *Lucide*, *Phosphor* ou *Feather Icons*).

---

### 4. Ergonomia Mobile & Navegação (Thumb Zone / Apple HIG)

- [ ] **Scroll Horizontal com Snap nos Filtros de Destino (`.destination-filters`):**
  - **Problema:** Em telas menores (360px a 390px), os 5 botões de filtro quebram em várias linhas, empurrando o conteúdo principal para baixo.
  - **Solução:** Aplicar contêiner com rolagem horizontal fluida no mobile (`overflow-x: auto; white-space: nowrap; -webkit-overflow-scrolling: touch; scrollbar-width: none;`), padrão adotado por apps como Airbnb e Booking.
- [ ] **Área Segura do Botão Flutuante de WhatsApp (`.whatsapp-floating`):**
  - **Problema:** O botão fixo pode sobrepor elementos interativos de rodapé ou botões de envio em telas estreitas.
  - **Solução:** Garantir padding inferior adicional no rodapé (`padding-bottom: 90px;` no mobile) para evitar sobreposição de elementos clicáveis.

---

### 5. Prova Social Autêntica & Gatilhos Mentais (Cialdini & NN/g)

- [ ] **Depoimentos com Fotos Reais dos Viajantes:**
  - **Problema:** Fotos de modelos de estúdio em bancos de imagens reduzem a sensação de autenticidade.
  - **Solução:** Substituir gradualmente por fotos reais tiradas pelos clientes durante as viagens (cenário natural, brinde, pé na areia) ou prints autorizados de mensagens de agradecimento no WhatsApp (com nomes e números protegidos).
- [ ] **Métricas de Impacto / Régua de Confiança:**
  - **Solução:** Adicionar um componente de estatísticas de impacto antes da seção da fundadora (ex: `+500 roteiros desenhados`, `100% atendimento humanizado`, `Nota 5.0 no Google`).

---

### 6. Acessibilidade (WCAG 2.1 AA) & Performance (Core Web Vitals)

- [ ] **Contraste de Textos Secundários (`--color-text-muted`):**
  - **Problema:** O tom `#8e95ae` sobre o fundo `#111427` em fontes pequenas (0.75rem - 0.8rem) pode ficar próximo ao limite de 4.5:1 da WCAG AA em ambientes de luz solar intensa.
  - **Solução:** Clarear ligeiramente o texto secundário para nuances como `#a2a9c2` ou `#b4bbd4`.
- [ ] **Acessibilidade no Acordeão do FAQ (`.faq-item`):**
  - **Problema:** As perguntas utilizam `<div class="faq-question">`, sem foco de teclado nem leitores de tela nativos.
  - **Solução:** Converter para tags `<button class="faq-question">` com atributos `aria-expanded="false"` e `aria-controls="faq-answer-N"`.
- [ ] **Prevenção de CLS (Cumulative Layout Shift) em Imagens:**
  - **Solução:** Especificar atributos de proporção `aspect-ratio` ou dimensões `width` e `height` nas imagens remotas do Unsplash, prevenindo saltos na tela durante o carregamento em conexões 4G/3G.

---

*Arquivo gerado em 25/09/2026 para documentar a evolução da interface da GTRAVEL HUB.*
