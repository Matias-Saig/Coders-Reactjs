import { useNavigate } from "react-router-dom";

function NavigateGoBack({classAdd}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <button
        onClick={handleGoBack}
        className={`self-start uppercase text-zinc-50 font-extrabold bg-teal-500 rounded-full py-1 px-4 shadow-md ${classAdd}`}
      >
        &lt; volver
      </button>
    </>
  );
}

export default NavigateGoBack;
