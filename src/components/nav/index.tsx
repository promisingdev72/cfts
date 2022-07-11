import Image from 'next/image';
import images from '~/images'

const { logo } = images

export default function Navigation({num1, num2}){
    const resultat = num1 + num2; 
    return(
        <nav className='flex h-24'>
            <div className='mt-1.5'>
            <Image src={logo} width={80} height={81} />
            </div>
            <p className='mt-10 ml-4 font-semibold uppercase text-slate-500'>Rejoindre l'équipe</p>
        </nav>
    )
} 