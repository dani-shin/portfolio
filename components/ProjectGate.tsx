"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PasswordModal from "./PasswordModal";

export default function ProjectGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [status, setStatus] = useState<"checking" | "locked" | "open">("checking");

  useEffect(() => {
    setStatus(
      sessionStorage.getItem("project3-unlocked") === "1" ? "open" : "locked"
    );
  }, []);

  if (status === "checking") return null;
  if (status === "locked")
    return (
      <PasswordModal
        onClose={() => router.push("/")}
        onSuccess={() => setStatus("open")}
      />
    );
  return <>{children}</>;
}