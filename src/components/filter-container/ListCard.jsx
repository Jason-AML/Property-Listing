export const ListCard = ({ data, loading }) => {
  return (
    <div className=" relative min-h-screen z-10 bg-[#121826] text-white pt-16 ">
      {!loading ? (
        <>
          <h2 className="text-5xl ">Over {data.length} stays </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            {data.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl w-85 border-2 border-gray-800 "
              >
                {" "}
                {/*IMAGEN CARD */}
                <figure className="relative">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-t-2xl relative "
                  />
                  {/*ICON SUPERHOST */}
                  {item.superhost && (
                    <div className="absolute top-2 left-3 rounded-2xl bg-gray-900 px-2">
                      <p className="flex justify-center items-center gap-1">
                        superhost <i className="bxr bx-star text-yellow-300" />
                      </p>
                    </div>
                  )}
                </figure>
                {/*BODYCART */}
                <div className="px-5">
                  <div className="flex flex-col h-55 overflow-hidden">
                    <h3 className="text-2xl">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                  {/*BODY capacity */}
                  <div className="py-5">
                    <div className="flex gap-2">
                      <p className="flex items-center gap-1">
                        <i className="bxr  bx-toilet-roll"></i>
                        bedroom: {item.capacity.bedroom}
                      </p>
                      <p className="flex items-center gap-1">
                        <i className="bxr  bx-people-handshake text-2xl"></i>{" "}
                        guest: {item.capacity.people}
                      </p>
                    </div>
                  </div>
                </div>
                {/*BODY footer */}
                <div className="flex justify-between items-center p-5 border-t-2 border-amber-50">
                  <p className="text-gray-500">
                    <strong className="text-white font-bold text-2xl">
                      {item.price}
                    </strong>
                    /night
                  </p>
                  <p className="flex items-center gap-2">
                    {item.rating}
                    <i
                      className="bxr  bxs-star"
                      style={{ color: "#fff900" }}
                    ></i>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-400 text-center mt-10 animate-pulse">
          cargando...
        </p>
      )}
    </div>
  );
};
