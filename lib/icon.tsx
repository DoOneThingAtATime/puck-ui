import React from 'react';
import './importIcons'
import './icon.scss'

interface IconProps {
  name: string;
  onClick: () => void;
  // onClick: React.MouseEventHandler<SVGElement>
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="puck-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`} />
    </svg>
  )
}

export default Icon;
