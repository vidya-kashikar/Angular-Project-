import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModelContentComponentComponent } from './model-content-component/model-content-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelContentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgbModule
  ],
  entryComponents: [ AppComponent ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
