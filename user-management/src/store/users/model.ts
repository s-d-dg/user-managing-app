export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    city: string;
  }
  
  export interface UsersStateModel {
    stateUsers: User[];
    sortBy: string | null;    
    loading: boolean;
}
