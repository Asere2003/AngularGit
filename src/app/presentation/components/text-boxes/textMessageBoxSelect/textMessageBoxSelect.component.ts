import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';


interface Options {
  id:string,
  text:string
}

export interface TextMessadeBoxEvent {
  prompt: string,
  selectedOption: string
}

@Component({
  selector: 'app-text-message-box-select',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './textMessageBoxSelect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxSelectComponent {

  @Input()
  public placeholder: string = '';
  @Input( { required: true })
  public options!: Options[];

  @Output()
  public onMessage  = new EventEmitter<TextMessadeBoxEvent>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt: ['', Validators.required],
    selectedOption : ['', Validators.required]
  });


  handleSubmit() {
    if ( this.form.invalid ) return;
    const { prompt, selectedOption  } = this.form.value;
    this.onMessage.emit({ prompt: prompt! , selectedOption: selectedOption! } );
    this.form.reset();
  }

}
