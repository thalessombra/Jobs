-- Conecte-se ao banco de dados myproject_db
USE myproject_db;


-- Criação da tabela usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL UNIQUE,
    idade INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    biografia TEXT
);

-- Inserção de dados na tabela usuarios
INSERT INTO usuarios (nome, idade, rua, bairro, estado, biografia) VALUES
( 'João Victor', 27, 'R. José Bento', 'Cambuci', 'SP', 'Entusiasta de tecnologia e amante de café.');