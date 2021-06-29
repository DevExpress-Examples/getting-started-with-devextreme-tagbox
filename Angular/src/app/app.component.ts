import { Component } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { AppService, Item } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    dataSource: DataSource;
    data: Item[];
    dropDownOptions: any;

    constructor(service: AppService) {
        this.data = service.getItems();
        this.dataSource = new DataSource({
            store: {
                data: this.data, 
                type: 'array',
                key: "ID", 
            },
            group: "Category"
        });

        this.dropDownOptions = {
            height: 300
        };
    }

    onValueChanged(e) {
        console.log(e.previousValue);
        console.log(e.value);
    }
}
