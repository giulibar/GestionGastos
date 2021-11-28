# Codificación

## IDE Visual Studio Code: Configuración común del equipo

Para codificar la pagina se utilizo Visual Studio Code con la extensión de "Share" con la cual se podía codificar el mismo código simultáneamente y luego guardarlo y pushearlo al git.

## Estándares de codificación Google (HTML, CSS, JS)

Dentro de los lenguajes utilizados para realizar este proyecto nos encontramos con varios de los cuales ya habíamos visto en semestres anteriores, de dicha manera pudimos utilizar nuestros conocimientos previos para el desarrollo de la pagina siendo estos de gran ayuda. De los mismos no hay que olvidar que:

* Las clases comienzan siempre con mayúscula
* Las variables deben tener su nombre con camelCase si poseen varias palabras dentro de ellas
* Se debe tener una clase sistema para guardar todos los datos de las demás clases
* Utilizar punto y coma al final de cada linea de código (teniendo en cuanta cada tipo de declaracion de funciones, etc.)
* Utilizar nombres nemotécnicos que sean descriptivos y únicos

## Buenas practicas de OOP: Separación de lógica e interfaz

En nuestro proyecto separamos las distintas lógicas en carpetas diferentes siendo una 'dominio' y la otra 'interfaz'. Dentro de la carpeta 'dominio' se debería poder encontrar todas las funciones que hacen que la pagina funcione pudiendo agregar gastos, ingresos, los mismos ponerlos en la tabla de transacciones, etc. Luego la carpeta 'interfaz' posee todo lo que decora mi sistema de modo de visualizar de mejor forma sus elementos, teniendo un documento .html y otro .css los cuales especifican cada característica de mi pagina con sus respectivos id's para el funcionamiento posterior.

En nuestro caso la carpeta scripts con todos los archivos .js fue posicionada dentro de la carpeta de 'interfaz' sin intención de ser puesta allí, pero debería estar en la de 'dominio'.

## Análisis estático de código: Mostrar reducción de problemas

Si se visualiza el archivo index.js dentro del proyecto se puede visualizar que cada función tiene un comentario encima declarando que hace y su nombre ya sea para explicación o para guiamiento del propio lector del código. Ademas, dentro de las funciones también se pueden encontrar comentarios para una mejor lectura y entendimiento de las mismas, estando todo bien organizado y declarado de arriba a abajo.

###
