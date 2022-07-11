import { GrFacebookOption } from "react-icons/gr";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import Image from "next/image";
import images from '~/images';

export default function Footer() {

  const {flogo,flogo2} = images;

  return (
    <>
      <div className="px-12 py-16 bg-color1 lg:block hidden">
        <div className="flex justify-between">
          <Image src={flogo}/>
          <div>
            <p className="text-white text-2xl">En partenariat avec</p>
            <Image src={flogo2}/>
          </div>
        </div>
        <div className="border-b-2 border-white flex py-4 w-full justify-between">
          <div>
            <div className="triangle1 relative px-7 text-color1 py-1 rounded-full bg-color5">
              Les projets
            </div>
          </div>
          <div className="text-white font-basic">
            <h6>La Chaire</h6>
            <h6>Les chercheurs</h6>
            <h6>Les axes de recherches</h6>
            <h6>Les enseignements</h6>
          </div>
          <div className="text-white font-basic">
            <h6>Publications</h6>
            <h6>Partenaires</h6>
            <h6>Evenements</h6>
            <div className="flex items-end justify-center my-3">
              <div className="mr-8">
                <IoLogoTwitter className="text-white text-2xl" />
              </div>
              <div className="mr-8">
                <GrFacebookOption className="text-white text-2xl" />
              </div>
              <div className="mr-8">
                <IoLogoLinkedin className="text-white text-2xl"/>
              </div>
              <div className="mr-8">
                <IoLogoYoutube className="text-white text-2xl" />
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-end">
              <p className="text-white font-basic text-3xl">Inscrivez-vous à notre newsletter</p>
              <div className="ml-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="outline-none w-64 p-1.5"
                />
              </div>
            </div>
            <div className="flex mt-4 justify-start">
              <div className="mr-2">
                <input type="checkbox"/>
              </div>
              <div className="text-white text-base font-basic">
                J’ai pris connaissance de la <u>Politique de confidentialité</u>
                de l'AMOMA.<br></br>
                Je peux me desinscrire à tout moment à l’aide des liens de
                desinscription <br></br>
                ou en contactant l'AMOMA à l’adresse desinscription@amoma.fr
              </div>
              <div className="ml-4">
                <button className="p-3 text-white font-basic text-lg bg-color2">
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-white text-xl">
            Mentions légales et crédits
          </p>
        </div>
      </div>
      <div className="px-12 py-16 bg-color1 block lg:hidden">
        <div className="border-b-2 border-white flex flex-col py-4 w-full justify-between">
          <div className="md:flex block items-center justify-around">
            <p className="text-white font-basic text-3xl flex justify-start py-2">Inscrivez-vous à notre newsletter</p>
            <div className="md:ml-4">
              <input
                type="email"
                placeholder="Email"
                className="outline-none w-64 p-1.5"
              />
            </div>
          </div>
          <div className="flex mt-6 justify-around">
            <div className="mr-2">
              <input type="checkbox"/>
            </div>
            <div className="text-white text-base font-basic">
              J’ai pris connaissance de la <u>Politique de confidentialité</u>
              de l'AMOMA.<br></br>
              Je peux me desinscrire à tout moment à l’aide des liens de
              desinscription <br></br>
              ou en contactant l'AMOMA à l’adresse desinscription@amoma.fr
            </div>
            <div className="ml-4">
              <button className="p-2 text-white font-basic text-lg bg-color2">
                OK
              </button>
            </div>
          </div>
          <div className="md:flex block mt-6">
            <div>
              <div className="triangle1 relative px-7 text-color1 py-1 rounded-full bg-color5">
                Les projets
              </div>
            </div>
            <div className="text-white font-lg mr-6">
              <h6>La Chaire</h6>
              <h6>Les chercheurs</h6>
              <h6>Les axes de recherches</h6>
              <h6>Les enseignements</h6>
            </div>
            <div className="text-white font-lg">
              <h6>Publications</h6>
              <h6>Partenaires</h6>
              <h6>Evenements</h6>
            </div>
          </div>
          <div className="flex items-end mx-8 justify-start mt-6">
            <div className="mr-8">
              <IoLogoTwitter className="text-white text-2xl" />
            </div>
            <div className="mr-8">
              <GrFacebookOption className="text-white text-2xl" />
            </div>
            <div className="mr-8">
              <IoLogoLinkedin className="text-white text-2xl"/>
            </div>
            <div className="mr-8">
              <IoLogoYoutube className="text-white text-2xl" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-white text-lg">
            Mentions légales et crédits
          </p>
        </div>
      </div>
    </>
  );
}
