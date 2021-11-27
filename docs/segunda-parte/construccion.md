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

#### Caso de uso 5

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

.
