export default {
  global: {
    componenteFormativo: 'Programación CNC en CAM ',
    descripcionCurso: `El presente contenido fundamenta la fabricación asistida por computador basado en el diseño de un modelo CAD, las máquinas de control numérico computarizado CNC y su programación comprobada en el simulador.`,
    imagenBannerPrincipal: require('@/assets/curso/portada/img-prin.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de CAM',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Conceptos, definición y tipos de <em>software</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Archivos digitales CAM',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Control Numérico Computarizado CNC',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Selección y configuración del mecanizado',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Programación y simulación del mecanizado CNC',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: ' Proceso CNC',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Simulación del mecanizado CNC',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Fundamentos de CAM',
      referencia: `De máquinas y herramientas. (2015). <em>Materiales según la norma ISO.</em> `,
      tipo: 'Artículo',
      link: `https://www.demaquinasyherramientas.com/mecanizado/materiales-segun-la-norma-iso`,
    },
    {
      tema: 'Fundamentos de CAM',
      referencia: `Hernández, J. (2020). <em>Curso básico de CNC. </em>`,
      tipo: 'Presentación',
      link: `https://slideplayer.es/slide/17991266/`,
    },
    {
      tema: 'Fundamentos de CAM',
      referencia: `Pérez Camps. (s.f.). <em>Qué es CAD/CAM.</em> `,
      tipo: 'Artículo',
      link: `https://perezcamps.com/es/que-es-cam-cad/`,
    },
    {
      tema: 'Fundamentos de CAM',
      referencia: `Siemens. (2022). <em>Fabricación asistida por ordenador (CAM).</em> `,
      tipo: 'Artículo',
      link: `https://www.plm.automation.siemens.com/global/es/our-story/glossary/computer-aided-manufacturing-cam/13139`,
    },
  ],
  glosario: [
    {
      termino: 'Buril',
      significado: 'herramienta de corte con la que trabaja un torno.',
    },
    {
      termino: 'CAD',
      significado: `del inglés <em>Computer Aided Design</em>, o diseño asistido por el computador.`,
    },
    {
      termino: 'CAM',
      significado: `del inglés <em>Computer Aided Manufacture</em>, o fabricación asistida por computador.`,
    },
    {
      termino: 'CNC',
      significado: `control numérico computarizado.`,
    },
    {
      termino: 'Fresa',
      significado: `herramienta de corte con la que trabaja una fresadora o un centro de mecanizado.`,
    },
    {
      termino: 'Husillo',
      significado: `parte de la máquina herramienta que gira y sostiene accesorios para fijar herramientas o materiales.`,
    },
    {
      termino: 'Maquina NC',
      significado: `se refiere a una máquina con control numérico.`,
    },
    {
      termino: 'Moleteado',
      significado: `operación en la que se graba por medio de la presión, un patrón sobre la superficie de un material.`,
    },
    {
      termino: 'Plasma',
      significado: `gas caliente que permite el flujo de energía eléctrica para hacer un corte a un metal.`,
    },
    {
      termino: 'PLM',
      significado: `del inglés Product Life Cycle, o gestión del ciclo de vida del producto.`,
    },
  ],
  referencias: [
    {
      referencia: '3DCadPortal. (2022). <em>PowerMill.</em>',
      link: 'https://www.3dcadportal.com/delcam-powermill.html',
    },
    {
      referencia: '3DcadPortal. (2022). <em>Rhinocam.</em>',
      link: 'https://www.3dcadportal.com/rhinocam.html',
    },
    {
      referencia: '3DcadPortal. (2022). <em>Solidcam.</em> ',
      link:
        'https://www.3dcadportal.com/solidcam.html#:~:text=Solidcam%20es%20un%20software%20para,sobre%20SolidWorks%20y%20Autodesk%20Inventor.',
    },
    {
      referencia:
        'Autycom. (2020). <em>¿Qué es el control numérico computarizado o CNC?</em> ',
      link:
        'https://www.autycom.com/que-es-el-control-numerico-computarizado-o-cnc/',
    },
    {
      referencia:
        'Carolo, L. (2022). <em>Los mejores simuladores CNC de 2022 (online y offline).</em>',
      link: 'https://all3dp.com/es/2/simulador-cnc-online-gratis/',
    },
    {
      referencia:
        'Crespo, M. (2016). <em>BobCAD-CAM-V29---MILL-5-PRO Mecanizado de 5 ejes simultáneos.</em> ',
      link:
        'https://www.interempresas.net/FeriaVirtual/Catalogos_y_documentos/199030/BobCAD-CAM-V29---MILL-5-PRO.-Mecanizado-de-5-Ejes-Simultaneos.pdf',
    },
    {
      referencia: 'Filext .(2022). <em>Abrir un archivo CAM.</em>',
      link: 'https://filext.com/es/extension-de-archivo/CAM',
    },
    {
      referencia: 'Hernández, J. (2020). <em>Curso básico de CNC.</em>',
      link: 'https://player.slideplayer.es/109/17991266/',
    },
    {
      referencia:
        'Inoxform.au. (2022). <em>Descubre los diferentes tipos de máquinas CNC.</em>',
      link: 'https://inoxform.eu/es/tipos-de-maquinas-cnc/',
    },
    {
      referencia: 'Pérez Camps. (s.f.). <em>Qué es CAD/CAM.</em> ',
      link:
        'https://perezcamps.com/es/que-es-cam-cad/',
    },
    {
      referencia: 'Siemens. (2022). Fabricación asistida por ordenador (CAM).',
      link:
        'https://www.plm.automation.siemens.com/global/es/our-story/glossary/computer-aided-manufacturing-cam/13139',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
