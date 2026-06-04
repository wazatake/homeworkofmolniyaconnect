import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Hero.css';

const STATS = [
  { value: '1200+', label: 'договоров проанализировано и согласовано' },
  { value: '48 ч', label: 'средний срок анализа типового договора' },
  { value: '0', label: 'судебных споров у клиентов с нашими договорами' },
];

export default function Hero({ onBook }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Договорная работа для бизнеса</p>
          <h1 className="hero-title">
            Находим токсичные условия<br />
            <em>до того, как вы подписали</em>
          </h1>
          <p className="hero-sub">
            Анализируем, разрабатываем и согласовываем договоры с контрагентами.
            Выявляем условия, которые при конфликте работают против вас — и исправляем их.
          </p>
          <div className="hero-cta-group">
            <button className="hero-cta" onClick={onBook}>
              Отправить договор на анализ
            </button>
            <span className="hero-cta-note">Первая консультация — бесплатно</span>
          </div>
        </div>
        <div className="hero-photo">
          <PhotoPlaceholder label="Фото: договор / юрист за работой" style={{ minHeight: '380px' }} />
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
