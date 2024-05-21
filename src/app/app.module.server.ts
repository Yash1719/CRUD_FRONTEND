import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

// import { AppModule } from './app.module';
import { AppModule } from './app.module'; // Change this line to specify the file extension

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
