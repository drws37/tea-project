const React = require("react");

function Map() {
  return (
    <div id="map" className="map">
      <div id="popup" className="popup" data-tooltip="Всплывающая подсказка">
        <div className="popup-content">
          <span className="close" id="closePopupBtn">
            &times;
          </span>
          <p>Содержимое всплывающего окна здесь.</p>
        </div>
      </div>
    </div>
  );
}

module.exports = Map;
