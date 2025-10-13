export const Filter = ({ options = [], onChange }) => {
  return (
    <section className="absolute -bottom-12 bg-gray-800 text-black left-1/2 -translate-x-1/2 w-[80%] h-[100px] flex justify-center items-center rounded-2xl">
      <div className="  items-center flex-wrap hidden md:flex gap-x-5 ">
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
        <div className="flex gap-5">
          <input type="checkbox" defaultChecked className="toggle" />
          <label htmlFor="filter">
            <select name="" id="filter">
              {options.length > 0 ? (
                options.map((opt) => (
                  <option value="" key={opt}>
                    {opt}
                  </option>
                ))
              ) : (
                <option>NO DATA</option>
              )}
            </select>
          </label>
        </div>
      </div>
      <div className="flex justify-start md:hidden">
        <button className="btn btn-primary">Filtrar</button>
      </div>
    </section>
  );
};
