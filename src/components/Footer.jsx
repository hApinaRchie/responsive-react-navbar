import React from "react";

function Footer() {
  return (
    <footer className="m-3 flex items-center justify-center border-t border-slate-800 p-3 text-lg">
      <div className="text-center">
        <p>@fakeCopyright {new Date().getFullYear()}- All Right Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
