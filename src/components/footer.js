import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-6 lg:px-10 py-4 pt-10 text-sm">
        <div className="text-base sm:text-lg mb-4">
          Ada sesuatu yang kurang nggak?{" "}
          <a href="#" className="underline">
            bantu nambahin konten disini
          </a>
        </div>
        <Link to="/disclaimer/" className="text-gray-500 uppercase">
          Disclaimer
        </Link>
        <div className="text-gray-500">
          © {new Date().getFullYear()}, Hasil gabut dari{" "}
          <a href="#" className="underline">
            Arian
          </a>
          ,{" "}
          <a href="#" className="underline">
            Wahyu
          </a>
          , dan{" "}
          <a href="#" className="underline">
            Lintang
          </a>
          . Terinspirasi dari{" "}
          <a href="#" className="underline">
            canigo.sg
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
