CREATE DATABASE IF NOT EXISTS club_yates_db;

USE club_yates_db;

-- Orden correcto de DROP TABLES (respetando dependencias)
DROP TABLE IF EXISTS usar;
DROP TABLE IF EXISTS asignacion_amarre;
DROP TABLE IF EXISTS ventas;
DROP TABLE IF EXISTS pagos;
DROP TABLE IF EXISTS yates;
DROP TABLE IF EXISTS amarres;
DROP TABLE IF EXISTS ocupar;
DROP TABLE IF EXISTS usuarios;
DROP TABLE IF EXISTS empleados;
DROP TABLE IF EXISTS tipo_yate;
DROP TABLE IF EXISTS zonas;
DROP TABLE IF EXISTS servicios;

CREATE TABLE zonas (
    id_zona CHAR(1) PRIMARY KEY,
    cuota_administracion NUMERIC(10, 2) NOT NULL,
    capacidad INT NOT NULL,
    profundidad NUMERIC(5, 2) NOT NULL,
    dim_max_eslora NUMERIC(5, 2),
    dim_max_manga NUMERIC(5, 2),
    dim_max_calado NUMERIC(5, 2),
    dim_min_eslora NUMERIC(5, 2),
    dim_min_manga NUMERIC(5, 2),
    dim_min_calado NUMERIC(5, 2)
);

-- ésta es una tabla catalago
CREATE TABLE tipo_yate (
    id_tipo INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    descripcion TEXT
);

CREATE TABLE ocupar (
    id_zona CHAR(1),
    id_tipo INT,
    PRIMARY KEY (id_tipo, id_zona),
    FOREIGN KEY (id_zona) REFERENCES zonas (id_zona),
    FOREIGN KEY (id_tipo) REFERENCES tipo_yate (id_tipo)
);

CREATE TABLE usuarios (
    cedula VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(10),
    fecha_vinculacion DATE NOT NULL,
    -- Valores de la cuenta de la aplicacion.
    mail VARCHAR(100) UNIQUE NOT NULL,
    tipo_usuario VARCHAR(20) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    CHECK(tipo_usuario IN ('ADMIN', 'SOCIO'))
);

CREATE TABLE empleados (
    id_empleado INT PRIMARY KEY AUTO_INCREMENT,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2),
    direccion VARCHAR(255),
    telefono VARCHAR(10),
    correo VARCHAR(100) UNIQUE
);

CREATE TABLE amarres (
    num_amarre INT PRIMARY KEY,
    id_zona CHAR(1) NOT NULL,
    usuario_propietario_cedula VARCHAR(20),
    fecha_compra DATE,
    FOREIGN KEY (id_zona) REFERENCES zonas (id_zona),
    FOREIGN KEY (usuario_propietario_cedula) REFERENCES usuarios (cedula)
);

CREATE TABLE yates (
    matricula VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    eslora DECIMAL(5, 2),
    manga DECIMAL(5, 2),
    calado DECIMAL(5, 2),
    usuario_dueno_cedula VARCHAR(20) NOT NULL,
    id_tipo INT,
    empleado_cargo INT,
    FOREIGN KEY (usuario_dueno_cedula) REFERENCES usuarios (cedula),
    FOREIGN KEY (id_tipo) REFERENCES tipo_yate (id_tipo),
    FOREIGN KEY (empleado_cargo) REFERENCES empleados (id_empleado)
);

-- Esto se hace para saber cuando el amarre está ocupado
CREATE TABLE asignacion_amarre (
    id_asignacion INT PRIMARY KEY AUTO_INCREMENT,
    matricula_yate VARCHAR(20) NOT NULL,
    num_amarre INT NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME,
    monto DECIMAL(10, 2),
    usuario_solicitante_cedula VARCHAR(20) NOT NULL,
    tipo_asignacion ENUM(
        'PROPIETARIO',
        'ALQUILER',
        'RESERVA'
    ) NOT NULL,
    -- Alquiler: Es cuando un propietario da derecho a otro de usar un amarre. 
    -- Reserva: Es cuando el club le da derecho a un usuario de usar un amarre.
    FOREIGN KEY (matricula_yate) REFERENCES yates (matricula),
    FOREIGN KEY (num_amarre) REFERENCES amarres (num_amarre),
    FOREIGN KEY (usuario_solicitante_cedula) REFERENCES usuarios (cedula),
    UNIQUE KEY uk_amarre_activo (
        num_amarre,
        fecha_inicio,
        fecha_fin
    )
);

CREATE TABLE pagos (
    id_pago INT PRIMARY KEY AUTO_INCREMENT,
    usuario_cedula VARCHAR(20) NOT NULL,
    fecha_realizacion DATETIME NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    FOREIGN KEY (usuario_cedula) REFERENCES usuarios (cedula)
);

CREATE TABLE ventas (
    num_venta INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    num_amarre INT NOT NULL,
    vendedor_cedula VARCHAR(20),
    comprador_cedula VARCHAR(20) NOT NULL,
    FOREIGN KEY (num_amarre) REFERENCES amarres (num_amarre),
    FOREIGN KEY (vendedor_cedula) REFERENCES usuarios (cedula),
    FOREIGN KEY (comprador_cedula) REFERENCES usuarios (cedula),
    CHECK (
        vendedor_cedula <> comprador_cedula
    )
);

-- ésta es una tabla catalago
CREATE TABLE servicios (
    cod_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    descripcion VARCHAR(250) NOT NULL,
    costo DECIMAL(10, 2) NOT NULL
);

CREATE TABLE usar (
    cod_servicio INT,
    num_amarre INT,
    fecha DATE NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (
        cod_servicio,
        num_amarre,
        fecha
    ),
    FOREIGN KEY (cod_servicio) REFERENCES servicios (cod_servicio),
    FOREIGN KEY (num_amarre) REFERENCES amarres (num_amarre)
);