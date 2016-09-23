import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MdCardModule} from '@angular2-material/card';
import {MdToolbarModule} from '@angular2-material/toolbar';

import {AppComponent} from './app.component';
import { LoginStatsComponent } from './login-stats/login-stats.component';
import { LayoutDirective } from './layout.directive';
import { FlexDirective } from './flex.directive';

@NgModule({
    declarations: [
        AppComponent,
        LoginStatsComponent,
        LayoutDirective,
        FlexDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        MdCardModule.forRoot(),
        MdToolbarModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
