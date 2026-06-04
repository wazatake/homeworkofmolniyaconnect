import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Hero.css';

const STATS = [
  { value: '500+ млн ₽', label: 'сэкономили клиентам на налогах, штрафах и спорах' },
  { value: '9 из 10', label: 'кейсов решаем в пользу бизнеса' },
  { value: '100+', label: 'компаний на постоянном юридическом сопровождении' },
];

export default function Hero({ onBook }) {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Юридическое сопровождение бизнеса</p>
          <h1 className="hero-title">
            Комплексная юридическая<br />
            <em>защита бизнеса</em>
          </h1>
          <p className="hero-sub">
            Постоянная юридическая поддержка вместо штатного юриста.
            Налоги, договоры, проверки, споры — всё под контролем.
          </p>
          <button className="hero-cta" onClick={onBook}>
            Обсудить ситуацию
          </button>
        </div>
        <div className="hero-photo">
          <PhotoPlaceholder label="Фото команды / офиса ALG" style={{ minHeight: '380px' }} />
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
