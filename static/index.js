var socket = io('https://poker-facelift.herokuapp.com/');

Vue.component('vote', {
  data: function() {
    return {
      choices: ['?', '1', '2', '3', '5', '8', '13', '21']
    }
  },
  props: ['name'],
  template: `
    <span>
      <span v-for="choice in choices">
        <button v-on:click="select(choice)">{{choice}}</button>
      </span>
    </span>`,
  methods: {
    select: function(choice) {
      socket.emit('select', {'name': this.name, 'choice': choice});
    }
  }

});

Vue.component('room', {
  template: `
    <div>
      <h3>Welcome {{name}}!</h3>
      <label for="players">List of players:</label>
      <ul id="players">
        <li v-for="player in players">
	  <span v-if="player.name == name">
	    <strong>{{player.name}}</strong> / {{player.choice}}
	  </span>
	  <span v-else>
            {{player.name}} / <span v-bind:class="{hidden: hideChoices}">{{player.choice}}</span>
	  </span>
        </li>
      </ul>
      <vote v-bind:name="name"/>
    </div>`,
  computed: {
    hideChoices: function() {
      for (var player of this.players) {
        if (!player.choice) {
	  return true;
	}
      }
      return false;
    }
  },
  props: ['players', 'name']
});

Vue.component('input-name', {
  template: `
    <div>
      <label for="name">Your name:</label>
      <input type="text" id="name" v-model="username">
      <button v-on:click="enter">Enter</button>
    </div>`,
  data: function () {
    return {
      username: null
    }
  },
  methods: {
    enter: function() {
      socket.emit('join', this.username);
      this.$emit('enter', this.username);
    }
  }
});

var app = new Vue({ 
  el: '#app',
  data: {
    message: 'Poker FaceLift',
      connected: false,
      name: 'Toto',
      players: []
  },
  methods: {
    enter: function(name) {
      this.name = name;
      this.connected = true;
    },
    onPlayersUpdate: function(players) {
      this.players = players;
    }
  },
  created: function() {
    socket.on('players_update', this.onPlayersUpdate);
    // when closing the tab / page, we send an event
    window.addEventListener('beforeunload', (event) => {
      console.log('left called');
      socket.emit('left', this.name);
    });
  }
});
