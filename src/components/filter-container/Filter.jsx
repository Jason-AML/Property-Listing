export const Filter = ({ options = [], onChange }) => {
  return (
    <section className=" bg-gray-800 text-white flex justify-center items-center ">
      <div className=" h-[50px] items-center flex-wrap hidden md:flex gap-x-5 ">
        <ul className="flex gap-5 flex-wrap">
          {options.length > 0 ? (
            options.map((opt) => (
              <li key={opt}>
                <button className="btn btn-ghost" onClick={() => onChange(opt)}>
                  {opt}
                </button>
              </li>
            ))
          ) : (
            <p>NO DATA</p>
          )}
        </ul>
      </div>
    </section>
  );
};
