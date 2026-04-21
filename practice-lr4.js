// Блок A
// A1
function isValidDateYMD(s) {
  const re = /^\d{4}-\d{2}-\d{2}$/;
  return re.test(s);
}

console.log("A1:", isValidDateYMD("2026-02-18"));
console.log("A1:", isValidDateYMD("18.02.2026"));
console.log("A1:", isValidDateYMD(""));

// A2 Запрещаем символы
function isValidTitle(s) {
  const reForbidden = /[<>;{}]/;
  return !reForbidden.test(s);
}

console.log("A2:", isValidTitle("Заголовок"));
console.log("A2:", isValidTitle("<>"));
console.log("A2:", isValidTitle("А;"));

// Блок B — RegExp: извлечение и нормализация
// B1 Извлечение чисел
function extractIds(text) {
  const matches = text.match(/\d+/g);
  if (!matches) {
    return [];
  }
  return matches.map(function (s) {
    return Number(s);
  });
}

console.log("B1:", extractIds("id=5; id=12; id=30"));

// B2
function normalizeSpaces(s) {
  return s.replace(/\s+/g, " ").trim();
}

console.log("B2:", normalizeSpaces(" A B\t\tC "));

// Блок C
// C1
function validateRequired(value, fieldName) {
  const trimmed = value.trim();
  if (trimmed === "") {
    return "Поле \"" + fieldName + "\" обязательно";
  }
  return null;
}

console.log("C1:", validateRequired("", "title"));
console.log("C1:", validateRequired(" ok ", "title"));

// C2
function validateNumberRange(n, min, max, fieldName) {
  if (Number.isNaN(n)) {
    return "Поле \"" + fieldName + "\" должно быть числом";
  }
  if (n < min || n > max) {
    return "Поле \"" + fieldName + "\" должно быть в диапазоне " + min + "–" + max;
  }
  return null;
}

console.log("C2:", validateNumberRange(10, 0, 100, "value"));
console.log("C2:", validateNumberRange(-1, 0, 100, "value"));
console.log("C2:", validateNumberRange(NaN, 0, 100, "value"));

// Блок D — функции обработки данных: чистые функции
// D1
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

const rawInput = {
  title: "  Не   работает   личный   кабинет ",
  value: "1200",
  status: "new",
  createdAt: "2026-03-01"
};

const recordFromForm = buildRecordFromForm(rawInput);
console.log("D1 recordFromForm:", recordFromForm);
console.log("D1 value is number:", typeof recordFromForm.value);

// D2. collectErrors(record)
function collectErrors(record) {
  const errors = [];

  // title: required + запрещённые символы
  const errRequiredTitle = validateRequired(record.title, "title");
  if (errRequiredTitle) {
    errors.push(errRequiredTitle);
  } else if (!isValidTitle(record.title)) {
    errors.push("Поле \"title\" содержит запрещённые символы");
  }

  // value: число и диапазон 0..1_000_000
  const errValueRange = validateNumberRange(record.value, 0, 1000000, "value");
  if (errValueRange) {
    errors.push(errValueRange);
  }

  // createdAt: формат даты
  if (!isValidDateYMD(record.createdAt)) {
    errors.push("Поле \"createdAt\" должно быть в формате YYYY-MM-DD");
  }

  return errors;
}

const goodRecord = {
  title: "Корректный заголовок",
  value: 500,
  status: "new",
  createdAt: "2026-03-10"
};

const badRecord = {
  title: "Плохой <заголовок>",
  value: NaN,
  status: "new",
  createdAt: "10.03.2026"
};

console.log("D2 goodRecord errors:", collectErrors(goodRecord));
console.log("D2 badRecord errors:", collectErrors(badRecord));

// Блок E
// E1
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

async function demoDelay() {
  console.log("E1: before delay");
  await delay(500);
  console.log("E1: after 500ms");
}

demoDelay();

// E2
async function safeFetchJson(url) {
  let resp;
  try {
    resp = await fetch(url);
  } catch (err) {
    return {
      ok: false,
      error: "Сетевая ошибка",
      details: String(err)
    };
  }

  if (!resp.ok) {
    return {
      ok: false,
      error: "HTTP ошибка: " + resp.status,
      details: resp.statusText
    };
  }

  let data;
  try {
    data = await resp.json();
  } catch (err) {
    return {
      ok: false,
      error: "Ошибка JSON",
      details: String(err)
    };
  }

  return {
    ok: true,
    data: data
  };
}

// демонстрация
async function demoSafeFetch() {
  const result = await safeFetchJson("https://jsonplaceholder.typicode.com/todos/1");
  console.log("E2 demoSafeFetch:", result);
}

demoSafeFetch();

// Блок F
// F1
function tryParseJson(text) {
  try {
    const data = JSON.parse(text);
    return { ok: true, data: data };
  } catch (err) {
    return { ok: false, error: String(err) };
  }
}

console.log("F1 good:", tryParseJson('{"a":1}'));
console.log("F1 bad:", tryParseJson("{a:1}"));

// F2
function normalizeApiValue(x) {
  if (typeof x === "number" && !Number.isNaN(x)) {
    return x;
  }

  if (typeof x === "string") {
    const n = Number(x);
    if (!Number.isNaN(n)) {
      return n;
    }
  }

  return 0;
}

console.log("F2:", normalizeApiValue(10));
console.log("F2:", normalizeApiValue("20"));
console.log("F2:", normalizeApiValue(null));
console.log("F2:", normalizeApiValue("abc"));