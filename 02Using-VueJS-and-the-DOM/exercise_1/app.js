new Vue({
  el: '#exercise',
  data: {
    name: 'Rhys',
    age: '31',
    image: 'https://i.redd.it/qh713wbo4r8y.jpg'
  },
  methods: {
    threeTimesAge: function() {
      return this.age * 3;
    },
    randomNumber: function() {
      return Math.random();
    }
  }
});