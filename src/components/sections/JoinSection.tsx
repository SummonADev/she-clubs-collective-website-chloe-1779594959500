import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import styles from './JoinSection.module.css';

type FormState = {
  name: string;
  email: string;
  role: '' | 'founder' | 'career' | 'both';
};

export default function JoinSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', role: '' });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    // Persist to localStorage so the entry survives a refresh (no backend connected).
    try {
      const existing = JSON.parse(localStorage.getItem('she_signups') || '[]');
      existing.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem('she_signups', JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="join">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Join Us</span>
          <h2 className={styles.headline}>Ready to Find <em>Your People?</em></h2>
          <p className={styles.sub}>
            Join She Clubs Collective and step into a community of women who are building,
            growing, and showing up for each other every day.
          </p>
          <ul className={styles.perks}>
            <li><CheckCircle2 size={18} /> First access to all events</li>
            <li><CheckCircle2 size={18} /> Members-only founder gatherings</li>
            <li><CheckCircle2 size={18} /> A real network of women who get it</li>
          </ul>
        </div>

        <div className={styles.formWrap}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.successIcon}>
                <CheckCircle2 size={32} />
              </div>
              <h3>You're in.</h3>
              <p>
                Welcome to the Collective, {form.name.split(' ')[0]}. We'll be in touch with
                what's coming up next.
              </p>
              <button
                type="button"
                className={styles.resetBtn}
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', role: '' });
                }}
              >
                Sign up another woman
              </button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="role">Are you a founder or career professional?</label>
                <select
                  id="role"
                  value={form.role}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setForm({ ...form, role: e.target.value as FormState['role'] })
                  }
                  required
                >
                  <option value="" disabled>Choose one</option>
                  <option value="founder">Founder / Business Owner</option>
                  <option value="career">Career Professional</option>
                  <option value="both">A little bit of both</option>
                </select>
              </div>
              <button type="submit" className={styles.submit}>
                Count Me In <Send size={16} />
              </button>
              <p className={styles.privacy}>
                We respect your inbox. No spam, just sisterhood.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
