const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo: function provideInfo(){
          return ('I am ' + this.model + ' and my current energy level is ' + this.energyLevel )
    }
  };
  
  console.log(robot.provideInfo())

//Do not use arrow functions for methods
  const robot = {
    energyLevel: 100,
    checkEnergy: function() {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();