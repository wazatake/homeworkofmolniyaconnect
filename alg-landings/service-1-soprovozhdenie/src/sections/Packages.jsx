import './Packages.css';

const PACKAGES = [
  {
    id: 'base',
    name: 'Базовый',
    price: '150 000',
    unit: 'в месяц',
    desc: 'Для малого бизнеса с регулярными юридическими вопросами',
    features: [
      'Налоговый мониторинг (НДС, прибыль)',
      'Анализ договоров с контрагентами',
      'Консультации до 15 часов в месяц',
      'Ответ на запросы в течение 48 часов',
      'Ежемесячный отчёт о рисках',
      'NDA с реальной ответственностью',
    ],
    cta: 'Выбрать тариф',
    highlight: false,
  },
  {
    id: 'biz',
    name: 'Бизнес',
    price: '250 000',
    unit: 'в месяц',
    desc: 'Для растущих компаний с активной договорной деятельностью',
    features: [
      'Всё из «Базового»',
      'До 25 часов консультаций в месяц',
      'Сопровождение налоговых проверок',
      'Представительство в ФНС',
      'Ответ на запросы в течение 24 часов',
      'Разработка договорных шаблонов',
      'Защита при претензиях контрагентов',
    ],
    cta: 'Выбрать тариф',
    highlight: true,
  },
  {
    id: 'partner',
    name: 'Партнёрский',
    price: 'от 450 000',
    unit: 'в месяц',
    desc: 'Для компаний с высокими рисками и судебными делами',
    features: [
      'Всё из «Бизнес»',
      'Неограниченные консультации',
      'Судебное представительство',
      'Взыскание дебиторской задолженности',
      'Ответ в течение 4 часов (срочное)',
      'Трудовые проверки и споры',
      'Персональный ведущий юрист',
    ],
    cta: 'Обсудить условия',
    highlight: false,
  },
];

export default function Packages({ onBook }) {
  return (
    <section className="packages">
      <div className="packages-inner">
        <div className="section-header">
          <span className="section-num">05</span>
          <h2 className="section-title">Тарифы сопровождения</h2>
        </div>
        <p className="packages-lead">
          Стоимость зависит от объёма задач и уровня рисков. Подберём оптимальный вариант на первой консультации.
        </p>
        <div className="packages-grid">
          {PACKAGES.map((pkg) => (
            <div className={`package-card${pkg.highlight ? ' package-card--highlight' : ''}`} key={pkg.id}>
              {pkg.highlight && <div className="package-badge">Популярный выбор</div>}
              <div className="package-name">{pkg.name}</div>
              <div className="package-price">
                <span className="package-price-val">{pkg.price} ₽</span>
                <span className="package-price-unit">{pkg.unit}</span>
              </div>
              <p className="package-desc">{pkg.desc}</p>
              <ul className="package-features">
                {pkg.features.map((f, i) => (
                  <li key={i}>
                    <span className="package-check">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`package-cta${pkg.highlight ? ' package-cta--highlight' : ''}`}
                onClick={onBook}
              >
                {pkg.cta}
              </button>
            </div>
          ))}
        </div>
        <p className="packages-note">
          Все тарифы включают NDA, еженедельный статус задач и доступ к команде из 3+ специалистов.
          Минимальный срок — 3 месяца.
        </p>
      </div>
    </section>
  );
}
