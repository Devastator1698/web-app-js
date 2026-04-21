// ЛР3 практика
// Блок A

// A1
function calcTotal(a, b) {
  const result = a + b;
  console.log("A1 calcTotal:", a, "+", b, "=", result);
  return result;
}

// Вывод
calcTotal(10, 5);

// A2
function formatRecord(id, title, status) {
  const text = "#" + id + " " + title + " [" + status + "]";
  console.log("A2 formatRecord:", text);
  return text;
}

// Вывод
formatRecord(3, "Тестовая запись", "new");

// Блок B

// B1
const values = [1200, 500, 800, 1500];

// Счетчик
let sumValues = 0;
for (let i = 0; i < values.length; i++) {
  sumValues = sumValues + values[i];
}
// Вывод
console.log("B1 сумма массива values:", sumValues); // 4000

// B2
// Фильтр
const filteredValues = values.filter(function (value) {
  return value >= 800;
});

//Вывод
console.log("B2 значения >= 800:", filteredValues);

// Блок C

// C1
const record = {
  id: 1,
  title: "Пример записи",
  value: 1000,
  status: "new",
  createdAt: "2026-04-01"
};

console.log("C1 record до изменения:", record);

// меняем статус
record.status = "done";

console.log("C1 record после изменения:", record);

// C2
function isNew(rec) {
  const result = rec.status === "new";
  console.log("C2 isNew для id =", rec.id, "=>", result);
  return result;
}

// демонстрация на двух объектах
const rec1 = { id: 2, title: "Запись 2", value: 500, status: "new", createdAt: "2026-04-02" };
const rec2 = { id: 3, title: "Запись 3", value: 700, status: "done", createdAt: "2026-04-03" };

isNew(rec1);
isNew(rec2);

// Блок D

// D1
const testItems = [
  { id: 1, title: "Запись 1", value: 1200, status: "new", createdAt: "2026-02-10" },
  { id: 2, title: "Запись 2", value: 800, status: "done", createdAt: "2026-02-11" },
  { id: 3, title: "Запись 3", value: 1500, status: "new", createdAt: "2026-02-12" },
  { id: 4, title: "Запись 4", value: 400, status: "done", createdAt: "2026-02-13" }
];

function findByIdForPractice(items, id) {
  const found = items.find(function (item) {
    return item.id === id;
  }) || null;

  console.log("D1 findByIdForPractice id =", id, "=>", found);
  return found;
}

// демонстрация
findByIdForPractice(testItems, 3);
findByIdForPractice(testItems, 999); // null

// D2
function buildStatsForPractice(items) {
  const stats = items.reduce(function (acc, item) {
    acc.totalCount = acc.totalCount + 1;
    acc.sumValue = acc.sumValue + item.value;
    return acc;
  }, { totalCount: 0, sumValue: 0 });

  console.log("D2 buildStatsForPractice:", stats);
  return stats;
}

// демонстрация
buildStatsForPractice(testItems);

// Блок E
const logicMessage = helloFromLogic();
console.log("E2:", logicMessage);

// Блок F

// F1
const messageEl = document.getElementById("message");
messageEl.textContent = "DOM работает";
console.log("F1: messageEl.textContent =", messageEl.textContent);

// F2
const demoListEl = document.getElementById("demoList");

const p1 = document.createElement("p");
p1.textContent = "Первый параграф";

const p2 = document.createElement("p");
p2.textContent = "Второй параграф";

const p3 = document.createElement("p");
p3.textContent = "Третий параграф";

demoListEl.appendChild(p1);
demoListEl.appendChild(p2);
demoListEl.appendChild(p3);

console.log("F2: в demoList добавлено 3 параграфа");