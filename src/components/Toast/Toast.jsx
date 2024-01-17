import toast, { Toaster } from "react-hot-toast";

function Toast({ children, classAdd }) {
  return (
    <>
      <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />

      {toast.custom((t) => (
        <div
          className={`${t.visible ? "animate-enter" : "animate-leave"} 
          bg-sky-100 p-5 shadow-lg shadow-slate-400 rounded-xl flex ring-1 ring-slate-600 ring-opacity-5`}
        >
          <div className={classAdd}>{children}</div>

          <button onClick={() => toast.dismiss(t.id)} className="ml-5">
            <img
              src="/public/img/Navbar/close-1.png"
              className="w-6 opacity-70 hue-rotate-180 hover:hue-rotate-0 hover:opacity-100"
              alt="close"
            />
          </button>
        </div>
      ))}
    </>
  );
}

export default Toast;
