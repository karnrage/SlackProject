export class Channel {
    constructor(
        // public _id: number = null,
        public channelName: string = "",
        public _teams: Array<string> = [],
        public _messages: Array<string> = [],
        
      ){}    
}

//NEED TO SET attributes to empty, otherwise it expects an empty set.