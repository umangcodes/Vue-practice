<template>
  <div v-if="event">
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.category }}</h4>
  </div>
</template>


<script>
import EventService from '@/services/EventService.js'
export default {
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      event: null
    }
  },
  created() {
    console.log(this.id)
    EventService.getEvent(this.id)
      .then(response => {
        ;(this.event = response.data), console.log(this.id)
      })
      .catch(error => {
        console.log(this.id)
        console.log(error)
      })
  }

}
</script>