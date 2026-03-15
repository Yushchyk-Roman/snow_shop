export const GetProducts = async () => {
  const res = await fetch("http://localhost:4200/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw Error("Не вдалося отримати дані продуктів");
  }

  return res.json();
};
