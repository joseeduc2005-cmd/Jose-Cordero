API CRUD de Estudiantes con Express
===================================

Este proyecto implementa una API REST básica utilizando Node.js y Express.
La API permite gestionar estudiantes en memoria mediante operaciones CRUD 
(Create, Read, Update, Delete).

Requisitos
----------
- Node.js (versión estable o LTS)
- npm (incluido con Node.js)

Instalación
-----------
1. Clonar el repositorio:
   git clone https://github.com/joseeduc2005-cmd/Jose-Cordero.git
   cd Jose-Cordero

2. Instalar dependencias:
   npm install

3. Ejecutar en modo desarrollo con nodemon:
   npx nodemon index.js

4. El servidor se levantará en:
   http://localhost:3000

Endpoints
---------
Método   Ruta                Descripción
--------------------------------------------------------------
GET      /                   Verifica que la API funciona
GET      /estudiantes        Lista todos los estudiantes
GET      /estudiantes/:id    Obtiene un estudiante por su ID
POST     /estudiantes        Crea un nuevo estudiante
PUT      /estudiantes/:id    Actualiza un estudiante existente
DELETE   /estudiantes/:id    Elimina un estudiante existente

Ejemplo de cuerpo JSON (POST y PUT)
-----------------------------------
{
  "nombre": "Carlos Perez",
  "carrera": "Sistemas",
  "edad": 23
}

Autor
-----
José Cordero
Universidad Católica de Cuenca (UCACUE)
