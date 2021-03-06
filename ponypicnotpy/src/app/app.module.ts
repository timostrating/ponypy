import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HighchartsChartComponent } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { IndexComponent } from './pages/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FigureOneComponent } from './pages/figure-one/figure-one.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FigureTwoComponent } from './pages/figure-two/figure-two.component';
import { FeaturedcardsComponent } from './components/featuredcards/featuredcards.component';
import { FigureNlpComponent } from './pages/figure-nlp/figure-nlp.component';
import { FigureAgeGreenComponent } from './pages/figure-age-green/figure-age-green.component';
import { FigureGroenGrijsComponent } from './pages/figure-groengrijs/figure-groengrijs.component';
import { PercentageCardComponent } from './components/percentage-card/percentage-card.component';
import { FigureNieuwsComponent } from './pages/figure-nieuws/figure-nieuws.component';
import { FigureWeekComponent } from './pages/figure-week/figure-week.component';
import { FigureTimesComponent } from './pages/figure-times/figure-times.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NotFoundComponent,
    FigureOneComponent,
    ToolbarComponent,
    HighchartsChartComponent,
    FigureTwoComponent,
    FeaturedcardsComponent,
    FigureNlpComponent,
    FigureAgeGreenComponent,
    FigureGroenGrijsComponent,
    PercentageCardComponent,
    FigureNieuwsComponent,
    FigureWeekComponent,
    FigureTimesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
