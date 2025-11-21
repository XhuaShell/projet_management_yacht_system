[spannis version](docs/README-SPANISH.md)

# Projet Management Yacht System

This project is a implement made for the **Universidad Distrital Francisco José de Caldas University**, in the "Programación Avanzada" class.

### Problem stament

    A yacht club wants to have an information system about its facilities, members, employees, and yachts associated with the club. The club is organized as follows: Club members are defined by their ID number, name, address, phone number, and date of joining the club. Yachts are defined by their registration number, name, type, and dimensions. Mooring data includes the mooring number, water meter readings, and electricity meter readings. It's important to note that a yacht belongs to one member, although a member can own several yachts. A yacht occupies one mooring, and a mooring can only be occupied by one yacht. The date a yacht is assigned to a mooring is important. Members can own moorings, and the purchase date of the mooring is important. It's important to note that a mooring belongs to only one member. It's important to understand that the purchase date of a mooring is different from the date a yacht occupies that mooring. The club is divided into several zones, each designated by a letter. It's crucial for the club to know the types of yachts it has, the number of yachts in each zone, and the depth and width of the moorings within those zones. A zone contains multiple moorings, and a mooring belongs to only one zone. The club needs to know which yachts are under an employee's responsibility. It's also important to have a list of a member's yachts, along with the date each mooring was assigned and the specific mooring where it's located. Moorings owned by a member must be clearly documented.

### Original problem stament in *Spanish* 

    Un club de yates desea tener un sistema de información sobre sus instalaciones, socios, empleados y yates que están vinculados al club. El club está organizado de la siguiente manera: Los socios del club están definidos por la cedula, nombre, dirección teléfono y fecha de vinculación al club. Los yates están definidos por: matricula, nombre, tipo y dimensiones. Los amarres tienen como datos de interés número de amarre, la lectura del contador de agua y de luz, por otro lado, hay que tener en cuenta que un yate pertenece a un socio, aunque un socio puede tener varios yates. Un yate ocupa un amarre y un amarre solo puede ser ocupado por un yate, es importante la fecha en la que el yate es asignada a un amarre. 
    
    Los socios pueden ser propietarios de amarres, siendo importante la fecha de compra del amarre. Hay que tener en cuenta que un amarre pertenece a un solo socio. Se debe tener en cuenta que una cosa es la fecha de compra del amarre y otra cosa es la fecha de ocupación del amarre por un yate. El club está definido en varias zonas, las cuales están definidas por una letra. Es importante para el club conocer los tipos de yates que tiene, el número de yates que contiene, la profundidad y ancho de los amarres de las zonas. Una zona tiene varios amarres y un amarre pertenece a una solo zona. El club necesita saber cuáles son los yates que un empleado tiene a su cargo. Es importante conocer la lista de yates de un socio junto con la fecha de asignación a un amarre, y en que amarre se encuentra cada yate. Se debe evidenciar los amarres de los cuales un socio es dueño.

## Proposed solution

We propose a solution for this promplen built with JavaScript Programing lenguage and Mysql Database Management System.

Para llegar a la solucón seguimos una serie de pasos metodicos:

#### Diseño de la solución
- Creación del [diagrama de casos de uso](docs/img/diagrams-case_use.png) 
- Creación de las [relgas de negocio](docs/business-rules.md) para la delimitación del problema.
- Diseño del [diagrama Entidad Relación]() como modelo lógico de la base de datos.
- Diseño del [diagrama relacional]() para la base de datos
- Diseño del [diagrama de clases]() del `modelo` de la aplicación.s

### Implementación de la solución
- Creación del script de creación de la base de datos.
- Diseño del sistema en el lenguaje JavaScript

## Running

There are several steps to runnig this application

### Download

``` bash
git clone https://github.com/XhuaShell/projet-management-yacht-system.git
```
### configurar variables de entorno 

this is default configuration

```txt

```

### correr docker compose para la base de datos **(opcional)**

```bash
docker compose up -d
```

### correr application

Preparar la base de datos con script de JavaScript

```bash
npm run built-db
```

Ejecutar script de test para ver si la base de datos está preparada

```bash
npm run test
```

Ejecutar aplicación

```bash
npm start
```

## Referencias
- [Patrones de diseño](https://www.youtube.com/watch?v=IOGLHb4jKv8&t=260s)
- [Diferencias entre patron dao y repository](https://medium.com/@jotauribe/data-access-objects-vs-repositories-b1497565a873)
