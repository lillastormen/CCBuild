import Image from "next/image"


export default function Header() {
    return (
        <div className="flex flex-col">
            <div className="font-inter font-bold flex flex-row justify-between items-center w-full px-2 pt-3">
                <div>
                    <Image 
                        src='/images/ccbuild_logo.jpeg'
                        width={180}
                        height={100}
                        alt='CCBuild logo'
                    />
                </div> 
                <ul className="flex gap-8 text-xs items-center">
                    <li>
                        <h2>CCBUILD</h2>
                    </li>
                    <li>
                        <h2>TJÄNSTER</h2>
                    </li>
                    <li>
                        <button className="flex items-center gap-1 ">
                        <h2>MARKNADPLATSEN</h2>
                            <Image 
                                src='/icons/arrow_icon.svg'
                                width={16}
                                height={16}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center gap-1 ">
                            <h2>PRODUKTBANKEN</h2>
                            <Image 
                                src='/icons/arrow_icon.svg'
                                width={16}
                                height={16}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center gap-1 border border-geyser rounded-full bg-geyser px-4 py-2">
                            <Image 
                                src='/icons/user_icon.svg'
                                width={16}
                                height={16}
                                alt="user"
                            />
                            <h2>LARS LARSSON</h2>
                            <Image 
                                src='/icons/arrow_icon.svg'
                                width={16}
                                height={16}
                                alt="arrow"
                            />
                        </button>
                    </li>
                    <li>
                        <button className="flex items-center gap-1 border border-geyser rounded-full bg-geyser px-4 py-2">
                            <h2>SV</h2>
                            <Image 
                                src='/icons/arrow_icon.svg'
                                width={16}
                                height={16}
                                alt="arrow"
                            />
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex flex-row justify-between items-center bg-zodiac w-full px-4 py-4 my-3">
                <ul className="flex gap-10 text-white text-xs">
                    <li>
                        <h2>ÖVERSIKT</h2>
                    </li>
                    <li>
                        <h2 className="underline decoration-solid">PROJEKT</h2>
                    </li>
                    <li>
                        <h2>PRODUKTER</h2>
                    </li>
                    <li>
                        <h2>EFTERLYSNINGAR</h2>
                    </li>
                    <li>
                        <h2>ORGANISATIONSADMIN</h2>
                    </li>
                    <li>
                        <h2>VÄRDEANALYS</h2>
                    </li>
                    <li>
                        <h2>MÄRKNING</h2>
                    </li>
                    <li>
                        <h2>HJÄLP</h2>
                    </li>
                </ul>
                <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <Image 
                        src='/icons/search_icon.svg'
                        width={20}
                        height={20}
                        alt="search"
                    />
                    </span>
                    <input 
                        className="bg-white/[.07] rounded-sm w-96 py-3 pl-10 pr-8 text-xs placeholder-white" 
                        placeholder="Sök produkter, kategorier..." 
                        type="text" 
                        name="search"
                    />
                </div>        
            </div>
        </div>
        
        )
}