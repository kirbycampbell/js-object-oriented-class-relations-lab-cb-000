let store = {drivers: [], passengers: [], trips: []}
let userId = 0

class Driver {
  constructor(name){
    this.id = ++userId
    this.name = name

    store.drivers.push(this)
  }
  passengers(){
    return store.passengers.filter(passenger => {
      return passenger.id === this.id;
    })
  }
}

class Passenger{
  constructor(name){
    this.id = ++userId
    this.name = name

    store.passengers.push(this)
  }
}

class Trip{
  constructor(driver, passenger){
    this.id = ++userId
    this.driver = driver
    this.passenger = passenger
    this.driverId = driver.id
    this.passengerId = passenger.id

    store.trips.push(this)
  }
  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }
}
