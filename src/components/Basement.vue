<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__phones">
          <div class="phone">
            <span>Для Москвы</span>
            <a class="tel" href="tel:+74957305080">+7 495 730 50 80</a>
          </div>
          <div class="phone">
            <span>Звонок по России бесплатный</span>
            <a class="tel" href="tel:88002224844">8 800 222 48 44</a>
          </div>
        </div>

        <ul class="social">
          <li
            v-for="(social, index) in socials"
            :key="index"
            class="social__item">
              <a :href="social.link" target="_blank">
                <i :class="social.icon"></i>
              </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container">
        <p class="copy">© 2019 Северный ветер. Все пpава защищены.</p>
        <img class="iata-logo" src="@/assets/img/iata.svg" alt="iata">
        <p class="rules">Пользуясь сайтом support.nordwindairlines.ru, Вы автоматически принимаете <a href="./">правила</a> передачи и обработки персональных данных.</p>
      </div>
    </div>

  </footer>
</template>

<script>
  export default {
    data: function () {
      return  {
        socials: [
          {
            link: 'https://facebook.com',
            icon: 'fab fa-facebook-f',
          },
          {
            link: 'https://vk.com',
            icon: 'fab fa-vk',
          },
          {
            link: 'https://twitter.com',
            icon: 'fab fa-twitter',
          },
          {
            link: 'https://instagram.com',
            icon: 'fab fa-instagram',
          },
        ],
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
.footer
  width 100%
  box-shadow inset 0px 1px 0px #cecece
  padding 24px 0

  &__top
    display flex
    justify-content space-between
    align-items center
    padding-bottom 24px
    @media screen and (max-width: 960px)
      flex-direction column
      align-items flex-start

  &__bottom
    border-top: 1px solid #D3D3D3
    .container
      display flex
      flex-wrap: wrap
      justify-content space-between
      align-items center
      padding-top 24px

  &__phones
    display flex
    @media screen and (max-width: 960px)
      flex-direction column
      align-items flex-start

.copy
  width calc(100% - 99px)
  font-size: 12px
  line-height 16px

.rules
  font-size: 12px
  line-height 16px
  padding-top 18px
  a
    color #1468CB
</style>
