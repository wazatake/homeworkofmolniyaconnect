import './Deliverables.css';

const ITEMS = [
  {
    num: '01',
    title: 'Налоговый мониторинг',
    desc: 'Постоянный контроль налоговой нагрузки, анализ рисков по НДС и налогу на прибыль, мониторинг изменений законодательства. Реагируем до того, как ФНС выставит требование.',
    tags: ['НДС', 'Налог на прибыль', 'ФНС'],
  },
  {
    num: '02',
    title: 'Договорное сопровождение',
    desc: 'Анализ и согласование договоров с контрагентами, поставщиками, подрядчиками. Выявляем «токсичные» условия, которые при конфликте работают против вас.',
    tags: ['Поставщики', 'Подрядчики', 'Трудовые договоры'],
  },
  {
    num: '03',
    title: 'Консультации и правовые заключения',
    desc: 'Ответы на юридические вопросы в течение 24–48 часов. Письменные заключения по сложным ситуациям. Участие в переговорах с контрагентами.',
    tags: ['До 20–25 ч/мес', 'Ответ за 48 ч'],
  },
  {
    num: '04',
    title: 'Защита при проверках и спорах',
    desc: 'Сопровождение налоговых и трудовых проверок. Представительство в ФНС, судах и государственных органах. Взыскание дебиторской задолженности.',
    tags: ['Проверки', 'Суды', 'Арбитраж'],
  },
];

export default function Deliverables() {
  return (
    <section className="deliverables">
      <div className="deliverables-inner">
        <div className="section-header">
          <span className="section-num">02</span>
          <h2 className="section-title">Что входит в сопровождение</h2>
        </div>
        <p className="deliverables-lead">
          Берём на себя юридические и налоговые вопросы бизнеса — от договоров и проверок до защиты в спорах.
        </p>
        <div className="deliverables-list">
          {ITEMS.map((item) => (
            <div className="deliverable-item" key={item.num}>
              <div className="deliverable-num">{item.num}</div>
              <div className="deliverable-body">
                <h3 className="deliverable-title">{item.title}</h3>
                <p className="deliverable-desc">{item.desc}</p>
                <div className="deliverable-tags">
                  {item.tags.map(t => <span className="deliverable-tag" key={t}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
