const template = `
  <span>
    <li class="player" v-for="player in players">
      <span v-if="player.name == name">
        <strong>{{player.name}}</strong>
        <span class="choice">&nbsp;&nbsp;{{player.choice}}</span>
      </span>
      <span v-else>
        {{player.name}}
        <span class="choice">&nbsp;
          <span v-if=player.choice>
            <span v-if="hideChoices">
              <i class="fa fa-check fa-fw"></i>
            </span>
            <span v-else>{{player.choice}}</span>
          </span>
          <span v-else>
            <i class="fa fa-spinner fa-pulse fa-fw"></i>
          </span>
        </span>
      </span>
    </li>
  </span>`

export default {
  template,
  props: ['name', 'players']
}
