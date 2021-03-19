Vue.component('input-name', {
  template: `
    <form>
      <md-field>
        <label for="name">Your name</label>
        <md-input type="text" v-model="username" required></md-input>
      </md-field>
      <md-button class="md-raised md-primary" @click="player">Join as player</md-button>
      <md-button class="md-raised" @click="observe">Join as observer</md-button>
    </form>`,
  data: function () {
    return {
      username: null
    }
  },
  methods: {
    player: function() {
      if (!this.username) {
        return
      }
      socket.emit('join_player', this.username)
      this.$emit('enter', this.username)
    },
    observe: function() {
      if (!this.username) {
        return
      }
      socket.emit('join_observer', this.username)
      this.$emit('enter', this.username)
    }
  }
})
