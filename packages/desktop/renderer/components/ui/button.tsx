import React from 'react'

interface ButtonProps {
  label: string | any;
  icon?: string;
  title?: string;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  autoBlur?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e) => void;
}

function Button({
    label,
    icon,
    title,
    ariaLabel,
    ariaExpanded,
    autoBlur = true,
    disabled,
    className,
    onClick,
}: ButtonProps) {
  
    if(label === undefined)
        label = 'Button'

    className = className ? 'btn '+className : 'btn'

    return (
        <React.Fragment>
            <button className={className} title={title} onClick={onClick} disabled={disabled} style={(icon) ? {
                backgroundImage: `url(${icon})`,
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundPosition: 'left 10px bottom  50%',
                backgroundSize: 18,
                paddingLeft: 35,
                // height: 41,
            }:{}} aria-label={ariaLabel} aria-expanded={ariaExpanded} onFocus={ (e) => {
                if(autoBlur === true){
                    e.target.blur()
                }
            }}>{label}</button>
        </React.Fragment>
    )
}

export default Button
