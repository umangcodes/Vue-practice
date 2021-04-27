<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div class="events">
      <EventCard v-for="event in myEvents" :event="event" :key="event.id" />
      <!-- <h1>{{ events.length }}</h1> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      myEvents: null,
    }
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.myEvents = response.data
        console.log(response.data)
        console.log(this.myEvents)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
