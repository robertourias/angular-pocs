# AngularPocs

Projeto gerado com [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

## Quick Start & Documentation

[Nx Docs](https://nx.dev/angular)

[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)

[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

## Projetos

| ALIAS               | NOME                        |
| ------------------- | --------------------------- |
| `calculadora`      | Calculadora |
| `material-examples`| Exemplos de uso do Angular Material Design |
| `meat-application` | Aplicação de um Restaurante |

## Adicionando recursos ao seu workspace

O Nx oferece suporte a muitos plug-ins que adicionam recursos para desenvolver diferentes tipos de aplicativos e diferentes ferramentas.

Esses recursos incluem a geração de aplicativos, bibliotecas, etc, bem como devtools para testar e construir projetos também.

Abaixo estão nossos plug-ins principais:

- [Angular](https://angular.io)
  - `ng add @nrwl/angular`


## Gerando uma aplicação

Rode `ng g @nrwl/angular:app my-app` para gerar uma aplicação

## Excluindo uma aplicação

Rode `nx g @nrwl/workspace:remove nome-app-or-lib` para excluir uma aplicação

## Gerando uma lib

Rode `ng g @nrwl/angular:lib my-lib` para gerar uma lib.

## Development server

Rode `ng serve my-app` para rodar o app em dev. Abra http://localhost:4200/. O app atualiza automaticamente enquanto sofre alterações.

## Code scaffolding

Rode `ng g component my-component --project=my-app` para um novo componente.

## Build

Rode `ng build my-app` para um build do projeto. A saida ficaré em `dist/`. Use a flag `--prod` para um buil de produção.

## Rodando testes unitários

Rode `ng test my-app` [Jest](https://jestjs.io).

## Rodando testes end-to-end 

Rode `ng e2e my-app` [Cypress](https://www.cypress.io).

## Entendendo seu workspace

Rode `nx dep-graph` para ver um diagrama de dependencias do seu projeto.
