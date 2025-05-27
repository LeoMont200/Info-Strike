create database InfoStrike;
use InfoStrike;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(45),
email varchar(50),
senha varchar(45)
);

create table arteMarcial (
idarteMarcial int primary key auto_increment,
nome varchar(45),
tipo varchar(15),
	check (tipo in ('Striking', 'Grappling')),
descricao varchar(500),
tendencia varchar(30),
	check(tendencia in ('Ofensiva', 'Defensiva', 'Equilibrada'))
);

create table quiz (
	idquiz int auto_increment,
    idusuario int,
		foreign key (idusuario) references usuario(idusuario),
	idarteMarcial int,
		foreign key (idarteMarcial) references arteMarcial(idarteMarcial),
	tipo varchar(15),
    compatibilidade int,
    tendencia varchar(30),
		check(tendencia in ('Ofensiva', 'Defensiva', 'Equilibrada')),
    primary key(idquiz,idusuario,idarteMarcial)
);

insert into arteMarcial (nome, tipo, descricao, tendencia) values
('Boxe', 'Striking', 'Foca em socos poderosos e rápidos, amplificados pelo jogo de pés estratégico junto com esquivas e bloqueios.','Equilibrada'),
('Muay Thai', 'Striking', 'A "arte das oito armas" ultiliza chutes, socos, cotoveladas e joelhadas para incapacitação do oponente no menor tempo possível. Combinado com um jogo de clinch avançado e rasteiras avassaladoras', 'Ofensiva'),
('Taekwondo', 'Striking', 'O Taekwondo se especializa em chutes extremamente fortes, dos quais ultilizam movimentos acrobáticos que são úteis para maior ganho de alcance e potência.', 'Ofensiva'),
('Karatê','Striking', 'Aprender Karatê é muito mais do que aprender como lutar, é aprender a ter autocontrole e viver em um caminho de paz, no entanto seus golpes rápidos como um trovão podem facilmente parar qualquer um que tente acabar com essa paz.','Equilibrada'),
('Judô', 'Grappling', 'O "caminho suave" é sobre ultilizar de movimentos de alavancagem para desequilibrar e arremessar o oponente, acertando ele com a própria terra ao invés do corpo.','Defensiva'),
('Jiu-Jitsu Brasileiro (BJJ)','Grappling', 'O BJJ é sobre imobilizar seu oponenete no chão como uma cobra, finalizando-o com enforcamentos, chaves de braço, chaves de tornozelo e qualquer outro tipo de golpe que faça o oponente desistir.', 'Defensiva'),
('Wrestling','Grappling', 'Uma das artes marciais mais antigas, e uma das mais eficientes, focada em derrubar o oponente no chão com explosão e velocidade, assim dominando e imobilizando o mesmo no chão','Ofensiva');
