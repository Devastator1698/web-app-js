// Массив обращений клиентов

const requests = [
  { id: 1, title: "Не работает личный кабинет", value: 1200, status: "new", createdAt: "01.01.2026" },
  { id: 2, title: "Ошибка при оплате заказа",   value: 900,  status: "in_progress", createdAt: "01.01.2026" },
  { id: 3, title: "Не приходит письмо с кодом", value: 500,  status: "new", createdAt: "02.01.2026" },
  { id: 4, title: "Неверные данные в профиле",  value: 300,  status: "done", createdAt: "03.01.2026" },
  { id: 5, title: "Вопрос по тарифам",          value: 700,  status: "done", createdAt: "04.01.2026" },
  { id: 6, title: "Сбой при смене пароля",      value: 1500, status: "new", createdAt: "05.01.2026" },
  { id: 7, title: "Ошибка при авторизации",     value: 1100, status: "in_progress", createdAt: "06.01.2026" },
  { id: 8, title: "Не открывается страница",    value: 800,  status: "new", createdAt: "07.01.2026" }
];

// Проверка
console.log("data.js requests:", requests);