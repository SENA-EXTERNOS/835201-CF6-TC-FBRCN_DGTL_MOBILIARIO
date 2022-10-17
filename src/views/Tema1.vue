<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de CAM

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  El software de fabricación asistida por computador (CAM) es el que permite que los proyectos que se han modelado con diseño asistido por computador (CAD) sean transferidos a las máquinas herramientas controladas por computador (CNC) en un lenguaje que estas pueden leer y ejecutar; el cual está estructurado en programas que, mediante códigos o palabras, contienen todas las instrucciones con los parámetros para que la máquina, a través de sus diferentes herramientas, ejecute las operaciones necesarias para transformar un material en bruto  en la pieza final diseñada.   
    br
    .row.justify-content-center.align-items-center
      .col-8
        .cajon.color-primario.p-4.mb-4.color-gris
          p Para poder trabajar con el CAM, la persona debe tener conocimientos básicos en CAD y en mecanizado convencional, ya que inicialmente es necesario interpretar muy bien los planos técnicos, para luego poder evaluar y seleccionar eficazmente los procesos, las máquinas, las herramientas y las operaciones para realizar el programa que logrará controlar las máquinas y así, obtener la pieza final que cumpla con todos los requerimientos planteados.  

    .separador.p3

    #t_1_1.titulo-segundo.color-acento-contenido.pb-2
      h2 1.1 Conceptos, definición y tipos de software

    .row.justify-content-center.align-items-center
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema1/img-2.png")
      .col-lg-6
        p Para comprender el proceso de fabricación de un producto mediante software CAM, es necesario tener claros algunos conceptos y definiciones de términos que se mencionan en el desarrollo del componente.
        h5 A continuación, se explican los siguientes conceptos: CAD, CAE, CAM y CNC:

    SlyderA.tarjeta.opacidad.my-4.p-3(tipo="b")
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CAD 
          p.ms-5 Del inglés <b>Computer Aided Design (CAD)</b>, o diseño asistido por el computador.  Con este software se pueden crear modelos sólidos a partir de un plano o figuras planas, para luego ser importados en el CAM y planear su fabricación.
        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-1.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CAE 
          p.ms-5 Del inglés <b>Computer Aided Engineering (CAE)</b> o ingeniería asistida por computador. Es el software que permite a partir del diseño en CAD, realizar simulaciones para analizar aspectos de un proyecto como el comportamiento de un material frente a diferentes condiciones, la funcionalidad de un nuevo producto, etc. y así poder determinar su viabilidad o factibilidad.
        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-2.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CAM
          p.ms-5 Del inglés <b>Computer Aided Manufacture (CAM)</b> o fabricación asistida por computador.  Con esta ayuda digital se proyectan, se definen y se controlan las máquinas, las herramientas y trayectorias o recorridos necesarios para obtener la pieza o producto que ha sido modelada en CAD, es decir, <b>  las instrucciones que seguirá la máquina para fabricar un producto</b>. Por ejemplo, en la siguiente imagen se pueden observar las diferentes herramientas seleccionadas para el fresado de un producto y sus trayectorias.
        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-3.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CNC
          p.ms-5 Del inglés <b>Computer Numerical Control (CNC)</b> o control numérico computarizado. Se refiere a las máquinas herramientas a las cuales se les puede programar el control de sus operaciones mediante un software CAM y que, al correr el programa, esta las ejecuta de tal manera que se logra la pieza deseada.
        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-4.png')

    p En una publicación sobre fabricación asistida por ordenador <em>(CAM)</em>, publicada por Siemens (2022) se afirma que:

    p Una definición más amplia de la CAM puede incluir el uso de las aplicaciones de ordenador para definir un plan de fabricación para el diseño de herramientas, el diseño asistido por ordenador (CAD), la preparación de modelos, la programación NC, la programación de inspección de máquinas de medición por coordenadas (CMM), la simulación de máquina-herramienta o el postprocesamiento. A continuación, el plan se ejecuta en un entorno de producción, como el control numérico directo (DNC), la gestión de herramientas, el mecanizado CNC o la ejecución CMM. 

    h4.mb-4 Tipos de software

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p Existe una gran variedad de software de soporte para la programación del <b>mecanizado con fabricación asistida por computador CAM</b>, que generalmente también incluye el módulo para la creación o edición de modelos mediante <b>diseño asistido por computador CAD</b>, o que se integra con estos y que se puede usar o es compatible con la gran variedad de máquinas herramientas controladas <b>numéricamente por el computador o CNC</b> que encontramos en la actualidad. 
        .col-lg-5.mb-4.mb-lg-0.mt-5
          figure(data-aos="fade-right")
            img.img-250.img-cen(src='@/assets/curso/temas/tema1/img-3.png')

    p Las máquinas herramientas con las que se fabrica un modelo real deben ser de control numérico y compatibles con el <em>software</em> CAM, es decir, deben permitir recibir los archivos con las instrucciones o el programa generado en CAM. Por ejemplo, si se tiene una máquina de corte con plasma, esta tiene que ser compatible con el <em>software</em> CAM.

    h4.mb-4 Algunas de las marcas que fabrican software CAM más importantes en el mercado son:

    .row
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center PowerMill 
          p.text-center Es un <em>software</em> para manufactura CAM especializado para la fabricación de formas complejas típicamente encontradas en la industria aeroespacial, automotriz, dispositivos médicos e industrias fabricantes de herramental. PowerMill fue creado por Delcam, después comprado por Autodesk.


      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center RhinoCAM 
          p.text-center Es un programa CAM ideal para manufactura de productos, prototipos, moldes, herramentales, y maquinado en general. Adecuado para usuarios con exigencias de manufactura complejas en productos irregulares dentro de Rhinoceros. 

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.text-white--hover.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center Solidcam
          p.text-center Es un <em>software</em> para manufactura CAM 3D que está integrado sobre SolidWorks y Autodesk Inventor. Con operaciones de corte, fresado y torno para ser ejecutadas en centros de maquinado CNC usando la tecnología iMachining, una de sus ventajas es que el sistema explota toda la inteligencia de manejo de sólidos paramétricos 3D.

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/componentes/ej-05.svg', alt='Texto que describa la imagen')

          h3.text-center BobCAD-CAM V29 5 Ejes 
          p.text-center Es un sistema para la programación de centros de mecanizado de 5 Ejes. BobCAD permite la importación de archivos generados en SolidWorks, AutoCAD, Inventor, Rhino, Catia, NX y muchos más, para ser mecanizado dentro de BobCAD-CAM., Crespo, (2016).  
          p.text-center <b>Texto tomado de</b>: 3DCadPortal (2022).




</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
