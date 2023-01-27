<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Programación y simulación del mecanizado CNC
    p.mb-5 Una vez se hayan establecido los parámetros principales para el mecanizado con las máquinas de control numérico NC, se continúa con el proceso de la programación y posteriormente con la simulación. 

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.color-ajuste
            figure
              img.img-alto(src="@/assets/curso/temas/tema3/img-1.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Proceso de programación
            p.mb-0 En la programación con la ayuda de un <em>software</em> de fabricación asistida por computador CAM, se introducen todas las instrucciones en un lenguaje que reconozcan las máquinas CNC, para que ejecuten las operaciones, en el orden indicado, con las herramientas adecuadas y con los parámetros definidos. 

      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.color-ajuste
            figure
              img.img-alto(src="@/assets/curso/temas/tema3/img-2.png")
          .crd_hover_txt--body
            h4.mb-3 Proceso de simulación
            p.mb-0 Representación gráfica en un monitor de todo el proceso de mecanizado que se ha programado en CAM, desde el montaje del material, mostrando las herramientas seleccionadas y sus cambios, las trayectorias que trazarán, su profundidad y la forma que tomará el material a medida que el mecanizado avanza; también podemos apreciar los momentos en que las funciones misceláneas sean ejecutadas, por ejemplo, cuándo se prende o se apaga el refrigerante. 

    .separador.p3.mb-5

    #t_3_1.titulo-segundo.color-acento-contenido.pb-2
      h3 3.1 Proceso CNC
    p.mb-5 En el siguiente video se observa el proceso de programación de máquinas herramientas de control numérico computarizado CNC:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .separador.p3.mb-5

    #t_3_2.titulo-segundo.color-acento-contenido.pb-2
      h3 3.2 Simulación del mecanizado CNC 
    p.mb-5 Luego de haber definido y configurado las operaciones con las diferentes herramientas en la máquina CNC, y antes de ejecutar o correr el programa, se procede a simularlo con el objetivo de detectar posibles fallas y corregirlas a tiempo.

    p.mb-5 Para tener más claridad con respecto a los simuladores CNC, analice este concepto:

    .bloque-texto-f.color-nota.pt-4.px-5.mb-5
      .bloque-texto-f__comillas
        i.fas.fa-quote-left
        i.fas.fa-quote-right
      h4.text-regular.bloque-texto-f__texto
      .bloque-texto-f__autor.mb-3
        p.mb-3 Según Carolo (2022):
        p Los simuladores CNC son aplicaciones matemáticas diseñadas para predecir el comportamiento, el rendimiento y el resultado de determinados procesos de fabricación. Proporcionan los medios para probar y verificar el programa de CNC, normalmente escrito en código G, antes de enviar las instrucciones a la máquina. Pueden proporcionar información que permite optimizar todo el proceso, desde verificar la integridad del código hasta prevenir cualquier problema que pueda dañar los componentes físicos. Dicho esto, existen varios tipos de simuladores CNC que se centran en diferentes aspectos.

    p.mb-5 Las máquinas CNC generalmente traen incluido un simulador, sin embargo, podemos encontrar algunos junto con los <em>softwarsoftwares</em> de CAM, estos de acuerdo con la estructura del control de máquina funcionan de una u otra forma. A continuación, un ejemplo: 

    h5.mb-5 Algunos de los simuladores que se pueden conseguir en el mercado referente a la tecnología CNC: 

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema3/img-3.png')

      .tarjeta.colormodal(x="19%" y="10%" numero="1" tooltip='CNCSimulator Pro')
        .row.justify-content-center.mb-5.p-5
          .col-6
            p.mt-5.color-texto <b>CNCSimulator Pro:</b> 

            p.mt-4.color-texto “es un programa popular que existe desde 2001. Se trata de una herramienta potente, aunque no excesivamente compleja, con visualización 3D mejorada y soporte para diferentes máquinas (torneado, fresado…) y procesos (corte por láser o impresión 3D)” (Carolo, 2022).

            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=6p8rTMARzrM" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.color-enlace #[b Enlace web.Video de YouTube]
            
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-4.png')
      .tarjeta.colormodal(x="32%" y="46%" numero="2" tooltip='G-Wizard Editor')
        .row.justify-content-center.mb-5.p-5
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-5.png')
          .col-6
            p.color-texto.h4.mt-5 G-Wizard Editor: 

            p.mt-4.color-texto Es un simulador y una herramienta de edición de código G que se utiliza principalmente para comprobar, modificar o escribir código generado mediante CAM. La función denominada «programación conversacional» constituye una forma interactiva de escribir código G con imágenes descriptivas, algo así como rellenar los espacios en blanco. También cuenta con herramientas de comprobación de errores del código que describen los fallos en lugar de limitarse a señalarlos. (Carolo, 2022)

            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=fJhcoS5YTxQ&t=1s" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.color-enalce <b>Enlace web.Video de YouTube</b>
            

      .tarjeta.colormodal(x="44%" y="10%" numero="3" tooltip='CAMotics')
        .row.justify-content-center.mb-5.p-5
          .col-6
            p.color-texto.h4.mt-5 CAMotics:

            p.mt-4.color-texto CAMotics es un simulador de código G y de trayectorias de herramientas de código abierto, dirigido a la comunidad de creadores. Desde su lanzamiento en el 2011, el programa ha acumulado una amplia y activa comunidad de usuarios. Funciona en Windows, Mac y Linux, y es una de las pocas herramientas de simulación multiplataforma completas que existen. (Carolo, 2022)

            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=3uG0wgZ8kh8&t=1s" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.color-enalce <b>Enlace web.Video de YouTube</b>
            
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-6.png')

      .tarjeta.colormodal(x="68%" y="46%" numero="4" tooltip='NC Viewer')
        .row.justify-content-center.mb-5.p-5 
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-7.png')
          .col-6
            p.color-texto.h4.mt-5 NC Viewer: 

            p.mt-4.color-texto NC Viewer es el único simulador CNC de esta lista basado en navegador. Esencialmente, se trata de un simulador de trayectorias de herramientas con un entorno 3D interactivo y claro. Aunque no ofrece tantas funcionalidades como otras herramientas de simulación, es útil para verificar, visualizar y trazar código G de CNC  (Carolo, 2022).

            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=SpWmEeIjsi4" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.color-enalce #[b Para ver el video: https://www.youtube.com/watch?v=SpWmEeIjsi4]
            
      .tarjeta.colormodal(x="81%" y="10%" numero="5" tooltip='Eureka G-Code')
        .row.justify-content-center.mb-5.p-5
          .col-6
            p.color-texto.h4.mt-5 Eureka G-Code: 

            p.mt-4.color-texto “forma parte de un conjunto de software más amplio que incluye potentes herramientas, como un simulador multieje para la fabricación aditiva y un módulo que optimiza el código G mediante IA.” (Carolo, 2022).

            a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=HrPN__guTcU" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p.color-enalce <b>Enlace web.Video de YouTube</b>
            
          .col-6
            figure
              img(src='@/assets/curso/temas/tema3/img-8.png')
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-4(style="background-color: #f3eeeb ")
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
