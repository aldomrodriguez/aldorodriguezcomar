---
title: Juegos Bonaerenses 2026
description: Micrositio del Municipio de Lobos para seguir a su delegación en las finales provinciales, con cronograma, resultados y medallero que se actualizan solos.
client: Municipio de Lobos
role: Desarrollo front-end y back-end
year: "2026"
status: En producción
tags: [PHP 8, JavaScript, HTML, CSS, API REST, Apache]
hue: 265
order: 1
cover: ../../assets/proyectos/juegos-bonaerenses/portada.webp
coverAlt: Cronograma de la delegación de Lobos con la franja de días y la lista de actividades del miércoles.
liveUrl: https://municipiodelobos.gob.ar/juegosbonaerenses/
repo: privado
stats:
  - value: "~66"
    label: pedidos a la API resumidos en un solo JSON
  - value: "60 s"
    label: de demora máxima para ver un resultado nuevo
  - value: "0"
    label: dependencias de npm o paso de build
  - value: "~27 KB"
    label: de HTML, CSS y JS comprimidos en la portada
gallery:
  - src: ../../assets/proyectos/juegos-bonaerenses/cronograma.webp
    alt: Cronograma del miércoles 21 con filtros por tipo, buscador y una lista de partidos y competencias.
    caption: Cronograma del día. Cada actividad muestra la disciplina, la categoría, el rival, la sede y el estado. Los resultados aparecen dentro del mismo cronograma.
  - src: ../../assets/proyectos/juegos-bonaerenses/disciplina.webp
    alt: Vista de una sola disciplina, Básquet 3x3, con sus tres partidos de la semana.
    caption: Al elegir una disciplina, el cronograma pasa a mostrar toda la semana de esa disciplina con un resumen de cómo viene Lobos.
  - src: ../../assets/proyectos/juegos-bonaerenses/medallero.webp
    alt: Medallero con una medalla de oro, una de plata y una de bronce, y el camino de cada una.
    caption: Medallero. Cada medalla explica cómo se ganó, con los partidos, la serie o la etapa final.
  - src: ../../assets/proyectos/juegos-bonaerenses/galeria.webp
    alt: Grilla de la galería de fotos, con las imágenes desenfocadas.
    caption: Galería de fotos con carga de a 24 imágenes. En esta captura, las fotos de prueba están desenfocadas a propósito.
  - src: ../../assets/proyectos/juegos-bonaerenses/visor.webp
    alt: Visor de fotos a pantalla completa con botones para descargar y compartir.
    caption: Visor con navegación, descarga y botón para compartir el archivo. Cada foto tiene su propio link y el "atrás" del celular cierra el visor.
  - src: ../../assets/proyectos/juegos-bonaerenses/movil-cronograma.webp
    alt: Cronograma en un celular.
    caption: Cronograma en celular.
    device: mobile
  - src: ../../assets/proyectos/juegos-bonaerenses/movil-medallero.webp
    alt: Medallero en un celular.
    caption: Medallero en celular.
    device: mobile
  - src: ../../assets/proyectos/juegos-bonaerenses/movil-galeria.webp
    alt: Galería de fotos en un celular, con las imágenes desenfocadas.
    caption: Galería en celular.
    device: mobile
---

## El desafío

Durante las finales de los Juegos Bonaerenses, la delegación de Lobos compite en decenas de disciplinas a la vez, en sedes repartidas por Mar del Plata. Las familias y los vecinos querían saber **dónde y cuándo juega cada equipo, cómo le fue y cuántas medallas lleva Lobos**, sin tener que buscar entre los más de mil eventos de la Provincia.

La información oficial existe, pero está en una API pública pensada para todos los municipios a la vez. Había que convertirla en algo simple de leer desde el celular, y que se mantuviera actualizado solo durante toda la semana.

## La solución

Un micrositio de tres páginas: **cronograma con resultados**, **medallero** y **galería de fotos**. Todo se arma solo a partir de la API, filtrado por Lobos.

- **Cronograma por día** con buscador por disciplina, rival o sede, y filtros por tipo de actividad (partidos, competencias, acreditaciones). Un filtro aparece solo si hay contenido al que afecta.
- **Vista por disciplina:** al elegir una, se ve toda su semana con un resumen de cómo viene Lobos.
- **Medallero** que explica cada medalla con los partidos, la serie o la etapa final.
- **Galería** con carga progresiva, visor, descarga y botón para compartir, con un link propio para cada foto.

## Cómo funciona

```
API pública de los Juegos (municipio 137)
        │
        ▼
api/datos.php   junta ~66 pedidos en paralelo en un solo JSON y lo cachea
        │         · resultados y medallero: cada 60 s
        │         · sedes y cronograma: cada 15 min
        ▼
site.js         normaliza y pinta. Vuelve a pedir datos cada 60 s
```

- **Proxy con caché en PHP:** usa `curl_multi` para hacer todos los pedidos en paralelo y un candado de archivo para que actualice una sola visita a la vez. Así, la API de la Provincia recibe una sola tanda de pedidos por minuto, aunque muchas personas estén mirando el sitio al mismo tiempo.
- **Tolerante a fallas:** si falla una sede, se conserva la copia anterior completa del cronograma. Los resultados se actualizan prueba por prueba. Si el proxy falla tres veces seguidas, el navegador consulta la API directo.
- **Arranque instantáneo:** el último paquete de datos queda guardado en el navegador, así que al volver a entrar se ve al toque y después se actualiza.
- **Detección automática de pruebas:** algunas pruebas masivas, como la carrera de 10 km, no aparecen asociadas a Lobos en la API. Un proceso recorre cada 3 horas las más de mil pruebas de los Juegos y suma las que encuentra con Lobos. Como el hosting no tiene cron, lo disparan las propias visitas y trabaja en tramos de 15 segundos.

## Decisiones técnicas

- **Sin build ni dependencias:** HTML, un solo CSS, JavaScript de navegador y PHP 8, porque el sitio se publica en un hosting compartido del Municipio. Se sube por FTP tal cual está.
- **Fotos procesadas antes de subir:** las originales pesan entre 5 y 9 MB. Un script las convierte en miniaturas WebP de unos 20 KB y en versiones de menos de 2 MB para descargar.
- **Accesible y pensado para el celular:** HTML semántico, link para saltar al contenido, visor hecho con `<dialog>`, y pruebas a 360 y 390 px de ancho.
- **Modo demo local:** datos de prueba con medallas y resultados para desarrollar antes de que empiece la competencia, sin tocar la versión publicada.

## Resultado

El sitio está publicado en el dominio del Municipio y se actualiza solo durante toda la competencia. La portada pesa unos 27 KB de HTML, CSS y JavaScript comprimidos, y los datos se cargan en un solo pedido.

La identidad visual es la gráfica oficial de los Juegos 2026, hecha por la diseñadora del Municipio.
