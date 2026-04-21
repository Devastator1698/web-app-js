// Массив обращений клиентов

const requests = [
  { id: 1, title: "Не работает личный кабинет", value: 1200, status: "new", createdAt: "2026-01-01" },
  { id: 2, title: "Ошибка при оплате заказа",   value: 900,  status: "in_progress", createdAt: "2026-02-01" },
  { id: 3, title: "Не приходит письмо с кодом", value: 500,  status: "new", createdAt: "2026-03-01" },
  { id: 4, title: "Неверные данные в профиле",  value: 300,  status: "done", createdAt: "2026-04-01" },
  { id: 5, title: "Вопрос по тарифам",          value: 700,  status: "done", createdAt: "2026-05-01" },
  { id: 6, title: "Сбой при смене пароля",      value: 1500, status: "new", createdAt: "2026-06-01" },
  { id: 7, title: "Ошибка при авторизации",     value: 1100, status: "in_progress", createdAt: "2026-07-01" },
  { id: 8, title: "Не открывается страница",    value: 800,  status: "new", createdAt: "2026-08-01" }
];
// Проверка
console.log("data.js requests:", requests);