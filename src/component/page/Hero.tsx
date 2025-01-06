// import sateImage from "../../assets/sate_bg.jpeg";

export default function SliderImage() {
  const scrollToAddress = () => {
    const addressSection = document.querySelector("#address");
    if (addressSection) {
      addressSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/assets/sate_bg.jpeg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Sate Tradisional, Rasa Sensasional!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button onClick={scrollToAddress} className="btn btn-primary">Temukan Kami</button>
        </div>
      </div>
    </div>
  );
}
