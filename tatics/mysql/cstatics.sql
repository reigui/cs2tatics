create database bd_cstatics;
use bd_cstatics;

create table tb_usuario (
	id_usuario INT AUTO_INCREMENT PRIMARY KEY,
	nome_usu varchar(50),
    email_usu varchar(100),
    senha_usu varchar(100),
    confirmar_senha_usu varchar(100)
);

create table tb_administrador (
	id_administrador INT AUTO_INCREMENT PRIMARY KEY,
	nome_adm varchar(50),
    email_adm varchar(100),
    senha_adm varchar(100),
    confirmar_senha_adm varchar(100)
);

create table tb_mapas (
	id_map INT AUTO_INCREMENT PRIMARY KEY,
	nome_map varchar(20),
    local_map varchar(40),
    utilitaria_map varchar(10),
    descrição_map varchar(100)
);

create table tb_utilitario (
	smoke_granada varchar(40),
    molotov_granada varchar(40),
    he_granada varchar(40),
    flash_granada varchar(40)
);
