import DataImage from "./data"
import { listTools, listProyek } from "./data";
import {BlogArticle} from "./data"

function App() {
  return (
    <>
      {/* Hero Section */}
      <div id="Home" className="hero grid md:grid-cols-2 pt-20 items-center xl:gap-0 gap-6 grid-cols-1 scroll-mt-20">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" />
            <q>Kode Yang Indah, Lahir Dari Ketekunan.😁</q>
          </div>
          <h1 className="text-5xl font-bold mb-6">Hi, Saya <span className="text-blue-600">Patra Sawali</span></h1>
          <p className="text-lg text-gray-400 mb-6">Saya adalah seorang pelajar yang tertarik pada dunia IT, khususnya dalam bidang pemrograman web. Saya senang mempelajari berbagai teknologi seperti HTML, CSS, JavaScript, dan framework modern untuk mengembangkan situs web yang interaktif dan responsif. Selain itu, saya juga memiliki minat untuk terus mengasah kemampuan logika dan pemecahan masalah melalui proyek-proyek kecil maupun pembelajaran mandiri.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="#" className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600">Download CV <i className="ri-download-line ri-lg"></i></a>
            <a href="#Projects" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600">Lihat Project <i className="ri-arrow-down-line ri-lg"></i></a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="animate__animated animate__fadeInUp animate__delay-4s w-[500px] md:ml-auto" />
      </div>
      {/* End Hero Section */}

      {/* About Section */}
      <div className="about mt-32 py-10 scroll-mt-20" id="About">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg " data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.HeroImage} alt="image" className="w-12 rounded-md mb-10 sm:hidden items-center" />
          <p className="text-base/loose mb-10 ">Hi,Saya <span className="text-blue-600 font-semibold ">Patra Sawali</span>, seorang pelajar yang memiliki ketertarikan besar di bidang IT, khususnya dalam pengembangan web.
            Saya senang menciptakan tampilan dan sistem web yang tidak hanya menarik secara visual, tetapi juga fungsional dan efisien.
            Melalui portofolio ini, saya ingin berbagi hasil karya, pengalaman belajar, serta proyek yang telah saya kembangkan selama perjalanan saya di dunia pemrograman web.</p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="About Image" className="w-12 rounded-md sm:block hidden" />
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
        <h1 className="text-4xl/snug font-bold mb-4"  data-aos="fade-up" data-aos-duration="1000">Tools yang dipakai</h1>
        <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"  data-aos="fade-up" data-aos-delay="200">Berikut beberapa tools yang saya gunakan dalam pengembangan web adalah sebagai berikut.</p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
        grid-cols-1 gap-4">

          {listTools.map(tool => (<div className="flex items-center gap-2 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
            <img src={tool.gambar} alt="tools-image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
            <div>
              <h4 className="font-bold">{tool.nama}</h4>
              <p className="opacity-50">{tool.ket}</p>
            </div>
          </div>))}
        </div>
      </div>
      {/* End About */}

      {/* Project Section */}
      <div id="Projects" className="project mt-4 py-10 scroll-mt-20">
        <h1 className="text-center text-4xl font-bold mb-2"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Berikut beberapa project yang telah saya buat</p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 rounded-md bg-zinc-800" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
              <img src={proyek.gambar} alt="proyek.image" />
              <div>
                <h1 className=" text-2xl font-bold my-4 ">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tools, index) => (
                    <p key={index} className="py-1 px-3 border-zinc-500 font-semibold border bg-zinc-600">{tools}</p>
                  ))}
                </div>
                <div className="mt-8 text-center ">
                  <a href="#" className="bg-violet-700 p-3 rounded-b-lg block border border-zinc-600 hover:bg-violet-600">Lihat Website</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* end Project Section */}

      {/* Blog Article Section */}
      <div className="blog-article mt-32 scroll-mt-20" id="Articles">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Blog Article</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Artikel terbaru dari saya</p>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {BlogArticle.map((article) => (
            <div key={article.id} className="bg-zinc-800 rounded-lg overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={article.dad}>
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover"/>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-400 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">{article.date}</span>
                  <a href={article.link} className="text-violet-500 hover:text-violet-400">Baca selengkapnya →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* End Blog Article Section */}

      {/*contact section*/}
      <div id="Contact" className="contact mt-32 sm:p-10 p-10 scroll-mt-20">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">Mari terhubung dengan saya</p>
        <form action="https://formsubmit.co/patrasawali93@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukan Nama..." required className="border border-zinc-500 p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukan Email..." required className="border border-zinc-500 p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Masukan Pesan..." required className="border border-zinc-500 p-2 rounded-md"></textarea>
            </div>
            <div className="">
              <button type="submit" className="bg-violet-700 p-3 rounded-b-lg block border border-zinc-600 hover:bg-violet-600 w-full cursor-pointer">Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
      {/* end contact section */}
    </>
  );
}

export default App;
