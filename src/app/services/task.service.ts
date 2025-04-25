import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private firestore: Firestore) {}

  getTasks(teamId: string): Observable<any[]> {
    const tasksRef = collection(this.firestore, `teams/${teamId}/tasks`);
    return collectionData(tasksRef, { idField: 'id' });
  }

  addTask(teamId: string, title: string) {
    const tasksRef = collection(this.firestore, `teams/${teamId}/tasks`);
    return addDoc(tasksRef, { title });
  }
}
