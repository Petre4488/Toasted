import Button from 'react-bootstrap/Button';
import SponsorCard from '../Components/SponsorCard';
import '../App.css';
import imgTest from '../assets/ThirdImage.jpg'

export default function Sponsors() {
    return(
        <div>
            <h1 className='pt-3' >Sponsors</h1>
            <div className='d-flex justify-content-end align-items-center '>
                <Button variant="outline-info">Support us!</Button>{' '}
            </div>
            <div className='d-flex align-items-center justify-content-center' >
                <SponsorCard sponsorImage={imgTest} sponsorName="Nume" sponsorMotto="Motto" sponsorActivity="Funded Activity" sponsorWebsite="Sponsor Website" sponsorSocial="Sponsor Social" />
                <SponsorCard sponsorImage={imgTest} sponsorName="Nume" sponsorMotto="Motto" sponsorActivity="Funded Activity" sponsorWebsite="Sponsor Website" sponsorSocial="Sponsor Social" />
                <SponsorCard sponsorImage={imgTest} sponsorName="Nume" sponsorMotto="Motto" sponsorActivity="Funded Activity" sponsorWebsite="Sponsor Website" sponsorSocial="Sponsor Social" />
            </div>
        </div>
    )
}