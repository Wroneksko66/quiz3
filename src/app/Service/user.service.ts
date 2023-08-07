import {Injectable} from '@angular/core';
import {User} from "../../modules/square/components/model/user.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {UserAnswerData} from "../../modules/square/components/model/userAnswerData.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users$: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([
    {
      name: 'Nicolas',
      nickName: 'Skonic69',
      mail: 'skowronek.nicolas@gmail.com',
      number: '794961204',
      id: 0
    }
  ]);

  constructor() {
  }

  addNewUser(user: User): void {
    const currentUser = this.users$.getValue();
    currentUser.push(user);
    this.users$.next(currentUser);
  }

  getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  editUser(updateUser: User) {
    const currentUsers: User[] = this.users$.getValue();
    const updatedUsers: User[] = currentUsers.map((user) => {
      if (user.id === updateUser.id) {
        return {
          ...user,
          name: updateUser.name,
          nickName: updateUser.nickName,
          mail: updateUser.mail,
          number: updateUser.number
        }
      }
      return user;
    })
    console.log('333', updatedUsers)
    this.users$.next(updatedUsers)
  }

  deleteUer(id: number | undefined) {
    if (id !== undefined) {
      let removeUsers = this.users$.getValue();
      removeUsers = removeUsers.filter((user: User) => user.id !== id)
      this.users$.next(removeUsers)
    }

  }

  updateUserScore(userId: number | undefined, data: UserAnswerData | undefined): void {
    if (userId !== undefined && data !== undefined) {
      let updateUsers: User[] = this.users$.getValue();
      const userToUpdate = updateUsers.find(user => user.id === userId);
      if (userToUpdate) {
        userToUpdate.userAnswerData = data
      }
      this.users$.next(updateUsers);
    }
  }

}
