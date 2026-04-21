function helloFromLogic() {
  return "logic works";
}

// Фильтрация по статусу
function filterByStatus(list, status) {
  return list.filter(function (item) {
    return item.status === status;
  });
}

// Поиск по id
function findById(list, id) {
  return list.find(function (item) {
    return item.id === id;
  }) || null;
}

// Сортировка по value
function sortByValueDesc(list) {
  const copy = list.slice();
  copy.sort(function (a, b) {
    return b.value - a.value;
  });
  return copy;
}

// Агрегация статистики
function buildStats(list) {
  return list.reduce(function (acc, item) {
    acc.totalCount = acc.totalCount + 1;
    acc.sumValue = acc.sumValue + item.value;

    if (item.value > acc.maxValue) {
      acc.maxValue = item.value;
    }

    if (item.status === "new") {
      acc.newCount = acc.newCount + 1;
    }

    return acc;
  }, { totalCount: 0, sumValue: 0, maxValue: 0, newCount: 0 });
}

// Проверка
console.log("logic.js filterByStatus(new):", filterByStatus(requests, "new"));
console.log("logic.js sortByValueDesc:", sortByValueDesc(requests));
console.log("logic.js buildStats:", buildStats(requests));