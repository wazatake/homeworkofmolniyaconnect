import './Packages.css';

const PACKAGES = [
  {
    id: 'express',
    name: 'Экспресс',
    price: '90 000',
    unit: 'разово',
    duration: '3 рабочих дня',
    desc: 'Для малого бизнеса с оборотом до 100 млн ₽ и несложной структурой',
    features: [
      'Проверка НДС и налога на прибыль',
      'Анализ топ-10 контрагентов',
      'Проверка трудовых выплат',
      'Письменный отчёт с суммами рисков',
      'Онлайн-разбор (1 час)',
    ],
    cta: 'Выбрать',
    highlight: false,
  },
  {
    id: 'standard',
    name: 'Стандарт',
    price: '180 000',
    unit: 'разово',
    duration: '5 рабочих дней',
    desc: 'Для компаний с оборотом 100–500 млн ₽ или сложной структурой контрагентов',
    features: [
      'Все 6 направлений аудита',
      'Анализ топ-30 контрагентов',
      'Проверка признаков дробления',
      'Расчёт рисков по каждому направлению',
      'Отчёт + план устранения',
      'Онлайн-разбор (2 часа)',
      'Сопровождение 30 дней после аудита',
    ],
    cta: 'Выбрать',
    highlight: true,
  },
  {
    id: 'full',
    name: 'Расширенный',
    price: 'от 320 000',
    unit: 'разово',
    duration: '7–14 рабочих дней',
    desc: 'Для холдингов, M&A due diligence или подготовки к выездной проверке',
    features: [
      'Полный аудит всей группы компаний',
      'Все контрагенты за 3 года',
      'Моделирование позиции ФНС',
      'Подготовка возражений на претензии',
      'Юридическое заключение для инвесторов',
      'Сопровождение 90 дней после аудита',
      'Персональный налоговый юрист',
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
          <h2 className="section-title">Стоимость аудита</h2>
        </div>
        <p className="packages-lead">
          Стоимость зависит от оборота, структуры компании и количества контрагентов.
          Выявленные риски окупают аудит в десятки раз.
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
              <div className="package-duration">
                <span className="package-duration-label">Срок:</span> {pkg.duration}
              </div>
              <p className="package-desc">{pkg.desc}</p>
              <ul className="package-features">
                {pkg.features.map((f, i) => (
                  <li key={i}><span className="package-check">—</span>{f}</li>
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
          Все тарифы включают NDA до старта работ. Стоимость не меняется в процессе — фиксируем на старте.
        </p>
      </div>
    </section>
  );
}
