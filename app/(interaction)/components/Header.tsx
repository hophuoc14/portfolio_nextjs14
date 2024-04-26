import { Img } from "@react-email/components";

// TODO: get data from tags api
const suggestions = [
  {
    name: "Flexbox",
    slug: "flexbox",
  },
  {
    name: "Flexbox",
    slug: "flexbox",
  },
  {
    name: "Flexbox",
    slug: "flexbox",
  },
  {
    name: "Flexbox",
    slug: "flexbox",
  },
];

export const InteractionHeader = () => {
  return (
    <div
      style={{ backdropFilter: "blur(12px)" }}
      className="w-full fixed flex justify-center bg-[#02061765]"
    >
      <div className="w-3/5 flex gap-11 overflow-hidden  py-2 justify-between items-center">
        <Img
          src="https://www.gstatic.com/devrel-devsite/prod/v2a398f8757b82183cb182aec0e7c4771ac1123a40d36fc97c8783f6df9b3c672/web/images/lockup.svg"
          width={150}
          height={150}
          alt="Anonydev logo"
        />
        <div className="flex gap-4">
          {suggestions.map((suggestion, index) => {
            return (
              <div className="flex items-center gap-1" key={index}>
                <span className="font-medium cursor-pointer">
                  {suggestion.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
