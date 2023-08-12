import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex text-slate-50 items-center tracking-widest text-lg justify-center h-screen">
      <section className="">
        <h1>Oops!</h1>
        <p>Sorry, unexpected error has occurred.</p>
        <p>
          <b>Page Not Found</b>
        </p>
        <span>
          <Link
            to="/"
            className="hover:text-slate-200 text-blue-700 hover:ease-in-out duration-300 underline"
          >
            Go to Home page
          </Link>
        </span>
      </section>
    </div>
  );
}

export default ErrorPage;
