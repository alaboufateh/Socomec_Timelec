
function CardProfile(props: {
    data?: {
        img: string
        name: string
        job: string
        address: string
        birth: string
    }
}) {
    return (
        <div className='w-defaultwidth m-auto'>
            <div className="bg-blue rounded-xl text-white p-3">My profile</div>
            <div className="flex w-full ">
                <div className="basis-2/6">
                    <img src={props.data?.img} className="rounded-full" alt={props.data?.name} />
                </div>
                <div className="basis-4/6 ">
                    <div className="">{props.data?.name}</div>
                    <div className="">{props.data?.job}</div>
                    <div className="">{props.data?.address}</div>
                </div>
            </div>
            <div className="flex">
                <div className="basis-1/3">{props.data?.birth}</div>
                <hr />
                <div className="basis-1/3">{props.data?.birth}</div>
                <hr />
                <div className="basis-1/3">{props.data?.birth}</div>
            </div>
        </div>
    )
}

export default CardProfile