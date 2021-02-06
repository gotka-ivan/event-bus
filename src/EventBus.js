import Vue from 'vue'
const eventBus = new Vue()

export const updateCount = method => {
  eventBus.$on('updateCount', method)
}

export const emitCount = value => {
  eventBus.$emit('updateCount', value)
}
