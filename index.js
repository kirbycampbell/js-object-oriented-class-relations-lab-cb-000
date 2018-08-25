let store = {drivers: [], passengers: [], trips: []}
let userId = 0

class Driver {
  constructor(name){
    this.id = ++userId
    this.name = name

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId == this.id;
    })
  }

  passengers(){
    return store.passengers.map(trip => {
      return trip.passenger();
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

  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }
}
