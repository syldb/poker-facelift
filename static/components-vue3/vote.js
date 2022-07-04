const template = `
  <span>
    <span v-for="choice in choices">
      <button @click="select(choice)">{{choice}}</button>
    </span>
  </span>`

 export default {
  data: function() {
    return {
      choices: ['?', '1', '2', '3', '5', '8', '13', '21']
    }
  },
  props: ['name'],
  template,
  methods: {
    select: function(choice) {
      socket.emit('select', {'name': this.name, 'choice': choice})
    }
  }
}
