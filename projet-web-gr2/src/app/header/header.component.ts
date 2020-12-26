import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private jour : number = 1;
  private hour : number = 8;
  private min : number = 0;
  private action : boolean;

  constructor() {
    this.startTimer();
  }

  getJour() : number
  {
    return this.jour;
  }

  getHour() : number
  {
    return this.hour;
  }

  getMin() : number
  {
    return this.min;
  }

  getString(minute:number,hours:number,jour:number) : string
  {
    let hour : string;
    let min : string;
    if(hours < 10) {
      hour = "0" + hours.toString();
    }
    else {
      hour = hours.toString();
    }
    if(minute < 10) {
      min = "0" + minute.toString();
    }
    else {
      min = minute.toString();
    }

    return "Jour " + jour.toString() + " : " + hour + "h" + min;
  }

  startTimer() : void
  {
    setInterval(() => {
          this.min ++;
          if(this.min == 60){
            this.hour ++;
            this.min = 0;
          }
          if (this.hour == 24){
            this.jour ++;
            this.hour = 0;
          }
          let doc = document.getElementById("timer");
          console.log(this.min);
          doc.innerHTML = this.getString(this.min,this.hour,this.jour);

    },10);
  }


  ngOnInit(): void {

  }

}
