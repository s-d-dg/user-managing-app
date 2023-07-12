export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  city: string;
}

export function getUsers(): User[] {
    return [
        {
          id: "1",
          name: "Jon Snow",
          username: "Wolf",
          email: "jon@snow.com",
          city: "Winterfell",
        },
        {
          id: "2",
          name: "Darth Vader",
          username: "Vader",
          email: "darth@vader.com",
          city: "Death Start",
        },
        {
          id: "3",
          name: "Frodo Baggins",
          username: "Frodo",
          email: "frodo@baggins.com",
          city: "Shire",
        },
        {
          id: "4",
          name: "Indiana Jones",
          username: "Indy",
          email: "indiana@jones.com",
          city: "Venice",
        },
        {
          id: "5",
          name: "Luke  Skywalker",
          username: "Luke",
          email: "luke@skywalker.com",
          city: "Tatooine",
        }
      ];      
} 