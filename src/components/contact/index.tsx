import Display from "./display";

import images from "~/images";

const { phone,message,location } = images;

export default function Contacts() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-bottom-back bg-cover bg-no-repeat w-full justify-center flex flex-col p-10">
        <div className="font-basic text-4xl text-white mb-8 flex justify-center">
          <p>
            Contact
          </p>
        </div>
        <div className="block lg:flex justify-around">
          <div className="flex lg:justify-center justify-start items-center my-2">
            <Display image={phone} />
            <p className="font-basic text-white ml-4 text-xl">01 45 72 30 32</p>
          </div>
          <div className="flex lg:justify-center justify-start items-center my-2">
            <Display image={message} />
            <p className="font-basic text-white ml-4 text-xl">contacts@dialogues.asso.fr</p>
          </div>
          <div className="flex lg:justify-center justify-start items-center my-2">
            <Display image={location} />
            <p className="font-basic text-white ml-4 text-xl"> 9, rue Beaujon 75008 Paris</p>
          </div>
        </div>
      </div>
    </div>
  );
}