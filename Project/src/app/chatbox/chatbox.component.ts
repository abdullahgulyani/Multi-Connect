import { Component } from '@angular/core';
import { ChatService} from '../chat.service';

@Component({
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css'],
  providers: [ChatService]
})
export class ChatboxComponent {
  user: string;
  room: string;
  messageText: string;
  messageArray: Array<{user: string, message: string}> = [];
  // tslint:disable-next-line: variable-name
  constructor(private _chatService: ChatService) {
    this._chatService.newUserJoined()
    .subscribe(data => this.messageArray.push(data));

    this._chatService.userLeftRoom()
    .subscribe(data => this.messageArray.push(data));

    this._chatService.newMessageReceived()
    .subscribe(data => this.messageArray.push(data));
  }
  join() {
    this._chatService.joinRoom({user: this.user, room: this.room});
  }
  leave() {
    this._chatService.leaveRoom({user: this.user, room: this.room});
  }
  sendMessage() {
    this._chatService.sendMessage({user: this.user, room: this.room, message: this.messageText});
  }
}
