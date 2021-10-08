---
description: >-
  Objetivos : Creación y uso de repositorios locales y remotos, comandos Git
  ejecutados desde terminal y desde el IDE
---

# Repositorio Git

Primero creamos un repositorio remoto en [Github](https://github.com/),  luego creamos un repositorio local con los comandos:

```text
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin //https://github.com/giulibar/GestionGastos
git push -u origin main
```

Nota: GitHub llama "main" a la rama master 

Para la creacion de la documentación decidimos utilizar la herramienta [GitBook](https://www.gitbook.com/) que nos permite visualizar el contenido de una forma sencilla y es utilizado por una gran cantidad de proyectos importantes.

Luego utilizando un editor de texto configuramos el archivo .gitbook.yaml para que la raíz de nuestros archivos sea la carpeta "docs" de forma de tener la documentación mas organizada y separada del código fuente

```text
mkdir docs
touch .gitbook.yaml
```

