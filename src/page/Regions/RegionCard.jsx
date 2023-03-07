export default function RegionCard({
  region,
  gen,
  pokemon1,
  pokemon2,
  pokemon3,
  bgImage,
}) {
  return (
    <div className={`mb-3 flex h-[100px] items-center justify-between rounded-2xl  ${bgImage} bg-cover`}>
      <div class="absolute h-full w-full rounded-2xl bg-gradient-to-r from-[rgba(0,0,0,0.8)]"></div>
      <div className="z-0 flex h-full flex-col justify-center px-6 ">
        <div className="font-Bold text-white">{region}</div>
        <div className="text-xs text-gray-300">{gen}º Generation</div>
      </div>
      <div className="z-0 flex h-[100px] items-center px-6">
        <div className="h-[50px] w-[50px]">
          <img
            src={`src/img/pokemons/${pokemon1}_3.png`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[50px] w-[50px]">
          <img
            src={`src/img/pokemons/${pokemon2}_3.png`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="h-[50px] w-[50px]">
          <img
            src={`src/img/pokemons/${pokemon3}_3.png`}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
