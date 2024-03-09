export function IconSwitch({icon, onSwitch}) {

    return (
        <div className="filters-buttons" >
            <button className="view_list"
              onClick={onSwitch}>
              <span className="material-icons">{icon}</span>
            </button>
        </div>
      );
  }
