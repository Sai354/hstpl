import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  items:MenuItem[] =[];
  items2: MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];
  this.items2 = [
    {
    label: 'File',
    icon:'pi pi-fw pi-file',
    items: [
        {
            label: 'New',
            icon:'pi pi-fw pi-plus',
            items: [
                {
                label: 'Bookmark',
                icon:'pi pi-fw pi-bookmark'
                },
                {
                label: 'Video',
                icon:'pi pi-fw pi-video'
                }
            ]
        },
        {
            label: 'Delete',
            icon:'pi pi-fw pi-trash'
        },
        {
            label: 'Export',
            icon:'pi pi-fw pi-external-link'
        }
    ]
    },
    {
    label: 'Edit',
    icon:'pi pi-fw pi-pencil',
    items: [
        {
            label: 'Left',
            icon:'pi pi-fw pi-align-left'
        },
        {
            label: 'Right',
            icon:'pi pi-fw pi-align-right'
        },
        {
            label: 'Center',
            icon:'pi pi-fw pi-align-center'
        },
        {
            label: 'Justify',
            icon:'pi pi-fw pi-align-justify'
        }
    ]
    },
    {
    label: 'Users',
    icon:'pi pi-fw pi-user',
    items: [
        {
            label: 'New',
            icon:'pi pi-fw pi-user-plus',

        },
        {
            label: 'Delete',
            icon:'pi pi-fw pi-user-minus',
        },
        {
            label: 'Search',
            icon:'pi pi-fw pi-users',
            items: [
                {
                label: 'Filter',
                icon:'pi pi-fw pi-filter',
                items: [
                    {
                        label: 'Print',
                        icon:'pi pi-fw pi-print'
                    }
                ]
                },
                {
                icon:'pi pi-fw pi-bars',
                label: 'List'
                }
            ]
        }
    ]
    },
    {
    label: 'Events',
    icon:'pi pi-fw pi-calendar',
    items: [
        {
            label: 'Edit',
            icon:'pi pi-fw pi-pencil',
            items: [
                {
                label: 'Save',
                icon:'pi pi-fw pi-calendar-plus'
                },
                {
                label: 'Delete',
                icon:'pi pi-fw pi-calendar-minus'
                }
            ]
        },
        {
            label: 'Archieve',
            icon:'pi pi-fw pi-calendar-times',
            items: [
                {
                label: 'Remove',
                icon:'pi pi-fw pi-calendar-minus'
                }
            ]
        }
    ]
    }
]
}
}