Vue.component('vote', {
  data: function() {
    return {
      choices: ['?', '1', '2', '3', '5', '8', '13', '21']
    }
  },
  props: ['name'],
  template: `
    <md-menu md-direction="top-start">
      <md-button md-menu-trigger class="md-fab">
        <md-icon>how_to_vote</md-icon>
      </md-button>
      <md-menu-content>
        <span v-for="choice in choices">
          <md-menu-item @click="select(choice)">{{choice}}</md-menu-item>
        </span>
      </md-menu-content>
    </md-menu>`,
  methods: {
    select: function(choice) {
      socket.emit('select', {'name': this.name, 'choice': choice})
    }
  }
})
