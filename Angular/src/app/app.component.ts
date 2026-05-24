import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import type { ValueChangedEvent } from 'devextreme/ui/tag_box';
import { AppService, type Item } from './app.service';

import { DxTagBoxModule } from 'devextreme-angular/ui/tag-box';

@Component({
    selector: 'app-root',
    imports: [DxTagBoxModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dataSource: DataSource;

  data: Item[];

  dropDownOptions: { height: number };

  constructor(service: AppService) {
    this.data = service.getItems();
    this.dataSource = new DataSource({
      store: {
        data: this.data,
        type: 'array',
        key: 'ID',
      },
      group: 'Category',
    });

    this.dropDownOptions = {
      height: 300,
    };
  }

  onValueChanged(e: ValueChangedEvent): void {
    // eslint-disable-next-line no-console
    console.log(e.previousValue);
    // eslint-disable-next-line no-console
    console.log(e.value);
  }
}
