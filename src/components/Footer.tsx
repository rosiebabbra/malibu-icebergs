import { SocialIcon } from 'react-social-icons'


function Footer() {
    return (
        <div>
            <footer className="bg-[#f6f6ef] relative shadow-[0_-4px_10px_#CBD5E180] flex items-center w-screen">
                <div className="mx-auto my-6 flex flex-row items-center space-x-32">
                    <img className="h-6" src="./malibu_tides_.png" alt="Logo" />
                    <div>
                        <SocialIcon network='linkedin' bgColor='black' target='_blank' href="https://www.linkedin.com/company/malibu-icebergs/" className='max-w-[28px] max-h-[28px] md:max-h-[35px] md:max-w-[35px] mr-[3px]' />
                        <SocialIcon network='instagram' bgColor='black' target='_blank' href="https://www.instagram.com/malibuicebergs" className='max-w-[28px] max-h-[28px] md:max-h-[35px] md:max-w-[35px] mr-[3px]' />
                        {/* <SocialIcon network='spotify' bgColor='black' target='_blank' href="https://open.spotify.com/playlist/06CFTrFItOExHj1jtPIejH?si=e4b4817985384213" className='max-w-[30px] max-h-[30px] md:max-h-[37px] md:max-w-[37px] mr-[3px]' /> */}
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
