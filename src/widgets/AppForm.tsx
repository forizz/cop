interface AppFormProps {
  onSubmit: () => void;
  onClose?: () => void;
  children: React.ReactNode;
}

function AppForm({ onSubmit, onClose, children }: AppFormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4"
    >
      {children}

      <div className="mt-6 flex items-center justify-between gap-4">
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
          >
            Back
          </button>
        )}
        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Apply
        </button>
      </div>
    </form>
  );
}

interface AppFormFieldProps {
  children: React.ReactNode;
  error?: string;
}

function AppFormField({ children, error }: AppFormFieldProps) {
  return (
    <div className="flex flex-col gap-4">
      {children}
      {error && <span className="text-red-500">{error}</span>}
    </div>
  );
}

export { AppForm, AppFormField };
