-- Conecte-se ao banco de dados myproject_db
USE myproject_db;

-- Criação da tabela usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    idade INT NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    estado VARCHAR(255) NOT NULL,
    biografia TEXT
);
