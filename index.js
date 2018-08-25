let store = {drivers: [], passengers: []}
let userId = 0

class Driver {
  constructor(name){
    this.id = ++userId
    this.name = name

    store.drivers.push(this)
  }
}

class Passenger{
  constructor(name){
    this.id = ++userId
    this.name = name

    store.passengers.push(this)
  }
}
