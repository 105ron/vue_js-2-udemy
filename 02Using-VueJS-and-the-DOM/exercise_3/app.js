new Vue({
  el: '#exercise',
  data: {
    value: 0
  },
    computed: {
      result: function() {
        return this.value == 7 ? 'It\'s seven!!' : 'not seven yet';
      }
    },
  watch: {
    value: function(val) {
      const vi = this;
      setTimeout(function() {
        vi.value = 0;
      }, 5000);
    }
  }
});