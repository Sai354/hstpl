import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private router: Router,
    private route: ActivatedRoute) {}

  title = 'TaskManagement';
  items: MenuItem[]=[];
  item2 : MenuItem[]=[];
   dot: false | undefined;
  ngOnInit(): void {
  this.item2=[{
    label:'List',
    icon:'pi pi-list',
  
  },
  {
    label:'Dashboard',
    icon:'pi pi-fw pi-calendar-times',
    items:[
    {
        label:'Remove',
        icon:'pi pi-fw pi-calendar-minus'
    }
    ]
  },
  {
    label:'Users',
    icon:'pi pi-fw pi-user',
    items:[
        {
            label:'New',
            icon:'pi pi-fw pi-user-plus',
  
        },
        {
            label:'Delete',
            icon:'pi pi-fw pi-user-minus',
  
        },
    
        
    ]
  },
  {
    label:'TImeline',
    icon:'pi pi-fw pi-power-off',
    routerLink:['calender']
  }
  
  ]
  this.items = [
  {
  label: 'Home',
  icon: 'pi pi-pw pi-file' ,
  routerLink : ['home']
  },
  {
  label: 'doctors',
  icon: 'pi pi-fw pi-book',
  // command: () => addNewTask(),
  routerLink : ['doctors']
   
  },
  {
  label: 'patients',
  icon: 'pi pi-fw pi-question',

  },
  {
  label: 'Reporting',
  icon: 'pi pi-fw pi-cog',
  items: [
  {
  label: 'Add project',
  icon: 'pi pi-fw pi-pencil',
  items: [
  {label: 'Save', icon: 'pi pi-fw pi-save'},
  {label: 'Update', icon: 'pi pi-fw pi-save'},
  ]
  },
  {
  label: 'add task',
  icon: 'pi pi-fw pi-pencil',
  items: [
  {label: 'Delete', icon: 'pi pi-fw pi-minus'}
  ]
  }
  ]
  }
  ];
  }


}
function addNewUser(): void {
  throw new Error('Function not implemented.');
}

function addNewTask(): void {
  throw new Error('Function not implemented.');
}



