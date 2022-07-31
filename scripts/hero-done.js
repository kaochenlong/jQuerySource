;(function (global) {
  const Hero = function (name, power, skill) {
    return new Hero.init(name, power, skill)
  }

  const attack = function () {
    console.log(`${this.name}使用${this.skill}，造成 ${this.power} 點傷害！`)
  }

  Hero.init = function (name, power, skill) {
    this.name = name
    this.power = power
    this.skill = skill
  }

  Hero.init.prototype = {
    attack,
  }

  global.Hero = global.H$ = global.GG = Hero
})(window)
