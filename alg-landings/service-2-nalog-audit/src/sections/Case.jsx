import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Case.css';

const RISKS = [
  { label: 'НДС — разрывы по 3 поставщикам', sum: '41,2 млн ₽' },
  { label: 'Налог на прибыль — необоснованные расходы', sum: '18,7 млн ₽' },
  { label: 'НДФЛ — выплаты самозанятым с признаками трудовых', sum: '9,4 млн ₽' },
  { label: 'Дробление — риск переквалификации двух ИП', sum: '22,1 млн ₽' },
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
              label="Фото: отчёт аудита"
              style={{ minHeight: '360px', background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.35)' }}
            />
          </div>
          <div className="case-content">
            <div className="case-badge">Производственная компания</div>
            <h3 className="case-company">Оборот 320 млн ₽ / год</h3>
            <p className="case-situation">
              Компания работала 7 лет, регулярно сдавала декларации, считала себя «чистой».
              Владелец обратился за аудитом перед вводом нового партнёра-инвестора.
              За 5 дней выявили четыре группы рисков:
            </p>
            <div className="case-risks">
              {RISKS.map((r, i) => (
                <div className="case-risk-row" key={i}>
                  <span className="case-risk-label">{r.label}</span>
                  <span className="case-risk-sum">{r.sum}</span>
                </div>
              ))}
              <div className="case-risk-total">
                <span>Итого выявлено рисков</span>
                <span className="case-risk-total-sum">91,4 млн ₽</span>
              </div>
            </div>
            <p className="case-outcome">
              По каждому пункту подготовили план устранения. Три риска закрыли документально
              за месяц, по четвёртому провели реструктуризацию. Сделка с инвестором
              состоялась без налоговых оговорок.
            </p>
            <button className="case-cta" onClick={onBook}>Заказать аудит своего бизнеса</button>
          </div>
        </div>
      </div>
    </section>
  );
}
