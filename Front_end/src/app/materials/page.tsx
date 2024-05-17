import CardBlue from "@/shared/CardBlue/CardBlue";
import Carousel from "@/shared/Carousel/Carousel";
import Navbar from "@/shared/Navbar/Navbar";

function materials() {
  const characteristics = { title: "caractéristique" };
  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
        <Carousel />
      </div>
      <div className="basis-2/5 ">
        <div className="w-defaultwidth2 m-auto bg-gradient-to-t from-white to-lightPurple rounded-xl">
          <div className="bg-blue rounded-xl text-white p-3 py-4 ">
            <p>Les caractéristiques :</p>
          </div>
          <div className="bg-lightPurple  p-3 rounded-b-xl ">
            <p className="text-blue text-xl">Diris'A20-A40' :</p>
          </div>
          <div className=" bg-white p-2 rounded-b-xl">
            <div className="flex  p-2">
              <img src="/assets/machine1.png" className="w-52 m-auto" />
            </div>
            <div className="py-2">
              <hr
                className={`border-[1px] border-lightPurple w-full  my-1 border-dashed `}
              />
              caractéristique1 : {characteristics.title}{" "}
            </div>
            <div className="py-2">
              {" "}
              <hr
                className={`border-[1px] border-lightPurple w-full  my-1 border-dashed `}
              />
              caractéristique2 : {characteristics.title}{" "}
            </div>
            <div className="py-2">
              <hr
                className={`border-[1px] border-lightPurple w-full  my-1 border-dashed `}
              />
              caractéristique3 : {characteristics.title}{" "}
            </div>
            <div className="py-2">
              <hr
                className={`border-[1px] border-lightPurple w-full  my-1 border-dashed `}
              />
              caractéristique4 : {characteristics.title}{" "}
            </div>
            <div className="py-2">
              <hr
                className={`border-[1px] border-lightPurple w-full  my-1 border-dashed `}
              />
              caractéristique5 : {characteristics.title}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default materials;
