<template>
  <header class="header">
    <a href="./">
      <img class="logo" src="@/assets/img/logo-top.svg" alt="Nordwind Airlines">
    </a>
    <div class="burger"
      v-bind:class="{ burger__opened: showMobileMenu }"
      v-on:click="showMobileMenu = !showMobileMenu">
      <span class="bar bar__top"></span>
      <span class="bar bar__mid"></span>
      <span class="bar bar__bot"></span>
    </div>
    <div class="header-nav__wrapper">
      <div class="header-nav">
        <a class="header-nav__item" href="./">
          <img class="header-nav__icon" src="@/assets/img/rules.svg">
          Правила и сроки рассмотрения обращений
        </a>
        <a class="header-nav__item" href="./">
          <img class="header-nav__icon" src="@/assets/img/back.svg">
          Назад на nordwindairlines.ru
        </a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data: function () {
      return  {
        showMobileMenu: false
      }
    },
    props: {
      title: {
        type: String,
        required: true
      }
    },
  }
</script>

<style lang="stylus">
  .header
    display flex
    justify-content space-between
    align-items center
    width 100%
    height 80px
    padding 0 32px
    position fixed
    left 0
    top 0
    box-shadow inset 0px -1px 0px #CECECE
    background #fff
    z-index 9
    @media screen and (max-width: 1200px)
      padding 0 24px
    @media screen and (max-width: 960px)
      padding 0 16px

    &-nav
      display flex
      justify-content center
      align-items center
      @media screen and (max-width: 960px)
        flex-direction column
        align-items flex-start
        background #ffffff
      &__item
        padding-left 32px
        font-size: 16px
        line-height: 24px
        display flex
        justify-content center
        align-items center
        color #000
        text-decoration none
        transition: .5s ease-out all
        @media screen and (max-width: 960px)
          padding 16px
      &__icon
        width 16px
        height 16px
        margin-right 8px
      &__wrapper
        @media screen and (max-width: 960px)
          background: rgba(0, 0, 0, .8)
          position: fixed
          width: 100%
          height: 100%
          left: 0
          top: 80px
          transform translateX(-100%)
          transition .5s ease-out transform
  .burger__opened + .header-nav__wrapper
    transform translate(0)

</style>
