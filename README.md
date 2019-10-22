# Movie FrontEnd

Para ejecutar el proyecto puede hacerse por medio de script Docker o por medio de ejecucion manual (Linux)

## Ejecucion con docker

```bash
docker-compose up
...
```
El comando anterior instalara las librerias necesarias para el proyecto y ejecutara la aplicacion en local en el puerto 3001

Para acceder a la pagina principal ir a la URL http://localhost:3001/

## Ejecucion manual

Crear el entorno virtual con el gestor de entornos de python (recomendado virtualenvwrapper)

Instalar npm

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
```

Instalar dependencias
```bash
npm install
```

Ejecutar la aplicacion

```bash
npm start
```

Urls de la aplicacion

1.***Registro de usuarios***

```
/regiter/
```

Campos

```
{
  "username": "string",
  "password": "string"
  "age": "int"
  "gender": "opcion"
}
```

2.***Login de usuarios***

Parametros

```
{
  "username": "string",
  "password": "string"
}
```

3.***Listar las peliculas recomendadas***

Lista las 5 peliculas mas recomendadas para un susuario especifico.

El Usuario debe estar logueado, la busqueda realiza un filtrado colaborativo segun los criterios:

a. Edad del usuario
b. Sexo del usuario 
