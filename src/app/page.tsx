import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import styles from "./index.module.css";
import TestLink from "~/app/_components/testLink";

export default async function Home() {
  noStore();
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Where shall we <span className={styles.pinkSpan}>eat</span>?
        </h1>
        <div className={styles.cardRow}>
          <Link
            className={styles.card}
            href="https://create.t3.gg/en/usage/first-steps"
            target="_blank"
          >
            <h3 className={styles.cardTitle}>First Steps →</h3>
            <div className={styles.cardText}>
              Just the basics - Everything you need to know to set up your
              database and authentication.
            </div>
          </Link>
          <Link
            className={styles.card}
            href="https://create.t3.gg/en/introduction"
            target="_blank"
          >
            <h3 className={styles.cardTitle}>Documentation →</h3>
            <div className={styles.cardText}>
              Learn more about Create T3 App, the libraries it uses, and how to
              deploy it.
            </div>
          </Link>
        </div>
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

async function CrudShowcase() {
  const latestTag = await api.tag.getLatest.query();

  return (
    <div className={styles.showcaseContainer}>
      {latestTag ? (
        <p className={styles.showcaseText}>
          Your most recent tag: {latestTag.name}
        </p>
      ) : (
        <p className={styles.showcaseText}>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
