import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Case.css';

const RISKS = [
  { label: 'Неограниченная ответственность за косвенные убытки', tag: 'Критично' },
  { label: 'Срок претензии — 3 дня с момента поставки (был 30)', tag: 'Критично' },
  { label: 'Одностороннее изменение цены поставщиком без согласования', tag: 'Высокий риск' },
  { label: 'Подсудность — по месту поставщика в другом регионе', tag: 'Средний риск' },
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
              label="Фото: договор на столе"
              style={{ minHeight: '380px', background: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.35)' }}
            />
          </div>
          <div className="case-content">
            <div className="case-badge">Торговая компания</div>
            <h3 className="case-company">Договор поставки на 47 млн ₽</h3>
            <p className="case-situation">
              Клиент получил «стандартный» договор от крупного поставщика — 14 страниц мелким
              шрифтом. Менеджер сказал: «Все так подписывают, ничего страшного». За 24 часа
              мы выявили четыре пункта, которые в случае спора оставили бы компанию
              без защиты:
            </p>
            <div className="case-risks">
              {RISKS.map((r, i) => (
                <div className="case-risk-row" key={i}>
                  <span className="case-risk-label">{r.label}</span>
                  <span className="case-risk-sum case-risk-tag">{r.tag}</span>
                </div>
              ))}
            </div>
            <p className="case-outcome">
              Подготовили протокол разногласий по всем четырём пунктам. После переговоров
              поставщик согласился на все ключевые правки. Договор был подписан с ограниченной
              ответственностью клиента и нормальными сроками претензий.
            </p>
            <div className="case-result">
              <div className="case-result-num">
                <span className="case-result-to" style={{fontSize: '1.4rem'}}>Защита от потенциальных потерь</span>
              </div>
              <p className="case-result-label">Анализ стоил 15 000 ₽. Ограниченная ответственность — потенциально десятки миллионов рублей при споре</p>
            </div>
            <button className="case-cta" onClick={onBook}>Отправить договор на анализ</button>
          </div>
        </div>
      </div>
    </section>
  );
}
