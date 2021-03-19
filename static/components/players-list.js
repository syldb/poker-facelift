Vue.component('players-list', {
  template: `
    <md-list>
      <md-subheader>Players</md-subheader>
      <md-list-item v-for="player in players">
        <span v-if="player.name == name">
          <strong>{{player.name}}</strong>
          <span v-if="player.choice"> | {{player.choice}}</span>
        </span>
        <span v-else>
          {{player.name}}
          <span v-if="hideChoices">
            <span v-if="player.choice">
               | <md-icon>check</md-icon>
            </span>
          </span>
          <span v-else> | {{player.choice}}</span>
          </span>
        </span>
      </md-list-item>
    </md-list>`,
  computed: {
    hideChoices: function() {
      if (this.finished) {
        return false
      }
      for (const player of this.players) {
        if (!player.choice) {
          return true
        }
      }
      return false
    }
  },
  props: ['players', 'name', 'finished']
})
