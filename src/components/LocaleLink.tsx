import { Link, LinkProps } from "react-router-dom";
import { useLocale } from "@/lib/i18n";

interface LocaleLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}

/**
 * A Link component that automatically prepends the current locale prefix.
 * Use this instead of react-router's Link for internal navigation.
 */
const LocaleLink = ({ to, ...props }: LocaleLinkProps) => {
  const { localePath } = useLocale();
  return <Link {...props} to={localePath(to)} />;
};

export default LocaleLink;
