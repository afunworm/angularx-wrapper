import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'demo';
    code1 = `<angularx-wrapper elevation="3" contentAlign="left" align="left"></angularx-wrapper>`;
    code2 = `<angularx-wrapper elevation="15" width="1200px" contentAlign="center" align="center"
    [ngxStyle]="{ marginTop: '15px', background: '#000', color: '#FFF' }"></angularx-wrapper>`;
    code3 = `<angularx-wrapper elevation="8" contentAlign="center" [ngxStyle]="{ marginTop: '25px' }" align="right"
    borderRadius="12px"></angularx-wrapper`;
}
