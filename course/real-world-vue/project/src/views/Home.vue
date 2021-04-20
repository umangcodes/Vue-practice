<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="events">
      <EventCard v-for="event in events" :event="event" :key="event.id" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js"

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 123456,
          category: 'welfare',
          date: '20 April 2021',
          time: '11:00 pm',
        },
        {
          id: 123457,
          category: 'welfare',
          date: '20 April 2021',
          time: '11:00 pm',
        },
        {
          id: 123458,
          category: 'welfare',
          date: '20 April 2021',
          time: '11:00 pm',
        },
      ],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
