import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
 search = `bag`;
 @Output() newPushEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
pushdata() {
  console.log(this.search);
  this.newPushEvent.emit(this.search);
}
}
