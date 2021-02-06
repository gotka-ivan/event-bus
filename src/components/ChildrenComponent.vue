<template>
  <div>
    <h1>ChildrenComponent</h1>
    <h4>{{ count }}</h4>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
    <div class="container">
      <SecondChildrenComponent />
      <ThirdChildrenComponent />
    </div>
  </div>
</template>
<script>
import SecondChildrenComponent from './SecondChildrenComponent.vue'
import ThirdChildrenComponent from './ThirdChildrenComponent.vue'
import { countEvent } from '../EventBus.js'

export default {
  name: 'App',
  components: {
    SecondChildrenComponent,
    ThirdChildrenComponent
  },
  data: () => {
    return {
      count: 0,
      countEvent
    }
  },
  created() {
    this.countEvent.update(count => {
      this.count = count
    })
  },
  beforeDestroy() {
    this.countEvent.destroy()
  },
  methods: {
    increase() {
      this.countEvent.emit(this.count + 1)
    },
    decrease() {
      this.countEvent.emit(this.count - 1)
    }
  }
}
</script>
<style>
.container {
  display: flex;
  width: 1000px;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
