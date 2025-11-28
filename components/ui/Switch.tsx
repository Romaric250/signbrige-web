import React from 'react'
import { cn } from '@/lib/utils'

interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  description?: string
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, description, checked, onChange, ...props }, ref) => {
    return (
      <div className="flex items-start gap-3">
        <div className="relative flex items-center">
          <input
            ref={ref}
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            onChange={onChange}
            {...props}
          />
          <div
            className={cn(
              'h-6 w-11 rounded-full bg-gray-300 transition-colors duration-200 peer-checked:bg-primary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2',
              className
            )}
          >
            <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform duration-200 peer-checked:translate-x-5" />
          </div>
        </div>
        {(label || description) && (
          <div className="flex-1">
            {label && (
              <label 
                className="text-sm font-medium text-gray-900 cursor-pointer" 
                onClick={() => {
                  if (onChange) {
                    onChange({ target: { checked: !checked } } as React.ChangeEvent<HTMLInputElement>)
                  }
                }}
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-sm text-gray-500 mt-1">{description}</p>
            )}
          </div>
        )}
      </div>
    )
  }
)

Switch.displayName = 'Switch'

export default Switch

