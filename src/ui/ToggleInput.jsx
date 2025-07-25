import React from 'react'
import { Switch } from '@headlessui/react'

function ToggleInput({label, enabled, onChange}) {
  return (
    <Switch.Group>
          <div className="flex items-center gap-x-2">
            <Switch
              checked={enabled}
              onChange={onChange}
              className={`${
                enabled ? 'bg-success-900' : 'bg-gray-200'
              } relative inline-flex h-5 w-11 items-center rounded-full transition-colors `}
            >
              <span
                className={`${
                  enabled ? '-translate-x-6' : '-translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
            <Switch.Label >{label}</Switch.Label>
          </div>
        </Switch.Group>
  )
}

export default ToggleInput