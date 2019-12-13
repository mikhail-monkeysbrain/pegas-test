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
            class="btn btn--blue"
            :class="{ btnBlueActive: currentTab === 'urgent' }"
            @click="currentTab = 'urgent'"
            >Срочные вопросы
          </button>
        </div>
      </div>
      <p class="notice">Если до вылета осталось меньше 12 часов, мы рассмотрим ваш запрос быстрее. В остальных случаях — согласно <a href="#">правилам.</a></p>
      <div
        class="questions"
        v-show="currentTab === 'all'">
        <a
          href="#"
          class="questions__item"
          :class="question.type"
          v-for="(question, index) in questions"
          :key="index"
           @click="$emit('open')">
          <p>{{question.title}}</p>
          <span class="questions__icon"></span>
        </a>
      </div>
      <div class="questions"
        v-show="currentTab === 'urgent'">
        <a
          href="#"
          class="questions__item"
          :class="question.type"
          v-for="(question, index) in urgent"
          :key="index"
           @click="$emit('open')">
          <p>{{question.title}}</p>
          <span class="questions__icon"></span>
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
          type: 'dateOfTicket',
        },
        {
          title: 'Не срочно или вернуть билет',
          type: 'returnTicket',
        },
        {
          title: 'Не срочно о невозможности перелета',
          type: 'imposible',
        },
        {
          title: 'Не срочно билетом при отмене рейса',
          type: 'ticketForCancel',
        },
        {
          title: 'Не срочно багаж с попутчиком',
          type: 'mergeCargo',
        },
        {
          title: 'Не срочно с регистрацией в аэропорту',
          type: 'troubleRegistration',
        },
        {
          title: 'Не срочно в аэропорту',
          type: 'servicesInAero',
        },
      ],
      urgent: [
        {
          title: 'Изменить данные пассажира в билете',
          type: 'dateOfTicket',
        },
        {
          title: 'Обменять или вернуть билет',
          type: 'returnTicket',
        },
        {
          title: 'Сообщить о невозможности перелета',
          type: 'imposible',
        },
        {
          title: 'Управление билетом при отмене рейса',
          type: 'ticketForCancel',
        },
        {
          title: 'Объединить багаж с попутчиком',
          type: 'mergeCargo',
        },
        {
          title: 'Проблемы с регистрацией в аэропорту',
          type: 'troubleRegistration',
        },
        {
          title: 'Обслуживание в аэропорту',
          type: 'servicesInAero',
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
