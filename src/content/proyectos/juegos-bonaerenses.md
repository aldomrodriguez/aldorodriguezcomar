---
title: Juegos Bonaerenses 2026
description: Micrositio del Municipio de Lobos para seguir a su delegación en las finales provinciales, con cronograma, resultados, medallero y galería de fotos que se actualizan solos.
client: Municipio de Lobos
role: Desarrollo front-end y back-end
year: "2026"
status: En producción
tags: [PHP 8, JavaScript, HTML, CSS, API REST, Apache]
hue: 265
order: 4
cover: ../../assets/proyectos/juegos-bonaerenses/portada.webp
coverAlt: Cronograma de la delegación de Lobos con la franja de días, el viernes 23 marcado y las actividades del día con sus resultados.
liveUrl: https://municipiodelobos.gob.ar/juegosbonaerenses/
repo: privado
stats:
  - value: "~35 KB"
    label: pesa la portada, con HTML, CSS y JS comprimidos
  - value: "317 → 3 MB"
    label: pesan las 118 fotos de la galería, de los originales a la grilla
gallery:
  - src: ../../assets/proyectos/juegos-bonaerenses/cronograma.webp
    alt: Cronograma del viernes 23 con el filtro Resultados activo, con marcas, tanteos y dos medallas dibujadas.
    caption: Cronograma del día con el filtro "Resultados". Cada marca dice qué es (segundos, metros o puntos) y la medalla aparece en la fila donde se ganó. Los nombres están desenfocados a propósito.
  - src: ../../assets/proyectos/juegos-bonaerenses/disciplina.webp
    alt: Cronograma del viernes filtrado por Fútbol playa, con la semifinal, la final ganada y la premiación.
    caption: Día, disciplina y filtro se combinan. Elegir Fútbol playa deja solo sus partidos del día marcado, con la medalla de oro en la final.
  - src: ../../assets/proyectos/juegos-bonaerenses/medallero.webp
    alt: Medallero de Lobos con 7 medallas, 3 de oro, 2 de plata y 2 de bronce, cada una con su marca o tanteo.
    caption: Medallero con las 7 medallas de Lobos. Cada una muestra lo que importa, la marca y el puesto o el tanteo del último partido.
  - src: ../../assets/proyectos/juegos-bonaerenses/galeria.webp
    alt: Galería con 118 fotos, la tarjeta "Sumá tus fotos" y la grilla de imágenes desenfocadas.
    caption: Galería con 118 fotos y carga de a 24. La tarjeta "Sumá tus fotos" invita a mandar las propias. Las fotos están desenfocadas porque muestran personas reales.
  - src: ../../assets/proyectos/juegos-bonaerenses/visor.webp
    alt: Visor de fotos a pantalla completa con flechas, contador y botón para descargar.
    caption: Visor con navegación y descarga. Donde el celular lo permite, suma un botón para compartir el archivo. Cada foto tiene su propio link y el "atrás" del celular cierra el visor.
  - src: ../../assets/proyectos/juegos-bonaerenses/movil-cronograma.webp
    alt: Cronograma en un celular.
    caption: Cronograma en celular. El título del día entra en un renglón desde 320 px.
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

Durante las finales de los Juegos Bonaerenses, la delegación de Lobos compitió en decenas de disciplinas a la vez, en sedes repartidas por Mar del Plata. Las familias querían saber **dónde y cuándo compite cada uno, cómo le fue y cuántas medallas lleva Lobos**, desde el celular y sin buscar entre los más de mil eventos de la Provincia.

## La solución

Un micrositio de tres páginas que se arma solo a partir de la API pública de los Juegos, filtrado por Lobos:

- **Cronograma con resultados**, con los nombres de los 88 integrantes de la delegación, buscador y filtros por día y disciplina.
- **Medallero** con la marca, el puesto o el tanteo de cada medalla.
- **Galería** con visor, descarga y link propio para cada foto.

El sitio cambia solo según la fecha: durante la semana la portada es el cronograma y, al terminar los Juegos, la galería.

## Optimización

- **Liviano:** la portada pesa unos 35 KB comprimidos, con HTML, CSS y JavaScript sin librerías ni paso de build. Los datos llegan en un solo pedido.
- **Fotos procesadas antes de subir:** las 118 fotos originales sumaban 317 MB. En la grilla pesan unos 25 KB cada una (3 MB en total) y se cargan de a 24.
- **Arranque instantáneo:** el navegador guarda los últimos datos, así que al volver a entrar se ven al toque y después se actualizan.
- **Cuidado de la API pública:** las visitas leen una copia en caché del servidor. Los datos se piden a la API una sola vez por minuto, aunque muchas personas estén mirando al mismo tiempo.
- **Sin parpadeo:** cada actualización cambia solo lo nuevo y deja quieto el resto de la página.

## Resultado

El sitio acompañó a la delegación toda la semana y se actualizó solo de principio a fin. Lobos volvió con **7 medallas: 3 de oro, 2 de plata y 2 de bronce**.

Hoy está en su etapa final, con la galería como portada: [municipiodelobos.gob.ar/juegosbonaerenses](https://municipiodelobos.gob.ar/juegosbonaerenses/).
