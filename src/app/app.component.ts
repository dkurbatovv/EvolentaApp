import { ChangeDetectorRef, Component, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) 
  dynamicComponentContainer!: ViewContainerRef;
  dynamicComponentRef!: ComponentRef<DynamicTableComponent>;


  addDynamicComponent() {
    this.dynamicComponentContainer.clear();
    this.dynamicComponentRef = this.dynamicComponentContainer.createComponent(DynamicTableComponent);
  }

  clearTemplate() {
    this.dynamicComponentContainer.clear();
  }
}
