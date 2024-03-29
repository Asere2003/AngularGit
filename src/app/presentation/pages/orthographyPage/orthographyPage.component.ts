import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ChatMessageComponent } from '@components/chat-bubbles/chatMessage/chatMessage.component';
import { MyMessageComponent } from '@components/chat-bubbles/myMessage/myMessage/myMessage.component';
import { TextMessageBoxComponent } from '@components/text-boxes/textMessageBox/textMessageBox.component';
import { TextMessageBoxFileComponent, TextMessageEvent } from '@components/text-boxes/textMessageBoxFile/textMessageBoxFile.component';
import { TextMessadeBoxEvent, TextMessageBoxSelectComponent } from '@components/text-boxes/textMessageBoxSelect/textMessageBoxSelect.component';
import { TypingLoaderComponent } from '@components/typingLoader/typingLoader.component';
import { Messages } from 'app/intefaces/message.interface';
import { OpenEiService } from '../../services/openai.service';


@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class OrthographyPageComponent {

  public mesasages = signal<Messages[]>([{ text:'Hola mundo', isGpt: true }]);
  public isLoading = signal<boolean>(false);
  public openEiService = inject( OpenEiService );




  hendleMessage ( promt : string   ) {
    console.log( promt )
  }

  hendleMessageWithFile ( { prompt , file }  : TextMessageEvent   ) {
    console.log( prompt, file )
  }


  hendleMessageWithSelect ( event: TextMessadeBoxEvent  ) {
    console.log( event  )
  }


}
