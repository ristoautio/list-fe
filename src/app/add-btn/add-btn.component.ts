import { Component, OnInit } from '@angular/core';
import {ListService} from "../list.service";

@Component({
  selector: 'app-add-btn',
  templateUrl: './add-btn.component.html',
  styleUrls: ['./add-btn.component.scss']
})
export class AddBtnComponent implements OnInit {

  inputVisible = false
  name = ""

  constructor(private listService: ListService) { }

  ngOnInit(): void {}

  addItem() {
    this.listService.addList(this.name)
    this.inputVisible = false
    this.name = ""
  }
}
