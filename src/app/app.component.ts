import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedName: string | undefined;
  selectedObj!: User | undefined;
  // selectedName?: string;

  onSelectUser(id: string){
    console.log('selected id: ', id);
    this.selectedObj = DUMMY_USERS.find((user) => user.id === id);
    this.selectedName = this.selectedObj?.name;
  }
}
