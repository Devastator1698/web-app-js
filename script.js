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

const items = [
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
// const btnAll = document.getElementById("btnAll");
// const btnNew = document.getElementById("btnNew");
// const btnStats = document.getElementById("btnStats");
// const output = document.getElementById("output");

// // Функция для форматирования текста
// function formatRequest(request) {
//   let text = "";
//   text += "ID: " + request.id + "\n";
//   text += "Заголовок: " + request.title + "\n";
//   text += "Статус: " + request.status + "\n";
//   text += "Value: " + request.value + "\n";
//   text += "Создано: " + request.createdAt + "\n";
//   return text;
// }

// // Кнопка "Показать все обращения"
// btnAll.addEventListener("click", function () {
//   let text = "";
//   text += appConfig.appTitle + "\n";
//   text += "Всего обращений: " + requests.length + "\n\n";

//   for (let i = 0; i < requests.length; i++) {
//     const r = requests[i];
//     text += formatRequest(r) + "\n";
//   }

//   output.textContent = text;
//   actionCount = actionCount + 1;
//   console.log("Действие: показать все, actionCount =", actionCount);
// });

// // Кнопка "Показать только new"
// btnNew.addEventListener("click", function () {
//   let text = "";
//   let newCount = 0;

//   for (let i = 0; i < requests.length; i++) {
//     const r = requests[i];
//     if (r.status === "new") {
//       newCount = newCount + 1;
//       text += formatRequest(r) + "\n";
//     }
//   }

//   if (newCount === 0) {
//     output.textContent = "Нет обращений со статусом NEW.";
//   } else {
//     output.textContent = "Обращения со статусом NEW: " + newCount + "\n\n" + text;
//   }

//   actionCount = actionCount + 1;
//   console.log("Действие: показать NEW, actionCount =", actionCount);
// });

// // Кнопка "Показать статистику"
// btnStats.addEventListener("click", function () {
//   // порог фильтрации как строка (по заданию 2.3)
//   const inputMinValue = String(appConfig.minValueForFilter);
//   const minValue = Number(inputMinValue);

//   if (Number.isNaN(minValue)) {
//     output.textContent = "Ошибка: порог фильтрации задан некорректно.";
//     return;
//   }

//   let sum = 0;
//   let maxValue = 0;
//   let newCount = 0;
//   let filteredText = "";
//   let filteredCount = 0;

//   for (let i = 0; i < requests.length; i++) {
//     const r = requests[i];

//     // сумма
//     sum = sum + r.value;

//     // максимум
//     if (r.value > maxValue) {
//       maxValue = r.value;
//     }

//     // количество NEW
//     if (r.status === "new") {
//       newCount = newCount + 1;
//     }

//     // фильтр по minValue
//     if (r.value >= minValue) {
//       filteredCount = filteredCount + 1;
//       filteredText += formatRequest(r) + "\n";
//     }
//   }

//   let text = "";
//   text += appConfig.appTitle + "\n\n";
//   text += "Всего обращений: " + requests.length + "\n";
//   text += "Сумма value: " + sum + "\n";
//   text += "Максимальное value: " + maxValue + "\n";
//   text += "Количество status=\"new\": " + newCount + "\n";
//   text += "Порог фильтрации (minValue): " + minValue + "\n";
//   text += "Количество записей с value >= minValue: " + filteredCount + "\n\n";

//   if (filteredCount > 0) {
//     text += "Записи, прошедшие фильтр:\n\n";
//     text += filteredText;
//   }

//   output.textContent = text;
//   actionCount = actionCount + 1;
//   console.log("Действие: показать статистику, actionCount =", actionCount);
// });


// ЛР3
// Ссылки на DOM
const listEl = document.getElementById("list");
const messageEl = document.getElementById("message");
const formEl = document.getElementById("recordForm");
const formErrorsEl = document.getElementById("formErrors");

const titleInput = document.getElementById("titleInput");
const valueInput = document.getElementById("valueInput");
const createdAtInput = document.getElementById("createdAtInput");
const statusInput = document.getElementById("statusInput");

const btnAll = document.getElementById("btnAll");
const btnNew = document.getElementById("btnNew");
const btnSort = document.getElementById("btnSort");
const btnStats = document.getElementById("btnStats");
const btnLoad = document.getElementById("btnLoad");

// Функция отрисовки списка обращений
function renderList(itemsToRender) {
  listEl.textContent = "";

  for (const item of itemsToRender) {
    const card = document.createElement("div");
    card.className = "card";


    const h3 = document.createElement("h3");
    h3.textContent = item.title;

    const info = document.createElement("p");
    info.textContent =
      "ID: " + item.id +
      " | value: " + item.value +
      " | status: " + item.status +
      " | createdAt: " + item.createdAt;

    const btnRemove = document.createElement("button");
    btnRemove.textContent = "Удалить";
    btnRemove.dataset.action = "remove";
    btnRemove.dataset.id = String(item.id);

    card.appendChild(h3);
    card.appendChild(info);
    card.appendChild(btnRemove);

    listEl.appendChild(card);
  }
}
// Удаление заявки
function removeById(id) {
  const index = requests.findIndex(function (item) {
    return item.id === id;
  });

  if (index !== -1) {
    requests.splice(index, 1);
  }
}
// Функционал кнопок
btnAll.addEventListener("click", function () {
  renderList(requests);
  messageEl.textContent = "Показаны все обращения (" + requests.length + ").";
});

btnNew.addEventListener("click", function () {
  const onlyNew = filterByStatus(requests, "new");
  renderList(onlyNew);
  messageEl.textContent = "Показаны обращения со статусом NEW (" + onlyNew.length + ").";
});

btnSort.addEventListener("click", function () {
  const sorted = sortByValueDesc(requests);
  renderList(sorted);
  messageEl.textContent = "Список отсортирован по value по убыванию.";
});

btnStats.addEventListener("click", function () {
  const stats = buildStats(requests);
  messageEl.textContent =
    "Всего записей: " + stats.totalCount + "\n" +
    "Сумма value: " + stats.sumValue + "\n" +
    "Максимум value: " + stats.maxValue + "\n" +
    "Количество status=\"new\": " + stats.newCount;
});

// Кнопка загрузки данных из внешнего сервиса
btnLoad.addEventListener("click", async function () {
  messageEl.textContent = "Загрузка данных...";
  const url = "https://jsonplaceholder.typicode.com/todos?_limit=3";

  const result = await safeFetchJson(url);

  if (!result.ok) {
    messageEl.textContent = "Ошибка загрузки: " + result.error;
    console.log("safeFetchJson details:", result.details);
    return;
  }

  const todos = result.data; // массив

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    const newId = getNextId(requests);

    const newRecord = {
      id: newId,
      title: normalizeSpaces(String(todo.title)),
      value: todo.id, // просто число из внешних данных
      status: todo.completed ? "done" : "new",
      createdAt: "2026-04-01"
    };

    requests.push(newRecord);
  }

  renderList(requests);
  messageEl.textContent = "Данные из внешнего сервиса загружены и добавлены.";
});

// Обработчик для кнопок удаления
listEl.addEventListener("click", function(event) {
  if (event.target.dataset.action === "remove") {
    const id = Number(event.target.dataset.id);
    removeById(id);
    renderList(requests);
    messageEl.textContent = "Обращение удалено.";
  }
});
// Вспомогательная функция для вывода ошибок формы
function showFormErrors(errors) {
  if (errors.length === 0) {
    formErrorsEl.textContent = "";
    return;
  }
  formErrorsEl.textContent = errors.join("\n");
}

// Обработчик отправки формы
formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const raw = {
    title: titleInput.value,
    value: valueInput.value,
    createdAt: createdAtInput.value,
    status: statusInput.value
  };

  const record = buildRecordFromForm(raw);
  const errors = collectErrors(record);

  if (errors.length > 0) {
    showFormErrors(errors);
    messageEl.textContent = "Исправьте ошибки формы.";
    return;
  }

  showFormErrors([]);
  const newId = getNextId(requests);

  const newRecord = {
    id: newId,
    title: record.title,
    value: record.value,
    status: record.status,
    createdAt: record.createdAt
  };

  requests.push(newRecord);
  renderList(requests);

  formEl.reset();
  messageEl.textContent = "Обращение добавлено (id=" + newId + ").";
});

// Первичная отрисовка
renderList(requests);
messageEl.textContent = "Добро пожаловать! Показан список обращений.";