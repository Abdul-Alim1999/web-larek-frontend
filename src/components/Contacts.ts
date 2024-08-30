import { IEvents } from './base/events';
import { Form } from './common/Form';

/*
  * Интерфейс, описывающий окошко контакты
  * */
export interface IContacts {
  // Телефон
  phone: string;

  // Электронная почта
  email: string;
}

/*
  * Класс, описывающий окошко контакты
  * */
export class Contacts extends Form<IContacts> {
  // Ссылки на инпуты для телефона и электронной почты
  private _phoneInput: HTMLInputElement;
  private _emailInput: HTMLInputElement;

  // Конструктор принимает родительский элемент и обработчик событий
  constructor(
    container: HTMLFormElement,
    events: IEvents
  ) {
    super(container, events);

    // Находим инпуты по их именам
    this._phoneInput = container.elements.namedItem('phone') as HTMLInputElement;
    this._emailInput = container.elements.namedItem('email') as HTMLInputElement;
  }

  // Сеттер для телефона
  set phone(value: string) {
    if (this._phoneInput) {
      this._phoneInput.value = value;
      this.onInputChange('phone', value);
    }
  }

  // Сеттер для электронной почты
  set email(value: string) {
    if (this._emailInput) {
      this._emailInput.value = value;
      this.onInputChange('email', value);
    }
  }
}