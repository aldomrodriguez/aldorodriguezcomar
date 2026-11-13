---
title: EcoLobos 2026
description: Landing del evento sustentable del Municipio de Lobos, con el cronograma de la jornada, los proyectos de las escuelas y los stands de emprendedores.
client: Municipio de Lobos
role: Desarrollo front-end
year: "2026"
status: En producción
tags: [HTML, CSS, JavaScript, Apache]
hue: 110
order: 5
cover: ../../assets/proyectos/ecolobos/portada.webp
coverAlt: Portada de EcoLobos sobre fondo de papel kraft, con el logo, la fecha, el lugar y el horario del evento.
liveUrl: https://municipiodelobos.gob.ar/ecolobos/
repo: privado
gallery:
  - src: ../../assets/proyectos/ecolobos/cronograma.webp
    alt: Cronograma de la mañana con las actividades de 10 a 13:30 y la de las 11:00 marcada como "Ahora".
    caption: Cronograma en solapas Mañana, Tarde y Cierre. El día del evento marca sola la actividad en curso, según la hora de Argentina.
  - src: ../../assets/proyectos/ecolobos/escuelas.webp
    alt: Proyectos de Escuelas Verdes con filtros por nivel y el botón "Ver los 22 proyectos".
    caption: Escuelas Verdes, con los 22 proyectos ambientales de las escuelas de Lobos y filtro por nivel.
  - src: ../../assets/proyectos/ecolobos/stands.webp
    alt: Sección de stands emprendedores con los logos de los ecoemprendedores en tarjetas.
    caption: Stands de ecoemprendedores locales.
  - src: ../../assets/proyectos/ecolobos/movil-portada.webp
    alt: Portada de EcoLobos en un celular.
    caption: Portada en celular.
    device: mobile
  - src: ../../assets/proyectos/ecolobos/movil-cronograma.webp
    alt: Cronograma de EcoLobos en un celular, con la actividad en curso marcada.
    caption: Cronograma en celular.
    device: mobile
---

## El proyecto

Una página única con todo lo necesario para ir al evento: qué hay, el cronograma de la jornada, los proyectos de las escuelas, los stands, los expositores y cómo llegar.

## Detalles

- **Actividad en curso:** el día del evento, el cronograma marca lo que está pasando y abre la solapa que corresponde.
- **Sin dependencias:** HTML, CSS y JavaScript puro, sin frameworks ni paso de build.
- **Funciona sin JavaScript:** las solapas y los filtros son una mejora. Sin JS, el cronograma y los proyectos se ven completos.
- **Accesible:** solapas con roles ARIA y navegación con el teclado, horarios con `<time>` y respeto por quien prefiere menos movimiento.
