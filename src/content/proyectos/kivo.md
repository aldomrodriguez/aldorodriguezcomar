---
title: KIVO
description: Plataforma para que cada empresa tenga su propio bot de atención con IA en WhatsApp, Telegram, Instagram y la web, con una bandeja para que su equipo tome las conversaciones que el bot no puede resolver.
client: Proyecto propio
role: Diseño y desarrollo full-stack
year: "2026"
status: En desarrollo
tags: [TypeScript, React, Node.js, Express, MongoDB, OpenAI, Docker]
hue: 275
order: 1
cover: ../../assets/proyectos/kivo/bandeja.webp
coverAlt: Bandeja de KIVO con tres personas esperando respuesta y una conversación abierta en la que el bot deriva una consulta al equipo.
repo: privado
stats:
  - value: "556"
    label: tests automáticos que corren en cada cambio
  - value: "5"
    label: canales de mensajería en una sola bandeja
gallery:
  - src: ../../assets/proyectos/kivo/botnet.webp
    alt: Red de bots con un asistente principal conectado a siete asistentes especialistas.
    caption: La red de bots. Un asistente principal recibe cada mensaje y lo pasa al especialista que corresponde (alojamiento, gastronomía, transporte y otros).
  - src: ../../assets/proyectos/kivo/inicio.webp
    alt: Inicio con tres personas esperando respuesta, la puesta en marcha y de qué pregunta la gente.
    caption: El inicio arranca por lo urgente, quién espera una respuesta, y suma cómo viene el bot y de qué pregunta la gente.
  - src: ../../assets/proyectos/kivo/estadisticas.webp
    alt: Estadísticas con usuarios, mensajes recibidos y la tendencia diaria del mes.
    caption: Estadísticas del mes, con tendencia diaria y distribución por hora. Se pueden exportar en PDF.
  - src: ../../assets/proyectos/kivo/clasificacion.webp
    alt: Configuración de la clasificación con categorías, subcategorías y el modo de clasificación.
    caption: Cada empresa define sus categorías y la IA clasifica las conversaciones sola.
  - src: ../../assets/proyectos/kivo/movil-inicio.webp
    alt: Inicio de KIVO en un celular, con las personas que esperan respuesta.
    caption: Inicio en celular.
    device: mobile
  - src: ../../assets/proyectos/kivo/movil-bandeja.webp
    alt: Bandeja de KIVO en un celular.
    caption: Bandeja en celular.
    device: mobile
---

## El proyecto

KIVO es una plataforma para que cada empresa arme su propio bot de atención sin programar. El bot responde con la información que la empresa le carga y, cuando no puede resolver algo, le pasa la conversación a una persona del equipo.

Las capturas usan la red de demostración de Turismo Lobos con conversaciones de ejemplo.

## Cómo funciona

- **Una red de asistentes:** un asistente principal recibe cada mensaje y lo deriva a especialistas, cada uno con su propio conocimiento y sus herramientas.
- **Todos los canales en un lugar:** WhatsApp, Telegram, Instagram, Facebook y un widget para la web, con una sola bandeja.
- **Personas cuando hacen falta:** el bot avisa cuando alguien necesita una persona, y el equipo toma la conversación desde la bandeja o se la devuelve al bot.
- **Análisis automático:** la IA clasifica cada conversación, valora el contacto y resume los temas que consultó.
- **Pruebas antes de publicar:** un laboratorio para probar el bot y un auditor opcional que revisa cada respuesta antes de enviarla.

## Detalles

- **Varias empresas, datos separados:** cada empresa ve solo lo suyo y usa su propia clave de OpenAI, guardada cifrada.
- **Calidad en cada cambio:** lint, formato, build, tests con cobertura mínima y auditoría de dependencias en cada push.
- **Listo para producir:** imágenes de Docker para el backend y el frontend, pensadas para desplegarse con Coolify.
