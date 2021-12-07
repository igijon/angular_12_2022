import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/users/models/user';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  user ?: User;

  constructor(private route: ActivatedRoute) {
    this.user = <User>this.route.snapshot.queryParams;
    console.log(this.user);
  }

  ngOnInit(): void {
  }

}
