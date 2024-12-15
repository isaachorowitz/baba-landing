import React from 'react';
import { User, Users } from 'lucide-react';
import { SpeakerType, ListenerType } from '../types';

interface GenderIconProps {
  type: SpeakerType | ListenerType;
  isActive: boolean;
}

export function GenderIcon({ type, isActive }: GenderIconProps) {
  const baseClasses = "w-6 h-6 transition-all duration-300";
  const activeClasses = isActive 
    ? "text-purple-400 scale-110" 
    : "text-gray-500 scale-100 opacity-50";

  // Use User for individual and Users for groups
  if (type.includes('Group')) {
    return <Users className={`${baseClasses} ${activeClasses}`} />;
  }
  return <User className={`${baseClasses} ${activeClasses}`} />;
}