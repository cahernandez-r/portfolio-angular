import { Component } from '@angular/core';
import { HabilityModel } from '../models/hability-model';
import { HabilityProjectModel } from 'src/app/shared/models/hability-project-model';
import { ProjectModel } from 'src/app/shared/models/ProjectModel';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-habilities',
  templateUrl: './habilities.component.html',
  styleUrls: ['./habilities.component.scss'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      // transition(":leave", [
      //    animate('200ms ease-in', style({ transform: 'translateY(-200%)' })),
      //  ])
    ])]
})
export class HabilitiesComponent {

  habilitySelected: string = "";

  itemsHabilities: HabilityModel[] = [
    {
      code: "001",
      hability: "Java",
      icon: "fa-brands fa-java"
    },
    {
      code: "002",
      hability: "Angular",
      icon: "fa-brands fa-angular"
    },
    {
      code: "003",
      hability: "Git",
      icon: "fa-brands fa-github"
    },
    {
      code: "004",
      hability: "Docker",
      icon: "fa-brands fa-docker"
    },
    {
      code: "005",
      hability: "Kubernetes",
      icon: "fa-solid fa-dharmachakra"
    }
  ]

  projects: HabilityProjectModel[] = [
    {
      codeHability: "001",
      projects: [
        {
          code:"p001",
          title: "Proyecto en java",
          description:"Este proyecto es un proyecto muy bonito"
        },
        {
          code:"p002",
          title: "Chat en tiempo real",
          description:"Proyecto complicado"
        }
      ]
    },
    {
      codeHability: "002",
      projects: [
        {
          code:"p003",
          title: "Proyecto en Angular",
          description:"Este proyecto es un proyecto muy bonito"
        },
        {
          code:"p004",
          title: "Chat en tiempo real",
          description:"Proyecto complicado en angular"
        },
        {
          code:"p005",
          title: "Proyecto en Angular",
          description:"Este proyecto es un proyecto muy bonito"
        },
        {
          code:"p006",
          title: "Chat en tiempo real",
          description:"Proyecto complicado en angular"
        }
      ]
    }
  ]

  projectsRender: ProjectModel[] = [];

  onSelectecHability(codeHabilitySelected: string): void {
    this.projectsRender = this.projects.find(ph => ph.codeHability === codeHabilitySelected)?.projects ?? [];
    this.habilitySelected = codeHabilitySelected;
  }
}
