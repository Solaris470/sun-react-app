import { space } from "postcss/lib/list";
import { cards } from "./data";

function IsMemeber ({ active } : { active:boolean }){
  if(active)
    return <span>✅ Hi, VIP Member.</span>
  else
    return <span>❌ Your are not Member!</span>
}

function Profile({
  id,
  name,
  biog,
  bgProf,
  userIcon,
  userName,
  createdAt,
  active,
}: {
  id: number;
  name: string;
  biog: string;
  bgProf: string;
  userIcon: string;
  userName: string;
  createdAt: string;
  active: boolean;
})
{
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex p-3">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgProf})` }}
        title="Woman holding a mug"
      ></div>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
          <IsMemeber active={active} />
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            {biog}
          </p>
        </div>
        <div className="flex items-center">
          <img
           src={userIcon}
            className="w-10 h-10 rounded-full mr-4"
            alt="Avatar of Jonathan Reinink"
          />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{userName}</p>
            <p className="text-gray-600">{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyCards() {
  const name = "Sunny Sontirak";
  const note = "Hello frontend developer ";
  const chk = true;

  const cardItems = cards.map((cardItem) => (
    <Profile 
    id={cardItem.id}
    name={cardItem.name}
    biog={cardItem.biog}
    bgProf={cardItem.bgProf}
    userIcon={cardItem.userIcon}
    userName={cardItem.userName}
    createdAt={cardItem.createdAt}
    active={cardItem.active}
    />
  ));

  return (
    <>
      <h1>My Cards: {name}</h1>
      <p>{note}</p>
      <hr />
      {/* <Profile /> */}
      <hr />
      {cardItems}
    </>
  );
}
