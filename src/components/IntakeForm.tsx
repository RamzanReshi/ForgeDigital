import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { INTAKE_ENTRY_IDS, INTAKE_FORM_ACTION, INTAKE_GOALS, WHATSAPP_NUMBER } from '../config.landing';
import { Stamp } from './Stamp';

type IntakeFormProps = {
  variant: 'inline' | 'modal';
  onClose?: () => void;
};

type FormState = {
  name: string;
  business: string;
  type: string;
  location: string;
  maps: string;
  oldSite: string;
  goal: string;
  extra: string;
};

type FieldName = keyof FormState;
type Errors = Partial<Record<FieldName, string>>;

const initialForm: FormState = {
  name: '',
  business: '',
  type: '',
  location: '',
  maps: '',
  oldSite: '',
  goal: '',
  extra: '',
};

const requiredFieldsByStep: Record<number, FieldName[]> = {
  0: ['name', 'business'],
  1: ['type', 'location'],
  2: ['goal'],
  3: [],
};

const fieldLabels: Record<FieldName, string> = {
  name: 'Name',
  business: 'Business',
  type: 'Business type',
  location: 'Location',
  maps: 'Google Maps link',
  oldSite: 'Current website',
  goal: 'Main goal',
  extra: 'Anything else',
};

const stepTitles = ['Your details', 'Business basics', 'Main goal', 'Final details'];
const serif = { fontFamily: 'var(--font-display-serif)' } as const;

export function IntakeForm({ variant, onClose }: IntakeFormProps) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (variant !== 'modal') return;
    const close = onClose ?? (() => {});
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [variant, onClose]);

  const updateField = (field: FieldName, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const validateStep = (stepToValidate: number) => {
    const nextErrors: Errors = {};
    requiredFieldsByStep[stepToValidate].forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = `${fieldLabels[field]} is required.`;
      }
    });
    setErrors((current) => ({ ...current, ...nextErrors }));
    return Object.keys(nextErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateStep(step)) return;
    setStep((current) => Math.min(current + 1, 3));
  };

  const handleBack = () => {
    setStep((current) => Math.max(current - 1, 0));
  };

  const handleSubmit = () => {
    if (!validateStep(3)) return;

    const pageUrl = window.location.href;
    const referrer = document.referrer || 'direct';
    const body = new URLSearchParams();

    Object.entries(INTAKE_ENTRY_IDS).forEach(([key, entryId]) => {
      const value =
        key === 'pageUrl'
          ? pageUrl
          : key === 'referrer'
            ? referrer
            : form[key as keyof typeof form];
      body.append(entryId, value || '');
    });

    // A resolved fetch here only proves the request left the browser, not that
    // Google accepted it: mode: 'no-cors' means the response is opaque and
    // unreadable. Never branch UI state on this call.
    fetch(INTAKE_FORM_ACTION, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    }).catch(() => {});

    const message = `Hi, I'd like a quote for a website.

Name: ${form.name}
Business: ${form.business}
Type: ${form.type}
Location: ${form.location}
Google Maps: ${form.maps || '—'}
Current website: ${form.oldSite || '—'}
Main goal: ${form.goal}
Anything else: ${form.extra || '—'}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');

    if (variant === 'modal') {
      onClose?.();
    } else {
      setSubmitted(true);
    }
  };

  const inputClassName =
    'mt-2 w-full border-2 border-line bg-paper px-4 py-3 text-ink outline-none focus-visible:ring-2 focus-visible:ring-forge';

  const renderTextField = (
    field: FieldName,
    label: string,
    options: { textarea?: boolean; placeholder?: string } = {},
  ) => (
    <div>
      <label htmlFor={`intake-${field}`} className="block text-sm font-bold tracking-wide text-ink">
        {label}
      </label>
      {options.textarea ? (
        <textarea
          id={`intake-${field}`}
          value={form[field]}
          onChange={(e) => updateField(field, e.target.value)}
          placeholder={options.placeholder}
          rows={4}
          className={inputClassName}
        />
      ) : (
        <input
          id={`intake-${field}`}
          value={form[field]}
          onChange={(e) => updateField(field, e.target.value)}
          placeholder={options.placeholder}
          className={inputClassName}
        />
      )}
      {errors[field] ? <p className="mt-2 text-sm font-bold text-forge">{errors[field]}</p> : null}
    </div>
  );

  const formContent = submitted ? (
    <div className="border-2 border-ink bg-white p-6 text-ink">
      <p className="text-base font-bold">
        Thanks — WhatsApp should have opened with your details. If it didn't, message us directly at
        the number in the footer.
      </p>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="space-y-6"
    >
      <div className="flex gap-2" aria-label="Quote form progress">
        {[0, 1, 2, 3].map((item) => (
          <span
            key={item}
            aria-hidden="true"
            className={`h-3 w-3 ${item <= step ? 'bg-ink' : 'border border-line bg-paper'}`}
          />
        ))}
      </div>

      <div>
        <p className="text-sm font-bold tracking-wide text-forge">Step {step + 1} of 4</p>
        <h2 className="mt-2 text-2xl text-ink md:text-3xl" style={serif}>
          {stepTitles[step]}
        </h2>
      </div>

      <div className={step === 0 ? 'space-y-5' : 'hidden'}>
        {renderTextField('name', 'Name')}
        {renderTextField('business', 'Business')}
      </div>

      <div className={step === 1 ? 'space-y-5' : 'hidden'}>
        {renderTextField('type', 'Business type')}
        {renderTextField('location', 'Location')}
      </div>

      <div className={step === 2 ? 'space-y-4' : 'hidden'}>
        <div>
          <label className="block text-sm font-bold tracking-wide text-ink">Main goal</label>
          <div className="mt-3 grid gap-3">
            {INTAKE_GOALS.map((goal) => {
              const active = form.goal === goal;
              return (
                <button
                  key={goal}
                  type="button"
                  onClick={() => updateField('goal', goal)}
                  className={`border-2 px-4 py-3 text-left text-sm font-bold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-forge ${
                    active ? 'border-ink bg-ink text-paper' : 'border-line bg-paper text-ink'
                  }`}
                >
                  {goal}
                </button>
              );
            })}
          </div>
          {errors.goal ? <p className="mt-2 text-sm font-bold text-forge">{errors.goal}</p> : null}
        </div>
      </div>

      <div className={step === 3 ? 'space-y-5' : 'hidden'}>
        {renderTextField('maps', 'Google Maps link')}
        {renderTextField('oldSite', 'Current website')}
        {renderTextField('extra', 'Anything else', { textarea: true })}
      </div>

      <div className="flex items-center justify-between gap-4">
        {step > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="inline-flex min-h-11 items-center justify-center border-2 border-ink bg-paper px-6 py-2.5 text-sm font-bold tracking-wide text-ink transition hover:text-forge focus:outline-none focus-visible:ring-2 focus-visible:ring-forge"
          >
            Back
          </button>
        ) : (
          <span />
        )}

        {step < 3 ? (
          <button
            type="button"
            onClick={handleNext}
            className="inline-flex min-h-11 items-center justify-center border-2 border-ink bg-ink px-6 py-2.5 text-sm font-bold tracking-wide text-paper transition hover:text-forge focus:outline-none focus-visible:ring-2 focus-visible:ring-forge"
          >
            Next
          </button>
        ) : (
          <span
            onClick={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleSubmit();
              }
            }}
          >
            <Stamp filled>Send</Stamp>
          </span>
        )}
      </div>
    </form>
  );

  if (variant === 'modal') {
    const close = onClose ?? (() => {});

    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Get a website quote"
      >
        <div className="absolute inset-0 bg-ink/70" onClick={close} aria-hidden="true" />
        <div className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col border-2 border-ink bg-white">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="text-sm font-bold tracking-wide text-ink">Get a website quote</span>
            <button
              type="button"
              onClick={close}
              aria-label="Close quote form"
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-ink transition hover:text-forge focus:outline-none focus-visible:ring-2 focus-visible:ring-forge"
            >
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <div className="overflow-y-auto p-5">{formContent}</div>
        </div>
      </div>
    );
  }

  return <div className="border-2 border-ink bg-white p-5">{formContent}</div>;
}

export default IntakeForm;
