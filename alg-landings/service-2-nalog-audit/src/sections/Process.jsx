import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Сбор документов',
    duration: 'День 1',
    desc: 'Подписываем NDA. Вы передаёте налоговые декларации за 3 года, оборотно-сальдовые ведомости, реестр договоров с ключевыми контрагентами. Работаем дистанционно или у вас в офисе.',
    items: ['Декларации НДС, прибыль, УСН', 'ОСВ по основным счетам', 'Топ-20 контрагентов', 'Акты сверок с ФНС'],
  },
  {
    num: '02',
    title: 'Анализ и расчёт рисков',
    duration: 'Дни 2–4',
    desc: 'Команда из налогового юриста и бухгалтера-аналитика проверяет каждое направление. Для каждого риска считаем сумму возможных доначислений, штрафов и пеней.',
    items: ['Проверка по 6 направлениям', 'Расчёт суммы каждого риска', 'Анализ судебной практики', 'Оценка вероятности претензий ФНС'],
  },
  {
    num: '03',
    title: 'Отчёт и план действий',
    duration: 'День 5',
    desc: 'Вы получаете структурированный отчёт с цифрами и конкретный план устранения рисков. Приоритеты расставлены по размеру угрозы. Разбираем отчёт на онлайн-встрече.',
    items: ['Отчёт: риски в рублях', 'Приоритизация по срочности', 'Чеклист устранения', 'Онлайн-разбор с командой'],
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-inner">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Как проходит аудит</h2>
        </div>
        <div className="process-steps">
          {STEPS.map((step, i) => (
            <div className="process-step" key={step.num}>
              <div className="process-step-left">
                <div className="process-step-num">{step.num}</div>
                <div className="process-step-dur">{step.duration}</div>
                {i < STEPS.length - 1 && <div className="process-step-line" />}
              </div>
              <div className="process-step-body">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
                <ul className="process-step-items">
                  {step.items.map((item, j) => (
                    <li key={j}><span className="process-dash">—</span>{item}</li>
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
