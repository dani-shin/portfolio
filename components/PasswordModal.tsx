"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./PasswordModal.module.css";

const PASSWORD_HASH = "57d291f8fef8088e2462b50ace3c74d89044ad1754712b0c04c262667e3bb564";

async function sha256(text: string) {
    const buf = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(text)
    );
    return Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

type Props = {
    onSuccess: () => void;
    onClose: () => void;
};

export default function PasswordModal({ onSuccess, onClose }: Props) {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const [visible, setVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);

        return () => {
            document.body.style.overflow = prevOverflow;
            window.removeEventListener("keydown", onKey);
        };
    }, [onClose]);

    const submit = async () => {
        if ((await sha256(value)) === PASSWORD_HASH) {
            sessionStorage.setItem("project3-unlocked", "1");
            onSuccess();
        } else {
            setError(true);
        }
    };

    return (
        <div className={styles.dimmed} onClick={onClose}>
            <div
                className={styles.popup}
                role="dialog"
                aria-modal="true"
                aria-labelledby="pw-title"
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.top}>
                    {/* ic/lock */}
                    <Image
                        className={styles.lock}
                        src="/icons/lock.svg"
                        alt=""
                        width={40}
                        height={40}
                        aria-hidden="true"
                    />

                    <div className={styles.titleArea}>
                        <h2 id="pw-title" className={`type-title-2 ${styles.title}`}>
                            This project is protected.
            </h2>
                        <p className={`type-body-2 ${styles.desc}`}>
                            Please enter the password to view its contents.
            </p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.row}>
                            <div className={`${styles.field} ${error ? styles.fieldError : ""}`}>
                                <input
                                    ref={inputRef}
                                    type={visible ? "text" : "password"}
                                    placeholder="Enter password"
                                    value={value}
                                    aria-invalid={error}
                                    className={`type-body-2 ${styles.input}`}
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                        setError(false);
                                    }}
                                    onKeyDown={(e) => e.key === "Enter" && submit()}
                                />
                                <button
                                    type="button"
                                    className={styles.toggle}
                                    onClick={() => setVisible((v) => !v)}
                                    onMouseDown={(e) => e.preventDefault()}
                                    aria-label={visible ? "Hide password" : "Show password"}
                                    aria-pressed={visible}
                                >
                                    <Image
                                        src={visible ? "/icons/visibility_off.svg" : "/icons/visibility_on.svg"}
                                        alt=""
                                        width={24}
                                        height={24}
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                        <button
                            type="button"
                            className={`type-body-2 ${styles.submit}`}
                            onClick={submit}
                        >
                            Submit
                            </button>
                    </div>

                    {error && (
                        <p className={`type-body-2 ${styles.error}`} role="alert">
                            Incorrect password. Please try again.
                        </p>
                    )}

                    <p className={`type-body-2 ${styles.contact}`}>
                        If you don’t have access, feel free to{" "}
                        <a href="mailto:deshin.hi5@gmail.com" className={styles.contactLink}>contact me</a>{" "}
                        to request it.
                        </p>
                </div>

                {/* btn_area / ic/close */}
                <button
                    type="button"
                    className={styles.close}
                    onClick={onClose}
                    aria-label="Close"
                >
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M5 5L19 19M19 5L5 19" stroke="#111" strokeWidth="2" />
                    </svg>
                </button>
            </div>
        </div>
    );
}