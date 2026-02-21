import { useNavigate } from "react-router-dom";
import { useLocale } from "@/lib/i18n";
import { useCallback } from "react";

/**
 * A locale-aware navigate function. Prepends the current locale to paths.
 */
export function useLocaleNavigate() {
  const navigate = useNavigate();
  const { localePath } = useLocale();

  return useCallback(
    (path: string, options?: { replace?: boolean }) => {
      navigate(localePath(path), options);
    },
    [navigate, localePath]
  );
}
