import './WhatWeDo.css';

const COURTS = [
  {
    num: '01',
    title: 'Арбитражные суды',
    sub: 'Первая инстанция → Апелляция → Кассация → ВС РФ',
    items: [
      'Взыскание долгов и убытков с контрагентов',
      'Оспаривание решений налоговых органов',
      'Корпоративные споры между участниками',
      'Защита прав на интеллектуальную собственность',
      'Оспаривание сделок в банкротстве',
    ],
  },
  {
    num: '02',
    title: 'Суды общей юрисдикции',
    sub: 'Районный → Апелляция → Кассация',
    items: [
      'Трудовые споры с сотрудниками',
      'Взыскание с физических лиц',
      'Споры по договорам с физлицами',
      'Защита деловой репутации',
      'Оспаривание действий чиновников',
    ],
  },
  {
    num: '03',
    title: 'Досудебные и внесудебные процедуры',
    sub: 'До подачи иска',
    items: [
      'Переговоры и медиация',
      'Досудебные претензии и требования',
      'Обжалование в ФНС, УФНС, ФАС',
      'Жалобы в прокуратуру и ГИТ',
      'Нотариальное обеспечение доказательств',
    ],
  },
  {
    num: '04',
    title: 'Исполнительное производство',
    sub: 'После победы в суде',
    items: [
      'Получение и подача исполнительного листа',
      'Работа с банком и ФССП',
      'Розыск имущества должника',
      'Оспаривание действий пристава',
      'Контроль фактического взыскания',
    ],
  },
];

export default function WhatWeDo() {
  return (
    <section className="whatwedo">
      <div className="whatwedo-inner">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Где мы представляем ваши интересы</h2>
        </div>
        <p className="whatwedo-lead">
          Ведём дело от первой претензии до фактического получения денег — не останавливаемся на решении суда.
        </p>
        <div className="whatwedo-grid">
          {COURTS.map((c) => (
            <div className="whatwedo-block" key={c.num}>
              <div className="whatwedo-num">{c.num}</div>
              <div className="whatwedo-content">
                <h3 className="whatwedo-title">{c.title}</h3>
                <p className="whatwedo-sub">{c.sub}</p>
                <ul className="whatwedo-items">
                  {c.items.map((item, i) => (
                    <li key={i}><span className="whatwedo-dash">—</span>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
