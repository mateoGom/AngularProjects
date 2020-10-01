import { threadId } from 'worker_threads';

export class DestinoViaje {
  private selected: boolean;

  constructor(public nombre: string, public url: string) {}
  isSelected(): boolean {
    return this.selected;
  }

  setSelected(s:boolean) {
    this.selected = s;
  }
}
