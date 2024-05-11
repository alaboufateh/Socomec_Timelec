import Calendar from "@/shared/Calendar/Calendar";
import CardBlue from "@/shared/CardBlue/CardBlue";
import CardProfile from "@/shared/CardProfile/CardProfile";
import Navbar from "@/shared/Navbar/Navbar";
function page() {
  const profile = {
    img: "/assets/ALATIME.png",
    name: "Boufateh Ala ",
    job: "Dépannage Eléctronique ",
    address: "BOUFATEH.ala@socomec.com",
    birth: "21/01/1998",
  };
  return (
    <div className="w-defaultwidth mx-auto md:flex  ">
      <div className="basis-3/5">
        <Navbar />
        <CardBlue />
      </div>
      <div className="basis-2/5 ">
        <CardProfile data={profile} />
        <Calendar />
      </div>
    </div>
  );
}

export default page;
