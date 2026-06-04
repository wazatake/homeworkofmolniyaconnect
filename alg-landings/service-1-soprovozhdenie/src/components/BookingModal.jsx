import { useState, useEffect } from 'react';
import './BookingModal.css';

export default function BookingModal({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', time: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  function handleKey(e) {
    if (e.key === 'Escape') onClose();
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  });

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Заявка:', form);
    setSent(true);
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" role="dialog" aria-modal="true">
        <button className="modal-close" onClick={onClose} aria-label="Закрыть">✕</button>

        {sent ? (
          <div className="modal-success">
            <div className="modal-success-icon">✓</div>
            <h3 className="modal-success-title">Заявка принята</h3>
            <p className="modal-success-text">Мы перезвоним в течение 2 часов в рабочее время.</p>
            <button className="modal-btn-close" onClick={onClose}>Закрыть</button>
          </div>
        ) : (
          <>
            <p className="modal-eyebrow">Консультация</p>
            <h2 className="modal-title">Записаться на&nbsp;консультацию</h2>
            <p className="modal-sub">Расскажите о ситуации — мы свяжемся и предложим решение.</p>

            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="m-name">Имя</label>
                <input
                  id="m-name"
                  name="name"
                  type="text"
                  placeholder="Иван Петров"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="m-phone">Телефон</label>
                <input
                  id="m-phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="m-time">Удобное время</label>
                <select id="m-time" name="time" value={form.time} onChange={handleChange}>
                  <option value="">Выберите время</option>
                  <option value="morning">Утром (9:00–12:00)</option>
                  <option value="day">Днём (12:00–17:00)</option>
                  <option value="evening">Вечером (17:00–20:00)</option>
                  <option value="any">Любое</option>
                </select>
              </div>
              <button className="modal-submit" type="submit">
                Отправить заявку
              </button>
            </form>

            <p className="modal-note">Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.</p>
          </>
        )}
      </div>
    </div>
  );
}
