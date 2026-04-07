import { Loader2 } from "lucide-react";

export default function LoadingSpinner({
  message = "Loading...",
}: {
  message?: string;
}) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center gap-4 text-slate-600">
        <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
        <p className="text-sm font-medium">{message}</p>
      </div>
    </div>
  );
}