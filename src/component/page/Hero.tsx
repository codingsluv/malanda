// import sateImage from "../../assets/sate_bg.jpeg";

export default function Hero() {
  const scrollToAddress = () => {
    const addressSection = document.querySelector("#address");
    if (addressSection) {
      addressSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <section className="py-28">
                <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
                    <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
                        <h1 className="text-sm text-indigo-600 font-medium">
                           Cita Rasa Sate Malanda
                        </h1>
                        <h2 className="text-4xl text-gray-800 font-extrabold md:text-5xl lg:text-6xl dark:text-slate-50">
                          Sate Tradisional, Rasa Sensasional!
                        </h2>
                        <p>
                        Warung Sate Malanda telah menjadi ikon kuliner lokal dengan cita rasa sate autentik yang melegenda. 
                        Kami menghidangkan sate dengan resep turun-temurun yang menggunakan bahan-bahan segar dan bumbu pilihan.
                        </p>
                        <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                            <button onClick={scrollToAddress} className="block py-2 px-4 text-center text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none">
                                Temukan Kami
                            </button>
                        </div>
                    </div>
                    <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
                        <img
                            src="/assets/sate_bg.jpeg"
                            className=" md:rounded-tl-[108px]"
                            alt=""
                        />
                    </div>
                </div>
            </section>
  );
}
