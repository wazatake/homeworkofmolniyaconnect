import './ForWhom.css';

const SEGMENTS = [
  {
    icon: '◈',
    title: 'Малый бизнес',
    desc: 'Когда один штраф, иск или блокировка счёта могут остановить работу компании. Помогаем выстроить юридическую защиту до того, как проблема стала критичной.',
    tags: ['ИП и ООО', 'До 50 сотрудников'],
  },
  {
    icon: '◉',
    title: 'Растущий бизнес',
    desc: 'Компания расширяется — появляются новые контрагенты, сотрудники, договоры и налоговые обязательства. Нужна системная юридическая поддержка без найма штата.',
    tags: ['50–300 сотрудников', 'Активный рост'],
  },
  {
    icon: '◎',
    title: 'Бизнес с оборотами',
    desc: 'Сложные холдинговые структуры, крупные сделки и повышенный интерес ФНС. Нужна команда специалистов, а не один юрист широкого профиля.',
    tags: ['Оборот 300+ млн', 'Группа компаний'],
  },
];

export default function ForWhom() {
  return (
    <section className="forwhom">
      <div className="forwhom-inner">
        <div className="section-header">
          <span className="section-num">01</span>
          <h2 className="section-title">Для кого мы будем максимально полезны</h2>
        </div>
        <p className="forwhom-lead">
          Мы готовы закрыть полный спектр юридических задач для компаний любого масштаба.
        </p>
        <div className="forwhom-grid">
          {SEGMENTS.map((s, i) => (
            <div className="forwhom-card" key={i}>
              <div className="forwhom-icon">{s.icon}</div>
              <h3 className="forwhom-card-title">{s.title}</h3>
              <p className="forwhom-card-desc">{s.desc}</p>
              <div className="forwhom-tags">
                {s.tags.map(t => <span className="forwhom-tag" key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
