---
description: >-
  Implementacion de funciones principales (sin necesidad de persistencia de
  datos)
---

# Construcción

## Implementacion de funciones principales (sin necesidad de persistencia de datos)

Al comenzar la implementacion de las funciones mas importantes para nuestro proyecto tomamos en cuenta aquellas que eran imprescindibles para que el usuario (las de mayor prioridad desde nuestro punto de vista) de modo que pudiera tener una buena usabilidad e importancia a la hora de utilizarlo.

### Caso de uso 3

#### Título: Agregar un ingreso/gasto

Actor: Usuario

Descripción: El sistema debería poder agregar un gasto o ingreso con su respectivo nombre, monto, categoría y descripción, actualizándose así el balance y los ingresos o gastos totales de la cuenta.

### Caso de uso 4

#### Título: Editar un ingreso/gasto

Actor: Usuario

Descripción: El sistema debería poder editar un gasto o ingreso pudiéndole cambiar su nombre, monto, categoría y descripción asignados anteriormente, actualizándose con los nuevos datos el balance y los ingresos o gastos totales de la cuenta.

### Caso de uso 5

#### Título: Eliminar un ingreso/gasto

Actor: Usuario

Descripción: El sistema debería poder eliminar un gasto o ingreso quitándolo de la lista de transacciones y luego actualizándose con los nuevos datos el balance y los ingresos o gastos totales de la cuenta.

### Caso de uso 7

#### Título: Realizar transacción

Actor: Usuario

Descripción: El sistema debería poder realizar un pago a otra cuenta con su wallet iD enviándole cierto monto, con su respectiva categoría, actualizándose con los nuevos datos el balance y los ingresos o gastos totales de la cuenta.

## Configuración de plataforma tecnológica para desarrollo y producción

Para el trabajo se utilizo VS Code con la extensión de 'Live Share' así pudiendo trabajar ambos dentro de el mismo archivo actualizándose paralelamente y pudiendo ver lo que hace el otro al instante en que lo hace manteniendo así un orden y progreso del código del proyecto.

Creamos un repo de GitHub dentro del cual si alguien avanzaba de manera individual lo que se hacia era pushear los cambios y así estar al día siempre y poder avanzar de manera correcta sin repetir cosas.

## Documentación del uso de librerías externas (package.json)

Las librerías utilizadas en el proyecto fueron las brindadas por el profesor, ademas de algunas otras que personalmente las necesitábamos como para satisfacer el 100% nuestras necesidades del armado de la app. A continuación la documentación de las mismas:

Dependencies:

* "@material/dialog": "^11.0.0"
* "@material/snackbar": "^11.0.0"
* "@material/switch": "^13.0.0"
* "@material/textfield": "^11.0.0"
* "material-components-web": "^11.0.0"

DevDependencies:

* "@babel/core": "^7.13.16"
* "@babel/preset-env": "^7.13.15"
* "autoprefixer": "^10.2.5"
* "babel-loader": "^8.2.2"
* "css-loader": "^5.2.4"
* "eslint": "^7.28.0"
* "extract-loader": "^5.1.0"
* "file-loader": "^6.2.0"
* "jest": "^27.3.1"
* "postcss-loader": "^5.2.0"
* "sass": "^1.32.11"
* "sass-loader": "^11.0.1"
* "webpack": "^5.36.0"
* "webpack-cli": "^4.6.0"
* "webpack-dev-server": "^3.11.2"
