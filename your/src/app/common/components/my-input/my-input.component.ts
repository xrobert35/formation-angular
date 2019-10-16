import { Component, forwardRef, OnInit, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input',
  templateUrl: './my-input.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MyImputComponent),
    multi: true
  }]
})
export class MyImputComponent implements ControlValueAccessor, OnInit {

  @Input() id: string;
  @Input() name: string;
  @Input() type = 'text';
  @Input() label: string;

  @Input() delay = 0;

  disabled = false;
  inputControl = new FormControl();

  onChange: any = () => { };
  onTouched: any = () => { };

  ngOnInit() {
    this.inputControl.valueChanges.pipe(debounceTime(this.delay)).subscribe((value) => {
      let val = value;
      if (this.type === 'number') {
        val = Number.parseInt(value, 10);
      }
      this.onChange(val); // on notifie que le componsant changer de value
      this.onTouched();
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    // on set la valeur de l'input sans declancher le valueChanges
    this.inputControl.setValue(obj, { emitEvent: false });
  }
}
