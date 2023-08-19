<h1 align="center">
    Projeto Atendimento Clínico Simplificado
</h1>

```javascript
@Autores Johnny Carvaho - Lucas Lemes - Alessandro Schimidt - Victor Nemo
@Date 2023
```

## Principais tecnologias utilizadas: <br/>
<p>
  <img align="center" alt="Angular" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" />
  <img align="center" alt="TS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
  <img align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
  <img align="center" alt="Express" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
  <img align="center" alt="PrismaORM" height="30" width="40" src="./front-end/assets/img/icons/icons-prisma-orm.svg" />
</p>

## Resumo do projeto

Este é um projeto universitário que tem como objetivo, colocar em prática os temas abordado ao longo da discimplina. São 2 disciplinas que esse projeto vai cobrir,
````Desenvolvimento Orientado a Reuso de Software e Medição```` e ````Análise de Processos e Produtos de Software````. Esse projeto será executado em etapas, conforme ao disciplina avança
as etaps serão concluídas, os critérios a serem avaliados nesse projeto serão os seguintes:

### Desenvolvimento orientado a reuso de software
- RA1 (Resultado de aprendizagem 1):<br>
````Conceber planejamento no contexto das abordagens de desenvolvimento para reuso e com reuso de software de acordo com o domínio especificado.````<br>
  - EC (Elemento de Competência): <br>
  ````Planejar arquiteturas inovadoras e seguras de software baseadas em padrões e normas, selecionando configuração adequada de hardware e software````<br>
- RA2 (Resultado de aprendizagem):<br>
````Gerenciar com testes o processo para gestão da reutilização de produtos de software de acordo com o domínio especificado.````<br>
  - EC (Elemento de Competência):<br>
  ````Testar produtos de software em relação aos requisitos e às especificações de forma sistematizada, integrada e autorregulada````<br>
- RA3 (Resultado de aprendizagem):<br>
````Desenvolver Linhas de Produto e Processo de Software de acordo com o planejamento do domínio.````<br>
  - EC (Elemento de competência):<br>
  ````Codificar produtos de software utilizando boas práticas de programação, conforme os requisitos e as especificações, de forma sistematizada e colaborativa````
### Medição e análise de processos e produtos de software
- RA1 (Resultado de aprendizagem 1):<br>
````Elaborar medições de processos de software de acordo com o contexto especificado.````<br>
  - EC (Elemento de Competência): <br>
  ````Representar com precisão processos na linguagem mais apropriada ao contexto, a partir da análise dos diferentes cenários de negócios.````<br>
- RA2 (Resultado de aprendizagem):<br>
````Desenvolver medições de produtos de software de acordo com o contexto especificado.````<br>
  - EC (Elemento de Competência):<br>
  ````Criar modelos de soluções computacionais inovadores, utilizando a linguagem mais apropriada ao contexto para dados estruturados e não estruturados.````<br>
- RA3 (Resultado de aprendizagem):<br>
````Estimar métricas de processos de software durante o desenvolvido da funcionalidade.````<br>
  - EC (Elemento de competência):<br>
  ````Analisar fenômenos e comportamentos de projetos por meio de processos adequados na medição, conforme preceitos éticos e legais.````
- RA4 (Resultado de aprendizagem 1):<br>
````Planejar métricas de processo de software de acordo com a funcionalidade proposta.````<br>
  - EC (Elemento de Competência): <br>
  ````Analisar fenômenos e comportamentos de processos por meio de métodos quantitativos, de forma crítica e ética.````<br>
- RA5 (Resultado de aprendizagem):<br>
````Conduzir com precisão estimativas e planejamento de projetos de software.````<br>
  - EC (Elemento de Competência):<br>
  ````Gerenciar portfólio de projetos de tecnologia da informação, priorizando critérios alinhados ao planejamento estratégico da organização````<br>

## Etapas do projeto
<h4>
<img align="center" height="20" width="20" src="./front-end/assets/img/icons/loading.gif"> - Concluído. <br>
<img align="center" height="20" width="20" src="./front-end/assets/img/icons/ok.png"> - Em andamento.
</h4>

## Como executar o projeto

### Front End
- Node em <a>https://nodejs.org/en/download/</a>

Após a instalação e configuração do Node, deve-se instalar as seguintes ferramentas através do terminal:

- Type Script ```npm i -g typescript```
- Angular CLI ```npm i @angular/cli```

Após a instalação das ferramentas acima, deve-se executar a instalação dos pacotes através do seguinte comando:

- Node_Modules ```npm install```

Após a instalação dos pacotes, deve-se iniciar o projeto utilizando o seguinte comando:

- Iniciar servidor Angular ```ng serve```

**OBS:**
Caso ocorra algum erro de execução, verifique em **node_modules** se estão instalados todos os pacotes 
existentes em :
```javascript 
package.json
```
Caso note que falta algun, deverá instalar manualmente através do terminal usando o comando ```npm install <nome do pacote>```.

<!-- ### Back End
````
Para que o código funcione corretamente deve-se ser instalados as seguintes ferramentas:
````

- Xampp em <a>https://www.apachefriends.org/download.html</a>
 
 Após a instalação e configuração do xampp deve-se seguir os seguintes passos:

 #### Passo 1
 - Navegar até a pasta back-end neste repositório, copiar a pasta salao.
 - Navegar em sua máquina até a pasta xampp/htdocs e colar a pasta copiada (salao).
 #### Passo 2
 - Navegar até a pasta back-end/sql neste repositório e copiar a pasta data.
 - Navegar em sua máquina até a pasta xampp/mysql e colar a pasta copiada (data).

Após essas configurações, deve-se inicializar o servidos apache e o mysql diretamente no painel de controle do xampp, feito isso basta recarregar a página http://localhost:4200/ ou a porta que vocie selecionou para rodar o Angular através do ```ng serve```.

Para ver os dados sendo inseridos na tabela, basta navegar até http://localhost/phpmyadmin/ ou abrir o painel de controle do xampp (XAMPP Control Painel) e clicar no botão Admin do MySQL em em seguida abris a tabela que deseja consultar dentro do database salaosimp. -->
