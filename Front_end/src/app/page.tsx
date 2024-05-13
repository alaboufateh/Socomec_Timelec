import Calendar from "@/shared/Calendar/Calendar";
import CardBlue from "@/shared/CardBlue/CardBlue";
import CardMachine from "@/shared/CardMachine/CardMachine";
import CardProfile from "@/shared/CardProfile/CardProfile";
import Navbar from "@/shared/Navbar/Navbar";
function page() {
  const profile = {
    img: "/assets/fackUser.jpg",
    name: "string string string ",
    job: "string string ",
    address: "string string string string",
    birth: "string",
  };
  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
        <CardMachine />
      </div>
      <div className="basis-2/5 ">
        <CardProfile data={profile} icon={true} />
        <Calendar />
      </div>
    </div>
  );
}

export default page;
