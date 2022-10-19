<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Selección y configuración del mecanizado

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p  Cuando se tiene en CAD el modelo del objeto que se quiere mecanizar y se conoce el funcionamiento de las máquinas herramientas de control numérico NC con las que se cuenta, se procede a seleccionarlas y configurarlas para ejecutar el mecanizado y lograr un producto óptimo.
        br
        br
        p  Para esto es muy importante tener nociones de la interpretación de planos técnicos o de dibujo técnico, ya que la mayoría de proyectos lo utiliza como “el lenguaje” que comunica a los diseñadores, ingenieros, constructores, fabricantes y a todas las personas que intervienen, entregándoles la información técnica como las formas o geometrías, las dimensiones, los materiales, los componentes, los acabados superficiales, los ajustes o tolerancias, etc.

    .row.justify-content-center.align-items-center.mb-5
      .col-8
        .cajon.color-primario.p-4.mb-4.color-gris
          p Interpretando muy bien los planos técnicos, y conociendo las máquinas herramientas CNC disponibles, se pueden proyectar las operaciones con las que se logrará el producto final y, asimismo, se decide qué máquinas y en qué momento serán correctamente utilizadas.

    .separador.p3.mb-5

    #t_2_1.titulo-segundo.color-acento-contenido.pb-2
      h2 2.1 Selección de máquinas CNC

    p.mb-5 Para seleccionar adecuadamente las máquinas herramientas con las que se fabricará un producto, es necesario partir del diseño formal, es decir, revisar el modelo para determinar qué partes de este se obtendrán con la fresadora, cuáles con el torno y en qué orden se trabajará. 

    h4.mb-5 Analice algunos aspectos para tener en cuenta a la hora de seleccionar el tipo de máquinas.

    .titulo-sexto.color-secundario.color-sena.pb-0
      p.mt-1 <b>Figura 1</b>. <em>Selección de máquinas CNC</em>





    .separador.p3.mb-5

    #t_2_2.titulo-segundo.color-acento-contenido.pb-2
      h2 2.2 Configuración de parámetros para mecanizado CNC

    p Los parámetros de corte permiten determinar las condiciones con las que funcionará la máquina para desarrollar el mecanizado, como por ejemplo la velocidad en rpm con la que girará el husillo, la velocidad con la que se moverá una mesa o una herramienta y la profundidad de cada pasada de la herramienta. 



    .separador.p3.mb-5

    #t_2_3.titulo-segundo.color-acento-contenido.pb-2
      h2 2.3 Configuración de parámetros para mecanizado CNC

    p Para la obtención de los parámetros del mecanizado se requiere aplicar algunos conceptos matemáticos básicos como despejar ecuaciones de primer grado y la conversión de unidades. 

    h4 Observe a continuación algunas de esas ecuaciones matemáticas.  
    

</template>

<script>
export default {
  name: 'Tema2',
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
