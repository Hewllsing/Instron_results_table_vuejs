📊 Instron Results Table - Vue.js

Sistema desenvolvido em Vue.js para visualização de resultados provenientes da máquina Instron através de uma API conectada a uma base de dados SQL Server.

O objetivo do projeto é apresentar os resultados dos testes de forma dinâmica, organizada e em tempo real, consumindo dados armazenados na tabela resultados.

🚀 Tecnologias Utilizadas
Vue.js 3
Vite
JavaScript
Node.js
Axios
SQL Server
Express.js

📁 Estrutura do Projeto
src/
├── services/
│   └── instronRealService.js
│
├── components/
│   └── InstronReal/
│       ├── InstronReal.vue
│       ├── InstronReal.js
│       └── InstronReal.css
│
├── App.vue
└── main.js

⚙️ Funcionalidades
✅ Consumo de API REST
✅ Ligação com SQL Server
✅ Atualização dinâmica dos resultados
✅ Renderização automática de tabelas
✅ Estrutura modular em componentes
✅ Organização separada entre lógica, estilos e interface
✅ Tratamento básico de erros da API

🗄️ Estrutura da Base de Dados

Tabela utilizada:

resultados

Campos:

Campo	Tipo
id	int
table_number	int
result_json	nvarchar(max)
created_at	datetime

📦 Instalação
1. Clonar o projeto
git clone https://github.com/Hewllsing/Instron_results_table_vuejs.git
2. Entrar na pasta do projeto
cd Instron_results_table_vuejs

🔧 Frontend
Instalar dependências
npm install
Executar projeto
npm run dev

🔌 Backend

Entrar na pasta do backend:

cd backend
Instalar dependências
npm install
Executar servidor
npm run dev

🌐 API

Exemplo de endpoint:

GET /api/resultados

Resposta esperada:

{
  "tableNumber": 1,
  "data": [
    [
      null,
      "S0 [mm^2]",
      "Rp0.2 [N/mm^2]",
      "Rm [N/mm^2]",
      "Ag [%]",
      "A 50mm [%]",
      "Status"
    ],
    [
      "1",
      "39.17",
      "243",
      "260",
      "8.42",
      "13.03",
      "ok"
    ]
  ]
}

🧠 Como Funciona
O backend conecta ao SQL Server
Os dados da tabela resultados são lidos
O campo result_json é convertido para objeto JavaScript
O frontend consome a API
As tabelas são renderizadas automaticamente em Vue.js
📸 Interface

O sistema apresenta:

Número da tabela
Dados dos testes
Estrutura dinâmica baseada no JSON recebido
Atualização automática conforme novos inserts na base de dados

🛠️ Melhorias Futuras
Atualização em tempo real com WebSockets
Paginação dos resultados
Filtros por data
Exportação para Excel/PDF
Dashboard com gráficos
Sistema de autenticação
Histórico de testes

👨‍💻 Autor

Desenvolvido por Leonardo Souza

Software Developer
Vue.js • Node.js • SQL Server
Integrações industriais e APIs

📄 Licença

Este projeto é destinado para fins de estudo, demonstração técnica e integração de sistemas industriais.