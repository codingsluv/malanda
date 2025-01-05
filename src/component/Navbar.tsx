export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Tentang</a></li>
      <li>
        <details>
          <summary>See More</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Alamat</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  );
}
