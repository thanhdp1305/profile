import { Component, OnInit } from '@angular/core';
import { Roles } from '../../../shared/commons/roles';
import { Urls } from '../../../shared/configs/urls';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  urls = Urls;

  constructor(public roles: Roles) {}

  ngOnInit(): void {}

  get isLocal(): boolean {
    return location.hostname == `localhost`;
  }
}
