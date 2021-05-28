# Anotaciones de archivo TSConfig.json

_Este archivo le indica a nuestro proyecto como debe compilarse._

## Basic Options 🚀

### Seleccionar Target 

_El target es basicamente la version de javascript a la cual queremos compilar nuestro código haciendo "ctrl + space" se nos despligaran todas las opciones disponibles._

### Seleccionar Lib 

_Esta opcion nos permite manejar de forma manual la importacion de librerias en nuestro proyecto. Por defecto si lo dejamos comentado Typescript se encargara de detectar de forma automática las librerias que estemos utilizando y realizara si importación. Si descomentamos la opcion deberemos importar o colocar manualmente el nombre de cada una de las librerias que deseemos utilizar._

```
 "lib": ["dom", "ES6"]
```

### Seleccionar AllowJs 

_Esta opcion nos permite indicarle a Typescript si queremos que los archivos javascript se incluyan en la compilación._

```
 "allowJs": true
```

### Seleccionar CheckJs 

_Esta opcion nos permite indicarle a Typescript verifique que la sintaxis de los archivos javascript no contengan errores._

```
 "checkJs": true
```

### Seleccionar JSX 

_Esta opcion nos permite indicarle a Typescript que mantenga la sintaxis JSX para aplicaciones de RactJS._

```
 "jsx": "preserve"
```

### Seleccionar Declaration y DeclarationMap 

_Estas opciones se utilizan cuando estamos construyendo librereias en Typescript, no permite generar los archivos de declaración de tipo o manifiesto de tipo._


_Genera el archivo '.d.ts' correspondiente._
```
 "declaration": true
```

_Genera un mapa fuente para cada archivo '.d.ts' correspondiente._
```
 "declarationMap": true
```


### Seleccionar Source map 

_Esta opcion nos permite depurar nuestro codgio en Typescrept creando archivos con las extensión .map el cual basicamente consiste en ser un intermediario entre el archivo .js producto de la compilación y el archivo origian .ts. Este archivo .map contiene información sobre de donde proviene el archivo .js, permitiendo correr en modo debugging nuestro archivo .ts._

```
 "sourceMap": true
```

### Seleccionar OutDir 

_Esta opcion nos permite establecer un output para nuestros archivos compilados, es habitual utilizar un directorio de salida llamado "dist". Es importante tener en cuenta que todos nuestros archivos respetaran la estructura del proyecto a la hora de ser compilados y colocados en este directorio de salida._

```
 "outDir": "./dist"
```

### Seleccionar RootDir 

_Esta opcion nos permite establecer un directorio raiz o una nueva raiz en el proyecto, es habitual utilizar un directorio de raiz llamado "src". Es importante tener en cuenta que todos nuestros archivos respetaran la estructura del proyecto a la hora de ser compilados y colocados en este directorio de salida. Por ello si queremos que haya archivos que no sean complilados podemos dejarlos en un directorios por fuera del directorio raiz que hayamos establecido._

```
 "rootDir": "./src"
```

### Seleccionar RemoveComments 

_Esta opcion nos permite decirle a Typescript que ignore los comentarios en la compilacion de archivos, de esta forma nuestros archivos javascript quedarán libre de los comentarios que vayamos dejando en nuestro codigo para facilitar su mantenibilidad, reduciendo así el peso de los archivos de producción._

```
 "removeComments": true
```

## Strict Type-Checking Options 🚀

### Seleccionar NoEmitOnError 

_Esta opción nos permite decirle a Typescript que interrumpa la compliación si detecta algun error. Debemos tener en cuenta que esta opción debemos agregarla manualmente ya que no viene dentro de la predefinidas._

```
 "noEmitOnError": true
```

### Seleccionar Strict 

_Esta opcion nos permite decirle a Typescript que todas las opciones relacionadas a "Strict Type-Checking Options" estan en true. De esta forma nos premite trabajar con Typescript en el modo mas stricto por defecto._

```
 "strict": true
```

### Seleccionar NoImplicitAny 

_Esta opcion nos permite decirle a Typescript que tiene permitido asignarle a una variable el tipo "any" de forma implicita. No se recomienda su uso, sin embargo en caso de que se quiera utilizar es impotante tener en cuenta que la propiedad "strict" debe ser colocada en "false"._

```
 "strict": false
 "noImplicitAny": true
```

### Seleccionar StrictNullChecks 

_Esta opcion nos permite decirle a Typescript que no debe chequear que nuestra aplicacion controle posibles errores cuando no conocemos el resultado de la asignacion de una variable. De esta manera podemos evitar que Typescript controle si estamos manejando o no un posible error si una variable tiene la posibilidad de contener un valor nulo. En otras palabras, cuando nosotros utilicemos variables las cuales no tengamos control si vienen o no en null, deshabilitando este control podemos evitar que Typescript nos arroje un error por no estar controlando que nuestra aplicación pueda arrojar un error si sucediera el caso._

```
 "strict": true
 "strictNullChecks": false
```

## Additional Checks 🚀

### Seleccionar NoUnusedLocals

_Esta opcion nos permite decirle a Typescript que este pendiente del uso de nuestras variables y que nos marque un error si creamos variables que luego no estamos utilizando._

```
 "noUnusedLocals": true
```

### Seleccionar NoUnusedParameters

_Esta opcion nos permite decirle a Typescript que este pendiente del uso de nuestros parametros en las funciones y que nos marque un error si alguno de los parametros declarados en una función no es utilizado._

```
 "noUnusedParameters": true
```

### Seleccionar NoImplicitReturns

_Esta opcion nos permite decirle a Typescript que este pendiente de los valores de retorno de nuestra funcion, de tal forma de que siempre debamos retornar algo que este alineado con el retorno declarado. Basicamente nos lanzara un error cuando no todas las rutas que propone el flujo de una función retornen un valor que concuerde con el especificado._

```
 "noImplicitReturns": true
```


## Custom options 🚀

### Excluir archivos para la compilación 

_Podemos incluir una nueva sección para excluir archivos que no queremos compilar a javascript._

```
 "exclude": [
    "Functions/*.ts",
    "Types/*.ts"
    "**/*.dev.ts"
  ]
```

### Incluir archivos para la compilación 

_Podemos incluir una nueva sección para incluir archivos que queremos compilar a javascript. Debemos tener en cuenta que al agregar esta opcion, Typescript solamente compilara los archivos que se encuentren referenciados dentro del array._

```
 "include": [
    "index.ts"
  ]
```