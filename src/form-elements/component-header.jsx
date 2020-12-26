import React from 'react';
import HeaderBar from './header-bar';

const ComponentHeader = (props) => {
  if (props.mutable) {
    return null;
  }
  return (
    <div>
    { props.data.pageBreakBefore &&
      <div className="preview-page-break">Podział wierszu</div>
    }
    <HeaderBar parent={props.parent} editModeOn={props.editModeOn} data={props.data} onDestroy={props._onDestroy} onEdit={props.onEdit} static={props.data.static} required={props.data.required} />
  </div>
  );
};

export default ComponentHeader;
