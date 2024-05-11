import CardProfile from "@/shared/CardProfile/CardProfile";

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
        card edit
      </div>
      <div className="basis-2/5 ">
        <CardProfile data={profile} />

      </div>
    </div>
  );
}

export default page;
