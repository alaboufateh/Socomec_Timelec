import CardProfile from "@/shared/CardProfile/CardProfile";
function page() {
  const profile = {
    img: "/assets/fackUser.jpg",
    name: "string",
    job: "string",
    address: "string",
    birth: "string",
  };
  return (
    <div className="w-defaultwidth mx-auto flex  ">
      <div className="basis-2/3"></div>
      <div className="basis-1/3 ">
        <CardProfile data={profile} />
      </div>
    </div>
  );
}

export default page;
