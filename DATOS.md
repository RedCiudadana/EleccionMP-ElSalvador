# Datos

Los datos que alimentan el sitio provienen de un [Google spreadseet](https://docs.google.com/spreadsheets/d/1pS2nfpWqdWsNHgZ6EtLGPFmrN_5zZRZShXd1BHJkR8k/pubhtml).

Este spreadhseet se vuelca en archivos JSON estáticos dentro de [`public/static-files`](public/static-files)
que están a disposición para consumo.

### Consumo

Se recomienda consumir los archivos a través de [RawGit](https://rawgit.com), un
servicio que devuelve correctamente el `Content-Type` del contenido almacenado en GitHub.

Por ejemplo, en lugar de consumir directamente el archivo [`perfil.json`](static-files/perfil.json),
este se puede consumir por medio de RawGit con [esta URL para desarrollo](https://rawgit.com/RedCiudadana/EleccionMP/master/public/static-files/perfil.json)
y [esta URL para producción](https://cdn.rawgit.com/RedCiudadana/EleccionMP/66272992/public/static-files/perfil.json).

### Archivos de datos

Los principales archivos de datos disponibles son:

##### [`perfil.json`](public/static-files/perfil.json)

Este archivo contiene los datos para el principal concepto a manejar dentro del sitio:
los perfiles de los candidatos. Acerca de estos se cuenta, por ejemplo, con la siguiente
información: `id`, `nombre`, `biografia` (HTML), `planTrabajo` (html), `resultadosEvaluacion` (HTML),
`notaAreaEvaluada1`, `notaAreaEvaluada2`, `notaAreaEvaluada3`, `notaAreaEvaluada4`,
`fb`, `tw`, `email`, `fotoUrl`.


##### [`institucion-data.json`](public/static-files/institucion-data.json)

Cuenta con pares key, value que contienen la información acerca de la Comisión de
postulación para la elección: nombre, trayectoria, fb, tw e email.


##### [`postuladores-comision.json`](public/static-files/postuladores-comision.json)

Contiene la información de los miembros de la comisión: `id`, `nombre`, `fotoUrl`,
`biografia` (HTML), `trayectoria` (HTML), `fb`, `tw`, `email`.

##### [`evaluaciones.json`](public/static-files/evaluaciones.json)

Almacena los resultados (integers) de la evaluación de cada miembro de la comisión
hacia cada cada candidato: `postuladorId`, `perfilId`, `resultado`.
