import './CTABlock.css';

export default function CTABlock({ onBook }) {
  return (
    <section className="ctablock">
      <div className="ctablock-inner">
        <div className="ctablock-text">
          <span className="ctablock-label">Следующий шаг</span>
          <h2 className="ctablock-title">
            Расскажите о деле —<br />
            <em>оценим перспективы</em>
          </h2>
          <p className="ctablock-sub">
            Первичный анализ документов и оценка шансов — бесплатно.
            Говорим честно: если дело бесперспективно, скажем об этом сразу.
          </p>
          <div className="ctablock-actions">
            <button className="ctablock-btn" onClick={onBook}>
              Обсудить дело
            </button>
            <div className="ctablock-contacts">
              <a className="ctablock-contact" href="tel:+74951234567">
                <span className="ctablock-contact-label">Телефон</span>
                <span>ЗАМЕНИТЬ_НА_РЕАЛЬНЫЙ_НОМЕР</span>
              </a>
              <a className="ctablock-contact" href="mailto:info@alfalegroup.ru">
                <span className="ctablock-contact-label">Email</span>
                <span>ЗАМЕНИТЬ_НА_РЕАЛЬНЫЙ_EMAIL</span>
              </a>
            </div>
          </div>
        </div>
        <div className="ctablock-aside">
          <div className="ctablock-promise">
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Оценка перспектив — бесплатно</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Подключаемся за 48 часов</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Берём дела на любой стадии</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>94% дел — в пользу клиента</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
