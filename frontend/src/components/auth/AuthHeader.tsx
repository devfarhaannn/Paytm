import { Link } from "react-router-dom";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  linkText: string;
  linkTo: string;
}

export const AuthHeader = ({
  title,
  subtitle,
  linkText,
  linkTo,
}: AuthHeaderProps) => {
  return (
    <div className="mb-8">

      {/* Title */}

      <h1 className="text-4xl font-bold text-slate-900">
        {title}
      </h1>

      {/* Subtitle */}

      <p className="mt-3 text-slate-500 leading-7">
        {subtitle}
      </p>

      {/* Link */}

      <p className="mt-4 text-sm text-slate-600">

        {linkText}

        <Link
          to={linkTo}
          className="ml-2 font-semibold text-indigo-600 hover:text-indigo-700"
        >
          Click here
        </Link>

      </p>

    </div>
  );
};