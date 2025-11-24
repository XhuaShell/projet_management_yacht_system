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
