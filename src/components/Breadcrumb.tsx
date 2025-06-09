import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const capitalize = (s: string) =>
    s.charAt(0).toUpperCase() + s.slice(1).replace("-", " ");

  return (
    <div className="flex flex-wrap items-center space-x-2 text-sm text-gray-500 font-medium my-4">
      <Link to="/" aria-label="Home" className="hover:text-indigo-600">
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 7.609c.352 0 .69.122.96.343l.111.1 6.25 6.25v.001a1.5 1.5 0 0 1 .445 1.071v7.5a.89.89 0 0 1-.891.891H9.125a.89.89 0 0 1-.89-.89v-7.5l.006-.149a1.5 1.5 0 0 1 .337-.813l.1-.11 6.25-6.25c.285-.285.67-.444 1.072-.444Zm5.984 7.876L16 9.5l-5.984 5.985v6.499h11.968z"
            fill="#475569"
            stroke="#475569"
            strokeWidth=".094"
          />
        </svg>
      </Link>

      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={to} className="flex items-center space-x-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m14.413 10.663-6.25 6.25a.939.939 0 1 1-1.328-1.328L12.42 10 6.836 4.413a.939.939 0 1 1 1.328-1.328l6.25 6.25a.94.94 0 0 1-.001 1.328"
                fill="#CBD5E1"
              />
            </svg>
            {isLast ? (
              <span className="text-primary">{capitalize(value)}</span>
            ) : (
              <Link to={to} className="hover:opacity-75">
                {capitalize(value)}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
