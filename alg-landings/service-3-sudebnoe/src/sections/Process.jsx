import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Оценка перспектив',
    duration: '1–2 дня',
    desc: 'Изучаем материалы дела и честно оцениваем шансы на успех. Если видим слабую позицию — говорим прямо: лучше знать до суда, чем потратить деньги на заведомо проигрышный процесс.',
    items: ['Анализ документов и доказательств', 'Изучение судебной практики', 'Оценка рисков и возможностей', 'Стратегия: суд или переговоры'],
  },
  {
    num: '02',
    title: 'Подготовка позиции',
    duration: '3–10 дней',
    desc: 'Формируем правовую позицию, собираем доказательную базу, готовим процессуальные документы. Каждый довод — со ссылкой на норму закона и судебный прецедент.',
    items: ['Исковое заявление / отзыв', 'Доказательная база', 'Ходатайства и запросы', 'Независимая экспертиза при необходимости'],
  },
  {
    num: '03',
    title: 'Судебный процесс',
    duration: 'До решения',
    desc: 'Представляем интересы в заседаниях, реагируем на доводы оппонента, заявляем ходатайства. При необходимости — апелляция, кассация, Верховный суд.',
    items: ['Представительство в заседаниях', 'Ответы на доводы оппонента', 'Апелляция и кассация', 'Верховный суд при необходимости'],
  },
  {
    num: '04',
    title: 'Исполнение решения',
    duration: 'После решения',
    desc: 'Победа в суде — не конец: решение нужно исполнить. Получаем исполнительный лист, подаём в банк или ФССП, контролируем фактическое взыскание.',
    items: ['Исполнительный лист', 'Подача в банк / ФССП', 'Розыск имущества должника', 'Контроль фактического взыскания'],
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-inner">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Как мы работаем</h2>
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
