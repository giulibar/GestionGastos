# Test de sistema

## Realizar test de sistema en un entorno separado del desarrollo

.

## Generar casos de prueba aplicando técnica partición equivalente

### 1) Agregar (o editar) ingreso o gasto

El agregado tiene 5 entradas que el usuario debe completar:

* Nombre
* Tipo
* Monto
* Descripción
* Categoría

#### Clases de equivalencia:

| Entrada/Variable | Clases válidas              | Clases inválidas                |
| ---------------- | --------------------------- | ------------------------------- |
| Nombre           | Números o letras (1)        | Nombre vacío                    |
| Tipo             | Ingreso o gasto (2)         | -                               |
| Monto            | Mayor a cero (3)            | Menor o igual a cero o negativo |
| Descripción      | Vacía, letras o números (4) | -                               |
| Categoría        | Cualquiera (5)              | -                               |

#### Casos de prueba:

| Caso de prueba | Nombre                                               | Tipo                                      | Monto                                   | Descripción                                            | Categoría                                      | Resultado esperado                                       | Clases de equivalencia cubiertas |
| -------------- | ---------------------------------------------------- | ----------------------------------------- | --------------------------------------- | ------------------------------------------------------ | ---------------------------------------------- | -------------------------------------------------------- | -------------------------------- |
| CP 1           | <mark style="color:green;">Salario</mark>            | <mark style="color:green;">Ingreso</mark> | <mark style="color:green;">40000</mark> | <mark style="color:green;">Me paga mi jefe</mark>      | <mark style="color:green;">Sueldo</mark>       | Se vacían los campos de texto y se agrega la transacción | 1,2,3,4,5                        |
| CP 2           | <mark style="color:green;">Compras de la casa</mark> | <mark style="color:green;">Gasto</mark>   | <mark style="color:red;">-15000</mark>  | <mark style="color:green;">Comida y otros</mark>       | <mark style="color:green;">Alimentación</mark> | Mensaje: Monto inválido                                  | 1,2,4,5,7                        |
| CP 3           | <mark style="color:red;">(vacío)</mark>              | <mark style="color:green;">Gasto</mark>   | <mark style="color:green;">300</mark>   | <mark style="color:green;">Remedio para alergia</mark> | <mark style="color:green;">Salud</mark>        | Mensaje: Nombre inválido                                 | 2,3,4,5,6                        |
| CP 4           | <mark style="color:red;">(vacío)</mark>              | <mark style="color:green;">Ingreso</mark> | <mark style="color:red;">(vacío)</mark> | <mark style="color:green;">(vacío)</mark>              | <mark style="color:green;">Otros</mark>        | Mensaje: Nombre y monto inválidos!                       | 2,4,5,6,7                        |



### 2) Realizar un pago

El agregado tiene 5 entradas que el usuario debe completar:

* Wallet iD
* Monto
* Descripción
* Categoría

#### Clases de equivalencia:

| Entrada/Variable | Clases válidas              | Clases inválidas                    |
| ---------------- | --------------------------- | ----------------------------------- |
| Wallet iD        | Números o letras (1)        | -                                   |
| Monto            | Mayor a cero (2)            | Menor o igual a cero o negativo (5) |
| Descripción      | Vacía, letras o números (3) | -                                   |
| Categoría        | Cualquiera (4)              | -                                   |

#### Casos de prueba:

| Caso de prueba | Wallet iD                                             | Monto                                   | Descripción                                                 | Categoría                                      | Resultado esperado                                       | Clases de equivalencia |
| -------------- | ----------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------- | -------------------------------------------------------- | ---------------------- |
| CP 1           | <mark style="color:green;">ffhj-1368-hssf-3578</mark> | <mark style="color:green;">4000</mark>  | <mark style="color:green;">Lo que me habías prestado</mark> | <mark style="color:green;">Otros</mark>        | Se vacían los campos de texto y se agrega la transacción | 1,2,3,4                |
| CP 2           | <mark style="color:green;">ogse-3685-ndby-4587</mark> | <mark style="color:red;">-2000</mark>   | <mark style="color:green;">(vacío)</mark>                   | <mark style="color:green;">Sueldo</mark>       | Mensaje: Monto inválido                                  | 1,3,4,5                |
| CP 3           | <mark style="color:green;">lkfs-4599-jjys-2454</mark> | <mark style="color:red;">(vacío)</mark> | <mark style="color:green;">Gracias por el préstamo</mark>   | <mark style="color:green;">Alimentación</mark> | Mensaje: Monto inválido                                  | 1,3,4,5                |

## Detallar sesiones de prueba exploratoria

#### Misión

Realizar un test general del programa para encontrar posibles fallos y mejoras del mismo

#### Áreas&#x20;

* OS | Windows 10&#x20;
* Navegador | Chrome version 78&#x20;
* Funcionalidad | Todas&#x20;
* Estrategia | Testing Exploratorio

#### Tiempo de sesión&#x20;

* 27/11/2021 18:36

#### Tester&#x20;

* Vittorio Caiafa

#### Division de tareas&#x20;

* Duracion: 30 minutos
* % Diseño de casos de prueba y ejecución (60%)&#x20;
* % Investigación y reporte de inconvenientes (30%)&#x20;
* % Armado de la sesión (10%)

% Mision de la sesion (90% / 10%)

#### Notas de prueba

* Agrego varios productos a mi lista de transacciones&#x20;
* Agrego un par de pagos&#x20;
* Me fijo que todas las posibilidades erróneas para agregar funcionan bien&#x20;
* Edito varias de las transacciones&#x20;
* Elimino varias de las transacciones

#### Riesgos&#x20;

* N/A

#### Defectos

* BUG-01: Si voy de mi seccion agregar a cualquier otra el boton switch sigue en su lugar por un segundo y luego se va
* BUG-02: Se cambia el titulo de la seccion agregar de "Agregar" a "Editar" una vez edito una transaccion cualquiera, y queda asi por el resto de la sesion

#### Inconvenientes&#x20;

* Me doy cuenta que si voy a agregar un pago y el campo de Wallet iD es vacío agrega igualmente, aunque no busque una cuanta como para pasarle el dinero realmente, esto no esta bueno ya que lo que esta haciendo es mandar un pago a nadie y se me resta de mi balance, no estaría del todo bien.
