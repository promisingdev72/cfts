import Image from "next/image"
import images from '~/images'

export default function Event(){
    const {man} = images;
    return(
    <>
        <div className="bg-color5 p-4">
            <p className="text-color1 md:text-4xl text-3xl font-bold py-4">Les évènements associés</p>
            <div className="lg:flex block">
                <div className="lg:flex-none flex justify-center py-3">
                    <Image src={man}/>
                </div>
                <p className="text-color2 md:text-4xl text-3xl px-10">
                    Public and private labour regulation of global value chains: Intersections and interactions across levels and domains
                </p>
            </div>
            <br/>
            <div>
                <p className="text-color1 text-xl">
                    <span className="font-bold">Organisateurs :</span>
                    <span>Chikako OKA, Rémi Bourguignon, Markus Helfen (Freie University Berlin)</span>
                </p>
                <p className="text-color1 text-xl">
                    <span className="font-bold">Date :</span>
                    <span>29 mars 2022</span>
                </p>
            </div>
            <br/>
            <div>
                <p className="text-color1 text-xl">
                    The purpose of this online Paper Development Workshop was to gather leading and emerging researchers of various disciplinary backgrounds working on the topic of public and private regulation of global value chains. The workshop attracted a variety of high-quality papers or research ideas, with about 15 scholars from Austria, France, Denmark, Germany, South Africa, Sweden, the UK, and the US joining. 
                </p>
            </div>
        </div>
    </>
    )
}