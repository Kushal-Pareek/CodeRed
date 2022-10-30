let state = {
  grid: _.map(_.range(0, 9), (index) => {
    return { index, figure: -1 }
  }),
  myTurn: false
}

const appState = _.cloneDeep(state)

const block = Vue.component('block', {
  name: 'block',
  
  template: '#block',
  
  props: {
    figure: {
      type: Number,
      default: -1
    }
  },
  
  computed: {
    fig () {
      return this.figure === 0 ? 'O' : 'X'
    }
  },
  
  data () {
    return {
      selected: false
    }
  },
  
  methods: {
    enter (el, done) {
      TweenMax.from(el, 1, {
        autoAlpha: 0,
        scale: 0,
        ease: Elastic.easeOut.config(1.25, 0.5),
        onComplete: done
      })
    }
  }
}) 

const win = Vue.component('win', {
  name: 'win',
  template: '#win',
  props: {
    clickHandler: {
      type: Function,
      default: null
    }
  }
})

const app = new Vue({
  name: 'app',
  
  el: '#app',
  
  data() {
    return state
  },
  
  components: {
    block
  },
  
  computed: {
     winner () {
       const wins = ['012', '036', '345', '147', '258', '678','048', '246']
       const grid = this.grid
       const player = this.myTurn ? 0 : 1
       const moves = _.reduce(this.grid, (result, value, index) => {
         if (value.figure === player) {
           result.push(index)
         }
         
         return result
       }, [])
       
       return !!_.find(wins, win => {
          const combination = _.map(win.split(''), n => parseInt(n));
          console.log('combination', combination, moves)
         
          return _.difference(combination, moves).length === 0;
       })
     }
  },
  
  methods: {
    select (index) {
      const {figure} = this.grid[index]
      
      if (figure > -1) {
        return;
      }
      
      this.grid[index].figure = this.myTurn ? 1 : 0
      this.myTurn = !this.myTurn
    },
    
    restart () {
      this.grid = appState.grid
      this.myTurn = appState.myTurn
    },
    
    enter (el, done) {
      TweenMax.from(el, 1, {
        autoAlpha: 0,
        scale: 0,
        ease: Elastic.easeOut.config(1.25, 0.5)
      })
    },
    
    enterWin (el) {
      TweenMax.from(el, 1, {
        autoAlpha: 0,
        scale: 0,
        ease: Elastic.easeOut.config(1.25, 0.5)
      })
    }
  }
})