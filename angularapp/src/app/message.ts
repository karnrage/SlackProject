export class Message {
    constructor(
        public id: number = null,
        // above not needed for front end
        public content: string = "",
        public sender: string = "",
        public username: string = "",
        public Date: string = "",
      ){}
    
}