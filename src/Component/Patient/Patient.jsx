import patient from "../../assets/momen.jpeg"
const Patient = () => {
    return (
        <div className="text-center">
            <h1 className="text-3xl text-custom-blue font-semibold">WHAT OUR PATIENTS SAY ABOUT US</h1>
            <p className="px-16 my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit non, nam officia repellat rerum quas suscipit nihil! Nihil incidunt fuga qui debitis? Porro earum ipsa nulla facilis magnam, provident natus reprehenderit neque delectus ducimus fuga ullam voluptatibus aliquid pariatur odit tenetur suscipit sint atque. Quos, commodi. Nostrum atque commodi quisquam earum repudiandae. Recusandae tempore aut voluptates ipsa dicta, quae quod inventore numquam, optio est distinctio officia dolores facere repellendus ipsum. Fugit odit facilis ipsa eaque voluptatum modi atque laudantium, incidunt cupiditate optio. Eum, enim? Velit, provident voluptatibus. Dolores sed at et iusto nobis amet ea labore debitis quos, consectetur nam.</p>
            <img src={patient} className="w-16 mx-auto rounded-3xl mb-1" alt="" />
            <p className="text-custom-blue">Md. Momin Hossain</p>
            <p>Heart Patients</p>
        </div>
    );
};

export default Patient;