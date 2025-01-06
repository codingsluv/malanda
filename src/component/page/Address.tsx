export default function Address() {
  return (
    <div className="container mx-auto py-6 size-100">
        <div id="address" className="card md:card-side bg-base-200">
      <figure>
        <img
          src="/assets/maps.png"
          alt="Maps"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Alamat Kami</h2>
        <p>X88V+X8C, Suka Jaya, Kec. Tempunak, Kabupaten Sintang, Kalimantan Barat 78661</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Lihat di Maps</button>
        </div>
      </div>
    </div>
    </div>
  );
}
