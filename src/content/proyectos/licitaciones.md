---
title: Licitaciones municipales
description: Micrositio público de licitaciones y concursos de precios, con un panel de carga para el área de Compras. Lo hice para el Municipio de Lobos y va a quedar abierto para que cualquier municipio lo use con su propia identidad.
client: Municipio de Lobos
role: Diseño y desarrollo full-stack
year: "2026"
status: En desarrollo
tags: [Astro, TypeScript, Tailwind, SQLite, Drizzle, Docker]
hue: 5
order: 2
cover: ../../assets/proyectos/licitaciones/portada.webp
coverAlt: Portada de Licitaciones y concursos del Municipio de Lobos, con el buscador, los filtros y el listado de procedimientos de 2026.
stats:
  - value: "157"
    label: procedimientos de 2020 a 2026 importados de la página anterior, con sus PDFs
  - value: "146"
    label: tests unitarios, más pruebas de punta a punta del circuito completo
gallery:
  - src: ../../assets/proyectos/licitaciones/detalle.webp
    alt: Licitación pública 2/2026 adjudicada, con el recorrido de etapas, los adjudicatarios con sus montos y el pliego para descargar.
    caption: Cada procedimiento tiene su página con el recorrido de etapas, los adjudicatarios y los montos, y la documentación para descargar.
  - src: ../../assets/proyectos/licitaciones/modalidades.webp
    alt: Modal que explica la diferencia entre licitación pública, licitación privada y concurso de precios, con los montos vigentes.
    caption: Las diferencias entre modalidades se explican en un modal, con los montos vigentes y un atajo para filtrar el listado.
  - src: ../../assets/proyectos/licitaciones/panel.webp
    alt: Panel de carga con el listado de procedimientos, los conteos por estado y el aviso de los que requieren atención.
    caption: El panel de Compras. Arriba, lo que está en curso y lo que requiere atención, como los procedimientos sin resolver a más de 90 días de la apertura.
  - src: ../../assets/proyectos/licitaciones/ficha.webp
    alt: Ficha de la licitación pública 7/2026 en evaluación, con el formulario a la izquierda y el estado actual con sus próximos pasos a la derecha.
    caption: La ficha muestra en qué etapa está, qué se puede cargar en ella y a qué estados puede pasar. Lo que no se puede tocar queda en solo lectura, con su explicación.
  - src: ../../assets/proyectos/licitaciones/confirmar.webp
    alt: Diálogo de confirmación antes de guardar, con los dos campos que cambiaron y su valor nuevo.
    caption: Toda acción pide confirmación. Al guardar se ve exactamente qué cambió, y cada cambio queda en el historial con el nombre de quien lo hizo.
  - src: ../../assets/proyectos/licitaciones/identidad.webp
    alt: Configuración de la identidad del sitio con el color principal cambiado a azul y la vista previa del header, la portada y el footer.
    caption: La sección de identidad. Nombre, color, logo, header, footer y textos se configuran desde el panel, con vista previa. Así cualquier municipio lo adapta sin tocar código.
  - src: ../../assets/proyectos/licitaciones/movil-portada.webp
    alt: Portada de licitaciones en un celular.
    caption: Portada en celular.
    device: mobile
  - src: ../../assets/proyectos/licitaciones/movil-detalle.webp
    alt: Licitación pública 2/2026 en un celular, con el recorrido de etapas en vertical.
    caption: Detalle de un procedimiento en celular.
    device: mobile
  - src: ../../assets/proyectos/licitaciones/movil-panel.webp
    alt: Panel de carga en un celular, con los conteos, el aviso de atención y el listado en tarjetas.
    caption: El panel también se usa desde el celular.
    device: mobile
---

## El proyecto

El Municipio de Lobos publicaba sus licitaciones en una página que se editaba a mano. Este sistema la reemplaza: un micrositio público donde cualquiera consulta los llamados, los resultados y la documentación, y un panel para que el área de Compras cargue cada procedimiento desde el llamado hasta la adjudicación.

Lo hice para Lobos, pero el código no tiene nada de Lobos. El nombre, los colores, el logo, el header, el footer y los textos se configuran desde la sección de identidad del panel, y el repositorio va a quedar abierto para que cualquier municipio lo use.

## Cómo funciona

- **Sitio público:** listado con buscador y filtros por modalidad, estado y año, y una página por procedimiento con sus etapas, adjudicatarios, montos y documentos.
- **Circuito por modalidad:** licitaciones públicas, privadas y concursos de precios, cada una con sus estados y transiciones, definidos en un solo lugar.
- **Reglas por etapa:** cada dato y cada tipo de documento se carga en la etapa que corresponde. El panel lo explica y el servidor lo rechaza igual.
- **Historial completo:** cada cambio queda registrado con quién lo hizo y cuándo, y las prórrogas se publican.
- **Identidad configurable:** nombre, color principal (los demás tonos se calculan solos y se valida el contraste), logo, header, footer y textos.

## Detalles

- **Seguridad:** política de contenido estricta, límite de intentos en el login, contraseñas provisorias y validación de los archivos subidos por su contenido, no por la extensión.
- **Accesible:** los selectores y el calendario son controles propios que siguen los patrones de ARIA, en español y con la semana empezando el lunes.
- **Fácil de desplegar:** una imagen de Docker con un solo volumen para la base y los documentos, backups diarios y despliegue con Coolify.
