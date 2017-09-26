new Vue({
  el: '#exercise',
  data: {
    attachShrink: false,
    attachHighlight: false,
    userClass: '',
    isVisible: true,
    customStyle: {
      height: '32px',
      width: '200px',
      border: '3px dashed purple',
      backgroundColor: 'yellow'
    },
    progressBar: {
      width: '0px',
      backgroundColor: 'blue',
      height: '25px'
    }
  },
  methods: {
    startEffect: function() {
      this.attachShrink = true;
      const vi = this;
      const intervalID = setInterval(switchClasses, 500);
      function switchClasses() {
        vi.attachShrink = !vi.attachShrink;
        vi.attachHighlight = !vi.attachHighlight;
      };
    },
    startProgress: function() {
      var vi = this;
      var width = 0;
      var expandBar = function() {
        if (width == 200) {
          clearInterval(expandBar);
        } else {
          width = width + 10;
          vi.progressBar.width = width + 'px';
        }
      };
      setInterval(expandBar, 175)
    }

  }
});
