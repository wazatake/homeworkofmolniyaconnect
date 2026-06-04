import './PhotoPlaceholder.css';

export default function PhotoPlaceholder({ label, style }) {
  return (
    <div className="photo-placeholder" style={style}>
      <span>[ФОТО: {label}]</span>
    </div>
  );
}
