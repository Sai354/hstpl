import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './signup/signup.component';
import { StepComponent } from './step/step.component';
import { TemplateComponent } from './template/template.component';





const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'form', component: FormComponent },
  { path: 'step', component: StepComponent },
  {
    path: 'main', component: MainComponent,
    children: [
      {path: 'home', component: HomeComponent},
    ]
  },
  //   { path: 'home', component: HomeComponent,
  //     children: [{ path: 'create', component: CreateProjectComponent}] 
  // },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
