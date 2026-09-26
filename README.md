# GTRAVEL HUB — Curadoria de Viagens

Landing page institucional e de conversão da **GTRAVEL HUB**, agência de turismo e consultoria especializada em viagens sob medida, roteiros personalizados, pacotes selecionados, Honeymoon (Lua de Mel) e Babymoon (Gestantes).

Fundada por **Gersiele Lima**, a GTRAVEL HUB conecta viajantes às melhores experiências do Brasil e do mundo com curadoria exclusiva e suporte completo.

---

## 🌟 Principais Recursos

- **Coleções de Viagem:** Destaques para *Pacotes Selecionados*, *Honeymoon*, *Babymoon* e *Viagens Sob Medida*.
- **Vitrine de Destinos com Filtros:** Filtro dinâmico entre *Todos*, *Brasil & Serra*, *Lua de Mel & Romance*, *Internacional & Europa* e *Exóticos & Experiências*.
- **Formulário Qualificador Inteligente:** Coleta dados estruturados do viajante (datas flexíveis, faixa de investimento, destino, estilo) e direciona atendimento qualificado direto para o WhatsApp oficial.
- **Design Responsivo & Alta Performance:** Tipografia elegante (Cinzel + Montserrat), paleta premium (Navy Blue, Ouro Dourado, Off-White), microinterações fluidas e total otimização mobile.
- **Integração Vercel Ready:** Headers de cache imutável para assets estáticos e cabeçalhos de segurança pré-configurados em `vercel.json`.

---

## 📁 Estrutura do Repositório

```text
.
├── assets/
│   ├── css/
│   │   ├── style.css         # Folha de estilo base da plataforma
│   │   ├── style-v2.css      # Ajustes visuais e componentes intermediários
│   │   └── style-v3.css      # Estilização refinada, chips e microinterações
│   ├── js/
│   │   └── main-v3.js        # Lógica dos filtros, drawer mobile, modal e formulário
│   └── images/               # Fotos oficiais, logotipos, selos e ícones
├── docs/                     # Briefings, notas de UI/UX e identidade visual
├── .gitignore                # Regras de exclusão do Git
├── index.html                # Página principal (versão definitiva)
├── README.md                 # Documentação do projeto
└── vercel.json               # Configurações de deploy e cache da Vercel
```

---

## 🚀 Como Rodar Localmente

Basta servir os arquivos estáticos em qualquer servidor HTTP local:

```bash
# Com Python 3:
python3 -m http.server 8080

# Ou com Node.js (via serve/npx):
npx serve .
```

Acesse em seu navegador: [http://localhost:8080](http://localhost:8080).

---

## ☁️ Deploy na Vercel

1. Suba este repositório para o seu GitHub.
2. Acesse o painel da [Vercel](https://vercel.com) e clique em **Add New Project**.
3. Importe o repositório `agencia-viagens` (ou nome escolhido no GitHub).
4. Em **Framework Preset**, selecione **Other** (nenhum build step ou comando é necessário).
5. Clique em **Deploy**. O site estará no ar em segundos com SSL automático e CDN global.
