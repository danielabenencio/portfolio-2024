import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { GrDocumentDownload } from "react-icons/gr";
import CV from "../assets/CV-Daniela-Benencio-2024.pdf"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <p className="mx-2 w-10 text-5xl text-white">DB</p>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
           <a href="https://www.linkedin.com/in/daniela-benencio-56716914a/"><FaLinkedin /></a> 
          <a href="https://github.com/danielabenencio"><FaGithub /></a>
          <a href={CV}><GrDocumentDownload /></a> 
        </div>
    </nav>
  )
}

export default Navbar
