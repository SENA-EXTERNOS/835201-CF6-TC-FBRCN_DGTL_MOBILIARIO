<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-sexto.color-secundario.color-sena.pb-0
      h5.mt-1 Fabricación digital de mobiliario
      br
      p Síntesis: Programación CNC en CAM
      
    p.mb-5 A continuación, lo invitamos a revisar la síntesis de los diferentes temas abordados en el presente componente.

    .row.justify-content-center
      .col-lg-10.mb-3
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
</template>

<script>
export default {
  name: 'Sintesis',
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
