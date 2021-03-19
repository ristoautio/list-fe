import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  all = [];

  constructor(private listService: ListService) {
    listService.getLists()
      .subscribe((data) => this.all = data)
  }

  ngOnInit(): void {
  }

  openItem(item: any) {
    this.listService.selectItem(item)
  }
}
