import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {register_voter} from './register_voter.component'
import {ViewVotersComponent} from './view-voters/view-voters.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Components'
    },
    children: [
    
      {
        path: 'test',
        component: register_voter,
        data: {
          title: 'Buttons'
        }
      
      },
      {
        path: 'view',
        component: ViewVotersComponent,
        data: {
          title: 'Buttons'
        }
      
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
