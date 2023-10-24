import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-from.component.html',
  styleUrls: ['./search-from.component.scss']
})
export class SearchFromComponent implements OnInit {
  searchForm: FormGroup;
  searchField = new FormControl('');

  @Input()
  title!: string;

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter();

  constructor(fb: FormBuilder) {
    this.searchForm = fb.group({
      searchBox: this.searchField
    })
  }
  // ngOnInit() {
  //   this.searchField.valueChanges.subscribe(result => {
  //     this.searchEvent.emit(result);
  //   })
  // }

  ngOnInit() {
    this.searchField.valueChanges.subscribe(result => {
      if (result !== null && typeof result === 'string') {
        this.searchEvent.emit(result);
      }
    });
  }
}


