<template>
  <div>
    <span>contact us at {{ contactInfo.number }} </span>
    <h4>Our timing of operation:-</h4>
    <ul>
      <li>{{ contactInfo.timeOfOperationWD }}</li>
      <li>{{ contactInfo.timeOfOperationWE }}</li>
    </ul>
  </div>
</template>


<script>
import EventService from '@/services/EventService.js'
export default {
  data() {
    return {
      contactInfo: 0,
      contact: 999
    }
  },
  created() {
    EventService.getContact(this.contact)
      .then((response) => {
        this.contactInfo = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }

}
</script>
