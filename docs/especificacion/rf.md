# Requerimientos funcionales

## RF1: Registrar usuario

Actor: Usuario (Personal/Empresa)

Descripción: Se debe poder registrar un usuario en el sistema con sus datos asociados

Prioridad: Alta

## RF2: Agregar un ingreso/gasto

Actor: Usuario (Personal/Empresa)

Descripción: Debe poderse ingresar un ingreso/gasto al sistema y que el mismo se vea reflejado en el saldo actual del usuario, para cada gasto se puede seleccionar la categoría del mismo y escribir una breve descripción.

Prioridad: Alta

## RF3: Modificar un ingreso/gasto

Actor: Usuario (Personal/Empresa)

Descripción: Debe poderse modificar un gasto e ingreso, pudiendo cambiar el monto la categoria y la descripción.

Prioridad: Alta

## RF4: Eliminar un ingreso/gasto

Actor: Usuario (Personal/Empresa)

Descripción: Debe poderse eliminar un gasto e ingreso.

Prioridad: Alta

## RF5: Visualización de gastos e ingresos totales (balance)

Actor: Sistema

Descripción: El sistema deberá mostrar el balance total de la cuenta para el usuario actual teniendo en cuenta los ingresos y gastos realizados

Prioridad: Alta

## RF6: Visualización de gastos mediante gráficas

Actor: Sistema

Descripción: El sistema mostrara una grafica circular/de barras indicando los gastos que tuvo el usuario en el mes actual por categoría.

Prioridad: Media

## RF7: Conectar a Wallet

Actor: Usuario (Personal/Empresa)

Descripción: Se puede conectar una wallet para realizar transacciones dentro de la app.

Prioridad: Media

## RF8: Consejos de Ahorro

Actor: Sistema

Descripción: El sistema tendrá un apartado de "consejos" donde se brindaran consejos de ahorro e inversión a los usuarios.

Prioridad: Media

## RF9: Agregar contactos

Actor: Usuario (Personal)

Descripción: Cada usuario será identificado por un código único y tendrá la opción de agregar contactos utilizando este identificador

, al invitarlo a ser "socios" los usuarios ahora podrán realizar transacciones entre si, crear grupos, etc.

Prioridad: Media

## RF10: Realizar transacciones

Actor: Usuario (Personal/Empresa)

Descripción: El sistema permite enviar y recibir pagos a los usuarios que hayan sido agregados como "socios", si los usuarios tienen conectada una wallet el sistema le pedirá el monto a enviar y realizara la transacción. Cada transacción realizada se ingresara como [#RF2](rf.md#rf2-agregar-un-ingreso-gasto)

Prioridad: Media

## RF11: Crear grupo

Actor: Usuario (Personal)

Descripción: El sistema permite crear un grupo y agregar contactos, al grupo se le puede asignar un nombre y se le asocian gastos de los miembros asociados.

Prioridad: Media

## RF12: Buscador

Actor: Usuario (Personal/Empresa)

Descripción: Se pueden filtrar las transacciones mediante un buscador que devuelve las coincidencias de la descripción y/o categoría.

Prioridad: Baja



