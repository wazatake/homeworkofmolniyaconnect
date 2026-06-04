import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Case.css';

const TIMELINE = [
  { step: 'Иск ФНС', detail: 'Доначисление 67,3 млн ₽ по итогам выездной проверки. Основание — нереальность сделок с тремя поставщиками.' },
  { step: 'Апелляция в УФНС', detail: 'Подготовили возражения, собрали доказательную базу о реальности поставок. УФНС отменила 18,2 млн ₽.' },
  { step: 'Арбитражный суд (1 инстанция)', detail: 'Представили суду первичные документы, показания свидетелей, результаты встречных проверок. Суд отменил ещё 31,4 млн ₽.' },
  { step: '9-й Арбитражный апелляционный суд', detail: 'ФНС обжаловала. Отстояли решение первой инстанции полностью.' },
];

export default function Case({ onBook }) {
  return (
    <section className="case">
      <div className="case-inner">
        <div className="section-header case-header">
          <span className="section-num">04</span>
          <h2 className="section-title">Кейс из практики</h2>
        </div>
        <div className="case-grid">
          <div className="case-photo">
            <PhotoPlaceholder
              label="Фото: документы дела"
              style={{ minHeight: '400px', background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.35)' }}
            />
          </div>
          <div className="case-content">
            <div className="case-badge">Оптовая торговля</div>
            <h3 className="case-company">Налоговый спор с ФНС</h3>
            <p className="case-situation">
              Компания получила решение по выездной проверке: ФНС доначислила 67,3 млн рублей
              НДС и налога на прибыль, признав поставщиков «техническими». Обратились к нам
              после того, как собственный юрист отказался браться за дело.
            </p>
            <div className="case-timeline-block">
              {TIMELINE.map((t, i) => (
                <div className="case-tl-row" key={i}>
                  <div className="case-tl-step">{t.step}</div>
                  <div className="case-tl-detail">{t.detail}</div>
                </div>
              ))}
            </div>
            <div className="case-result">
              <div className="case-result-num">
                <span className="case-result-from">67,3 млн ₽</span>
                <span className="case-result-arrow">→</span>
                <span className="case-result-to">17,7 млн ₽</span>
              </div>
              <p className="case-result-label">Итоговое доначисление снижено в 3,8 раза — защищено 49,6 млн рублей</p>
            </div>
            <button className="case-cta" onClick={onBook}>Обсудить ваше дело</button>
          </div>
        </div>
      </div>
    </section>
  );
}
