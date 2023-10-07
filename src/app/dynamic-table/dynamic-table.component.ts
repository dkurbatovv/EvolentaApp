import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent {
  @ViewChild('tableTemplate') tableTemplate!: TemplateRef<any>;
}
