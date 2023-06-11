import { NgModule } from "@angular/core";
import { DefaultComponent } from "./default.component";

@NgModule({
    declarations: [
      DefaultComponent
    ],
    imports: [
    ],
    exports:[
      DefaultComponent,
    ],
    providers: [],
    bootstrap: []
  })
  export class DefaultModule { }