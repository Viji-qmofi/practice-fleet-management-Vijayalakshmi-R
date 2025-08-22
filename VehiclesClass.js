/* Classes and Inheritance | Lesson 1
Practice: Fleet Management
Instructions
Scenario
You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:
1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.
Tasks
1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).
2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
information.
1
Setup
For this activity, you will create your own repository to store your code:
1. Create a new repository.
2. Name it: practice-fleet-management-[Your First Name]-[Your Last Initial]
3. Make sure the repository is public.
4. Clone the repository to your local machine.
5. Start working on the code.
6. When you are finished, commit your changes and push them to your
repository.*/

class Vehicle {
    constructor (type,make,model,year,mileage = 0){
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
}
drive(distanceDrove){
    this.mileage += distanceDrove;
    console.log(`\n${this.make} ${this.model} drove ${distanceDrove} km. and the updated mileage is ${this.mileage}`);
}
getDetails(){
    return (`Type: ${this.type},\t Make: ${this.make}, \tModel: ${this.model}, \tYear: ${this.year}, \tMileage: ${this.mileage}`);
}
}

// Instantiate multiple vehicle objects
const car = new Vehicle('Car', 'Tesla', 'Model-Y', 2024, 15000);
const truck = new Vehicle('Truck', 'GMC', 'Hummer-EV', 2022, 45000);
const motorcycle = new Vehicle('Motorcycle', 'Suzuki', 'Boulevard C90', 2022); // Mileage defaults to 0

console.log("--- Initial Details ---");
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());


// Use the drive method to simulate trips and update mileage
console.log("\n--- Trip Details ---");
car.drive(200);
truck.drive(500);
motorcycle.drive(150);
car.drive(50); // Another trip for the car
motorcycle.drive(270);// Another trip for the car

// Use the getDetails method to print each vehicle's updated information
console.log("\n--- Updated Details ---");
console.log(car.getDetails());
console.log(truck.getDetails());
console.log(motorcycle.getDetails());


/* OutPut
--- Initial Details ---
Type: Car,	 Make: Tesla, 	Model: Model-Y, 	Year: 2024, 	Mileage: 15000
Type: Truck,	 Make: GMC, 	Model: Hummer-EV, 	Year: 2022, 	Mileage: 45000
Type: Motorcycle,	 Make: Suzuki, 	Model: Boulevard C90, 	Year: 2022, 	Mileage: 0

--- Trip Details ---

Tesla Model-Y drove 200 km. and the updated mileage is 15200

GMC Hummer-EV drove 500 km. and the updated mileage is 45500

Suzuki Boulevard C90 drove 150 km. and the updated mileage is 150

Tesla Model-Y drove 50 km. and the updated mileage is 15250

Suzuki Boulevard C90 drove 270 km. and the updated mileage is 420

--- Updated Details ---
Type: Car,	 Make: Tesla, 	Model: Model-Y, 	Year: 2024, 	Mileage: 15250
Type: Truck,	 Make: GMC, 	Model: Hummer-EV, 	Year: 2022, 	Mileage: 45500
Type: Motorcycle,	 Make: Suzuki, 	Model: Boulevard C90, 	Year: 2022, 	Mileage: 420*/