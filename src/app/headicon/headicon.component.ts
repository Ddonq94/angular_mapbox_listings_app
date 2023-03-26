import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-headicon',
  templateUrl: './headicon.component.html',
  styleUrls: ['./headicon.component.css'],
})
export class HeadiconComponent implements OnInit {
  @Input() href: string | undefined;
  @Input() icon: any | undefined;
  @Input() text: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
