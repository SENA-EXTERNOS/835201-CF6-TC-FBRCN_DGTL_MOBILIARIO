<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Fundamentos de CAM

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  El <em>software</em> de fabricación asistida por computador (CAM) es el que permite que los proyectos que se han modelado con diseño asistido por computador (CAD) sean transferidos a las máquinas herramientas controladas por computador (CNC) en un lenguaje que estas pueden leer y ejecutar; el cual está estructurado en programas que, mediante códigos o palabras, contienen todas las instrucciones con los parámetros para que la máquina, a través de sus diferentes herramientas, ejecute las operaciones necesarias para transformar un material en bruto  en la pieza final diseñada.  
    .row.justify-content-center.align-items-center
      .col-8
        .cajon.color-primario.p-4.mb-4.color-gris
          p Para poder trabajar con el CAM, la persona debe tener conocimientos básicos en CAD y en mecanizado convencional, ya que inicialmente es necesario interpretar muy bien los planos técnicos, para luego poder evaluar y seleccionar eficazmente los procesos, las máquinas, las herramientas y las operaciones para realizar el programa que logrará controlar las máquinas y así, obtener la pieza final que cumpla con todos los requerimientos planteados.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido.pb-2
      h3 1.1 Conceptos, definición y tipos de <em>software</em>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        figure
          img(src="@/assets/curso/temas/tema1/img-2.png")
      .col-lg-6
        p Para comprender el proceso de fabricación de un producto mediante <em>software</em> CAM, es necesario tener claros algunos conceptos y definiciones de términos que se mencionan en el desarrollo del componente.
          br
          br
          |  A continuación, se explican los siguientes conceptos: CAD, CAE, CAM y CNC:

    SlyderA.tarjeta.opacidad1.my-4.p-3.mb-5(tipo="b")
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CAD 
          p.ms-5 #[b #[em Computer Aided Design (CAD)]], o Diseño Asistido por Computador. Con este #[em software], se pueden crear modelos sólidos a partir de un plano o figuras planas, para luego ser importados en el CAM y planear su fabricación.

        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-1.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CAE 
          p.ms-5 #[em #[b Computer Aided Engineering]] (CAE) o Ingeniería Asistida por Computador. Es el #[em software] que permite, a partir del diseño en CAD, realizar simulaciones para analizar aspectos de un proyecto, como el comportamiento de un material frente a diferentes condiciones, la funcionalidad de un nuevo producto, etc. y, de esta manera, poder determinar su viabilidad o factibilidad.
        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-2.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CAM
          p.ms-5 #[b #[em Computer Aided Manufacture]] (CAM) o Fabricación Asistida por Computador. Con esta ayuda digital se proyectan, se definen y se controlan las máquinas herramientas y trayectorias o recorridos, necesarios para obtener la pieza o producto que ha sido modelada en CAD; es decir, #[b las instrucciones que seguirá la máquina para fabricar un producto.] En la imagen se pueden observar las diferentes herramientas seleccionadas para el fresado de un producto y sus trayectorias.
        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-3.png')
      .row.justify-content-center
        .col-lg-6.mt-md-4
          h2.ms-5 CNC
          p.ms-5 #[b #[em Computer Numerical Control]] (CNC) o Control Numérico Computarizado. Se refiere a las máquinas herramientas a las cuales se les puede programar el control de sus operaciones mediante un #[em software] CAM y que, al correr el programa, esta las ejecuta de tal manera, que se logra la pieza deseada.
        .col-lg-6
          figure
            img.img-250(src='@/assets/curso/temas/tema1/slider-img-4.png')

    p.mb-5 En una publicación sobre <em>fabricación asistida por ordenador (CAM)</em>, publicada por Siemens (2022) se afirma que:

    p.mb-5 Una definición más amplia de la CAM puede incluir el uso de las aplicaciones de ordenador para definir un plan de fabricación para el diseño de herramientas, el diseño asistido por ordenador (CAD), la preparación de modelos, la programación NC, la programación de inspección de máquinas de medición por coordenadas (CMM), la simulación de máquina-herramienta o el postprocesamiento. A continuación, el plan se ejecuta en un entorno de producción, como el control numérico directo (DNC), la gestión de herramientas, el mecanizado CNC o la ejecución CMM. 

    p.mb-5 <em>Tipos de software</em>

    .bloque-texto-a.p-4.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4
            p.m-5 Existe una gran variedad de software de soporte para la programación del <b>mecanizado con fabricación asistida por computador CAM</b>, que generalmente también incluye el módulo para la creación o edición de modelos mediante <b>diseño asistido por computador CAD</b>, o que se integra con estos y que se puede usar o es compatible con la gran variedad de máquinas herramientas controladas <b>numéricamente por el computador o CNC</b> que encontramos en la actualidad. 
        .col-lg-5.mb-lg-0
          figure(data-aos="fade-right")
            img.img-center(src='@/assets/curso/temas/tema1/img-3.png')

    p.mb-5 Las máquinas herramientas con las que se fabrica un modelo real deben ser de control numérico y compatibles con el <em>software</em> CAM, es decir, deben permitir recibir los archivos con las instrucciones o el programa generado en CAM. Por ejemplo, si se tiene una máquina de corte con plasma, esta tiene que ser compatible con el <em>software</em> CAM.

    p.mb-5 Algunas de las marcas que fabrican <em>software</em> CAM más importantes en el mercado son:

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure.mb-2
                img(src='@/assets/curso/temas/tema1/img-tar-1.png')

          h3.text-center.mb-5 PowerMill 
          p.text-center Es un #[em software] para manufactura CAM, especializado en la fabricación de formas complejas típicamente encontradas en la industria aeroespacial, automotriz, dispositivos médicos e industrias fabricantes de herramentales. PowerMill fue creado por Delcam, y después comprado por Autodesk.


      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure.mb-2
                img(src='@/assets/curso/temas/tema1/img-tar-2.png')

          h3.text-center.mb-5 RhinoCAM 
          p.text-center.mb-5 Es un programa CAM ideal para manufactura de productos, prototipos, moldes, herramentales, y maquinado en general. Adecuado para usuarios con exigencias de manufactura complejas en productos irregulares dentro de Rhinoceros.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img-tar-3.png')

          h3.text-center Solidcam
          p.text-center Es un #[em software] para manufactura CAM 3D, que está integrado sobre SolidWorks y Autodesk Inventor. Con operaciones de corte, fresado y torno para ser ejecutadas en centros de maquinado CNC, usando la tecnología #[em Machining]; una de sus ventajas es que el sistema explota toda la inteligencia de manejo de sólidos paramétricos 3D.

      .col-sm-6.col-lg-3
        .tarjeta--boton.color-primario.h-100.p-4
          .row.justify-content-center.mb-3
            .col-10
              figure
                img(src='@/assets/curso/temas/tema1/img-tar-4.png')

          h3.text-center BobCAD-CAM V29 5 Ejes 
          p.text-center Es un sistema para la programación de centros de mecanizado de 5 Ejes. BobCAD permite la importación de archivos generados en SolidWorks, AutoCAD, Inventor, Rhino, Catia, NX y muchos más, para ser mecanizado dentro de BobCAD-CAM. 
            br
            |#[b Texto tomado de:] 3DCadPortal (2022).

    .separador.p3.mb-5

    #t_1_2.titulo-segundo.color-acento-contenido.mb-5
      h3 1.2 Archivos digitales CAM

    .tarjeta.opacidad.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
      
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src='@/assets/curso/temas/tema1/img-4.png')

        .col-md.col-lg-6
          p Frente al interrogante sobre ¿Qué es un archivo CAM?, la Empresa FilExt (2022) sostiene que:
          p Los archivos CAM pertenecen principalmente a Eagle de Autodesk. La extensión de nombre de archivo CAM está asociada a los archivos creados con Drawing Editor y guardados en formato FastCAM. El contenido de estos archivos CAM puede incluir el grosor, el material, la trayectoria y la cantidad de un objeto. La extensión de nombre de archivo CAM también está asociada a los diseños de placas de circuitos impresos (PCB) guardados en formato de gráficos vectoriales Gerber.
          p  Cuando se trabaja con un software de fabricación asistida por computador CAM se puede encontrar una gran cantidad de archivos digitales que, para favorecer el proceso o la gestión del ciclo de vida de un producto, deben ser compatibles entre ellos, especialmente para identificar, abrir y editarlos durante las diferentes fases de trabajo.

    p.mb-5 Las fases de trabajo son las siguientes:

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Fase de diseño")
        .row
          .col-md-6.mb-4.mb-md-0
            p.mb-5 En la fase de diseño encontramos los archivos generados o importados por el <em>software</em> CAD, que pueden tener diferentes extensiones dependiendo del fabricante. Para poder trabajar con estos archivos, estos se deben guardar con extensiones que permitan el intercambio o compatibilidad entre marcas. 

            p Extensiones para 2D:
            .col-11
            ul.lista-ul.ms-4
              li 
                <i class="fa fa-check text-success" aria-hidden="true"></i>
                p DWG: es la extensión con las que se guardan los archivos de diseño vectorizado trabajado con uno de los programas más populares y antiguos del mercado llamado AutoCAD.
              li
            ul.lista-ul.ms-4
              li 
                <i class="fa fa-check text-success" aria-hidden="true"></i>
                p DXF: es la más utilizada en diseño asistido por computador CAD el día de hoy, ya que es compatible con los DWG y generalmente se usa para los archivos de dibujo en 2D. Una característica especial es que el tamaño de los archivos queda más reducido que algunas otras extensiones. 
              li
              ul.lista-ul.ms-4
              li.mb-5 
                <i class="fa fa-check text-success" aria-hidden="true"></i>
                p PDF: extensión muy utilizada por otros programas, incluso ajenos al diseño, ya que es bastante compatible para importar, exportar o compartir dibujos; también es particular de esta extensión la alta cantidad de usuarios por su accesibilidad   y ser gratuito.

            p Extensiones para 3D:
            .col-11
            ul.lista-ul.ms-4
              li 
                <i class="fa fa-check text-success" aria-hidden="true"></i>
                p DGN: parecida al DWG de AutoCAD, pertenece a <em></em>MicroStation y sirve para almacenar archivos 2D y 3D.

              li
            ul.lista-ul.ms-4
              li 
                <i class="fa fa-check text-success" aria-hidden="true"></i>
                p IGES: sirve para intercambio de modelos sólidos entre diferentes programas de modelado 3D, también soporta almacenar gráficos 2D y es la más popular por ser una de las más antiguas del mercado. 
 
              li
              ul.lista-ul.ms-4
              li 
                <i class="fa fa-check text-success" aria-hidden="true"></i>
                p STEP: almacena e intercambia sólidos y ensamblajes, junto a IGES son las extensiones más usadas en el ámbito del diseño 3D.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-pesta-1.png')
      .py-4.py-md-5(titulo="Fase de programación")
        .row
          .col-md-6.mb-4.mb-md-0
            p Las máquinas herramientas que trabajan con la tecnología <b>CNC</b> o de control numérico computarizado, operan con bastante precisión basadas en un archivo digital proveniente de un <em>software</em> CAM y en el que se encuentran todas las instrucciones para transformar el material de trabajo sin importar si es metal, madera, polímero, etc.
            p El código G es el lenguaje con el que se programan las máquinas herramientas de control numérico; esta información contiene las coordenadas que el controlador de la máquina convierte en los movimientos, revoluciones, velocidades, herramientas y funciones para los demás parámetros del mecanizado. 
            p Al enviar el archivo a la máquina de control numérico, este debe tener la extensión <b>.NC</b> o la de la marca de la máquina CNC que se tenga para trabajar el proyecto.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-pesta-2.png')
      .py-4.py-md-5(titulo="Fase de simulación ")
        .row
          .col-md-6.mb-4.mb-md-0
            p El <em>software</em> de simulación muestra virtualmente el comportamiento de la máquina de control numérico CNC, interpretando el programa creado con <b>código G</b>, con el fin de detectar y corregir los posibles problemas que se presentarían una vez se inicie el mecanizado real.
            p Entre los <em>softwares</em> para simulación que hay en el mercado se encuentran:
            .col-11
              ul.lista-ul.ms-4
                li 
                  <i class="fa fa-check text-success" aria-hidden="true"></i>
                  p Programas como <em></em><b>SolidWorks y Fusion 360</b> permiten simular los procesos de mecanizado en CAM, pero no abrir o leer un programa con código G importado.
                li
              ul.lista-ul.ms-4
                li 
                  <i class="fa fa-check text-success" aria-hidden="true"></i>
                  p <b>eCam</b> es un <em></em>software para crear programas de modelos simples en código G y realizar la simulación de las trayectorias de las herramientas de la máquina CNC Compatible con archivos DXF y DWG. 

                li
              ul.lista-ul.ms-4
                li 
                  <i class="fa fa-check text-success" aria-hidden="true"></i>
                  p <b>HeeksCNC</b> es un <em></em>software de diseño y de fabricación asistida por computador CAD/CAM, para crear y simular programas en código G que, cada vez gana más espacio en el comercio de los programas para máquinas de control numérico CNC, al permitir actualizaciones regularmente.
              ul.lista-ul.ms-4
                li 
                  <i class="fa fa-check text-success" aria-hidden="true"></i>
                  p <b>CNC Simulator Pro</b> es un <em>software</em> muy completo para modelado CAD 2D y 3D, simulación de gran variedad de máquinas herramientas CNC, incluyendo impresoras 3D.
            p Otras opciones de #[em software] con los que se pueden crear y trabajar los programas en código G, son NC Viewer, PlanetCNC, Universal Gcode sender (UGS), ChiliPeppr, OpenCNCPilot, Mach3 y Easel, entre otros.

            p Generalmente los archivos ya importados en el <em>software</em> CAM permiten, una vez abiertos, hacer la simulación de su mecanizado.
            
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-pesta-3.png')

    .separador.p3.mb-5

    #t_1_3.titulo-segundo.color-acento-contenido.mb-5
      h3 1.3 Control Numérico Computarizado CNC

    .bloque-texto-a.p-md-5.mb-5.fnd-izq
      .row.m-0.align-items-center.justify-content-between
        .col-lg-7
          .bloque-texto-a__texto.p-4.p-5
            br
            p El control numérico computarizado o CNC se refiere a las máquinas herramientas que son controladas numéricamente por el computador. Para comprender mejor el tema se debe conocer inicialmente el funcionamiento de estas máquinas sin el control numérico, es decir, las máquinas convencionales. Entonces, las manivelas o mecanismos de control de los avances y de los diferentes movimientos de las herramientas, se reemplazan por servomotores, que son motores que se pueden controlar (velocidad, potencia, sentido de giro, etc.) desde el computador con un programa de CNC.
            br
        .col-lg-5.mb-4.mb-lg-0.ms-mt-5
          figure(data-aos="fade-right")
            img.img-center(src='@/assets/curso/temas/tema1/img-5.png')

    p.mb-5 Para entender el concepto de CNC, se retoma la definición de Autycom (2020):

    .bloque-texto-f.color-nota.pt-4.px-5.mb-5
      .bloque-texto-f__comillas
        i.fas.fa-quote-left
        i.fas.fa-quote-right
      h4.text-regular.bloque-texto-f__texto
      .bloque-texto-f__autor.mb-3
        p El Control Numérico Computarizado, también llamado CNC, es todo aquel dispositivo que posee la capacidad de controlar la posición y velocidad de los motores que accionan los ejes de la máquina para realizar movimientos que no se pueden lograr manualmente como círculos, líneas diagonales y figuras complejas tridimensionales.

    h4.mb-5 Máquinas CNC

    p Las principales máquinas que son controladas por el computador o máquinas de control numérico NC, son las de mecanizado como el torno y la fresadora, tal como se mencionó anteriormente; el funcionamiento básico es el mismo de las máquinas convencionales, solo que traen servomotores para controlar el desempeño de las herramientas de corte.

    p.mb-5 ¿Cómo funciona una máquina de control numérico CNC? 

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="El torno")
        .col-md-6.mb-4.mb-md-0
          p Es la máquina herramienta encargada de generar piezas con forma basada en la revolución del material de trabajo y al que se le arranca viruta o material sobrante con el buril, que en este caso es la herramienta de corte hasta quedar la forma final deseada.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-tar-5.png')

      .row(titulo="La Fresadora")
        .col-md-6.mb-4.mb-md-0
          p Con esta máquina herramienta se obtienen objetos con formas diferentes mediante el arranque de viruta o material sobrante al material de trabajo a través de la revolución, en este caso, de la herramienta de corte que llamamos fresa, hasta lograr la forma final deseada.

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-tar-6.png')
          
      .row(titulo="Corte por láser")
        .col-md-6.mb-4.mb-md-0
          p Al igual que las máquinas anteriores, la máquina de corte por láser está controlada por un computador; las formas para corte o grabado se definen a través de un <em>software</em> digital de la máquina que permite trabajar con materiales como metal y madera. El rayo láser es un rayo de luz concentrado que corta los materiales con el calor que se concentra en un solo punto. 

        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema1/img-tar-7.png')
    h4.mb-5 Normativa para el mecanizado

    p.mb-5 Las normas para mecanizar materiales se enfocan principalmente en la seguridad del operador de la máquina herramienta y pueden cambiar de acuerdo con el proceso de mecanizado que se vaya a ejecutar, con el material que se vaya a mecanizar, si el mecanizado es formativo o productivo, etc. 
      br
      br
      |A continuación, un resumen de las normas más importantes para tener en cuenta si se va a mecanizar con máquinas de control numérico NC:

    .row.justify-content-center
      .col-lg-5.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.color-ajusteuno
            figure
              img(src="@/assets/curso/temas/tema1/img-animada-1.png", alt="alt")
          .crd_hover_txt--body.color-des
            h4.mb-3.text-center Elementos de protección personal
            p.mb-0 Utilizar los indicados para cada área; generalmente son: gafas de protección, calzado de seguridad con puntera, ropa de trabajo según las indicaciones, así como los protectores para oídos.

      .col-lg-5.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.color-ajusteuno
            figure
              img(src="@/assets/curso/temas/tema1/img-animada-2.png", alt="alt")
          .crd_hover_txt--body.color-des
            h4.mb-3.text-center Recomendaciones del fabricante
            p.mb-0Las Las máquinas se deben utilizar de acuerdo con las recomendaciones del fabricante o proveedor.

      .col-lg-5.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.color-ajusteuno
            figure
              img(src="@/assets/curso/temas/tema1/img-animada-3.png", alt="alt")
          .crd_hover_txt--body.color-des
            h4.mb-3.text-center Iluminación
            p.mb-0 El espacio de trabajo debe tener la mejor iluminación posible. 

      .col-lg-5.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.color-ajusteuno
            figure
              img(src="@/assets/curso/temas/tema1/img-animada-4.png", alt="alt")
          .crd_hover_txt--body.color-des
            h4.mb-3.text-center Orden y aseo
            p.mb-0 Requisitos importantes, tanto para trabajar cómodamente como para evitar accidentes laborales.  

      .col-lg-5.col-md-9.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img.color-ajusteuno
            figure
              img(src="@/assets/curso/temas/tema1/img-animada-5.png", alt="alt")
          .crd_hover_txt--body.color-des
            h4.mb-3.text-center Mantenimiento de máquinas
            p.mb-0 Es imprescindible revisar los niveles de aceite y lubricación; asimismo, estar atento a partes defectuosas, entre otros.


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
