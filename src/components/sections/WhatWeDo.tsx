import styles from './WhatWeDo.module.css';

type Pillar = {
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    title: 'Move Together',
    body: 'Fitness and wellness experiences that energize and connect.',
  },
  {
    title: 'Build Together',
    body: 'Honest conversations on entrepreneurship and career growth.',
  },
  {
    title: 'Rise Together',
    body: 'A sisterhood that celebrates and challenges you.',
  },
];

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>— The Three Ways</span>
          <h2 className={styles.headline}>How We Show Up <em>For You</em></h2>
        </div>
        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <article key={p.title} className={styles.card}>
              <span className={styles.number}>0{i + 1}</span>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.text}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
