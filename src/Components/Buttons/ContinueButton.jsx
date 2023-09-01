const ContinueButton = ({ onClick }) => {
  return (
    <div>
      <button
        className="btn px-7 py-3 font-medium md:px-6 bg-[var(--Moderate-cyan)] rounded-full text-white hover:bg-[var(--Dark-cyan)] cursor-pointer"
        onClick={onClick}
        type="button"
      >
        Continue
      </button>
    </div>
  );
};

export default ContinueButton;
