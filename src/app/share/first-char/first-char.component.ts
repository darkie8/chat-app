import { Component, OnChanges, Input, EventEmitter, Output, OnInit, SimpleChanges, ɵNgOnChangesFeature } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'first-char',
  templateUrl: './first-char.component.html',
  styleUrls: ['./first-char.component.css']
})
export class FirstCharComponent implements OnInit, OnChanges {

  @Input() userName: string;
  @Input() userBg: string;
  @Input() userColor: string;

  public firstChar: string;
  private name: any;
  @Output() userNameAppear: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit(): void {
    this.name = this.userName;
    this.firstChar = this.name[0];

  } // end ngOnInit

  /**
   * userNameClick
   */
  public userNameClick(): void {
    this.userNameAppear.emit(this.name);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const name1 = changes.userName;
    this.name = name1.currentValue;
    this.firstChar = this.name[0];

  }
}
