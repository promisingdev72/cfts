import Image from "next/image"
import Link from "next/link";
import images from '~/images'
import avatarItems from './avatar.json';

export default function Detail(){

    const { avatar1,avatar2,avatar3,symbol } = images;

    const urls = [avatar1,avatar2,avatar3];

    return(
        <>
            <div className="lg:flex">
                <div>
                    <p className="text-color2 font-bold md:text-3xl text-2xl lg:text-left text-center px-2">
                        Equipe de recherche
                    </p>
                    <div className="p-3">
                        {
                            avatarItems.map((item, index)=>(
                                <div className="sm:flex block py-3">
                                    <div className="sm: justify-center flex">
                                        <Image src={urls[index]}/>
                                    </div>
                                    <div className="flex-col flex justify-center mx-8 md:items-start items-center">
                                        <p className="text-color1 lg:text-3xl text-2xl font-bold">
                                            {item.title},
                                        </p>
                                        <p className="text-color1 lg:text-lg text-base font-bold">
                                            {item.detail}
                                        </p>
                                        <Link href={item.btnUrl}>
                                            <a className="text-color1 lg:text-xl text-lg"><u>Voir le profil</u></a>
                                        </Link>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="p-3">
                    <div>
                        <p className="text-color2 font-bold md:text-3xl text-2xl">Partenaires</p>
                        <p className="text-color1 font-bold md:text-2xl text-xl">
                            La Confédération Française <br/> des Travailleurs Chrétiens
                        </p>
                        <Image src={symbol}/>
                    </div>
                </div>
            </div>
        </>
    )
}