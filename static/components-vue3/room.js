const template = `
  <div>
    <h3>Welcome {{ name }} </h3>
    <div class="players">
      <ul id= "players">
        <players-list :name="name" :players="players" :finished="finished"/>
        <observers-list :name="name" :observers="observers"/>
      </ul>
    </div>
    <br>
    <vote :name="name"/>
    <br><br>
    <button @click="reveal()">Reveal</button>
    <button @click="clear()">Clear</button>
    <br><br>
  </div>`

export default {
  template,
  components: {
    'PlayersList': Vue.defineAsyncComponent(() => import('./players-list.js')),
    'ObserversList': Vue.defineAsyncComponent(() => import('./observers-list.js')),
    'Vote': Vue.defineAsyncComponent(() => import('./vote.js'))
  },
  methods: {
    reveal: function() {
      socket.emit('reveal')
    },
    clear: function() {
      socket.emit('clear')
    }
  },
  props: ['name', 'players', 'observers', 'finished']
}
