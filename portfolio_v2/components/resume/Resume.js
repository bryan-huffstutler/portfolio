import Image from 'next/image'

function Resume(prop) {
    return ( 
        <div className="p-8 m-32 mr-20 ml-20 leading-7 font-mono border-4">
            <Image src='/images/Madison-logo.png' alt="madison-logo" width={500} height={200} />
            <ul>
                <li></li>
            </ul>
        </div>
     );
}

export default Resume;