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
        .cajon.color-primario.p-4.mb-4.color-cuadro
          p Interpretando muy bien los planos técnicos, y conociendo las máquinas herramientas CNC disponibles, se pueden proyectar las operaciones con las que se logrará el producto final y, asimismo, se decide qué máquinas y en qué momento serán correctamente utilizadas.

    .separador.p3.mb-5

    #t_2_1.titulo-segundo.color-acento-contenido.pb-2
      h3 2.1 Selección de máquinas CNC

    p.mb-5 Para seleccionar adecuadamente las máquinas herramientas con las que se fabricará un producto, es necesario partir del diseño formal, es decir, revisar el modelo para determinar qué partes de este se obtendrán con la fresadora, cuáles con el torno y en qué orden se trabajará. 

    p.mb-5 Analice algunos aspectos para tener en cuenta a la hora de seleccionar el tipo de máquinas.

    .titulo-sexto.color-acento-contenido.pb-0
      p.mt-1.mb-5 <b>Figura 1</b>. <em>Selección de máquinas CNC</em>

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema2/img-2.png')

      .tarjeta.colormodal(x="17%" y="25%" numero="1")
        .row.justify-content-center.mb-5.p-5
          .col-8
            p.mt-4.color-texto Si el objeto a mecanizar es o tiene partes en forma cilíndrica o con superficies generadas por revolución del material, entonces seguramente seleccionaremos un torno, como en la siguiente figura:
            
            p.mt-4.color-texto Los tornos manejados por control numérico por computadora están diseñados para realizar cortes y perforaciones precisas de forma instantánea. También se caracterizan por su alta velocidad, abarcando zonas donde en cortes manuales es imposible de alcanzar. 

            p.mt-4.color-texto El torno CNC cuenta con lector de código G y maneja su propio lenguaje de programación. También suele estar equipado con doce portaherramientas y bombas de refrigeración para reducir su desgaste por el uso. (Inoxform, 2020)

          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img-modal-1.png')

      .tarjeta.colormodal(x="48%" y="30%" numero="2")
        .row.justify-content-center.mb-5.p-5
          .col-8
            p.mt-4.color-texto Si la pieza tiene formas que se logran con ranuras o planeados, entonces se selecciona una fresadora o un centro de mecanizado.

            p.mt-4.color-texto El control numérico de una fresadora moderna ofrece una gran posibilidad de configurar las funciones de la maquinaria. Es así como podemos proceder al fresado frontal, de resalte o incluso el taladrado. Es ideal para aplicarlo a diversos proyectos de fabricación en la industria automotriz y obtener los mejores resultados. (Inoxform, 2020).

          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img-modal-2.png')

      .tarjeta.colormodal(x="80%" y="25%" numero="3")
        .row.justify-content-center.mb-5.p-5
          .col-8
            p.mt-4.color-texto Si lo que se necesita es cortar una lámina de un espesor determinado y con formas definidas en un plano creado en <em>software</em> de diseño asistido por computador CAD, se utiliza una cortadora por plasma.
        
            p.mt-4.color-texto Las cortadoras de plasma CNC cuentan con características similares a las de un enrutador. Sin embargo, difieren de ellas debido a que no arrastra el material, sino que actúa por encima de él mediante el desplazamiento del plasma. Para ello, se procede al aumento de la temperatura para fundir el metal y generar un acabado de calidad. Este tipo de máquinas CNC no requieren de una gran dimensión o configuración, además de que se puede trabajar con metales densos sin ningún inconveniente. (Inoxform , 2020).

          .col-4
            figure
              img(src='@/assets/curso/temas/tema2/img-modal-3.png')          

    .separador.p3.mb-5

    #t_2_2.titulo-segundo.color-acento-contenido.pb-2
      h3 2.2 Configuración de parámetros para mecanizado CNC

    p.mb-5 Los parámetros de corte permiten determinar las condiciones con las que funcionará la máquina para desarrollar el mecanizado, como por ejemplo la velocidad en rpm con la que girará el husillo, la velocidad con la que se moverá una mesa o una herramienta y la profundidad de cada pasada de la herramienta. 

    p.mb-5 Los principales parámetros para configurar son:

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema2/img-3.png", alt="alt").img400.m-auto
        .col-lg-8
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Velocidad de giro (n)")
              .col-12
                p.mb-0 Es la velocidad a la que girará el husillo de la máquina, en el torno la velocidad de giro del plato de sujeción del material de trabajo, en la fresadora la velocidad de giro de la herramienta de corte (fresa). Esta dependerá de las propiedades mecánicas del material de trabajo y de la herramienta, del diámetro tanto del material de trabajo en el torno como de la fresa en la fresadora o centro de mecanizado. 

            .row(titulo="Velocidad de avance (f)")
              .col-12
                p.mb-0 Es con la que se mueve la torreta, es decir, el buril que es la herramienta en el torno, o la mesa, en las fresadoras o centro de mecanizado. Esta depende tanto de la velocidad de corte como del acabado superficial que se desee lograr, es diferente si solamente se quiere desbastar el material o si se desea que quede brillante la superficie.

            .row(titulo="Profundidad de pasada (a)")
              .col-12
                p.mb-0 Distancia entre cada capa que la herramienta de corte desbasta entre una pasada y otra. Está condicionada por las características del material de trabajo y de la herramienta, así como por la potencia de la máquina.

    .separador.p3.mb-5

    #t_2_3.titulo-segundo.color-acento-contenido.pb-2
      h3 2.3 Matemáticas aplicadas al mecanizado

    p.mb-5 Para la obtención de los parámetros del mecanizado se requiere aplicar algunos conceptos matemáticos básicos como despejar ecuaciones de primer grado y la conversión de unidades. 

    p.mb-5 Observe a continuación algunas de esas ecuaciones matemáticas.  

    .tarjeta.tarjeta--gris.p-4.color-fondolinea
      PasosB.color-acento-contenido
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            h5.alineacion Velocidad de giro
            p.alineacion Para obtener la velocidad de giro (n): 
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-2.png')
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-3.png')
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-4.png')

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-linea-1.png') 
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            h5.alineacion Velocidad del avance
            p.alineacion La velocidad del avance (f) se obtiene:  
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-6.png')
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-7.png')
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-8.png')
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-linea-5.png')
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            h5.alineacion Velocidad del avance
            p.alineacion La profundidad del corte o de la pasada depende principalmente del material, del acabado o del ajuste que se quiera dar a la pieza y de la potencia de la máquina.  
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-10.png')
            figure
              img.img-linea(src='@/assets/curso/temas/tema2/img-linea-11.png')

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/img-linea-9.png')


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
