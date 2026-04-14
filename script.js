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