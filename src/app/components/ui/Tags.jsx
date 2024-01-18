export default function Tags({ tag, id }) {
  return (
    <div
      key={id}
      className="relative cursor-default border-2 border-myblue-800 bg-mygreen-500 px-2 py-2 font-mainfont text-2xl  font-light tracking-wide text-myblue-800 md:py-2 md:text-xl"
    >
      {tag}
      {/* <div className="absolute -bottom-[100%] left-0 -z-10 h-full w-full -translate-y-[80%] scale-[95%] rounded-full bg-mypink-500"></div> */}
    </div>
  );
}
