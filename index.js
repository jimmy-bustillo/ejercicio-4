//- Una cadena de texto con tu Nombre
let nombre = "Jimmy";

//- Otra cadena de texto con tu Apellido
let apellido = "Bustillo";

//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = `${nombre} ${apellido}`;
console.log(estudiante);

//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numero_letra = estudiante.length;
console.log(numero_letra);

//- Una variable que contenga la primera letra del Nombre
let primer_letra = nombre.charAt(0);
console.log(primer_letra);

//- Otra variable que contenga la última letra del Apellido
let ultima_letra = apellido.charAt(apellido.length - 1);
console.log(ultima_letra);

//- Una cadena de texto que elimine los espacios de la variable "estudiante"
let sin_espacios = estudiante.trim();
console.log(sin_espacios);

//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
let esta_el_nombre = estudiante.includes(nombre);
console.log(esta_el_nombre);
searchString;
