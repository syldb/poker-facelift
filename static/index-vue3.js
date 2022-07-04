let socket = io(window.location.origin + '/')

Vue.createApp({
components: {
    'InputName': Vue.defineAsyncComponent( () => import('../static/components-vue3/input-name.js')),
    'Room': Vue.defineAsyncComponent( () => import('../static/components-vue3/room.js'))
},
data: () => {
    return {
    connected: false,
    name: '',
    players: [],
    observers: [],
    finished: false
    }
},
methods: {
    enter: function(name) {
    this.name = name;
    this.connected = true;
    },
    onRoomUpdate: function(room) {
    this.players = room.players
    this.observers = room.observers
    this.finished = room.finished
    }
},
created: function() {
    socket.on('room_update', this.onRoomUpdate)
    // when closing the page, we send an event to remove the user
    window.addEventListener('beforeunload', (event) => {
    socket.emit('left', this.name)
    })
}
}).mount('#app')