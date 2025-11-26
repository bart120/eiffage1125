import { Observable } from "rxjs";
import { UserModel } from "./user.model";

export interface TodoModel {
    userId: number;
    id: number;
    title: string;
    completed: boolean
    user$?: Observable<UserModel>
}
