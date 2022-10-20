import { db } from "../utils/db.server";
import { initData } from "../baseData";

async function seed() {
  await Promise.all(
    initData.map((d) =>
      db.yak.create({
        data: {
          name: d.name,
          age: d.age,
          sex: d.sex,
        },
      })
    )
  );
}

seed();
