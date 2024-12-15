import React from 'react';
import { ChevronDown, User, Users } from 'lucide-react';
import { ListenerType, LISTENER_TYPES } from '../../types';

interface DropdownProps {
  value: ListenerType;
  onChange: (value: ListenerType) => void;
}

export function Dropdown({ value, onChange }: DropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-2 p-3 bg-white/5 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300"
      >
        <div className="flex items-center gap-2">
          {value.includes('Group') ? (
            <Users className="w-5 h-5 text-purple-300" />
          ) : (
            <User className="w-5 h-5 text-purple-300" />
          )}
          <span className="text-purple-300">{value}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${
          isOpen ? 'transform rotate-180' : ''
        }`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 py-2 bg-[#1a1830] rounded-lg border border-purple-500/20 shadow-xl">
          {Object.values(LISTENER_TYPES).map((type) => (
            <button
              key={type}
              onClick={() => {
                onChange(type);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-2 px-4 py-2 hover:bg-purple-500/20 transition-colors duration-200 ${
                value === type ? 'text-purple-300 bg-purple-500/10' : 'text-gray-300'
              }`}
            >
              {type.includes('Group') ? (
                <Users className="w-5 h-5" />
              ) : (
                <User className="w-5 h-5" />
              )}
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}