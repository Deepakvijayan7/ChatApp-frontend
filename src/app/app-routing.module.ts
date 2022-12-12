import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { ChatsectionComponent } from './chatsection/chatsection.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'chat',component:ChatsectionComponent,canActivate:[AuthGuard],
children:[{path:'message/:id',component:ChatboxComponent} ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
