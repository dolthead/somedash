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
import { ServerStatusComponent } from './server-status/server-status.component';
import { SocialTickerComponent } from './social-ticker/social-ticker.component';
import { BurnDownComponent } from './burn-down/burn-down.component';
import { CoverityStatsComponent } from './coverity-stats/coverity-stats.component';
import { ReleaseCountdownComponent } from './release-countdown/release-countdown.component';
import { ReleaseEventsComponent } from './release-events/release-events.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginStatsComponent,
        LayoutDirective,
        FlexDirective,
        ServerStatusComponent,
        SocialTickerComponent,
        BurnDownComponent,
        CoverityStatsComponent,
        ReleaseCountdownComponent,
        ReleaseEventsComponent,
        CalendarComponent
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
