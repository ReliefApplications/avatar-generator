import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { AvatarSelectorComponent } from './components/avatar-selector/avatar-selector.component';
import { ClothSelectorComponent } from './components/cloth-selector/cloth-selector.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AvatarComponent,
    AvatarSelectorComponent,
    ClothSelectorComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
