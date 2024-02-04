"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";
import styles from "../index.module.css";

export function CreateTag() {
  const router = useRouter();
  const [name, setName] = useState("");

  const createTag = api.tag.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setName("");
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        createTag.mutate({ name });
      }}
      className={styles.form}
    >
      <input
        type="text"
        placeholder="Title"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
      />
      <button
        type="submit"
        className={styles.submitButton}
        disabled={createTag.isLoading}
      >
        {createTag.isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
