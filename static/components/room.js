Vue.component('room', {
  template: `
    <md-app>
      <md-app-toolbar class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar">
            <span class="md-title">Room</span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button @click="reveal()" title="Reveal">
              <md-icon>remove_red_eye</md-icon>
              <span>Reveal</span>
            </md-button>
          
            <md-button @click="clear()" title="Clear">
              <md-icon>delete_sweep</md-icon>
              <span>Delete</span>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-content>

      <div class="md-layout">
        <div class="md-layout-item">
          <players-list :players="players" :name="name" :finished="finished"/>
        </div>
        <div class="md-layout-item">
          <observers-list :observers="observers" :name="name"/>
        </div>
      </div>
      <vote :name="name"/>
    </div>`,
  methods: {
    reveal: function() {
      socket.emit('reveal')
    },
    clear: function() {
      socket.emit('clear')
    }
  },
  props: ['players', 'observers', 'name', 'finished']
})
