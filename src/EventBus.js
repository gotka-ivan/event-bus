import Vue from 'vue'
const eventBus = new Vue()

export const countEvent = {
  update: method => {
    eventBus.$on('updateCount', method)
  },
  emit: value => {
    eventBus.$emit('updateCount', value)
  },
  destroy: () => {
    eventBus.$off(['updateCount'])
  }
}
