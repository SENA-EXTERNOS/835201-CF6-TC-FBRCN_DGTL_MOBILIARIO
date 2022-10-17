<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 
    .tarjeta.p-4.p-md-5.mb-5.fondo1.color-gris(data-aos="fade-down")
      .row.justify-content-end.align-items-center
        .col-md-5.order-md-first.order-sm-last
          p.py-5 Bienvenido a este a este recurso educativo, que le permite comprender cómo una vez que se tiene definido el diseño de un producto mediante un modelo en software CAD, es necesario proceder a su fabricación con el apoyo de una aplicación llamada CAM, por sus iniciales del inglés Computer Aided Manufacture o fabricación asistida por computador. Asimismo, se presentan los conceptos básicos para desarrollar un programa de CAM y para fabricar una pieza con máquinas herramientas de control numérico o CNC. Lo invitamos a ver el siguiente video para que se familiarice con el contexto de los temas a estudiar.

        .col-md-6.mb-4.mb-md-0.order-md-last.order-sm-first
          figure
            img(src="@/assets/curso/introduccion/img-1.png")

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
