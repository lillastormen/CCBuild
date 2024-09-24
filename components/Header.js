import Image from "next/image"

export default function Header() {
    return (
        <div className="flex flex-row justify-between items-center w-full px-2 pt-3">
            <div>
                <Image 
                    src='/images/ccbuild_logo.jpeg'
                    width={180}
                    height={100}
                    alt='CCBuild logo'
                />
            </div> 
            <div className="flex gap-10">
                <div>
                    <h2>CCBUILD</h2>
                </div>
                <div>
                    <h2>TJÄNSTER</h2>
                </div>
                <div className="flex flex-row justify-between">
                    <h2>MARKNADPLATSEN</h2>
                    <Image 
                        src='/icons/SVG.svg'
                        width={16}
                        height={16}
                        alt="arrow"
                    />
                    
                </div>
                <div className="flex">
                    <h2>PRODUKTBANKEN</h2>
                    <Image 
                        src='/icons/SVG.svg'
                        width={16}
                        height={16}
                        alt="arrow"
                    />
                </div>
                <div className="flex">
                    <h2>USER</h2>
                    <Image 
                        src='/icons/SVG.svg'
                        width={16}
                        height={16}
                        alt="arrow"
                    />
                </div>
                <div className="flex">
                    <h2>SV</h2>
                    <Image 
                        src='/icons/SVG.svg'
                        width={16}
                        height={16}
                        alt="arrow"
                    />
                </div>
            </div>
        </div>
        )
}