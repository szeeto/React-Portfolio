import DataImage from "./data"
import { listTools } from "./data";

function App() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Kode Yang Indah, Lahir Dari Ketekunan.😁</q>
          </div>
          <h1 className="text-5xl font-bold mb-6">His, Saya <span className="text-blue-600">Patra Sawali</span></h1>
          <p className="text-lg text-gray-400 mb-6">Saya adalah seorang pelajar yang tertarik pada dunia IT, khususnya dalam bidang pemrograman web. Saya senang mempelajari berbagai teknologi seperti HTML, CSS, JavaScript, dan framework modern untuk mengembangkan situs web yang interaktif dan responsif. Selain itu, saya juga memiliki minat untuk terus mengasah kemampuan logika dan pemecahan masalah melalui proyek-proyek kecil maupun pembelajaran mandiri.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px] md:ml-auto" />
      </div>
      {/* End Hero Section */}

      {/* About Section */}
      <div className="about mt-32 py-10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg ">
        <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden items-center"/>
          <p className="text-base/loose mb-10 ">Hi, Saya<span className="text-blue-600 font-semibold ">Patra Sawali</span>, seorang pelajar yang memiliki ketertarikan besar di bidang IT, khususnya dalam pengembangan web.
            Saya senang menciptakan tampilan dan sistem web yang tidak hanya menarik secara visual, tetapi juga fungsional dan efisien.
            Melalui portofolio ini, saya ingin berbagi hasil karya, pengalaman belajar, serta proyek yang telah saya kembangkan selama perjalanan saya di dunia pemrograman web.</p>
            <div className="flex items-center justify-between">
              <img src={DataImage.HeroImage} alt="About Image" className="w-12 rounded-md sm:block hidden"/>
              <div className="flex items-center gap-2">
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>Project Selesai</p>
              </div>
              <div className="flex items-center gap-2s">
                <h1 className="text-4xl mb-1">
                  1<span className="text-violet-500">+</span>
                </h1>
                  <p>Tahun Pengalaman</p>
                </div>

            </div>
        </div>
      </div>
      <div className="tools mt-32">
        <h1 className="text-4xl/snug font-bold mb-4">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50">Berikut beberapa tools yang saya gunakan dalam pengembangan web adalah sebagai berikut</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
        grid-cols-1 gap-4">

          {listTools.map(tool => (<div className="flex items-center gap-2 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}>
            <img src={tool.gambar} alt="tools-image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
             <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.keterangan}</p>
             </div>
          </div>))}

          
        </div>
      </div>
    </>
  );
}

export default App
