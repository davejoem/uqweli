import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public searching: boolean = false
  public searchResults: any[] = []
  public rulesArray: any[] = []
  public rulesJson: any = '{}'
  constructor(private router: Router) {
    this.rulesArray = [
      {
        "section": "12(1) and 14",
        "description": "Driving without identification plates or plates not fixed in the prescribed manner",
        "fine": "KES 10,000"
      },
      {
        "section": "16(2) and 17A(3)",
        "description": "Driving a vehicle without a valid inspection certificate inspected",
        "fine": "KES 10, 000"
      },
      {
        "section": "22A(3) and (4)",
        "description": "Failure to wear a seat belt while the motor vehicle is in motion",
        "fine": "KES 500"
      },
      {
        "section": "30(1) and (7)",
        "description": "Driving without a valid driving license endorsement in respect of the class of vehicle",
        "fine": "KES 7,000"
      },
      {
        "section": "30(4) and 41",
        "description": "Failure to renew a driving license",
        "fine": "KES 1,000"
      },
      {
        "section": "33(c) and 41",
        "description": "Driving a PSV while unqualified",
        "fine": "KES 7,000"
      },
      {
        "section": "36(1) and (3)",
        "description": "Failing to carry and produce a driving license on demand",
        "fine": "KES 1,000"
      },
      {
        "section": " 42(1)",
        "description": "Exceeding speed limit prescribed for the class of vehicle by 6-10kph",
        "fine": "KES 3,000"
      },
      {
        "section": " 42(1)",
        "description": "Exceeding speed limit prescribed for the class of vehicle by 11-15kph",
        "fine": "KES 6,000"
      },
      {
        "section": " 42(1)",
        "description": "Exceeding speed limit prescribed for the class of vehicle by 16-20kph",
        "fine": "KES 10,000"
      },
      {
        "section": " 42(1)",
        "description": "Exceeding speed limit prescribed for the class of vehicle by 1-5 kph",
        "fine": "KES 500"
      },
      {
        "section": " 44 (1)",
        "description": "Driving under influence of drink",
        "fine": "not exceeding one hundred thousand shillings or to imprisonment for a term not exceeding two years or to both."
      },
      {
        "section": " 45A (1) and (2)",
        "description": "Driving on or through pavement or a pedestrian walkway",
        "fine": "(a)For a first time offender, imprisonment for a term not exceeding 3 months, or a fine not more than KES 30,000 (b) For a subsequent offender to imprisonment for a term not exceeding 6 months."
      },
      {
        "section": " 52(1)(a) and 52(2)",
        "description": "Failure of a driver to obey any directions given, whether verbally or by signal, by a police officer in uniform, in the execution of their duty",
        "fine": "KES 3,000"
      },
      {
        "section": " 52(1) (b) and (2)",
        "description": "Failure of a driver to conform to the indications given by any traffic sign",
        "fine": "KES 3,000."
      },
      {
        "section": " 52(1) (c) and (2)",
        "description": "Failure of a driver to stop when required to do so by a police officer in uniform",
        "fine": "KES 5,000."
      },
      {
        "section": " 53(1) and 67",
        "description": "Causing obstruction by allowing a vehicle to remain in any position on the road so as to obstruct or cause inconvenience or to other motorists using the road",
        "fine": "KES 10,000."
      },
      {
        "section": " 53(3) and (4)",
        "description": "Failure to display reflective triangles or lifesavers in cases where any part of the vehicle remains on the road in a position so as to obstruct or cause obstruction",
        "fine": "KES 3,000"
      },
      {
        "section": " 58(1)",
        "description": "Penalty for improper condition or overloading",
        "fine": "Not exceeding four hundred thousand or to imprisonment for a term not exceeding two years or to both"
      },
      {
        "section": " 60(1) and 60(2)",
        "description": "Driver of a motorcycle carrying more than one person passenger",
        "fine": "KES 1,000."
      },
      {
        "section": " 90(2) (a) and 94",
        "description": "Driving a vehicle on a footpath",
        "fine": "KES 5,000."
      },
      {
        "section": " 90(2) (c) and 94",
        "description": "Pedestrian willfully obstructing the free passage of vehicles",
        "fine": "KES 500"
      },
      {
        "section": " 98(1) and 104",
        "description": "Unlicensed people driving or acting as the conductor of a PSV",
        "fine": "KES 5,000"
      },
      {
        "section": " 98(1) and 104",
        "description": "Owner or operator of PSV employing an unlicensed PSV driver or conductor",
        "fine": "KES 10,000"
      },
      {
        "section": " 51(1)",
        "description": "Only proper fuel to be used in motor vehicles.No fuel shall be used in any motor vehicle except that specified in the vehicle license in respect to the vehicle.",
        "fine": "Not Exceeding KES 20, 000 or to imprisonment for a term not exceeding 3 years or to both; and in addition the vehicle shall be liable to be forfeited (taken away by the police)."
      },
      {
        "section": " 54(1)",
        "description": "Racing, pace making and trial",
        "fine": "Any person convicted of such shall be stripped off their driver’s license for 12 months from the day of conviction."
      },
      {
        "section": " 58(1)",
        "description": "Penalty for improper condition or overloading",
        "fine": "not exceeding 400,000 or to imprisonment for a term not exceeding 2 years or to both."
      },
      {
        "section": "65(1)",
        "description": "Taking motor vehicle without consent (without permission from the owner)",
        "fine": "2 years imprisonment or a fine not more than 50,000 or both."
      },
      {
        "section": " 101(2)",
        "description": "Failure of the conductor to refund the fare for the incomplete portion of the journey for which full fare has been paid",
        "fine": "KES 5,000."
      },
      {
        "section": " 103(1) and (2)",
        "description": "Touting",
        "fine": "KES 3,000."
      },
      {
        "section": " 103A (1) and (7)",
        "description": "Failure of a PSV driver or conductor to wear the special badge and uniform",
        "fine": "KES 2, 000."
      },
      {
        "section": " 103B (1) and (7)",
        "description": "Motorcycle rider riding without protective gear",
        "fine": "KES 1,000."
      },
      {
        "section": " 103B (1) and (7)",
        "description": "Motorcycle passenger riding without protective gear",
        "fine": "KES 1,000."
      },
      {
        "rule": " 12(1) (b)",
        "description": "Learner driving without 'L' plates on the front and rear",
        "fine": "KES 1,000."
      },
      {
        "rule": " 130C (1) and (3)",
        "description": "Individuals driving a PSV vehicle without being the designated driver",
        "fine": "KES 5,000."
      },
      {
        "rule": " 22A (1) and (2)",
        "description": "Failure by the owner of the vehicle to have seat belts in the motor vehicle",
        "fine": "KES 1,000 per seat."
      },
      {
        "rule": " 22A (5) and (6)",
        "description": "PSV conductor’s failure to keep seat belts in a clean, dry and generally wearable condition",
        "fine": "KES 500."
      },
      {
        "rule": " 25",
        "description": "Failure of a vehicle to carry warning signs (lifesavers)",
        "fine": "KES 2,000."
      },
      {
        "rule": " 41A",
        "description": "Failure to fit the prescribed speed governor in PSV and Commercial Vehicles",
        "fine": "KES 10,000."
      },
      {
        "section": " 52(1) (b) and (2)",
        "description": "Offences relating to parking bays and areas where no charges are made",
        "fine": "first conviction fine not exceeding 10,000 or to imprisonment for a term not exceeding 3 months, and on each subsequent conviction(second conviction and such) to a fine not exceeding 20,000 shillings or to imprisonment for a term not exceeding 6 months or to both."
      },
      {
        "section": " 52B.",
        "description": "Parking of vehicles carrying explosives, petroleum, except when unloading; or in an area designated by the Minister for parking of such vehicles, or allows it to be stationary more than 15 minutes",
        "fine": "first conviction; fine not exceeding 10,      000 or to imprisonment for a term not exceeding 3 months, and on each subsequent conviction (second conviction and such) to a fine not exceeding 20,      000 shillings or to imprisonment for a term not exceeding 6 months or to both."
      },
      {
        "rule": " 54A",
        "description": "A person driving or operating a PSV with tinted windows or windscreen",
        "fine": "KES 2, 000."
      },
      {
        "rule": " 56(1), (2)",
        "description": "Failure of a PSV to carry functional re extinguishers and re kits",
        "fine": "KES 2,000."
      },
      {
        "rule": " 59A (1)",
        "description": "Driver using a mobile phone while the vehicle is in motion",
        "fine": "KES 2,000."
      },
      {
        "rule": " 65(f) and 72",
        "description": "The driver of a motor omnibus or matatu picking or setting down passengers in a place that is not authorized as a bus stop or terminal",
        "fine": "KES 3,000."
      },
      {
        "rule": " 68(1) (x) and 72",
        "description": "A passenger alighting or boarding any omnibus or matatu at a place which is not authorized as a bus stop or terminal",
        "fine": "KES 1,000."
      },
      {
        "rule": " 80",
        "description": "Travelling with part of the body outside a moving vehicle. It guarantees a fine",
        "fine": "KES 1,    000."
      }
    ]
  }

  ngOnInit() { }

  startSearch(ev: any) {
    let logo = document.getElementById('logo')
      , search = document.getElementById('search')
      , pages = document.getElementById('pages')
    logo.style.height = "3%"
    search.style.height = "5%"
    this.searching = true
    this.searchResults = []
    this.rulesArray.forEach(rule => {
      if (rule.description.includes(ev.target.value)) {
        this.searchResults.push(rule)        
      }
    })
  }

  cancelSearch() {
    let logo = document.getElementById('logo')
      , search = document.getElementById('search')
      , pages = document.getElementById('pages')

    logo.style.height = "30%"
    search.style.height = "30%"
    this.searching = false
  }
}
