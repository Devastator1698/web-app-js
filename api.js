async function safeFetchJson(url) {
  let resp;
  try {
    resp = await fetch(url);
  } catch (err) {
    return { ok: false, error: "Сетевая ошибка", details: String(err) };
  }

  if (!resp.ok) {
    return { ok: false, error: "HTTP ошибка: " + resp.status, details: resp.statusText };
  }

  let data;
  try {
    data = await resp.json();
  } catch (err) {
    return { ok: false, error: "Ошибка JSON", details: String(err) };
  }

  return { ok: true, data: data };
}