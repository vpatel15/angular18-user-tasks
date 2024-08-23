// import { Component, computed, signal } from '@angular/core';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { User } from './user.model';
// import { CardComponent } from '../shared/card/card.component';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name?: string;

  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  // select = output<string>();

  // avatar = input<string>();
  // avatar = input.required<string>();


  // imagePath = computed(() => 'assets/users/' + this.avatar());

  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
