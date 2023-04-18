npm init -y npm i eslint -D npx eslint --init npm init @eslint/config

confirgs(Yes,NodeNguide,standard,json,yes)

Ajuste codigo no arquivo .eslintrc.json "no-useless-constructor ": "off"

Ferramenta de teste do node utilizado(Vitest) npm i vitest -D

a fim de rodar teste rodar o npx vitest

ou ir no packege.json e dentro de scripts criar o "test":"vitest" e a partir dessa config rodar so npm test

///////////////////////////////////////////////////////////

O que é um vitest?

O Vitest é uma estrutura de teste de unidade nativa do Vite. Rapido e facil de fazer a instalação sem muitas configurações . Sendo compativel com o Jest que é uma estutura de teste unitaria do node também.

Porque Vitest ? Usar o servidor Vite dev para transformar seus arquivos durante o teste permite a criação de um executor simples que não precisa lidar com a complexidade de transformar arquivos de origem e pode se concentrar apenas em fornecer o melhor DX durante o teste. Ele também inclui os recursos mais comuns necessários ao configurar seus testes de unidade (simulação, instantâneos, cobertura). O Vitest se preocupa muito com o desempenho e usa threads Worker para executar o máximo possível em paralelo.