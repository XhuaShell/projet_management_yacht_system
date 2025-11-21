[versión en ingles](./docs/README-INGLISH.md)

# Projet Management Yacht System
Éste proyecto es una implementación hecha para la **Universidad Distrital Francisco José de Caldas University** en la clase de *Programación Avanzada*

### Enunciado del problema
    Un club de yates desea tener un sistema de información sobre sus instalaciones, socios, empleados y yates que están vinculados al club. El club está organizado de la siguiente manera: Los socios del club están definidos por la cedula, nombre, dirección teléfono y fecha de vinculación al club. Los yates están definidos por: matricula, nombre, tipo y dimensiones. 
    
    Los amarres tienen como datos de interés número de amarre, la lectura del contador de agua y de luz, por otro lado, hay que tener en cuenta que un yate pertenece a un socio, aunque un socio puede tener varios yates. Un yate ocupa un amarre y un amarre solo puede ser ocupado por un yate, es importante la fecha en la que el yate es asignada a un amarre. 
    
    Los socios pueden ser propietarios de amarres, siendo importante la fecha de compra del amarre. Hay que tener en cuenta que un amarre pertenece a un solo socio. Se debe tener en cuenta que una cosa es la fecha de compra del amarre y otra cosa es la fecha de ocupación del amarre por un yate. El club está definido en varias zonas, las cuales están definidas por una letra. 
    
    Es importante para el club conocer los tipos de yates que tiene, el número de yates que contiene, la profundidad y ancho de los amarres de las zonas. Una zona tiene varios amarres y un amarre pertenece a una solo zona. El club necesita saber cuáles son los yates que un empleado tiene a su cargo. Es importante conocer la lista de yates de un socio junto con la fecha de asignación a un amarre, y en que amarre se encuentra cada yate. Se debe evidenciar los amarres de los cuales un socio es dueño.

## Solución propuesta

Nosotros proponemos una solución constuida con El lenguaje de programación [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) y el Sistema Gestror de Base de datos [Mysql](https://www.mysql.com/) 

Para llegar a la solucón seguimos una serie de pasos metodicos:

#### Diseño de la solución
- Creación del [diagrama de casos de uso](./docs/img/diagrams-case_use.png) 
- Creación de las [relgas de negocio](./docs/business-rules.md) para la delimitación del problema.
- Diseño del [diagrama Entidad Relación](./docs/img/relacional.png) como modelo lógico de la base de datos.
- Diseño del [diagrama relacional]() para la base de datos
- Estudio de [arquitectura empleada](./docs/img/Arquitectura.png) para la implementación en código.

### Implementación de la solución
- Creación del script de creación de la base de datos.
- Diseño del sistema en el lenguaje JavaScript

## Ejecutar

Hay varios pasos para correr la aplicación.

### Descargar

Descarga el repositorio

``` bash
git clone https://github.com/XhuaShell/projet-management-yacht-system.git
```
### Configurar variables de entorno 

Ésta es la configuración por defecto, se deben configurar las variables de la base de datos para que sea posible la conección.

```txt
s
```

### Correr docker compose para la base de datos **(opcional)**

```bash
docker compose up -d
```

### Correr application

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

## Licencia 

[Apache-2.0](https://www.apache.org/licenses/LICENSE-2.0)

