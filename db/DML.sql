INSERT INTO zonas ( 
        id_zona, cuota_administracion, capacidad, 
        profundidad, dim_max_eslora, dim_max_manga, 
        dim_max_calado, dim_min_eslora, dim_min_manga, 
        dim_min_calado 
) VALUES
    ("A", 180000.0, 30, 14.0, 45.0, 16.0, 7.0, 12.0, 6.0, 2.5),
    ("B", 120000.0, 20, 10.0, 35.0, 14.0, 5.5, 9.0, 4.5, 1.8),
    ("C", 220000.0, 40, 18.0, 55.0, 18.0, 8.0, 15.0, 7.0, 3.0),
    ("D", 160000.0, 28, 13.0, 42.0, 15.5, 6.5, 11.0, 5.5, 2.3),
    ("E", 200000.0, 35, 16.5, 50.0, 17.0, 7.5, 14.0, 6.5, 2.7),
    ("F", 95000.0, 18, 9.0, 30.0, 12.0, 4.5, 8.0, 4.0, 1.5),
    ("G", 250000.0, 50, 20.0, 60.0, 20.0, 9.0, 18.0, 8.0, 3.5),
    ("H", 140000.0, 24, 11.5, 38.0, 14.5, 5.8, 10.0, 5.0, 2.0);


INSERT INTO usuarios
(
    cedula,
    nombre,
    direccion,
    telefono,
    fecha_vinculacion,
    mail ,
    tipo_usuario,
    contrasena

) VALUES (
        '1034324105', 
        'Jesus Peraza', 
        'kr 87c xxx #xx - xx XX', 
        '3043946278', 
        '2020-01-01', 
        'jdperazar@udistrital.edu.co', 
        'ADMIN', 
        '123456'
);

INSERT INTO zonas VALUES ('A', 350000.00, 20, 5.50, 12.00, 4.50, 2.50, 6.00, 2.00, 1.50);
INSERT INTO zonas VALUES ('B', 280000.00, 15, 4.80, 10.00, 3.80, 2.00, 5.00, 1.80, 1.20);
INSERT INTO zonas VALUES ('C', 420000.00, 25, 6.20, 15.00, 5.00, 3.00, 7.00, 2.50, 1.80);
INSERT INTO zonas VALUES ('D', 300000.00, 18, 4.50, 9.00, 3.50, 1.80, 4.50, 1.50, 1.00);
INSERT INTO zonas VALUES ('E', 500000.00, 30, 7.00, 18.00, 6.00, 3.50, 8.00, 3.00, 2.00);
INSERT INTO zonas VALUES ('F', 260000.00, 12, 4.00, 8.50, 3.20, 1.70, 4.00, 1.40, 0.90);
INSERT INTO zonas VALUES ('G', 390000.00, 22, 5.80, 13.50, 4.80, 2.70, 6.50, 2.20, 1.60);
INSERT INTO zonas VALUES ('H', 450000.00, 28, 6.80, 16.00, 5.50, 3.20, 7.50, 2.80, 1.90);
INSERT INTO zonas VALUES ('I', 320000.00, 16, 4.90, 10.50, 3.90, 2.10, 5.20, 1.90, 1.30);
INSERT INTO zonas VALUES ('J', 370000.00, 19, 5.30, 11.50, 4.20, 2.40, 5.80, 2.00, 1.40);

INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Velero', 'Yate impulsado principalmente por velas, ideal para navegación recreativa y de larga distancia.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Catamarán', 'Embarcación de dos cascos que ofrece gran estabilidad y espacio, utilizada para turismo y navegación costera.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Yate a Motor', 'Yate impulsado por motores potentes, diseñado para alcanzar altas velocidades y ofrecer lujo.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Lancha Deportiva', 'Embarcación pequeña y rápida, utilizada para deportes acuáticos y paseos cortos.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Mega Yate', 'Embarcación de grandes dimensiones con múltiples niveles y amenities de lujo.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Yate Pesquero', 'Diseñado para pesca deportiva o profesional, con compartimentos y equipos especializados.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Trimarán', 'Embarcación de tres cascos que combina velocidad y estabilidad en alta mar.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Yate Explorador', 'Diseñado para expediciones largas con autonomía ampliada y equipos de navegación avanzada.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Yate Clásico', 'Yate con diseño tradicional, materiales nobles y estética vintage.');
INSERT INTO tipo_yate (nombre, descripcion) VALUES ('Yate Lujo Medio', 'Embarcación de lujo moderado con comodidades básicas para navegación recreativa.');

INSERT INTO ocupar VALUES ('A', 1);
INSERT INTO ocupar VALUES ('B', 2);
INSERT INTO ocupar VALUES ('C', 3);
INSERT INTO ocupar VALUES ('D', 4);
INSERT INTO ocupar VALUES ('E', 5);
INSERT INTO ocupar VALUES ('F', 6);
INSERT INTO ocupar VALUES ('G', 7);
INSERT INTO ocupar VALUES ('H', 8);
INSERT INTO ocupar VALUES ('I', 9);
INSERT INTO ocupar VALUES ('J', 10);

INSERT INTO usuarios VALUES ('1001001001', 'Carlos Mendoza', 'Cra 45 #12-30', '3001234567', '2023-01-10', 'carlos.mendoza@example.com', 'ADMIN', 'hash_contrasena_1');
INSERT INTO usuarios VALUES ('1002002002', 'Laura Hernández', 'Calle 10 #22-40', '3017654321', '2022-11-05', 'laura.hernandez@example.com', 'SOCIO', 'hash_contrasena_2');
INSERT INTO usuarios VALUES ('1003003003', 'Miguel Torres', 'Av 5 #30-15', '3029988776', '2024-02-18', 'miguel.torres@example.com', 'SOCIO', 'hash_contrasena_3');
INSERT INTO usuarios VALUES ('1004004004', 'Diana Ramírez', 'Calle 8 #14-55', '3008877665', '2023-06-22', 'diana.ramirez@example.com', 'ADMIN', 'hash_contrasena_4');
INSERT INTO usuarios VALUES ('1005005005', 'Julián Pérez', 'Cra 21 #50-11', '3041122334', '2021-09-12', 'julian.perez@example.com', 'SOCIO', 'hash_contrasena_5');
INSERT INTO usuarios VALUES ('1006006006', 'Sofía Delgado', 'Calle 3 #9-22', '3054433221', '2022-03-29', 'sofia.delgado@example.com', 'SOCIO', 'hash_contrasena_6');
INSERT INTO usuarios VALUES ('1007007007', 'Andrés Castaño', 'Av 13 #100-70', '3102211445', '2024-01-01', 'andres.castano@example.com', 'ADMIN', 'hash_contrasena_7');
INSERT INTO usuarios VALUES ('1008008008', 'Valentina Ríos', 'Calle 25 #66-90', '3153344556', '2023-04-17', 'valentina.rios@example.com', 'SOCIO', 'hash_contrasena_8');
INSERT INTO usuarios VALUES ('1009009009', 'Sebastián López', 'Cra 7 #40-12', '3115566778', '2021-12-30', 'sebastian.lopez@example.com', 'SOCIO', 'hash_contrasena_9');
INSERT INTO usuarios VALUES ('1010000001', 'Mariana Suárez', 'Calle 50 #20-34', '3126677889', '2024-05-05', 'mariana.suarez@example.com', 'SOCIO', 'hash_contrasena_10');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2001001001', 'Fernando López', 2500000.00, 'Cra 15 #20-33', '3201112233', 'fernando.lopez@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2002002002', 'Paula Gómez', 3200000.00, 'Calle 7 #50-10', '3219988776', 'paula.gomez@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2003003003', 'Ricardo Martínez', 2800000.00, 'Av 9 #44-90', '3225566778', 'ricardo.martinez@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2004004004', 'Natalia Vargas', 3100000.00, 'Calle 40 #18-21', '3233344556', 'natalia.vargas@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2005005005', 'Santiago Rivas', 2900000.00, 'Cra 8 #60-12', '3244433221', 'santiago.rivas@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2006006006', 'Alejandra Torres', 2700000.00, 'Calle 12 #9-55', '3251122334', 'alejandra.torres@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2007007007', 'Felipe Castañeda', 3500000.00, 'Av 3 #101-20', '3262211445', 'felipe.castaneda@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2008008008', 'Marcela Duarte', 2600000.00, 'Calle 28 #14-80', '3273344556', 'marcela.duarte@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2009009009', 'Oscar Bernal', 3000000.00, 'Cra 4 #70-11', '3285566778', 'oscar.bernal@empresa.com');

INSERT INTO empleados (cedula, nombre, salario, direccion, telefono, correo)
VALUES ('2010000001', 'Camila Restrepo', 3300000.00, 'Calle 62 #25-43', '3296677889', 'camila.restrepo@empresa.com');

INSERT INTO amarres VALUES (1, 'A', '1001001001', '2023-02-10');
INSERT INTO amarres VALUES (2, 'B', '1002002002', '2022-12-01');
INSERT INTO amarres VALUES (3, 'C', '1003003003', '2024-03-05');
INSERT INTO amarres VALUES (4, 'D', '1004004004', '2023-07-15');
INSERT INTO amarres VALUES (5, 'E', '1005005005', '2021-10-20');
INSERT INTO amarres VALUES (6, 'F', '1006006006', '2022-04-02');
INSERT INTO amarres VALUES (7, 'G', '1007007007', '2024-01-10');
INSERT INTO amarres VALUES (8, 'H', '1008008008', '2023-05-22');
INSERT INTO amarres VALUES (9, 'I', '1009009009', '2021-12-31');
INSERT INTO amarres VALUES (10, 'J', '1010000001', '2024-05-10');

INSERT INTO yates VALUES ('MAT-0001', 'Tridente Azul', 10.50, 3.20, 1.80, '1001001001', 1, 1);
INSERT INTO yates VALUES ('MAT-0002', 'Mar Serena', 12.30, 4.00, 2.10, '1002002002', 2, 2);
INSERT INTO yates VALUES ('MAT-0003', 'Viento Noble', 14.80, 4.50, 2.50, '1003003003', 3, 3);
INSERT INTO yates VALUES ('MAT-0004', 'Estrella del Mar', 9.60, 3.00, 1.60, '1004004004', 4, 4);
INSERT INTO yates VALUES ('MAT-0005', 'Océano Real', 16.20, 5.20, 2.90, '1005005005', 5, 5);
INSERT INTO yates VALUES ('MAT-0006', 'Amanecer', 11.40, 3.60, 1.90, '1006006006', 6, 6);
INSERT INTO yates VALUES ('MAT-0007', 'Corsario Blanco', 13.70, 4.30, 2.40, '1007007007', 7, 7);
INSERT INTO yates VALUES ('MAT-0008', 'Brisa Marina', 10.20, 3.10, 1.70, '1008008008', 8, 8);
INSERT INTO yates VALUES ('MAT-0009', 'Tritón', 15.50, 4.80, 2.60, '1009009009', 9, 9);
INSERT INTO yates VALUES ('MAT-0010', 'Nave Dorada', 12.80, 4.10, 2.20, '1010000001', 10, 10);

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0001', 1, '2024-01-10 09:00:00', '2024-06-10 18:00:00', 1500000.00, '1001001001', 'PROPIETARIO');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0002', 2, '2023-12-05 10:00:00', '2024-03-05 17:00:00', 1200000.00, '1002002002', 'PROPIETARIO');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0003', 3, '2024-02-01 08:30:00', NULL, 1800000.00, '1003003003', 'PROPIETARIO');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0004', 4, '2023-06-10 14:00:00', '2023-09-10 12:00:00', 900000.00, '1004004004', 'PROPIETARIO');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0005', 5, '2022-10-01 09:15:00', NULL, 2500000.00, '1005005005', 'PROPIETARIO');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0006', 6, '2023-04-20 11:00:00', '2023-07-20 11:00:00', 800000.00, '1006006006', 'RESERVA');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0007', 7, '2024-01-15 07:00:00', NULL, 1100000.00, '1007007007', 'PROPIETARIO');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0008', 8, '2023-05-25 16:00:00', '2023-10-25 16:00:00', 1300000.00, '1008008008', 'ALQUILER');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0009', 9, '2021-12-31 10:00:00', '2022-03-31 18:00:00', 700000.00, '1009009009', 'PROPIETARIO');

INSERT INTO asignacion_amarre
(matricula_yate, num_amarre, fecha_inicio, fecha_fin, monto, usuario_solicitante_cedula, tipo_asignacion)
VALUES ('MAT-0010', 10, '2024-05-10 09:45:00', NULL, 1600000.00, '1010000001', 'RESERVA');


INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1001001001', '2024-01-15 10:20:00', 350000.00, 'Pago cuota de administración');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1002002002', '2023-12-01 14:30:00', 420000.00, 'Pago mensualidad amarre');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1003003003', '2024-02-20 09:00:00', 180000.00, 'Reserva de amarre por temporada');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1004004004', '2023-08-12 16:45:00', 250000.00, 'Mantenimiento básico del yate');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1005005005', '2023-10-05 11:10:00', 520000.00, 'Pago anual de amarre');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1006006006', '2022-04-30 08:00:00', 150000.00, 'Pago por servicio de limpieza');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1007007007', '2024-01-25 15:20:00', 600000.00, 'Cuota especial del club');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1008008008', '2023-06-10 12:30:00', 300000.00, 'Pago alquiler de amarre');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1009009009', '2022-01-10 09:50:00', 275000.00, 'Pago servicio de transporte');

INSERT INTO pagos (usuario_cedula, fecha_realizacion, monto, descripcion)
VALUES ('1010000001', '2024-05-10 17:40:00', 480000.00, 'Pago reserva de amarre');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2023-03-10', 8500000.00, 1, '1001001001', '1002002002');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2022-11-22', 9200000.00, 2, '1002002002', '1003003003');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2024-01-15', 7800000.00, 3, '1003003003', '1004004004');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2023-07-05', 10200000.00, 4, '1004004004', '1005005005');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2021-10-18', 9500000.00, 5, '1005005005', '1006006006');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2022-04-12', 8700000.00, 6, '1006006006', '1007007007');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2024-02-10', 11300000.00, 7, '1007007007', '1008008008');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2023-06-28', 8900000.00, 8, '1008008008', '1009009009');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2022-01-03', 7600000.00, 9, '1009009009', '1010000001');

INSERT INTO ventas (fecha, monto, num_amarre, vendedor_cedula, comprador_cedula)
VALUES ('2024-05-11', 12500000.00, 10, '1010000001', '1001001001');


INSERT INTO servicios (nombre, descripcion, costo) VALUES
('Electricidad', 'Suministro eléctrico continuo para el punto de amarre', 25.00),
('Agua Potable', 'Acceso a agua potable en el muelle', 15.00),
('Mantenimiento Básico', 'Limpieza exterior y revisión general del yate', 80.00),
('Reparación de Motor', 'Servicio técnico especializado en motores marinos', 250.00),
('Seguridad Privada', 'Asignación de guardia para vigilancia del yate', 50.00),
('Limpieza de Casco', 'Limpieza profunda del casco del yate', 120.00),
('Carga de Combustible', 'Suministro de combustible directamente en el amarre', 300.00),
('Lavandería Marina', 'Lavado y secado de textiles del yate', 40.00),
('Internet Satelital', 'Conexión satelital de alta velocidad para el yate', 60.00),
('Inspección Técnica', 'Inspección completa previa a navegación', 100.00);

INSERT INTO usar (cod_servicio, num_amarre, fecha, monto) VALUES
(1, 1, '2025-01-10', 25.00),
(2, 3, '2025-01-10', 15.00),
(3, 2, '2025-01-11', 80.00),
(4, 5, '2025-01-11', 250.00),
(5, 4, '2025-01-12', 50.00),
(6, 6, '2025-01-12', 120.00),
(7, 7, '2025-01-13', 300.00),
(8, 8, '2025-01-14', 40.00),
(9, 9, '2025-01-14', 60.00),
(10, 10, '2025-01-15', 100.00);

