const nextMap = {
  "index.html": "index2.html",
  "index2.html": "index3.html",
  "index3.html": "index4.html",
  "index4.html": "index.html",
};

setTimeout(() => {
  const params = new URLSearchParams(window.location.search);
  const next = params.get("next") ?? nextMap["index.html"];

  window.location.href = `${next}?next=${nextMap[next]}`;
}, 10_000);
