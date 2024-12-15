import React, { useState } from 'react';
import { ChevronRight, Loader2, Check } from 'lucide-react';
import toast from 'react-hot-toast';
import { supabase } from '../lib/supabase';

interface WaitlistFormProps {
  className?: string;
  showHebrew?: boolean;
}

export function WaitlistForm({ className = '', showHebrew = true }: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ email }]);

      if (error) throw error;

      setIsSubmitted(true);
      toast.success('You have been added to the waitlist!', {
        icon: '🎉',
        style: {
          background: '#1a1830',
          color: '#fff',
          border: '1px solid rgba(139, 92, 246, 0.2)',
        },
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.', {
        style: {
          background: '#1a1830',
          color: '#fff',
          border: '1px solid rgba(139, 92, 246, 0.2)',
        },
      });
    } finally {
      setIsSubmitting(false);
      setEmail('');
    }
  };

  if (isSubmitted) {
    return (
      <div className={`flex items-center justify-center gap-3 py-3 px-6 bg-purple-500/20 rounded-lg ${className}`}>
        <Check className="w-5 h-5 text-green-400" />
        <span className="text-green-400">Thanks for joining! We'll be in touch soon.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <div className="flex-1 min-w-0">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="w-full px-4 py-3 bg-white/10 border border-purple-500/20 rounded-lg 
                     focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
                     placeholder-gray-400 text-white text-base"
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold 
                 text-base sm:text-lg whitespace-nowrap hover:scale-105 transition-transform duration-300 
                 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:hover:scale-100"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            Join Waitlist
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
      {showHebrew && (
        <span className="text-purple-300 text-base sm:text-lg text-center sm:self-center">
          והיה סבבה!
        </span>
      )}
    </form>
  );
}