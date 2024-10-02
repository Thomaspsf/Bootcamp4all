use thomas;
create table aluno(
	codigo int primary key,
	nome varchar(60) not null,
	dt_nasc date not null,
	cpf varchar(15) not null,
	tel varchar(15),
	email varchar(60)
);

use thomas;
create table aluno(
	codigo int primary key,
	nome varchar(60) not null,
	dt_nasc date not null,
	cpf varchar(15) not null,
	tel varchar(15),
	email varchar(60)
);

insert into aluno(codigo,nome,dt_nasc,cpf,tel,email)
values (1,'Thomas','1990-07-09','076.308.229-52','999004022','thomas_psf@hotmail.com');

select * from aluno

insert into aluno(codigo,nome,dt_nasc,cpf,tel,email)
values (2,'Douglas','1994-07-19','087.388.239-55','999009022','douglas_vsf@hotmail.com');

insert into aluno(codigo,nome,dt_nasc,cpf,tel,email)
values (3,'joao','1999-07-28','874.225.845-52','998456658','jooao@hotmail.com');

insert into aluno(codigo,nome,dt_nasc,cpf,tel,email)
values (4,'guilherme','1980-07-09','987.254.978-52','998745665','guigui@hotmail.com');

insert into aluno(codigo,nome,dt_nasc,cpf,tel,email)
values (5,'rafael','1998-09-12','879.324.548-52','875698544','rafa@hotmail.com');

select * from aluno
where nome like '%glas%';

create database bootcamp;

select * from produto
where UNIDADE like 'UN';

select * from produto p 
where CODIGO_CLASSIFICACAO = '020' and p.QUANTIDADE > 20;

select * from produto p 
where p.DESCRICAO like '%bala%' and QUANTIDADE > 6 and CODIGO_CLASSIFICACAO = 3;

select * from produto p 
where DESCRICAO like '%martelo%' and CODIGO_CLASSIFICACAO <> 1;

select * from produto p 
where CODIGO_CLASSIFICACAO = 002 and UNIDADE like '%CX%' and quantidade < 5;

select * from produto p 
where p.CODIGO_CLASSIFICACAO = 002 and UNIDADE <> 'CX' and QUANTIDADE >= 10 and QUANTIDADE <=50;

select * from produto p 
where (CODIGO_CLASSIFICACAO = 021 and DESCRICAO like '%camiseta%') or (CODIGO_CLASSIFICACAO = 008 and DESCRICAO like '%bola%');

select count(*) as total from produto p 
where UNIDADE = 'PCT' and CODIGO_CLASSIFICACAO = 003;

/* mostrando a quantidade*/

select count(distinct (UNIDADE))from produto p 
where CODIGO_CLASSIFICACAO = 006

select distinct (UNIDADE) from produto p 
where CODIGO_CLASSIFICACAO = 006

select count(*) from produto p 
where QUANTIDADE > 6 and QUANTIDADE < 10;

select * from produto p 
where DESCRICAO like 'oleo%' and UNIDADE = 'L';

select *, (QUANTIDADE * VALOR) as Total from produto p 
where CODIGO_CLASSIFICACAO = 15 and UNIDADE = 'CX';