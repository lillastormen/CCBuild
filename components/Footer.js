import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <div className="text-white flex flex-col justify-between items-center bg-zodiac w-full mt-16 pb-16">
            <div>
                <h2 className="font-poppins font-medium text-2xl mt-16 my-4">CCBuild.se - Produktbanken</h2>
            </div>
            <ul className="flex flex-row gap-5 underline decoration-solid my-2 ">
                <li>Start</li>
                <li>Projekt</li>
                <li>Produkter</li>
                <li>Efterlysningar</li>
                <li>Organisationsadmin</li>
                <li>Värdeanalys</li>
                <li>Märkning</li>
                <li>Hjälp</li>
            </ul>
            <div>
                <h3 className="font-poppins font-medium text-xl my-3">CCBuild har utvecklas med stöd från Vinnova - läs mer på {" "}
                <Link href="https://ccbuild.se" className="underline decoration-solid">    
                    www.ccbuild.se
                </Link>
                </h3>
            </div>
            <div>
               
                <div className="flex flex-row gap-4 my-3">
                    <h3 className="font-poppins font-medium text-xl">Följ oss på sociala medier</h3>
                        <div>
                            <Image 
                                src='/icons/facebook.svg'
                                width={12.5}
                                height={16}
                                alt="facebook"
                            />
                        </div>
                        <div>
                            <Image 
                                src='/icons/instagram.svg'
                                width={17.5}
                                height={20}
                                alt="instagram"
                            />
                        </div>
                        <div>
                            <Image 
                                src='/icons/linkedin.svg'
                                width={17.5}
                                height={20}
                                alt="linkedin"
                            />
                        </div>
                        <div>
                            <Image 
                                src='/icons/youtube.svg'
                                width={22.5}
                                height={20}
                                alt="youtube"
                            />
                        </div>
                    </div>
                </div>
        </div>
    )
}