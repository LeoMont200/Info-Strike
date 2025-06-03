create database InfoStrike;
use InfoStrike;

create table arteMarcial (
	idarteMarcial int primary key auto_increment,
	nome varchar(45),
	tipo varchar(15) check (tipo in ('striking', 'grappling')),
	descricao varchar(500),
	tendencia varchar(30) check (tendencia in ('ofensiva', 'defensiva', 'equilibrada')),
    paisOrigem varchar(30),
	r1 int,
	r2 int,
	r3 int,
	r4 int,
	r5 int,
	r6 int,
	r7 int
);

create table usuario (
	idusuario int primary key auto_increment,
	nome varchar(45),
	email varchar(50),
	senha varchar(45)
);

create table resposta (
	idresposta int primary key auto_increment,
	fkusuario int,
    fkarteMarcial int,
	r1 int,
	r2 int,
	r3 int,
	r4 int,
	r5 int,
	r6 int,
	r7 int,
	foreign key (fkusuario) references usuario(idusuario),
	foreign key (fkarteMarcial) references arteMarcial(idartemarcial)
);

insert into arteMarcial (nome, tipo, descricao, tendencia, paisOrigem, r1, r2, r3, r4, r5, r6, r7) values
('boxe', 'striking', 'Foca em socos poderosos e rápidos, amplificados pelo jogo de pés estratégico junto com esquivas e bloqueios.', 'equilibrada', 'Estados Unidos',
10, 20, 30, 60, 30, 50, 50),
('muay thai', 'striking', 'A "arte das oito armas" ultiliza chutes, socos, cotoveladas e joelhadas para incapacitação do oponente no menor tempo possível. Combinado com um jogo de clinch avançado e rasteiras avassaladoras.', 'ofensiva', 'Tailândia',
30, 30, 50, 70, 30, 60, 70),
('taekwondo', 'striking', 'O taekwondo se especializa em chutes extremamente fortes, dos quais ultilizam movimentos acrobáticos que são úteis para maior ganho de alcance e potência.', 'ofensiva', 'Coréia do Sul',
60, 70, 40, 50, 40, 50, 90),
('karatê', 'striking', 'Aprender karatê é muito mais do que aprender como lutar, é aprender a ter autocontrole e viver em um caminho de paz, no entanto seus golpes rápidos como um trovão podem facilmente parar qualquer um que tente acabar com essa paz.', 'equilibrada', 'Japão',
60, 60, 60, 40, 70, 40, 60),
('judô', 'grappling', 'O "caminho suave" é sobre ultilizar de movimentos de alavancagem para desequilibrar e arremessar o oponente, acertando ele com a própria terra ao invés do corpo.', 'defensiva', 'Japão',
80, 40, 90, 70, 60, 70, 20),
('jiu-jitsu brasileiro (bjj)', 'grappling', 'O bjj é sobre imobilizar seu oponente no chão como uma cobra, finalizando-o com enforcamentos, chaves de braço, chaves de tornozelo e qualquer outro tipo de golpe que faça o oponente desistir.', 'defensiva', 'Brasil',
90, 20, 90, 90, 40, 90, 10),
('wrestling', 'grappling', 'Uma das artes marciais mais antigas, e uma das mais eficientes, focada em derrubar o oponente no chão com explosão e velocidade, assim dominando e imobilizando o mesmo no chão.', 'ofensiva', 'Grécia',
100, 20, 100, 90, 20, 70, 30);