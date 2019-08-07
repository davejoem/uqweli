import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router'

export interface ISummary {
  heading: string
  details: string[]
}

@Component({
  selector: 'app-list',
  templateUrl: 'details.page.html',
  styleUrls: ['details.page.scss']
})
export class DetailsPage implements OnInit {
  public category: string
  public offence: string
  public section: string
  public penalty: string
  public process: string
  public inDetail: boolean
  public trafficSummary: ISummary
  public penalSummary: ISummary
  public activeCategory: ISummary
  
  constructor(
    private location: Location
    , private router: Router
    , private activateroute: ActivatedRoute
  ) {
    this.inDetail = true
    this.activateroute.params.subscribe((data: any) => {
	  if(data.category == 'penal') this.activeCategory = this.penalSummary
	  if(data.category == 'traffic') this.activeCategory = this.trafficSummary
      this.category = data.category
	  this.offence = data.offence
      this.section = data.section
      this.penalty = data.penalty
      this.process = data.process
    });
  }

  ngOnInit() {
    this.trafficSummary = {
	  heading: "A Summary of Bail and Bond Policy Guideline in regards to Traffic Offences"
	  , details: [
	   `Article 49(1) (h) of the Constitution of Kenya gives an arrested person the right 'to be released on bond or
        bail, on reasonable conditions, pending a charge or trial, unless there are compelling reasons not to be released.'`,
       `Further, Article 49(2) of the Constitution provides that "A person shall not be remanded in custody for an
        offence if the offence is punishable by a fine only or by imprisonment for not more than six months."`,
       `Further, Article 49(2) of the Constitution provides that “A person shall not be remanded in custody for an
        offence if the offence is punishable by a fine only or by imprisonment for not more than six months.”`,
	   `The administration of bail and bond in traffic offences presents special challenges. Decision making here
        seems arbitrary, and the amount of bail is left to the discretion of the Divisional Traffic Officer. Further, while
        the police are concerned that there is a high rate of absconding (that is, failing to attend court after
        paying cash bail), the public find the process of complying with the requirement to attend court unduly punitive,
        particularly where the offences are committed in locations where they do not reside. This is the case, for
        example, where an offender is caught over-speeding in Naivasha on a Sunday whilst heading to Kisumu where he
        or she resides. Typically, the police would require such a person to appear before a Naivasha court the following
        day. Court case backlogs and lengthy trial procedures have also given police officers and traffic offenders an
        incentive to solicit and pay bribes respectively. In such instances, police officers withdraw the charges upon
        the offenders giving them the amount, or part, of the cash bail.`,
		`In minor traffic cases (those that attract fines of minimal amounts or sentences of less than six months),
        police officers may issue a notice to attend court on a day not more than fourteen days from the date of the
        alleged offence.`,
		`At the Police Station, a suspect may be released on cash bail, with or without sureties, or personal (free)
        bond or recognizance. The Police Force Standing Orders26 require the officer in charge of a police station to
        release any person arrested on a minor charge on the security of cash bail, as a general rule, unless the
        officer has good grounds for believing that the arrested person will not attend court when required to do so.`,
		`This cash bail should be handed into court by the date on which the arrested person should appear in court,
        and a receipt obtained.`,
		`In case a person who has been released on bail fails to appear in court, the officer in charge of the police
        station should apply to the magistrate for a warrant of arrest. At this point, the magistrate may either order
        the cash bail to be forfeited (if it is demonstrated that there are sufficient grounds that justify an order
        for forfeiture), or retained on court deposit until such time as the accused person appears.`,
		`It should be noted that the Police Standing Orders are categorical that a person who is released from custody
        on either bail or bond can only be required to appear before a magistrate on a specified date, and that “Under
        no circumstances will a prisoner who is released on bond be required to appear at a police station or other
        place.”`,
		`Where the accused person violates bail or bond terms, the police should cancel the bail or bond, re-arrest
        him or her, bring him or her to the police station, and take him or her to court.`,
		`Once the accused person has appeared in court, or the case file has been sent to the Office of the Director
        of Public Prosecution (ODPP), it shall be the responsibility of the ODPP to keep victims informed of
        developments.in their case, including court decisions granting an accused person bail or bond, and any
        conditions attached thereto.`,
		`Any person who alleges that a police officer has violated any of the foregoing requirements of this Policy
        may report the matter to the Independent Policing Oversight Authority (IPOA) whose function is to “hold the police
        accountable to the public in the performance of their functions.`
	  ]
	}
	
	this.penalSummary = {
	  heading: `A Summary of the Penal Code - Offences and Penalties`,
	  details: [`
		Punishments

		Section 24. Different kinds of punishments
		The following punishments may be inflicted by a court—
		(a) Death;
		(b) Imprisonment or, where the court so determines under the Community Service Orders Act, 1998, community service under a community service order;
		(c) Detention under the Detention Camps Act;
		(d) deleted by Act No. 5 of 2003, s. 3;
		(e) Fine;
		(f) Forfeiture; (property taken away as a form of punishment)
		(g) Payment of compensation;


		Section 25. Sentence of death
		(1) Where any person is sentenced to death, the form of the sentence shall be to the effect only that he is to suffer death in the manner authorized by law- Death by hanging.

		Death sentence shall not be applied to persons under 18 years and expectant mothers. Death sentence shall be administered under the pleasure of the president.


		Section 26. Imprisonment
		This can be substituted with fines. However, it must be expressly provided for in the law otherwise a number of offences have imprisonment as mandatory. Also, one can be sent to jail and still pay the subscribed fine.


		Section 28. Fines
		Table below shows the corresponding jail term for failure to pay the prescribed fine.However, it should be noted that some offences attract both fines and jail terms.

		Amount                                                                                                                     Maximum Period

		Not exceeding 500 KES……………………………………………………………...14 days.

		Exceeding 500 KES but not exceeding 2000 KES…………………………………..1 month.

		Exceeding 2,500 KES but not exceeding 15,000 KES………………………………3 months.

		Exceeding 15,000 KES but not exceeding 50,000 KES……………………………..6 months.

		Exceeding 50,000 KES....................................................................................……...12 months.


		Section 36. General punishment for misdemeanours
		When in this Code no punishment is specially provided for any misdemeanour, it shall be punishable with imprisonment for a term not exceeding two years or with a fine, or with both.


		Section 37. Sentences when cumulative
		If one is already convicted (in jail) serving a certain sentence, and he is convicted of another crime, the sentences shall be served subsequently (one after the other).However, if the court deems it so they can be served concurrently (at the same time) if the court deems it (chooses to). An exception to this is death sentences and life imprisonment sentences.`
      ]
	}
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }

  segmentChanged(ev: any) {
    this.inDetail = !this.inDetail
  }

  goBack() {
    this.location.back()
  }
}
