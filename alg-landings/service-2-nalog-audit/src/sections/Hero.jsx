import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Hero.css';

const STATS = [
  { value: '5 дней', label: 'средний срок проведения аудита' },
  { value: '180+ млн ₽', label: 'налоговых рисков выявлено за 2024 год' },
  { value: '0 ₽', label: 'штрафов у клиентов прошедших аудит заранее' },
];

export default function Hero({ onBook }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Налоговый аудит бизнеса</p>
          <h1 className="hero-title">
            Находим налоговые риски<br />
            <em>до того, как их найдёт ФНС</em>
          </h1>
          <p className="hero-sub">
            Экспресс-аудит за 3–5 дней. Получаете отчёт с конкретными суммами рисков —
            не страницы текста, а цифры: сколько можете потерять и как это исправить.
          </p>
          <div className="hero-cta-group">
            <button className="hero-cta" onClick={onBook}>
              Заказать аудит
            </button>
            <span className="hero-cta-note">Первая консультация — бесплатно</span>
          </div>
        </div>
        <div className="hero-photo">
          <PhotoPlaceholder label="Фото: отчёт / рабочий процесс" style={{ minHeight: '380px' }} />
        </div>
      </div>
      <div className="hero-stats">
        <div className="hero-stats-inner">
          {STATS.map((s, i) => (
            <div className="hero-stat" key={i}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
