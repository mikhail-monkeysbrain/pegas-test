<template>
  <section>
    <div class="container">
      <h1>{{title}}</h1>
      <div class="tabs">
        <div class="tabs__overlay">
          <button
            class="btn btn--blue"
            :class="{ btnBlueActive: currentTab === 'all' }"
            @click="currentTab = 'all'"
            >
              Все вопросы
          </button>
          <button
            class="btn btn--blue btn--urgent"
            :class="{ btnBlueActive: currentTab === 'urgent' }"
            @click="currentTab = 'urgent'"
            >
            <i class="fire"></i>
            Срочные вопросы
          </button>
        </div>
      </div>
      <p class="notice">Если до вылета осталось меньше 12 часов, мы рассмотрим ваш запрос быстрее. В остальных случаях — согласно <a href="#">правилам.</a></p>
      <div
        class="questions"
        v-show="currentTab === 'all'">
        <a
          href="javascript:void(0)"
          class="questions__item"
          v-for="(question, index) in questions"
          :key="index"
           @click="$emit('open')">
          <p>{{question.title}}</p>
          <span class="questions__icon">
            <img class="questions__icon" :src="question.img" alt="question.title">
          </span>
        </a>
      </div>
      <div class="questions"
        v-show="currentTab === 'urgent'">
        <a
          href="javascript:void(0)"
          class="questions__item"
          v-for="(question, index) in urgent"
          :key="index"
           @click="$emit('open')">
          <p>{{question.title}}</p>
          <span class="questions__icon">
            <img class="questions__icon" :src="question.img" alt="question.title">
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return  {
      currentTab: 'urgent',
      questions: [
        {
          title: 'Не срочно данные пассажира в билете',
          img: require('../assets/img/1.svg'),
        },
        {
          title: 'Не срочно или вернуть билет',
          img: require('../assets/img/2.svg'),
        },
        {
          title: 'Не срочно о невозможности перелета',
          img: require('../assets/img/3.svg'),
        },
        {
          title: 'Не срочно билетом при отмене рейса',
          img: require('../assets/img/4.svg'),
        },
        {
          title: 'Не срочно багаж с попутчиком',
          img: require('../assets/img/5.svg'),
        },
        {
          title: 'Не срочно с регистрацией в аэропорту',
          img: require('../assets/img/6.svg'),
        },
        {
          title: 'Не срочно в аэропорту',
          img: require('../assets/img/7.svg'),
        },
      ],
      urgent: [
        {
          title: 'Изменить данные пассажира в билете',
          img: require('../assets/img/1.svg'),
        },
        {
          title: 'Обменять или вернуть билет',
          img: require('../assets/img/2.svg'),
        },
        {
          title: 'Сообщить о невозможности перелета',
          img: require('../assets/img/3.svg'),
        },
        {
          title: 'Управление билетом при отмене рейса',
          img: require('../assets/img/4.svg'),
        },
        {
          title: 'Объединить багаж с попутчиком',
          img: require('../assets/img/5.svg'),
        },
        {
          title: 'Проблемы с регистрацией в аэропорту',
          img: require('../assets/img/6.svg'),
        },
        {
          title: 'Обслуживание в аэропорту',
          img: require('../assets/img/7.svg'),
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
}
</script>
