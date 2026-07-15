import { useState, useEffect, useRef } from 'react';
import { X, Mail, CheckCircle, Loader2, ArrowRight, Music } from 'lucide-react';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef(null);

  // Focus email input when modal opens
  useEffect(() => {
    if (isOpen && status !== 'success') {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, status]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const SUPABASE_URL = 'https://pkpsewcopsewkgzcgzil.supabase.co';
      const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBrcHNld2NvcHNld2tnemNnemlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MzUwNjEsImV4cCI6MjA5NzAxMTA2MX0.kCuR9LWKHuw5SphqbEuooO76A3GVeHFnAA_wmXMmPKk';

      const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({ email, name: name || null }),
      });

      if (res.ok || res.status === 201) {
        setStatus('success');
      } else {
        const data = await res.json();
        // Code 23505 = duplicate email (unique constraint)
        if (data?.code === '23505') {
          setErrorMsg('This email is already on the waitlist! 🎉');
        } else {
          setErrorMsg(data?.message || 'Something went wrong. Please try again.');
        }
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection.');
      setStatus('error');
    }
  };

  const handleClose = () => {
    onClose();
    // Reset after transition
    setTimeout(() => {
      setStatus('idle');
      setEmail('');
      setName('');
      setErrorMsg('');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', background: 'rgba(0,0,0,0.5)' }}
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        {/* Modal Panel */}
        <div
          className="relative w-full max-w-md rounded-3xl border border-white/20 overflow-hidden shadow-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(103,56,170,0.95) 0%, rgba(67,22,128,0.98) 100%)',
            boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15)',
            animation: 'modalIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, white 0%, transparent 70%)' }} />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/20"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            <X size={18} />
          </button>

          <div className="p-8">
            {status === 'success' ? (
              /* Success State */
              <div className="text-center py-4">
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-green-400/20 flex items-center justify-center"
                  style={{ animation: 'popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }}>
                  <CheckCircle size={40} className="text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3">You're on the list! 🎉</h2>
                <p className="text-purple-100 mb-8 leading-relaxed">
                  We'll notify <span className="text-white font-semibold">{email}</span> the moment Auralys launches. Get ready to elevate your music experience.
                </p>
                <div className="flex items-center justify-center gap-4 text-sm text-purple-200 mb-6">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-purple-300 animate-pulse" />
                    Share with friends
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-pink-300 animate-pulse" style={{ animationDelay: '0.3s' }} />
                    Follow us on Instagram
                  </div>
                </div>
                <div className="flex gap-3 justify-center">
                  <a
                    href="https://www.instagram.com/auralysapp"
                    target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-sm font-medium transition-all"
                  >
                    Follow on Instagram
                  </a>
                  <button
                    onClick={handleClose}
                    className="px-5 py-2.5 rounded-full bg-white text-purple-700 text-sm font-semibold hover:bg-purple-50 transition-all"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              /* Form State */
              <>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center">
                    <Music size={22} className="text-purple-200" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Join the Waitlist</h2>
                    <p className="text-purple-200 text-sm">Be among the first to experience Auralys</p>
                  </div>
                </div>

                {/* Social proof */}
                <div className="mb-6 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {['#A78BFA', '#F472B6', '#60A5FA', '#34D399'].map((c, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-purple-800 flex items-center justify-center text-[10px] font-bold"
                        style={{ background: c }}>
                        {['A', 'M', 'J', 'S'][i]}
                      </div>
                    ))}
                  </div>
                  <p className="text-purple-100 text-sm">
                    <span className="text-white font-semibold">500+</span> music lovers already waiting
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-purple-100 mb-1.5">Your name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-purple-100 mb-1.5">Email address *</label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
                      <input
                        ref={inputRef}
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all text-sm"
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <p className="text-red-300 text-sm px-1">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading' || !email}
                    className="w-full py-3.5 rounded-xl font-semibold text-purple-700 flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: status === 'loading' ? 'rgba(255,255,255,0.85)' : 'white',
                      boxShadow: '0 4px 20px rgba(255,255,255,0.25)',
                    }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Signing up...
                      </>
                    ) : (
                      <>
                        Get Early Access <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-purple-200/70">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes popIn {
          from { opacity: 0; transform: scale(0.5); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </>
  );
};

export default WaitlistModal;
