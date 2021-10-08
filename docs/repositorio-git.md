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

Nota: Github llama "main"



Luego utilizando un editor de texto configuramos el archivo .gitbook.yaml para que la raiz de nuestros archivos de documentacion sea la carpeta "docs" de forma de tener la documentacion mas organizada y separada del codigo fuente 

De esta forma quedo inicializado nuestro repositorio remoto configurado de forma que 





```text
mkdir docs
touch .gitbook.yaml
```

