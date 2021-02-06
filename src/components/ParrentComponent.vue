<template>
  <div>
    <h1>ParrentComponent</h1>
    <h4>{{ count }}</h4>
    <button @click="decrease">-</button>
    <button @click="increase">+</button>
    <ChildrenComponent />
  </div>
</template>
<script>
import ChildrenComponent from './ChildrenComponent.vue'
import { updateCount, emitCount } from '../EventBus.js'

export default {
  name: 'App',
  components: {
    ChildrenComponent
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
