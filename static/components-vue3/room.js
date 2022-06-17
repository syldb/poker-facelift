const template = `
  <div>
    <h3>Welcome {{name}}</h3>
    <br><br>
    <button @click="reveal()">Reveal</button>
    <button @click="clear()">Clear</button>
    <br><br>
  </div>`

export default {
  template,
  methods: {
    reveal: function() {
      // socket.emit('reveal')
    },
    clear: function() {
      // socket.emit('clear')
    }
  },
  props: ['name']
}
