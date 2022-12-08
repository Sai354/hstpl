import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {CheckboxModule} from 'primeng/checkbox';

import {TabViewModule} from 'primeng/tabview';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion'; 
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {ButtonModule} from 'primeng/button';
import { TemplateComponent } from './template/template.component';
import {MenubarModule} from 'primeng/menubar';
import {SlideMenuModule} from 'primeng/slidemenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import {CaptchaModule} from 'primeng/captcha';
import {DropdownModule} from 'primeng/dropdown';
import { FormComponent } from './form/form.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { StepComponent } from './step/step.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { ForgetComponent } from './forget/forget.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
  
    TemplateComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    FormComponent,
    StepComponent,
    ForgetComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FullCalendarModule,
    CommonModule,
    FormsModule,
    DialogModule,
    InputTextModule,
    CalendarModule,
    CheckboxModule,
    ButtonModule,
    TabViewModule,
    AccordionModule,
    MenubarModule,
    SlideMenuModule,
    PanelMenuModule,
    CardModule,
    ReactiveFormsModule,
    DropdownModule,
    CaptchaModule,
    InputTextareaModule,
    StepsModule,
    ToastModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
