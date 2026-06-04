import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Hero.css';

const STATS = [
  { value: '94%', label: 'дел завершены в пользу клиента' },
  { value: '340+ млн ₽', label: 'взыскано и защищено в судах за 2024 год' },
  { value: '48 ч', label: 'подключаемся к срочным делам' },
];

export default function Hero({ onBook }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Судебное представительство бизнеса</p>
          <h1 className="hero-title">
            Защищаем интересы бизнеса<br />
            <em>в судах всех инстанций</em>
          </h1>
          <p className="hero-sub">
            Арбитраж, налоговые споры с ФНС, взыскание долгов, защита от контрагентов.
            Берём дела с готовностью довести до исполнительного листа.
          </p>
          <div className="hero-cta-group">
            <button className="hero-cta" onClick={onBook}>
              Обсудить дело
            </button>
            <span className="hero-cta-note">Оценка перспектив — бесплатно</span>
          </div>
        </div>
        <div className="hero-photo">
          <PhotoPlaceholder label="Фото: зал суда / команда юристов" style={{ minHeight: '380px' }} />
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
