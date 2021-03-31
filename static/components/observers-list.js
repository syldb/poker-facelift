Vue.component('observers-list', {
  template: `
    <md-list>
      <md-subheader>Observers</md-subheader>
      <md-list-item v-for="observer in observers">
        <div class="md-list-item-text">
          <span v-if="observer.name == name">
            <strong>{{observer.name}}</strong>
          </span>
          <span v-else>
            {{observer.name}}
          </span>
        </div>
      </md-list-item>
    </md-list>`,
  props: ['observers', 'name']
})
