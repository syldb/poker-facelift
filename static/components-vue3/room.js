const template = `
  <div>
    <h3>Welcome {{ name }} </h3>
    <div class="players">
      <ul id= "players">
        <players-list :name="name" :players="players" />
      </ul>
    </div>
    <br><br>
    <button @click="reveal()">Reveal</button>
    <button @click="clear()">Clear</button>
    <br><br>
  </div>`

export default {
  template,
  components: {
    'PlayersList': Vue.defineAsyncComponent( () => import('./players-list.js'))
  },
  methods: {
    reveal: function() {
      // socket.emit('reveal')
    },
    clear: function() {
      // socket.emit('clear')
    }
  },
  props: ['name', 'players']
}
