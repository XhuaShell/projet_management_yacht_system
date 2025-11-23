CREATE DATABASE IF NOT EXISTS club_yates_db;
USE club_yates_db;

CREATE TABLE ZONA (
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

CREATE TABLE TIPO_DE_YATE (
    id_tipo INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) UNIQUE NOT NULL,
    descripcion TEXT
);

CREATE TABLE SOCIO (
    cedula VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(15),
    fecha_vinculacion DATE NOT NULL
);

CREATE TABLE EMPLEADO (
    id_empleado INT PRIMARY KEY,
    cedula VARCHAR(20),
    nombre VARCHAR(100) NOT NULL,
    salario DECIMAL(10, 2),
    direccion VARCHAR(255),
    telefono VARCHAR(15),
    correo VARCHAR(100)
);

CREATE TABLE AMARRE (
    num_amarre INT PRIMARY KEY,
    lectura_agua DECIMAL(10, 2) DEFAULT 0,
    lectura_luz DECIMAL(10, 2) DEFAULT 0,
    id_zona CHAR(1) NOT NULL,
    socio_propietario_cedula VARCHAR(20),
    fecha_compra DATE,

    FOREIGN KEY (id_zona) REFERENCES ZONA(id_zona),
    FOREIGN KEY (socio_propietario_cedula) REFERENCES SOCIO(cedula)
);

CREATE TABLE YATE (
    matricula VARCHAR(20) PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    eslora DECIMAL(5, 2),
    manga DECIMAL(5, 2),
    calado DECIMAL(5, 2),
    socio_dueno_cedula VARCHAR(20) NOT NULL,
    tipo_id INT,
    empleado_cargo INT,

    FOREIGN KEY (socio_dueno_cedula) REFERENCES SOCIO(cedula),
    FOREIGN KEY (tipo_id) REFERENCES TIPO_DE_YATE(id_tipo),
    FOREIGN KEY (empleado_cargo) REFERENCES EMPLEADO(id_empleado)
);

-- Esto se hace para saber cuando el amarre está ocupado
CREATE TABLE ASIGNACION_AMARRE (
    id_asignacion INT PRIMARY KEY AUTO_INCREMENT,
    matricula_yate VARCHAR(20) NOT NULL,
    num_amarre INT NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME,
    monto DECIMAL(10, 2),
    socio_solicitante_cedula VARCHAR(20) NOT NULL,
    tipo_asignacion ENUM('PROPIETARIO', 'ALQUILER', 'RESERVA') NOT NULL,
        -- Alquiler: Es cuando un propietario da derecho a otro de usar un amarre. 
        -- Reserva: Es cuando el club le da derecho a un socio de usar un amarre.

    FOREIGN KEY (matricula_yate) REFERENCES YATE(matricula),
    FOREIGN KEY (num_amarre) REFERENCES AMARRE(num_amarre),
    FOREIGN KEY (socio_solicitante_cedula) REFERENCES SOCIO(cedula),
    UNIQUE KEY uk_amarre_activo (num_amarre, fecha_inicio, fecha_fin)
);

CREATE TABLE pago (
    id_pago INT PRIMARY KEY AUTO_INCREMENT,
    socio_cedula VARCHAR(20) NOT NULL,
    fecha_realizacion DATETIME NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    descripcion VARCHAR(100) NOT NULL COMMENT 'Ej: Cuota Admin Nov 2025, Servicios Agua/Luz',
    
    FOREIGN KEY (socio_cedula) REFERENCES SOCIO(cedula)
);

CREATE TABLE venta (
    num_venta INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    monto DECIMAL(10, 2) NOT NULL,
    num_amarre INT NOT NULL,
    
    vendedor_cedula VARCHAR(20),
    
    comprador_cedula VARCHAR(20) NOT NULL,

    FOREIGN KEY (num_amarre) REFERENCES AMARRE(num_amarre),
    FOREIGN KEY (vendedor_cedula) REFERENCES SOCIO(cedula), 
    FOREIGN KEY (comprador_cedula) REFERENCES SOCIO(cedula),
    
    CHECK (vendedor_cedula <> comprador_cedula)
);