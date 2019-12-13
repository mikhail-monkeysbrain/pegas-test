<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal__content" @click.stop="">
        <span class="modal__close" @click="$emit('close')">
          <!-- в pro версии FA есть тонкая иконка. Не знаю, имеет ли смысл ставить здесь свгшку -->
          <i class="fa fa-times"></i>
        </span>
        <div class="modal__header">
          <h2 class="modal__title"> {{ title }} </h2>
        </div>
        <div class="modal__body">
          <div class="applicant-wrapper"
            v-for="(applicant, index) in applicants"
            :key="index">
              <div class="applicant">
                <p class="applicant__name">{{applicant.name}}</p>
                <div class="applicant__info">
                  <span>Дата рождения: {{applicant.birthday}}</span>
                  <span>Номер билета: {{applicant.ticketNumber}}</span>
                </div>
              </div>
              <button class="btn btn--blue btn--small" @click="$emit('close')">Выбрать</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data: function () {
    return  {
      applicants: [
        {
          name: 'Константинопольский Константин Константинович',
          birthday: '23.12.1992',
          ticketNumber: '33 323 32323'
        },
        {
          name: 'Петров Петр Петрович',
          birthday: '23.12.1992',
          ticketNumber: '33 323 32323'
        },
        {
          name: 'Иванова Анна Ивановна',
          birthday: '23.12.1992',
          ticketNumber: '33 323 32323'
        },
      ]
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  mounted () {
    let $escButton = 27;
    document.body.addEventListener('keyup', e => {
      if(e.keyCode === $escButton) this.$emit('close')
    })
  }
}
</script>

<style lang="stylus">

.modal-enter,
.modal-leave-active
  opacity 0

.modal
  &__content
    position: relative
    width: 702px
    padding: 24px 24px 0 24px
    background-color: #fff
    transition: all .5s ease
    border-radius: 4px
    z-index: 999
    cursor default
    @media screen and (max-width: 960px)
      width 656px
    @media screen and (max-width: 768px)
      width 100%
    .modal-enter &,
    .modal-leave-active &
      transform: scale(1.2)

  &__wrapper
    display: flex
    justify-content: center
    align-items: center
    position: fixed
    top: 0
    bottom: 0
    left: 0
    transition: opacity .5s ease
    right: 0
    z-index: 998
    background-color: rgba(0, 0, 0, .8)
    cursor pointer
    overflow-y auto

  &__header
    display: flex
    align-self: center
    justify-content: space-between
    position relative

  &__title
    font-weight: 600
    font-size: 32px
    line-height: 40px
    padding-bottom 32px
    @media screen and (max-width: 768px)
      font-size 24px
      line-height 32px
      padding-bottom 16px

  &__close
    position absolute
    display flex
    justify-content center
    align-items center
    right -72px
    top 0px
    width 48px
    height 48px
    background #fff
    border-radius 50%
    font-size 36px
    color #1468CB
    font-weight 300
    cursor pointer
    @media screen and (max-width: 960px)
      right -0
      top -72px
    @media screen and (max-width: 768px)
      top: initial
      bottom: -72px
      left: 0
      right: 0
      margin: 0 auto
    i
      transition .25s ease-out all
    &:hover
      i
        transform scale(1.2)

.applicant
  padding 24px 0
  width 100%

  &-wrapper
    display flex
    justify-content space-between
    border-top 1px solid #cecece
    align-items center

  &__name
    font-size 16px
    line-height 24px

  &__info
    span
      font-size 12px
      line-height 16px
      color #616161
      margin-right 25px

</style>
