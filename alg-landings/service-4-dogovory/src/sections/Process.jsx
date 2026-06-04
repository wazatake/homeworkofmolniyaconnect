import './Process.css';

const STEPS = [
  {
    num: '01',
    title: 'Получаем договор',
    duration: 'День 1',
    desc: 'Вы отправляете договор на анализ — по email или через защищённый канал. Подписываем NDA. Уточняем контекст: что за сделка, какова сумма, есть ли особые опасения.',
    items: ['Приём в любом формате (PDF, Word, скан)', 'NDA до передачи документов', 'Бриф: цель и контекст сделки'],
  },
  {
    num: '02',
    title: 'Анализируем и готовим правки',
    duration: 'День 2',
    desc: 'Юрист проверяет каждый пункт на предмет рисков. Готовим таблицу замечаний с объяснением последствий и предлагаем конкретные формулировки для замены.',
    items: ['Таблица рисков с оценкой критичности', 'Готовые правки в тексте договора', 'Объяснение последствий на русском языке'],
  },
  {
    num: '03',
    title: 'Согласуем с контрагентом',
    duration: 'По запросу',
    desc: 'Если нужно — ведём переговоры с юристами другой стороны. Представляем ваши интересы, отстаиваем ключевые условия, ищем приемлемый компромисс.',
    items: ['Протокол разногласий', 'Переговоры с юристами контрагента', 'Контроль финальной версии'],
  },
  {
    num: '04',
    title: 'Финальная проверка',
    duration: 'Перед подписанием',
    desc: 'Проверяем финальную версию договора перед подписанием. Убеждаемся, что все согласованные правки внесены корректно и новых рисков не появилось.',
    items: ['Сверка финальной версии', 'Подтверждение: готово к подписанию', 'Хранение шаблона для следующих сделок'],
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="process-inner">
        <div className="section-header">
          <span className="section-num">03</span>
          <h2 className="section-title">Как проходит работа</h2>
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
