import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-6 lg:px-10 py-4 pt-10 text-sm">
        <div className="text-base sm:text-lg mb-4">
          Ada sesuatu yang kurang nggak?{" "}
          <a
            href="https://docs.google.com/spreadsheets/d/16skDPETqaL8RXGsfhDtWsNLLtOabbE76Tfw_IzmR0Bg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            bantu nambahin konten disini
          </a>
        </div>
        <Link to="/disclaimer/" className="text-black underline uppercase">
          Disclaimer →
        </Link>
        <div className="text-gray-500">
          © {new Date().getFullYear()}, Hasil gabut dari{" "}
          <a
            href="https://id.linkedin.com/in/arianpradana"
            className="text-black underline"
          >
            Arian
          </a>
          ,{" "}
          <a
            href="https://twitter.com/wahyuwidharto"
            className="text-black underline"
          >
            Wahyu
          </a>
          , dan{" "}
          <span className="text-black">
            Lintang
          </span>
          . Terinspirasi dari{" "}
          <a
            href="https://canigo.sg/"
            target="_blank"
            className="text-black underline"
            rel="noopener noreferrer"
          >
            canigo.sg
          </a>
        </div>
      </div>
    </footer>
  )
}
export default Footer
