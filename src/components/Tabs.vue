<template>
  <div class="content">
    <h1>{{title}}</h1>
    <div class="tabs">
      <a href="#" class="btn btn--blue">Все вопросы</a>
      <a href="#" class="btn btn--blue-active">Срочные вопросы</a>
    </div>
    <p class="notice">Если до вылета осталось меньше 12 часов, мы рассмотрим ваш запрос быстрее. В остальных случаях — согласно <a href="#">правилам.</a></p>
    <div class="questions">
      <a
        href="#"
        class="questions__item"
        :class="question.type"
        v-for="(question, index) in questions"
        :key="index"
        @click="modal = !modal"
        >
        <p>{{question.title}}</p>
        <span></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return  {
      title: 'Центр поддержки пассажиров Nordwind Airlines',
      questions: [
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
