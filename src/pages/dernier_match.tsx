import Image from 'next/image'
import images from '~/images'
const { illust } = images

export default function DernierMatch() {
  return (
    <div className="">
        <p className="text-xl font-semibold uppercase text-green-500 mb-4">
          A.S.C.P - C.S POUCHET - 5 février
        </p>
        <div className="">
          <Image src={illust} />
        </div>
        <p className="text-xl font-semibold uppercase text-white">5-0</p>
        <p className="text-xl font-semibold uppercase text-white">
          une grande amelioration du cotès de l' A.S l'ecart c'est reduit de 16
          but au match aller a 5 au retour
        </p>
      </div>
  )
}
