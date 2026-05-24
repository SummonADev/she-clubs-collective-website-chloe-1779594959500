import { Dumbbell, MessageCircle, Heart } from 'lucide-react';
import styles from './WhatWeDo.module.css';

type Pillar = {
  icon: React.ReactNode;
  title: string;
  body: string;
  image: string;
};

const pillars: Pillar[] = [
  {
    icon: <Dumbbell size={26} />,
    title: 'Move Together',
    body: 'Fitness and wellness experiences that energize and connect.',
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=700&q=80&auto=format&fit=crop',
  },
  {
    icon: <MessageCircle size={26} />,
    title: 'Build Together',
    body: 'Honest conversations on entrepreneurship and career growth.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=700&q=80&auto=format&fit=crop',
  },
  {
    icon: <Heart size={26} />,
    title: 'Rise Together',
    body: 'A sisterhood that celebrates and challenges you.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80&auto=format&fit=crop',
  },
];

export default function WhatWeDo() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className={styles.eyebrow}>The Three Ways</span>
          <h2 className={styles.headline}>How We Show Up For You</h2>
          <p className={styles.sub}>
            Three pillars. One promise — that you'll never have to do this alone.
          </p>
        </div>
        <div className={styles.grid}>
          {pillars.map((p, i) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.imgWrap}>
                <img src={p.image} alt={p.title} loading="lazy" />
                <span className={styles.number}>0{i + 1}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.iconWrap}>{p.icon}</div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.text}>{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
