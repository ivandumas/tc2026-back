# Back end
Realizar el back-end para realizar playlists de películas (título, año, director, duración, clasificación) y museos (nombre, ubicación, descripción). Deberá incluir operaciones de tipo CRUD (Create, Read, Update, Delete) y al menos 4 datos por cada elemento sin contar el ID. Deberá especificar la siguiente información de cada uno de sus servicios que al menos serán 4:

* Descripción del servicio (breve)
* **endpoint:** <span style="color: red">`/post/:id`</span>
* **método:** `POST`

* **body:** JSON de ejemplo

* **validaciones:**

| Campo	| Validación |
|-------|------------|
|Titulo	|Debe ser un string entre 5 y 50 caracteres |
|descripción|Debe ser un string entre 10 y 250 caracteres|


# Diagrama Entidad Relación
Diagrama que representa la relación entre las entidades Museo, Playlist y Pelicula

![Back drawio (1)](https://user-images.githubusercontent.com/42326546/141202543-74aa60bc-1bb2-4c86-827b-b71efbc438f8.png)

# Servicios Museo

## Create
Este servicio crea nuevas instancias del elemento y valida que el nuevo elemento no exista ya en la base de datos, además de que la descripción del elemento cumpla con una longitud definida de caracteres.

* **método:** `POST`

* **body:** JSON de ejemplo

* **validaciones:**

| Campo	| Validación |
|-------|------------|
|descripción|Debe ser un string entre 10 y 250 caracteres|

* **errors:**

| Code	| Message | Http |
|-------|---------|------|
|InvalidBodyException|Description must be between 10 and 250 characters| 422 |

* **response:** Http status 200

## Read
Este servicio busca instancias del elemento museo dentro de la base de datos

* **método:** `GET`

* **errors:**

| Message | Http |
|---------|------|
|There are no records in the database| 500 |

* **response:** Http status 200

## Update 
## Delete
