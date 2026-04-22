# ⏱️ Cronômetro Web com save local

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)

Um cronômetro de interface dividida que gerencia de forma independente o tempo da sua sessão atual e o tempo total acumulado. O progresso é salvo localmente no navegador, garantindo que você não perca seu tempo registrado mesmo se fechar/reiniciar a aba.

## 📋 Sumário
- [Tecnologias](#-tecnologias)
- [Funcionalidades](#-funcionalidades)
- [Arquitetura do Projeto](#-arquitetura-do-projeto)
- [O que Aprendi](#-o-que-aprendi)
- [Como Rodar](#-como-rodar)

---

## 🛠 Tecnologias
- **HTML5**: Estrutura semântica dividida em seções claras.
- **CSS3**: Layout utilizando Flexbox para centralização e divisão de tela (50/50), além de variáveis (`:root`) para controle do tema de cores.
- **JavaScript (ES6+)**: Lógica de contagem de tempo, manipulação do DOM e persistência de dados.

## ✨ Funcionalidades
- **Duplo Acompanhamento:** Monitora o tempo da sessão atual (iniciada/pausada pelo usuário) e soma automaticamente ao "Tempo Total".
- **Persistência de Dados:** Utiliza o `localStorage` do navegador e o evento `beforeunload` para salvar automaticamente as horas, minutos e segundos totais, prevenindo perda de dados ao recarregar a página.
- **Formatação Dinâmica:** O display se adapta automaticamente, exibindo `MM:SS` por padrão e adicionando a casa das horas (`HH:MM:SS`) apenas quando necessário, graças ao uso do `padStart()`.
- **Prevenção de Erros:** Exige confirmação do usuário (`confirm()`) antes de zerar o tempo total acumulado.

## 📂 Arquitetura do Projeto
O projeto segue a separação clássica do desenvolvimento web:
* `index.html`: Define a estrutura da página, os displays numéricos e os botões de interação.
* `style.css`: Gerencia a identidade visual, as transições suaves dos botões e o layout de colunas usando `display: flex`.
* `script.js`: O motor da aplicação. Gerencia os intervalos (`setInterval`), atualiza os elementos em tela e lida com o armazenamento local.

## 📚 O que Aprendi
* **Armazenamento Local:** Como gravar, ler e converter dados do `localStorage` para manter o estado da aplicação entre as sessões.
* **Manipulação de Tempo (setInterval):** Criação de loops de tempo precisos para incrementar segundos, minutos e horas.
* **Operadores Condicionais (Ternários):** Uso eficiente de `condição ? verdadeiro : falso` para alternar os ícones de Play/Pause e formatar os displays de tempo.
* **Layout Flexbox:** Domínio da propriedade `flex: 1` para dividir a tela perfeitamente em duas seções responsivas.

## 🚀 Como Rodar

1. **Baixe os arquivos do projeto** (`index.html`, `style.css`, `script.js`).
2. **Abra o arquivo `index.html`** em qualquer navegador web moderno (Chrome, Edge, Firefox, etc.).
3. Clique no botão de **Play (▶)** para iniciar a sessão e no de **Pause (⏸)** para transferir o tempo para o display total.
