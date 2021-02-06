<template>
  <div>
    <h1>SecondChildrenComponent</h1>
    <h4>{{ count }}</h4>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
  </div>
</template>
<script>
import { countEvent } from '../EventBus.js'

export default {
  name: 'SecondChildrenComponent',
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
