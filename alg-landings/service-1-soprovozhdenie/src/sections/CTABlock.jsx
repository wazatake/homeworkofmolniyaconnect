import './CTABlock.css';

export default function CTABlock({ onBook }) {
  return (
    <section className="ctablock">
      <div className="ctablock-inner">
        <div className="ctablock-text">
          <span className="ctablock-label">Следующий шаг</span>
          <h2 className="ctablock-title">
            Готовы обсудить<br />
            <em>вашу ситуацию?</em>
          </h2>
          <p className="ctablock-sub">
            Первая консультация бесплатна. Расскажите о своём бизнесе —
            мы покажем, какие риски есть сейчас и как их закрыть.
          </p>
          <div className="ctablock-actions">
            <button className="ctablock-btn" onClick={onBook}>
              Записаться на консультацию
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
              <span>Первая консультация бесплатно</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Ответ в течение 2 часов</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>NDA до передачи любых документов</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Работаем с 2014 года</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
