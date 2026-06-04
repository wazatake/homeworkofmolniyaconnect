import './Header.css';

export default function Header({ onBook }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="header-logo">ALG</a>
        <nav className="header-nav">
          <a
            href="ЗАМЕНИТЬ_НА_РЕАЛЬНЫЙ_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="header-nav-link"
          >
            Основной сайт
          </a>
        </nav>
        <button className="header-cta" onClick={onBook}>
          Записаться на консультацию
        </button>
      </div>
    </header>
  );
}
