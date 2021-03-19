import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private _list: [] = [];
  private _observableList: BehaviorSubject<any[]> = new BehaviorSubject([]);

  private selectedItem: any = {};
  private _observableItem: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private http: HttpClient) {
    this.update()
  }

  getLists = () => this._observableList.asObservable()
  getItem = () => this._observableItem.asObservable()

  update = () => {
    this.http.get<[]>('/lists').subscribe((data) => {
      this._list = data;
      this._observableList.next(this._list);
    })
  }

  addList = (name: string) => {
    this.http.post('/lists', {name: name})
      .subscribe(this.update)
  }

  selectItem = (item: any) => {
    this.http.get<[]>(`/list/${item.id}`).subscribe((data) => {
      this.selectedItem = {
        id: item.id,
        name: item.name,
        items: data
      };
      this._observableItem.next(this.selectedItem);
    })
  }

  addItem(id: number, name: string) {
    const url = `/list/${id}`
    this.http.post(url, {name: name})
      .subscribe(() => {
        this.selectItem(this.selectedItem)
      })
  }

  removeItem(todo: any) {
    const url = `/list/${this.selectedItem.id}/${todo.id}`
    this.http.delete<[]>(url).subscribe((data) => {
      this.selectItem(this.selectedItem)
    })
  }
}
