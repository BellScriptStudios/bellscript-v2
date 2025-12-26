"use client";

import { useMemo, useState } from "react";
import styles from "./RSVP.module.css";
import { SITE, NAV } from "../site";

type Attending = "yes" | "no" | "";

type RSVPForm = {
    name: string;
    email: string;
    attending: Attending;
    guests: "1" | "2";
    plusOneName: string;
    dietary: string;
    song: string;
    message: string;
};

function isEmailValid(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function RSVPPage() {
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState<RSVPForm>({
        name: "",
        email: "",
        attending: "",
        guests: "1",
        plusOneName: "",
        dietary: "",
        song: "",
        message: "",
    });

    const homeHref = useMemo(() => NAV[0]?.href ?? "/", []);
    const deadline = SITE.rsvpDeadline;

    const isYes = form.attending === "yes";
    const isNo = form.attending === "no";
    const showPlusOne = isYes && form.guests === "2";

    const canSubmit = useMemo(() => {
        if (!form.name.trim()) return false;
        if (!isEmailValid(form.email)) return false;
        if (!form.attending) return false;

        if (isYes && form.guests === "2" && !form.plusOneName.trim()) return false;

        return true;
    }, [form, isYes]);

    function update<K extends keyof RSVPForm>(key: K, value: RSVPForm[K]) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!canSubmit) return;

        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function onToggleAttending(next: "yes" | "no") {
        setForm((prev) => {
        if (next === "no") {
            return {
            ...prev,
            attending: "no",
            guests: "1",
            plusOneName: "",
            dietary: "",
            song: "",
            };
        }

        return { ...prev, attending: "yes" };
        });
    }

    function onChangeGuests(next: "1" | "2") {
        setForm((prev) => ({
        ...prev,
        guests: next,
        plusOneName: next === "1" ? "" : prev.plusOneName,
        }));
    }

    return (
        <>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.kicker}>RSVP</p>
                    <h1 className={styles.title}>Kindly respond</h1>
                    <p className={styles.subtitle}>
                        Please reply by <span className={styles.gold}>{deadline}</span>.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionInner}>
                    {submitted ? (
                        <div className={styles.success}>
                            <p className={styles.successKicker}>Received</p>
                            <h2 className={styles.successTitle}>You’re all set.</h2>
                            <p className={styles.body}>
                                This is a demo RSVP experience — no details were actually sent.
                            </p>

                            <div className={styles.successActions}>
                                <button
                                    type="button"
                                    className={styles.secondaryBtn}
                                    onClick={() => setSubmitted(false)}
                                >
                                    Edit response
                                </button>

                                <a href={homeHref} className={styles.primaryLink}>
                                    Back to home →
                                </a>
                            </div>

                            <p className={styles.smallNote}>
                                Black tie optional. Vegas after dark energy encouraged.
                            </p>
                        </div>
                    ) : (
                    <form className={styles.form} onSubmit={onSubmit}>
                        <div className={styles.formHeader}>
                            <h2 className={styles.h2}>Your details</h2>
                            <p className={styles.note}>
                                A quick response helps us take care of everything.
                            </p>

                            <div className={styles.infoBar}>
                                <div className={styles.infoItem}>
                                    <p className={styles.infoLabel}>RSVP by</p>
                                    <p className={styles.infoValue}>{deadline}</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <p className={styles.infoLabel}>Dress</p>
                                    <p className={styles.infoValue}>Black tie optional</p>
                                </div>
                                <div className={styles.infoItem}>
                                    <p className={styles.infoLabel}>Details</p>
                                    <p className={styles.infoValue}>See Weekend page</p>
                                </div>
                            </div>
                        </div>

                        {/* Name + email */}
                        <div className={styles.grid}>
                            <label className={styles.field}>
                                <span className={styles.label}>Full name</span>
                                <input
                                    className={styles.input}
                                    value={form.name}
                                    onChange={(e) => update("name", e.target.value)}
                                    placeholder="Alex Knight"
                                    required
                                    autoComplete="name"
                                />
                            </label>

                            <label className={styles.field}>
                                <span className={styles.label}>Email</span>
                                <input
                                    className={styles.input}
                                    value={form.email}
                                    onChange={(e) => update("email", e.target.value)}
                                    placeholder="alex@email.com"
                                    type="email"
                                    required
                                    autoComplete="email"
                                />
                            </label>
                        </div>
                        
                        {/* Attending */}
                        <div className={styles.field}>
                            <span className={styles.label}>Will you be attending?</span>
                            <div
                                className={styles.pills}
                                role="radiogroup"
                                aria-label="Attending"
                            >
                                <button
                                    type="button"
                                    className={`${styles.pill} ${
                                    form.attending === "yes" ? styles.pillActive : ""
                                    }`}
                                    onClick={() => onToggleAttending("yes")}
                                    aria-pressed={form.attending === "yes"}
                                >
                                    Yes, can’t wait
                                </button>

                                <button
                                    type="button"
                                    className={`${styles.pill} ${
                                    form.attending === "no" ? styles.pillActive : ""
                                    }`}
                                    onClick={() => onToggleAttending("no")}
                                    aria-pressed={form.attending === "no"}
                                >
                                    Regretfully, no
                                </button>
                            </div>
                        </div>
                        
                        {/* Guests + plus-one */}
                        <div className={styles.grid}>
                            <label className={styles.field}>
                                <span className={styles.label}>Guests</span>
                                <select
                                    className={styles.select}
                                    value={form.guests}
                                    onChange={(e) => onChangeGuests(e.target.value as "1" | "2")}
                                    disabled={!isYes}
                                >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <span className={styles.help}>Includes you.</span>
                            </label>

                            {showPlusOne ? (
                                <label className={styles.field}>
                                    <span className={styles.label}>Plus-one name</span>
                                    <input
                                        className={styles.input}
                                        value={form.plusOneName}
                                        onChange={(e) => update("plusOneName", e.target.value)}
                                        placeholder="Guest name"
                                        required={showPlusOne}
                                        disabled={!isYes}
                                    />
                                    <span className={styles.help}>
                                        If you’re bringing a guest, add their name here.
                                    </span>
                                </label>
                            ) : (
                                <div className={styles.field} aria-hidden="true" />
                            )}
                        </div>

                        {/* Dietary + song */}
                        <div className={styles.grid}>
                            <label className={styles.field}>
                                <span className={styles.label}>Dietary notes (optional)</span>
                                <input
                                    className={styles.input}
                                    value={form.dietary}
                                    onChange={(e) => update("dietary", e.target.value)}
                                    placeholder="Allergies, preferences, etc."
                                    disabled={isNo}
                                />
                            </label>

                            <label className={styles.field}>
                                <span className={styles.label}>Song request (optional)</span>
                                <input
                                    className={styles.input}
                                    value={form.song}
                                    onChange={(e) => update("song", e.target.value)}
                                    placeholder="One song that gets you on the dance floor"
                                    disabled={isNo}
                                />
                                <span className={styles.help}>
                                    One request. No guarantees. But we’ll try.
                                </span>
                            </label>
                        </div>

                        {/* Message */}
                        <label className={styles.field}>
                            <span className={styles.label}>Message to the couple (optional)</span>
                            <textarea
                                className={styles.textarea}
                                value={form.message}
                                onChange={(e) => update("message", e.target.value)}
                                placeholder="A note for Alex & Lauren…"
                                rows={4}
                            />
                        </label>

                        {/* Actions */}
                        <div className={styles.actions}>
                            <button
                                type="submit"
                                className={styles.primaryBtn}
                                disabled={!canSubmit}
                            >
                                Submit RSVP
                            </button>

                            <p className={styles.disclaimer}>
                                Demo form — no data is stored or sent.
                            </p>
                        </div>
                    </form>
                    )}
                </div>
            </section>
        </>
    );
}