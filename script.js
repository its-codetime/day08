// CLASS MOVIE
class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating || "PG";
  }

  // static class method
  // Use Movie.getPG(moviesArray)
  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}
const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");

// CLASS CIRCLE
class Circle {
  constructor(radius = 1, color = "red") {
    this.radius = radius;
    this.color = color;
  }

  getRadius() {
    return this.radius;
  }

  setRadius(radius) {
    this.radius = radius;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }

  toString() {
    return `Circle[radius=${this.radius},color=${this.color}]`;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }

  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}
const circle1 = new Circle();
const circle2 = new Circle(2, "yellow");
console.log(circle2.toString());

// CLASS PERSON
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  toString() {
    return `Person[name=${this.name},age=${this.age}]`;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}
const person1 = new Person("John", 30);
person1.greet();

// CLASS UberRide
class UberRide {
  static pricePerKm = 20;
  constructor(driver, passengers, kmsDriven) {
    this.driver = driver;
    this.passengers = passengers;
    this.kmsDriven = kmsDriven;
  }

  getDriver() {
    return this.driver;
  }

  getPassengers() {
    return this.passengers;
  }

  calculateFare() {
    return this.kmsDriven * UberRide.pricePerKm;
  }
}

const ride1 = new UberRide("John", ["Jane", "Jack"], 10);
console.log(ride1.calculateFare());
