import { db } from "../utils/db.server";
import { initData } from "../baseData";

async function seed() {
  await db.lamb.deleteMany({});
  await db.order.deleteMany({});
  await Promise.all(
    initData.map((d) =>
      db.lamb.create({
        data: {
          name: d.name,
          age: d.age,
          sex: d.sex,
        },
      })
    )
  );
}

try {
  seed();
} catch (e) {
  console.error(e);
  process.exit(1);
}
