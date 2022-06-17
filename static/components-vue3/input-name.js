const template = `
  <div>
    <label for="name">Your name:</label>&nbsp; 
    <input type="text" id="name" v-model="username">&nbsp;
    <button @click="play">Play</button>&nbsp;
    <button @click="observe">Observe</button>
  </div>`

export default {
  name: 'InputName',
  template,
  data: function () {
    return {
      username: null
    }
  },
  methods: {
    play: function() {
      socket.emit('join_player', this.username)
      this.$emit('enter', this.username)
    },
    observe: function() {
      // socket.emit('join_observer', this.username)
      this.$emit('enter', this.username)
    }
  }
}
