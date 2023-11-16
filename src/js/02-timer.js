import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startButton: document.querySelector('[data-start]'),
  daysElement: document.querySelector('[data-days]'),
  hoursElement: document.querySelector('[data-hours]'),
  minutesElement: document.querySelector('[data-minutes]'),
  secondsElement: document.querySelector('[data-seconds]')
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates.length > 0) {
      const selectedDate = new Date(selectedDates[0]);
      const now = new Date();

      if (selectedDate > now) {
        enableStartButton();
      } else {
        disableStartButton("Please choose a date in the future");
      }
    }
  },
};

flatpickr(refs.datetimePicker, options);

let countdownInterval;

refs.startButton.addEventListener('click', () => {
  const selectedDate = refs.datetimePicker._flatpickr.selectedDates[0];
  if (selectedDate && selectedDate > new Date()) {
    startCountdown(selectedDate);
    disableInputAndButton();
  } else {
    window.alert("Please choose a valid date in the future");
  }
});

function enableStartButton() {
  refs.startButton.removeAttribute('disabled');
}

function disableStartButton(message) {
  window.alert(message);
  refs.startButton.setAttribute('disabled', 'true');
}

function startCountdown(endDate) {
  countdownInterval = setInterval(() => {
    const currentDate = new Date();
    const difference = endDate - currentDate;

    if (difference <= 0) {
      clearInterval(countdownInterval);
      updateTimerUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const timeRemaining = convertMs(difference);
      updateTimerUI(timeRemaining);
    }
  }, 1000);
}

function updateTimerUI({ days, hours, minutes, seconds }) {
  refs.daysElement.textContent = addLeadingZero(days);
  refs.hoursElement.textContent = addLeadingZero(hours);
  refs.minutesElement.textContent = addLeadingZero(minutes);
  refs.secondsElement.textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function disableInputAndButton() {
  refs.startButton.setAttribute('disabled', 'true');
  refs.datetimePicker.setAttribute('disabled', 'true');
}

function resetTimerUI() {
  refs.daysElement.textContent = '00';
  refs.hoursElement.textContent = '00';
  refs.minutesElement.textContent = '00';
  refs.secondsElement.textContent = '00';
}