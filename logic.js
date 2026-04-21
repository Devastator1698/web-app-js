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

// Проверка ввода
function isValidDateYMD(s) {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  return re.test(s);
}

function isValidTitle(s) {
  const reForbidden = /[<>;{}]/;
  return !reForbidden.test(s);
}

function normalizeSpaces(s) {
  return s.replace(/\s+/g, " ").trim();
}

// Валидация полей
function validateRequired(value, fieldName) {
  const trimmed = value.trim();
  if (trimmed === "") {
    return 'Поле "' + fieldName + '" обязательно';
  }
  return null;
}

function validateNumberRange(n, min, max, fieldName) {
  if (Number.isNaN(n)) {
    return 'Поле "' + fieldName + '" должно быть числом';
  }
  if (n < min || n > max) {
    return 'Поле "' + fieldName + '" должно быть в диапазоне ' + min + "–" + max;
  }
  return null;
}

// Построение записи из формы
function buildRecordFromForm(raw) {
  const normalizedTitle = normalizeSpaces(raw.title);
  const numericValue = Number(raw.value);

  return {
    title: normalizedTitle,
    value: numericValue,
    status: raw.status,
    createdAt: raw.createdAt
  };
}

// Сбор ошибок для записи
function collectErrors(record) {
  const errors = [];

  const errRequiredTitle = validateRequired(record.title, "title");
  if (errRequiredTitle) {
    errors.push(errRequiredTitle);
  } else if (!isValidTitle(record.title)) {
    errors.push('Поле "title" содержит запрещённые символы');
  }

  const errValueRange = validateNumberRange(record.value, 0, 1000000, "value");
  if (errValueRange) {
    errors.push(errValueRange);
  }

  if (!isValidDateYMD(record.createdAt)) {
    errors.push('Поле "createdAt" должно быть в формате YYYY-MM-DD');
  }

  return errors;
}

// Генерация нового id
function getNextId(list) {
  if (list.length === 0) {
    return 1;
  }
  let maxId = list[0].id;
  for (let i = 1; i < list.length; i++) {
    if (list[i].id > maxId) {
      maxId = list[i].id;
    }
  }
  return maxId + 1;
}