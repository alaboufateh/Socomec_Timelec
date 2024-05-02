import Calendar from "@/shared/Calendar/Calendar";
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
      <div className="basis-2/3">
        <Navbar />
      </div>
      <div className="basis-1/3 ">
        <CardProfile data={profile} />
        <Calendar />
      </div>
    </div>
  );
}

export default page;
