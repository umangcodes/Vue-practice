<template>
  <div class="container">
    <div class="event-card">
      <span>ID: {{ user.id }} </span> |
      <span>Created by {{ user.name }}</span>
      <h4>{{ catLength }}</h4>
      <h6 v-if="housing">this event might be of {{ housing }} category</h6>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  name: 'CreateEvent',
  //   computed: mapState({
  //     userName: (state) => state.user.name,
  //     userId: (state) => state.user.id,
  //     catLength: (state) => state.categories,
  //   }),
  computed: {
    // catLength() {
    //   return this.$store.state.categories.length
    // },
    ...mapState(['user', 'categories']),
    ...mapGetters(['catLength', 'housing']),
  },
  created() {
    console.log(this.$store.state)
  },
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #394950;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #181818;
  text-decoration: none;
}
.container {
  display: flex;
  justify-content: center;
}
</style>
