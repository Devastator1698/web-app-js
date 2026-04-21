//2.1. Задание к теме 1.3. Переменные и константы: let, const
const appConfig = {
  appTitle: "Учет обращений клиентов",
  defaultStatus: "new",
  minValueForFilter: 500,
};

let actionCount = 0;
actionCount++;
actionCount++;
actionCount++;
console.log("Количество выполненных действий:", actionCount);

appConfig.defaultStatus = "in_progress";
appConfig.minValueForFilter = 1000;
console.log("Текущая конфигурация приложения:", appConfig);

//2.2. Задание к теме 1.4. Типы данных: примитивы, объекты

const requests = [
  {
    id: 1,
    title: 'Не работает личный кабинет',
    value: 5,
    status: 'closed',
    createdAt: '2026-03-01'
  },
  {
    id: 2,
    title: 'Ошибка при оплате заказа',
    value: 9,
    status: 'closed',
    createdAt: '2026-03-02'
  },
  {
    id: 3,
    title: 'Не приходит письмо с подтверждением',
    value: 3,
    status: 'closed',
    createdAt: '2026-03-03'
  },
  {
    id: 4,
    title: 'Неверные данные в профиле',
    value: 2,
    status: 'in_progress',
    createdAt: '2026-03-04'
  },
  {
    id: 5,
    title: 'Вопрос по тарифам',
    value: 1,
    status: 'new',
    createdAt: '2026-03-05'
  },
  {
    id: 6,
    title: 'Сбой при смене пароля',
    value: 7,
    status: 'new',
    createdAt: '2026-03-06'
  }
];

console.log("Массив обращений клиентов:", requests);

//2.3. Задание к теме 1.5. Приведение типов и ввод данных

const inputMinValue = '800';
const minValue = Number(inputMinValue);

if (Number.isNaN(minValue)) {
  console.log("Ошибка ввода");
} else {
  console.log(minValue);
}

//2.4. Задание к теме 1.6. Операторы: арифметика, сравнение, логика

const userAge = 19;
const isBlocked = false;

const hasAccess = userAge >= 18 && userAge < 65 && !isBlocked;

console.log(hasAccess);

//2.5. Задание к теме 1.7. Условия: ветвление логики (if/else, switch)

let statusDescription;

switch (requests[0].status) {
  case "new":
    statusDescription = "Новая запись";
    break;
  case "done":
    statusDescription = "Завершено";
    break;
  default:
    statusDescription = "Неизвестный статус";
}

console.log(statusDescription);

let valueCategory;

if (requests[0].value >= 1000) {
  valueCategory = "Высокое значение";
} else if (requests[0].value >= 700) {
  valueCategory = "Среднее значение";
} else {
  valueCategory = "Низкое значение";
}

console.log(valueCategory);

// 2.6. Задание к теме 1.8. Циклы: for, while

let newCount = 0;

for (let i = 0; i < requests.length; i++) {
  const item = requests[i];

  if (item.status === "new") {
    newCount++;
  }
}

console.log(newCount);

// Элементы страницы
const btnAll = document.getElementById("btnAll");
const btnNew = document.getElementById("btnNew");
const btnStats = document.getElementById("btnStats");
const output = document.getElementById("output");

// Функция для форматирования текста
function formatRequest(request) {
  let text = "";
  text += "ID: " + request.id + "\n";
  text += "Заголовок: " + request.title + "\n";
  text += "Статус: " + request.status + "\n";
  text += "Value: " + request.value + "\n";
  text += "Создано: " + request.createdAt + "\n";
  return text;
}

// Кнопка "Показать все обращения"
btnAll.addEventListener("click", function () {
  let text = "";
  text += appConfig.appTitle + "\n";
  text += "Всего обращений: " + requests.length + "\n\n";

  for (let i = 0; i < requests.length; i++) {
    const r = requests[i];
    text += formatRequest(r) + "\n";
  }

  output.textContent = text;
  actionCount = actionCount + 1;
  console.log("Действие: показать все, actionCount =", actionCount);
});

// Кнопка "Показать только new"
btnNew.addEventListener("click", function () {
  let text = "";
  let newCount = 0;

  for (let i = 0; i < requests.length; i++) {
    const r = requests[i];
    if (r.status === "new") {
      newCount = newCount + 1;
      text += formatRequest(r) + "\n";
    }
  }

  if (newCount === 0) {
    output.textContent = "Нет обращений со статусом NEW.";
  } else {
    output.textContent = "Обращения со статусом NEW: " + newCount + "\n\n" + text;
  }

  actionCount = actionCount + 1;
  console.log("Действие: показать NEW, actionCount =", actionCount);
});

// Кнопка "Показать статистику"
btnStats.addEventListener("click", function () {
  // порог фильтрации как строка (по заданию 2.3)
  const inputMinValue = String(appConfig.minValueForFilter);
  const minValue = Number(inputMinValue);

  if (Number.isNaN(minValue)) {
    output.textContent = "Ошибка: порог фильтрации задан некорректно.";
    return;
  }

  let sum = 0;
  let maxValue = 0;
  let newCount = 0;
  let filteredText = "";
  let filteredCount = 0;

  for (let i = 0; i < requests.length; i++) {
    const r = requests[i];

    // сумма
    sum = sum + r.value;

    // максимум
    if (r.value > maxValue) {
      maxValue = r.value;
    }

    // количество NEW
    if (r.status === "new") {
      newCount = newCount + 1;
    }

    // фильтр по minValue
    if (r.value >= minValue) {
      filteredCount = filteredCount + 1;
      filteredText += formatRequest(r) + "\n";
    }
  }

  let text = "";
  text += appConfig.appTitle + "\n\n";
  text += "Всего обращений: " + requests.length + "\n";
  text += "Сумма value: " + sum + "\n";
  text += "Максимальное value: " + maxValue + "\n";
  text += "Количество status=\"new\": " + newCount + "\n";
  text += "Порог фильтрации (minValue): " + minValue + "\n";
  text += "Количество записей с value >= minValue: " + filteredCount + "\n\n";

  if (filteredCount > 0) {
    text += "Записи, прошедшие фильтр:\n\n";
    text += filteredText;
  }

  output.textContent = text;
  actionCount = actionCount + 1;
  console.log("Действие: показать статистику, actionCount =", actionCount);
});