import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  servicecatalog = {
    "catalog": [
      {
        "name": "Diagnostics",
        "description": "Not sure what is wrong with your car? Wrench will figure it out and can often fix it on the spot! For example most of the time when a car won’t start it is a battery, alternator or a starter issue. We will identify the problem, quote the fix, and be ready to get the work done. ",
        "category": "MECHANICAL",
        "price": "121.11"
      },
      {
        "name": "Oil and Filter Change",
        "description": "Changing your engine oil and oil filter is an essential part of making sure your car runs correctly and is the easiest way to avoid   expensive repairs in your future.",
        "category": "MECHANICAL",
        "price": "82.58"
      },
      {
        "name": "Used Car Inspection",
        "description": "Looking to buy a used car but not sure what kind of shape its in? We\u0027ll meet you at the car, do a full inspection of the car and give you a report on the condition of the car, including any warning flags.",
        "category": "MECHANICAL",
        "price": "121.11"
      },
      {
        "name": "Front Brake Pads Replacement",
        "description": "Often times both pads and rotors need to be replaced as rotors wear and warp with high temperatures. However, if your rotors are in good shape, you can replace just the pads.",
        "category": "MECHANICAL",
        "price": "225.47"
      },
      {
        "name": "Rear Brake Pads Replacement",
        "description": "Often times both pads and rotors need to be replaced as rotors wear and warp with high temperatures. However, if your rotors are in good shape, you can replace just the pads.",
        "category": "MECHANICAL",
        "price": "175.27"
      },
      {
        "name": "Front and Rear Brake Pads Replacement",
        "description": "Often times both pads and rotors need to be replaced as rotors wear and warp with high temperatures. However, if your rotors are in good shape, you can replace just the pads.",
        "category": "MECHANICAL",
      },
      {
        "name": "Brake Pad and Rotor Replacement",
        "category": "MECHANICAL",
        "options": [
          {
            "service": {
              "name": "Front Brake Pads and Rotors Replacement",
              "description": "Often times its best to replace both the rotors and the pads when replacing your brakes. Brake pads are designed to wear out, and rotors wear and warp with the high temperatures. If we find you don\u0027t need new rotors, we will remove that from your service price.",
              "price": "400.28"
            }
          },
          {
            "service": {
              "name": "Rear Brake Pads and Rotors Replacement",
              "description": "Often times its best to replace both the rotors and the pads when replacing your brakes. Brake pads are designed to wear out, and rotors wear and warp with the high temperatures. If we find you don\u0027t need new rotors, we will remove that from your service price.",
              "price": "320.25"
            }
          },
          {
            "service": {
              "name": "Front and Rear Brake Pads and Rotors Replacement",
              "description": "Often times its best to replace both the rotors and the pads when replacing your brakes. Brake pads are designed to wear out, and rotors wear and warp with the high temperatures. If we find you don\u0027t need new rotors, we will remove that from your service price.",
              "price": "700.34"
            }
          }
        ]
      },
      {
        "name": "Emissions Failure Diagnostic",
        "description": "Wrench has Emissions Certified Mechanics ready to help you get your vehicle into passing condition. The mechanic will diagnose the cause of your emissions failure and provide a time to schedule the repair with Wrench, based on parts and mechanic availability.",
        "category": "MECHANICAL",
        "price": "165.15"
      },
      {
        "name": "Alternator Replacement",
        "description": "A failing alternator can cause problems starting the vehicle and may result in a repeated need to jump start the vehicle. A weak alternator can result in dimming of the dashboard lights and the headlights.",
        "category": "MECHANICAL",
        "price": "497.57"
      },
      {
        "name": "Starter Replacement",
        "description": "We will inspect your entire starting and charging system to ensure your starter needs to be replaced before we start.",
        "category": "MECHANICAL",
        "price": "367.34"
      },
      {
        "name": "Battery Replacement - Non Euro",
        "description": "The average useful life of a vehicle battery is around four years. This time willvary depending on performance of the charging system. High-quality replacement batteries are recommended due to the extensive electrical systems used in modern vehicles.",
        "category": "MECHANICAL",
        "price": "99.99"
      },
      {
        "name": "Spark Plugs Replacement",
        "description": "Replacement of spark plugs on newer vehicles requires the removal of the engine cover, ignition coil harness and ignition coils, and the finally the spark plugs. For most older vehicles only the spark plug wires and spark plugs are required. There are cases in which the spark plugs are not accessibl",
        "category": "MECHANICAL",
        "price": "257.35"
      },
      {
        "name": "A/C Service",
        "description": "An A/C service will help determine if your A/C system is in proper working order and will allow us to locate any issues or leaks by evacuating, leak testing and recharging the system. ",
        "category": "MECHANICAL",
        "price": "192.68"
      },
      {
        "name": "Thermostat Replacement",
        "description": "A thermostat that is stuck closed will cause the vehicle to overheat. A thermostat that is stuck open can cause the engine to run colder than normal and trigger the Check Engine Light. It may also cause poor fuel mileage and the heater to blow cool air.",
        "category": "MECHANICAL",
        "price": "218.53"
      },
      {
        "name": "Mass Airflow Sensor Replacement",
        "description": "A failing mass airflow sensor can cause the Check Engine Light to come on and engine starting/running problems. If the mass airflow sensor is not functioning correctly, the vehicle may lack power when accelerating or going up hills.",
        "category": "MECHANICAL",
        "price": "382.96"
      },
      {
        "name": "Coolant Drain and Fill",
        "description": "Dirty or smelly coolant indicates that a system flush may be needed.",
        "category": "MECHANICAL",
        "price": "173.31"
      },
      {
        "name": "Wash, Wax, and Detailing",
        "category": "DETAIL",
        "options": [
          {
            "service": {
              "name": "Wrench Exterior Detail",
              "description": "Getting your SUV professionally washed has never been easier! Our specialist will come to a location of your choice to thoroughly rinse, wash and wax your car. \n\nWax and Wash must be scheduled separately from other services. There may be an additional surchage for extra dirty vehicles.",
              "price": "50.00"
            }
          },
          {
            "service": {
              "name": "Wrench Interior Detail",
              "description": "Give your SUV or truck a deep clean with our full interior detailing service. Our experts will come to a location of your choice to meticulously detail the inside of your car. \n\nDetailing must be scheduled separately from other services. There may be an additional surchage for extra dirty vehicles",
              "price": "50.00"
            }
          },
          {
            "service": {
              "name": "Wrench Complete Detail",
              "description": "SUV detailing has never been simpler! Now, you can book a Wrench expert to come to a location of your choice and give your SUV a full interior and exterior detail.\n\nService must be scheduled separately from other services. There may be an additional surchage for extra dirty vehicles.",
              "price": "90.99"
            }
          }
        ]
      }
    ]
  };
  categories: any;
  emily: any;
  showCart: any;
  visibleDetails: any;
  services: any;
  quote = {
    "services": [],
    "total": 0.00
  }

  constructor() { }

  ngOnInit() {
    this.categories = [];
    this.showCart = false;
    this.services = this.servicecatalog.catalog;
    this.visibleDetails = [];
    this.emily = this.services[0];
    this.categorize();
  }

  categorize() {
    for (let i = 0; i < this.services.length; i++) {
      if (this.categories.indexOf(this.services[i].category) > -1) { }
      else {
        this.categories.push(this.services[i].category)
      }
    }
  }

  toggleCart() { //reveals the contents of the users cart
    if (this.showCart == true) {
      this.showCart = false
    }
    else {
      this.showCart = true
    }
  }

  addToCart(service) {
    this.quote.services.push(service)
    this.quote.total = this.quote.total + parseFloat(service.price)
  }

  showDetails(service) {
    //if the service had options, show the options in stead
    // if (service.options){
    //   //add all the options to the array
    //   for (var i=0; i<service.options.length; i++){
    //     this.visibleDetails.push(service.options[i].service.name)
    //   }
    // }
    var index = this.visibleDetails.indexOf(service.name);
    if (index > -1) {
      this.visibleDetails.splice(index, 1);
    }
    else {
      this.visibleDetails.push(service.name)
    }
  }

}
