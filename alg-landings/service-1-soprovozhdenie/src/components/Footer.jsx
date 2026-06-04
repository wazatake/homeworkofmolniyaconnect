import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">ALG</span>
            <p className="footer-tagline">Сохраняем деньги и бизнес<br />в сложных юридических ситуациях</p>
          </div>
          <div className="footer-contacts">
            <div className="footer-contact-item">
              <span className="footer-label">Телефон</span>
              <a href="tel:+79930778778" className="footer-value">8 993 077 87 78</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-label">Email</span>
              <a href="mailto:info@alfalegalgroup.ru" className="footer-value">info@alfalegalgroup.ru</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-label">Город</span>
              <span className="footer-value">Санкт-Петербург</span>
            </div>
          </div>
          <div className="footer-links">
            <a href="ЗАМЕНИТЬ_НА_РЕАЛЬНЫЙ_URL" target="_blank" rel="noopener noreferrer" className="footer-link">
              Основной сайт →
            </a>
            <a href="ЗАМЕНИТЬ_НА_ССЫЛКУ_ЯНДЕКС_КАРТЫ" target="_blank" rel="noopener noreferrer" className="footer-link">
              Мы на Яндекс.Картах →
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ALG — Alfa Legal Group</span>
          <span>Санкт-Петербург</span>
        </div>
      </div>
    </footer>
  );
}
