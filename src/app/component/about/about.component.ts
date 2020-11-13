import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public stringVariable = 'we have city to burn';
  public stringVariable1 = 'WE HAVE CITY TO BURN';
  public birthDate = Date.now();
  public jsonObj = {
    key: 'value'
  };
  public kebabCaseVar = 'lorem-ipsum-olor';

  constructor() {
  }

  ngOnInit(): void {
  }

}
