import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TherapistPageComponent } from "./therapist-page/therapist-page.component";

const routes: Routes = [
    { path: 'therapists', component: TherapistPageComponent}
]



@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  