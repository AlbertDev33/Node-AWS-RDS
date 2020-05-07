# NodeJS com Banco Relacional (PostgreSQL rodando no RDS da AWS)

## Objetivo

Desenvolver uma API, utilizando o Knex, integrando o PostgreSQL (instância RDS da AWS), ao Node.js

## Descrição

Esse projeto integra o Node.js à uma instância RDS da AWS. O BD utilizado na implementação do código foi o PostgreSQL.

API utilizando requisitos REST.

Foi utilizado o padrão MVC.

## Recursos utilizados

Instância RDS da AWS rodando o PostegreSQL

Postbird.

Insomnia.

## Por que usar o RDS?

O RDS é um serviço de banco de dados da AWS que entrega uma instância pronta e configurada para o cliente apenas inserir os recursos desejados nesse banco. Em um ambiente de produção, a agilidade para subir uma instância de BD pode ser bastante vantajosa.

O RDS permite diversas configurações automatizadas, sem a necessidade da ação do desenvolvedor, como por exemplo, snapshots, agendamento de janeja de manutenção, autoscaling de recursos e outros.

Uma das maiores vantagens que eu vejo na utilização do RDS é a possibilidade de Alta Disponibilidade, ou seja, nessa configuração seu BD tem uma disponibilidade de 99,99% do tempo, ou seja, é praticamente impossível que esse recurso fique fora, ou seja, garantindo que sua aplicação praticamente nunca tenha indisponibilidade por causa do BD.

## Algumas observações importantes

A região escolhida para rodar o RDS foi a Virgínia. Isso pode causar maior latência nas respostas. Em um projeto rodando em produção, pode ser verificar a utilização da região de São Paulo, apesar do maior preço nesta.

# References

[Knex](http://knexjs.org/)

[Informações Sobre o RDS](https://aws.amazon.com/pt/rds/)

[Guia Rápido Knex](https://devhints.io/knex)

[Auto Update Trigger](https://stackoverflow.com/questions/36728899/knex-js-auto-update-trigger/48028011#48028011)
