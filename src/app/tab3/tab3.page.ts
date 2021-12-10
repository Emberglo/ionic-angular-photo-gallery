import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  selectedData: any;

  constructor(
    public alertController: AlertController
    ) {}

    showPrompt() {
      this.alertController.create({
        header: 'Prompt Alert',
        cssClass: 'alert-style-class',
        subHeader: 'Enter information requested',
        message: 'Enter your first name',
        inputs: [
          {
            name: 'Name',
            type: 'text',
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: (data: any) => {
              console.log('Canceled', data);
            }
          },
          {
            text: 'Ok',
            handler: (data: any) => {
              console.log('Saved Information', data);
              this.selectedData = data;
            }
          }
        ]
      }).then(res => {
        res.present();
      });
    }

}
