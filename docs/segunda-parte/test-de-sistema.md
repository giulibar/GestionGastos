# Test de sistema

## Realizar test de sistema en un entorno separado del desarrollo

.

## Generar casos de prueba aplicando técnica partición equivalente

### Agregar (o editar) ingreso o gasto

El agregado tiene 5 entradas que el usuario debe completar:

* Nombre
* Tipo
* Monto
* Descripción
* Categoría

#### Clases de equivalencia:

| Entrada/Variable | Clases válidas              | Clases inválidas |
| ---------------- | --------------------------- | ---------------- |
| Nombre           | Números o letras (1)        | Nombre vació     |
| Tipo             | Ingreso o gasto (2)         | -                |
| Monto            | Mayor a cero (3)            | Negativo o cero  |
| Descripción      | Vacía, letras o números (4) | -                |
| Categoría        | Cualquiera (5)              | -                |

#### Casos de prueba:

| Caso de prueba | Nombre             | Tipo    | Monto  | Descripción          | Categoría    | Resultado esperado | Clases de equivalencia cubiertas |
| -------------- | ------------------ | ------- | ------ | -------------------- | ------------ | ------------------ | -------------------------------- |
| CP 1           | Salario            | Ingreso | 40000  | Me paga mi jefe      | Sueldo       |                    |                                  |
| CP 2           | Compras de la casa | Gasto   | -15000 | Comida y otros       | Alimentación |                    |                                  |
| CP 3           |                    | Gasto   | 300    | Remedio para alergia | Salud        |                    |                                  |
| CP 4           |                    | Ingreso |        |                      | Otros        |                    |                                  |

## Detallar sesiones de prueba exploratoria

.
