const React = require('react');

function TeaItem({ tea }) {
  return (
    <div className="card tea-card" style={{ width: '18rem', margin: '20px' }}>
      <img src={tea.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{tea.title}</h5>
      </div>
      <button data-id={tea.id} className="btn btn-danger delete" type="button">
        Уничтожить плантацию
      </button>
    </div>

  );
}

module.exports = TeaItem;
