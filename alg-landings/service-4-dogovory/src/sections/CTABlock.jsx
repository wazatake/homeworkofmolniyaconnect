import './CTABlock.css';

export default function CTABlock({ onBook }) {
  return (
    <section className="ctablock">
      <div className="ctablock-inner">
        <div className="ctablock-text">
          <span className="ctablock-label">Следующий шаг</span>
          <h2 className="ctablock-title">
            Пришлите договор —<br />
            <em>разберём за 48 часов</em>
          </h2>
          <p className="ctablock-sub">
            Отправьте любой договор на бесплатную экспресс-оценку.
            Скажем, есть ли критичные риски — до того, как вы подпишете.
          </p>
          <div className="ctablock-actions">
            <button className="ctablock-btn" onClick={onBook}>
              Отправить договор на анализ
            </button>
            <div className="ctablock-contacts">
              <a className="ctablock-contact" href="tel:+79930778778">
                <span className="ctablock-contact-label">Телефон</span>
                <span>8 993 077 87 78</span>
              </a>
              <a className="ctablock-contact" href="mailto:info@alfalegalgroup.ru">
                <span className="ctablock-contact-label">Email</span>
                <span>info@alfalegalgroup.ru</span>
              </a>
            </div>
          </div>
        </div>
        <div className="ctablock-aside">
          <div className="ctablock-promise">
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Экспресс-оценка — бесплатно</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Анализ за 24–48 часов</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>NDA до передачи документов</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Правки в тексте договора, не в тексте заключения</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
