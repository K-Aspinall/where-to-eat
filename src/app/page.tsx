import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreateTag } from "~/app/_components/create-tag";
import { api } from "~/trpc/server";
import styles from "./index.module.css";
import TestLink from "~/app/_components/testLink";
import { ResturantCard } from "~/app/_components/resturant-card";
import { type Resturant } from "@prisma/client";

export default async function Home() {
  noStore();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Where shall we <span className={styles.pinkSpan}>eat</span>?
        </h1>
        <RandomResturant />
        <div className={styles.showcaseContainer}>
          <p className={styles.showcaseText}>
            <TestLink />
          </p>
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function RandomResturant() {
  // Current unsafe method returns an any[] not typesafe value or null so needs this nasty checking
  const response = await api.resturant.getRandom.query() as Resturant[];
  const resturant = response.length > 0 ? response[0] : null
  console.log("Resturant response:")
  console.log(resturant)

  return (
    <div className={styles.showcaseContainer}>
      {resturant ? (
        <>
          <h1 className={styles.title}>
            You should eat at:
          </h1>
          <ResturantCard resturant={resturant} />
        </>
      ) : (
        <p className={styles.showcaseText}>You have no resturants yet.</p>
      )}
    </div>
  );

}

async function CrudShowcase() {
  const latestTag = await api.tag.getLatest.query();

  return (
    <div className={styles.showcaseContainer}>
      {latestTag ? (
        <p className={styles.showcaseText}>
          Your most recent tag: {latestTag.name}
        </p>
      ) : (
        <p className={styles.showcaseText}>You have no tags yet.</p>
      )}

      <CreateTag />
    </div>
  );
}
