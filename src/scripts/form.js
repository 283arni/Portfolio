class Validate {
  constructor() {
    this.form = 'j-form';
    this.name = 'j-name';
    this.email = 'j-email';
    this.text = 'j-text';
    this.btn = 'j-btn';
    this.block = 'j-block';
    this.errorBlock = 'j-error';

    this.errorClass = 'form__vis';

    this.fillField = 'Поле не может быть пустым';
    this.needCorrectMail = 'Некорректный email адрес';

    this.validateField = {
      name: false,
      email: false,
      text: false
    };
  }

  init() {
    this._initElements();
    this._addTasks();
  }

  creatPopup(message) {
    const container = document.querySelector('.wrapper');
    const popup = document.createElement('div');

    popup.classList.add('popup');
    let innerMarkUp = document.querySelector('#popup').innerHTML;
    popup.innerHTML = innerMarkUp;


    container.appendChild(popup);
    let popupText = popup.querySelector('.popup__content');
    popupText.innerHTML = message;

    const closePopup = popup.querySelector('.btn-sub');
    
    closePopup.addEventListener('click', function (evt) {
      evt.preventDefault();
      container.removeChild(popup);
    });
  }
  
  checkError() {
    let result = true;

    if (!this.validateField.name) {
      this.showErrorMessage(this.$inputName, this.fillField);
    }

    if (!this.$inputEmail.value.length) {
      this.showErrorMessage(this.$inputEmail, this.fillField);
    }

    if (!this.validateField.text) {
      this.showErrorMessage(this.$inputTextarea, this.fillField);
    }

    for (const field in this.validateField) {
      if ({}.hasOwnProperty.call(this.validateField, field) && this.validateField[field] === false) {
        result = false;
        break;
      }
    }

    return result;
  }

  showErrorMessage(element, message) {
    const parentFormBlock = element.closest(`.${this.block}`);
    const messageEl = parentFormBlock.querySelector(`.${this.errorBlock}`);

    messageEl.innerText = '';
    messageEl.classList.add(this.errorClass);
    messageEl.innerText = message;
  }

  removeErrorMessage(element) {
    const el = element.closest(`.${this.block}`).querySelector(`.${this.errorBlock}`);
    el.classList.remove(this.errorClass);
  }

  changeInputs(event, inputName) {
    if (event.target.value.length) {
      this.validateField[inputName] = true;
      this.removeErrorMessage(event.target);
    } else {
      this.validateField[inputName] = false;
      this.showErrorMessage(event.target, this.fillField);
    }
  }
  
  _initElements() {
    this.$form = document.querySelector(`.${this.form}`);
    this.$btn = this.$form.querySelector(`.${this.btn}`);
    this.$name = this.$form.querySelector(`.${this.name}`);
    this.$inputName = this.$name.querySelector('input');
    this.$email = this.$form.querySelector(`.${this.email}`);
    this.$inputEmail = this.$email.querySelector('input');
    this.$textarea = this.$form.querySelector(`.${this.text}`);
    this.$inputTextarea = this.$textarea.querySelector('textarea');
  }

  _addTasks() {
    this.$btn.addEventListener('click', (event) => {
      event.preventDefault();

      const valueCheckForm = this.checkError();
      const name = this.$inputName.value;
      const mail = this.$inputEmail.value;
      const comment = this.$inputTextarea.value;

        let dataForForm = new FormData();

        dataForForm.append('name', name);
        dataForForm.append('comment', comment);
        dataForForm.append('to', mail);
        dataForForm.append('phone', '+ 71231234545');

        if (valueCheckForm) {
          fetch('https://webdev-api.loftschool.com/sendmail/', {
            headers: {
              "Accept": "application/json"
            },
            method: "POST",
            body: dataForForm
          }).then((response) => {
            return response.json();
          }).then((info) => {
            return info.message;
          }).then((message) => {
            this.creatPopup(message);
            this.$form.reset(message);
          }).catch(() => {
            this.creatPopup('Что-то пошло не так...');
        });
      }
    });

    this.$inputTextarea.addEventListener('change', (event) => {
      this.changeInputs(event, 'text');
    });
    
    this.$inputName.addEventListener('change', (event) => {
      this.changeInputs(event, 'name');
    });

    this.$inputEmail.addEventListener('change', (event) => {
      const isValidEmail = event.target.checkValidity();
      const emailStr = '^[-._a-zA-Za-яA-я0-9]{2,}@(?:[a-zA-Za-яА-Я0-9][-a-z-A-Z-a-я-А-Я0-9]+\\.)+[a-za-я]{2,6}$';
      const regEmail = new RegExp(emailStr, 'u');

      if (isValidEmail && regEmail.test(this.$inputEmail.value)) {
        this.changeInputs(event, 'email');
      } else if (isValidEmail === false || regEmail.test(this.$inputEmail.value) === false) {
        this.showErrorMessage(event.target, this.needCorrectMail);
      }
    });
  }
}

export default Validate;