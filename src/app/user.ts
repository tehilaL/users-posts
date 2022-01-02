export class User {
    constructor(
      public  address: {street: string, suite: string, city: string, zipcode: string},
      public  company: {name: string, catchPhrase: string, bs: string},
      public  email: string,
      public   id: number,
      public  name:string,
      public  phone: string,
      public  username:string,
      public  website:string,    
     ) {}
   }