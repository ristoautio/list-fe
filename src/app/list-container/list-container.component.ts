import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  item = {
    id: 0,
    name: '',
    items: []
  }
  newItemName = ""

  constructor(private listService: ListService) {
    listService.getItem().subscribe((data) => {
      this.item = data
    })
  }

  ngOnInit(): void {
  }

  addItem() {
    this.listService.addItem(this.item.id, this.newItemName)
    this.newItemName = ""
  }

  removeItem(todo: any) {
    this.listService.removeItem(todo)
  }

}
