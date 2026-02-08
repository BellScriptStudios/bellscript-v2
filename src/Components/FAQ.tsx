"use client";

import React, { useId, useMemo, useState } from "react";
import styles from "../app/Styles/FAQ.module.css";

export type FAQItem = {
    question: string;
    answer: React.ReactNode;
}

export type FAQProps = {
    title: string;
    subtitle?: string;
    items: FAQItem[];
    defaultOpenIndex?: number;
    allowMultiple?: boolean;
    className?: string;
}

export default function FAQ({
    title,
    subtitle,
    items,
    defaultOpenIndex,
    allowMultiple = false,
    className,
}:FAQProps) {
    const uid = useId();

    const initialOpen = useMemo(() => {
        if (defaultOpenIndex === undefined || defaultOpenIndex === null) return new Set<number>();
        if (defaultOpenIndex < 0 || defaultOpenIndex >= items.length) return new Set<number>();
        return new Set<number>([defaultOpenIndex]);
    }, [defaultOpenIndex, items.length]);

    const [openSet, setOpenSet] = useState<Set<number>>(initialOpen);

    const isOpen = (i: number) => openSet.has(i);

    const toggle = (i: number) => {
        setOpenSet((prev) => {
        const next = new Set(prev);

        if (allowMultiple) {
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
        }
        if (next.has(i)) return new Set<number>();
        return new Set<number>([i]);
        });
    };

    return (
        <section className={[styles.faq, className].filter(Boolean).join(" ")}>
            <header className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
            </header>

            <div className={styles.list}>
                {items.map((item , i) => {
                    const buttonId = `faq-${uid}-btn-${i}`;
                    const panelId = `faq-${uid}-panel-${i}`;
                    const open = isOpen(i);

                    return (
                        <div key={i} className={styles.item}>
                            <button
                                id={buttonId}
                                type="button"
                                className={styles.accordion}
                                aria-expanded={open}
                                aria-controls={panelId}
                                onClick={() => toggle(i)}
                            >
                                <span className={styles.question}>{item.question}</span>
                                <span className={styles.icon} aria-hidden="true">{open ? "−" : "+"}</span>

                            </button>
                            
                            <div
                                id={panelId}
                                className={styles.panel}
                                role="region"
                                aria-labelledby={buttonId}
                                hidden={!open}
                                data-open={open}
                            >
                                <div className={styles.panelInner}>
                                    <div className={styles.answer}>{item.answer}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
