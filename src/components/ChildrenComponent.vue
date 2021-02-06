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
import { updateCount, emitCount } from '../EventBus.js'

export default {
  name: 'App',
  components: {
    SecondChildrenComponent,
    ThirdChildrenComponent
  },
  data: () => {
    return {
      count: 0,
      updateCount,
      emitCount
    }
  },
  created() {
    this.updateCount(count => {
      this.count = count
    })
  },
  methods: {
    increase() {
      this.emitCount(this.count + 1)
    },
    decrease() {
      this.emitCount(this.count - 1)
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
