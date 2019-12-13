<template>
  <div class="wrapper">

    <div id="app">
      <heading title="header"></heading>

      <modals
        title="Выбрать заявителя из бронирования"
        v-show="modal"
        @close="modal = !modal"></modals>

      <tabs
        title="Центр поддержки пассажиров Nordwind Airlines"
        @open="modal = !modal"></tabs>


      <basement title="footer"></basement>
    </div>

</div>
</template>

<script>
import modals from '@/components/Modal.vue'
import heading from '@/components/Header.vue'
import basement from '@/components/Basement.vue'
import tabs from '@/components/Tabs.vue'
export default {
  components: {modals, heading, basement, tabs},
  data () {
    return {
      modal: false
    }
  }
}
</script>

<style>
</style>
