import './CTABlock.css';

export default function CTABlock({ onBook }) {
  return (
    <section className="ctablock">
      <div className="ctablock-inner">
        <div className="ctablock-text">
          <span className="ctablock-label">Следующий шаг</span>
          <h2 className="ctablock-title">
            Узнайте налоговые<br />
            <em>риски вашего бизнеса</em>
          </h2>
          <p className="ctablock-sub">
            На первой консультации расскажем, какие риски характерны для вашей отрасли
            и оборота. Бесплатно, без обязательств.
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
              <span>Результат за 3–5 рабочих дней</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>NDA до передачи первого документа</span>
            </div>
            <div className="ctablock-promise-item">
              <span className="ctablock-promise-icon">—</span>
              <span>Отчёт в рублях, не в тексте</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
