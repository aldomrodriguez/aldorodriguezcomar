---
title: Pedilo por acá
description: Plataforma para que los comercios de barrio reciban pedidos por WhatsApp. El comercio carga su catálogo, comparte su link y cada pedido le llega escrito, con dirección y forma de pago.
client: Proyecto propio
role: Diseño y desarrollo full-stack
year: "2026"
status: En desarrollo
tags: [Next.js, React, TypeScript, Tailwind, PostgreSQL, Drizzle, Mercado Pago]
hue: 150
order: 3
cover: ../../assets/proyectos/pedilo-por-aca/landing.webp
coverAlt: Portada de Pedilo por acá con el título "Se acabó anotar pedidos en un papel" y un ticket de pedido de una heladería.
liveUrl: https://pediloporaca.com.ar/
repo: privado
stats:
  - value: "258"
    label: tests automáticos sobre el catálogo, los pedidos y los cobros
  - value: "0 %"
    label: de comisión por venta, el comercio paga una cuota fija
gallery:
  - src: ../../assets/proyectos/pedilo-por-aca/tienda.webp
    alt: Tienda de demostración de una heladería con el catálogo por categorías y un pedido armado a la derecha.
    caption: La tienda que ve el cliente. Elige envío o retiro, arma el pedido y lo manda al WhatsApp del comercio.
  - src: ../../assets/proyectos/pedilo-por-aca/pedidos.webp
    alt: Panel de pedidos con la lista de pedidos activos y el detalle de uno nuevo.
    caption: Cada pedido llega escrito al panel, con su estado (nuevo, confirmado, en camino, entregado), la entrega y la forma de pago.
  - src: ../../assets/proyectos/pedilo-por-aca/catalogo.webp
    alt: Catálogo del comercio con categorías, precios y disponibilidad de cada producto.
    caption: El catálogo se edita en el lugar, con precio y disponibilidad a mano.
  - src: ../../assets/proyectos/pedilo-por-aca/precios.webp
    alt: Pantalla para actualizar precios por categoría con porcentaje y redondeo.
    caption: Con la inflación, los precios se suben por categoría o en todo el catálogo, con redondeo y vista previa antes de confirmar.
  - src: ../../assets/proyectos/pedilo-por-aca/mi-tienda.webp
    alt: Personalización de la tienda con colores, logo y portada, y una vista previa.
    caption: Cada comercio elige su color, su logo y su portada, y ve cómo queda.
  - src: ../../assets/proyectos/pedilo-por-aca/movil-landing.webp
    alt: Portada de Pedilo por acá en un celular.
    caption: Portada en celular.
    device: mobile
  - src: ../../assets/proyectos/pedilo-por-aca/movil-tienda.webp
    alt: Tienda de demostración en un celular.
    caption: La tienda en celular, donde la usa la mayoría.
    device: mobile
  - src: ../../assets/proyectos/pedilo-por-aca/movil-pedidos.webp
    alt: Panel de pedidos en un celular con la barra de navegación abajo.
    caption: El panel está pensado para atender desde el celular.
    device: mobile
---

## El proyecto

Muchos comercios de barrio reciben pedidos por WhatsApp y los anotan en un papel mientras atienden el mostrador. Pedilo por acá les da una tienda propia en `pediloporaca.com.ar/su-nombre`: el cliente arma el pedido en el catálogo y al comercio le llega completo, con qué pidió, dónde vive y cómo paga.

El modelo es una cuota mensual, sin comisiones por venta. El comercio se suscribe y paga solo, con Mercado Pago.

## Cómo funciona

- **Tienda pública:** catálogo con fotos, categorías, buscador, envío o retiro y horario de atención.
- **Panel del comercio:** pedidos con estados, catálogo, actualización de precios en bloque y personalización de la tienda.
- **Suscripción autogestionada:** el primer mes es gratis y después se cobra con Mercado Pago.
- **Backoffice:** un panel para administrar los comercios, los cobros y el modo mantenimiento.

## Detalles

- **Demo que se puede tocar:** una heladería de ejemplo con 85 productos, abierta para que cualquiera pruebe la tienda y el panel. Se reinicia todas las noches.
- **Pensado para el celular:** cada pantalla se revisa en celular, tablet y escritorio, sin scroll horizontal y con botones cómodos para el dedo.
- **Sin servicios de más:** las fotos se guardan en el propio servidor y se despliega con Coolify.
