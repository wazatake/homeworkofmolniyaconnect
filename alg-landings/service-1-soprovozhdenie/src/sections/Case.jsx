import PhotoPlaceholder from '../components/PhotoPlaceholder';
import './Case.css';

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
            <PhotoPlaceholder label="Фото кейса / документы" style={{ minHeight: '360px', background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)' }} />
          </div>

          <div className="case-content">
            <div className="case-badge">Реальный кейс</div>
            <h3 className="case-company">ООО «Кондитерский дом»</h3>
            <p className="case-situation">
              Компания получила требование ФНС на доначисление 280 млн рублей по результатам
              выездной налоговой проверки. В претензии — налоговые разрывы по цепочке контрагентов,
              спорные расходы и обвинения в дроблении бизнеса.
            </p>

            <div className="case-timeline">
              <div className="case-step">
                <span className="case-step-num">01</span>
                <div>
                  <strong>Аудит документации</strong>
                  <p>За 5 дней провели полный анализ первичных документов, договоров и налоговых регистров. Выявили точки уязвимости и точки защиты.</p>
                </div>
              </div>
              <div className="case-step">
                <span className="case-step-num">02</span>
                <div>
                  <strong>Подготовка возражений</strong>
                  <p>Сформировали аргументированные возражения на акт проверки. Подкрепили позицию судебной практикой и разъяснениями Минфина.</p>
                </div>
              </div>
              <div className="case-step">
                <span className="case-step-num">03</span>
                <div>
                  <strong>Досудебное урегулирование</strong>
                  <p>Провели переговоры с инспекцией, представили дополнительные документы, добились пересмотра позиции ФНС до апелляции.</p>
                </div>
              </div>
            </div>

            <div className="case-result">
              <div className="case-result-num">
                <span className="case-result-from">280 млн ₽</span>
                <span className="case-result-arrow">→</span>
                <span className="case-result-to">38 млн ₽</span>
              </div>
              <p className="case-result-label">Итоговое доначисление снижено в 7 раз — сэкономлено 242 млн рублей</p>
            </div>

            <button className="case-cta" onClick={onBook}>Обсудить свою ситуацию</button>
          </div>
        </div>
      </div>
    </section>
  );
}
