import React from 'react';
import './Team.css';

//Campus - Team
import abhishek from '../../assets/images/team/AS.jpg'
import adityaVyas from '../../assets/images/team/AV.jpeg'
import amal from '../../assets/images/team/amal.jpg'
import anu from '../../assets/images/team/anu.jpg'
import arpit from '../../assets/images/team/arpit.jpg'
import avantika from '../../assets/images/team/avan.jpeg'
import ayon from '../../assets/images/team/arpit.jpg'

import bahvesh from '../../assets/images/team/bhavesh.jpg'
import bunny from '../../assets/images/team/bunny.jpg'
import devani from '../../assets/images/team/devani.jpg'
import harshit from '../../assets/images/team/harshit.png'
import anmolKarn from '../../assets/images/team/karn.jpg'

import kasee from '../../assets/images/team/kasee.jpg'
import kastubh from '../../assets/images/team/kast.jpg'
import malik from '../../assets/images/team/malik.jpg'
import mayank from '../../assets/images/team/mayank.jpg'

import neema from '../../assets/images/team/neema.jpg'
import nitish from '../../assets/images/team/nitish.jpg'
import pankaj from '../../assets/images/team/pankaj.jpg'
import rohitPessa from '../../assets/images/team/peesa.jpg'
import saksham from '../../assets/images/team/saksham.jpg'
import sakshi from '../../assets/images/team/sakshi.jpg'
import shubham from '../../assets/images/team/shubham.jpeg'
import vipin from '../../assets/images/team/vipin.jpeg'

/*const Team = (props) => {
    return (
        <div className="about-page-container">
            <div className="about-container">

                 <div class="blog-container blog-background"><h1 class="blog-h1">Our Team </h1></div>


            </div>
            <div className="row">
        <div className="column">
          <div className="card">
            <img src={ image} alt={'face'} alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={ image} alt={'face'} alt="Mike" style={{width: '100%'}} />
            <div className="container">
              <h2>Mike Ross</h2>
              <p className="title">Art Director</p>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={ image} alt={'face'} alt="John" style={{width: '100%'}} />
            <div className="container">
              <h2>John Doe</h2>
              <p className="title">Designer</p>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <img src={ image} alt={'face'} alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>

            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={ image} alt={'face'} alt="Jane" style={{width: '100%'}} />
            <div className="container">
              <h2>Jane Doe</h2>
              <p className="title">CEO &amp; Founder</p>

            </div>
          </div>
        </div>






      </div>

        </div>
    );
}
*/
const Team=props=>(
	<>
	<h1 className={'team_heading'}>
		Meet our family
	</h1>
	<section className={'people_container'}>
		<h1 className={'sub_heading'}>Campus Stars</h1>
		
		<div className={'person'}>
			<img src={ abhishek} alt={'face'}></img>
			<div className={'person_name'}>
			Abhishek Shukla
			</div>
			<div className={'person_detail'}>
			Allahabad
			</div>
		</div>
		
		<div className={'person'}>
			<img src={ adityaVyas} alt={'face'}></img>
			<div className={'person_name'}>
			Aditya Vyas
			</div>
			<div className={'person_detail'}>
			Jaipur
			</div>
		</div>
		
		<div className={'person'}>
			<img src={ amal} alt={'face'}></img>
			<div className={'person_name'}>
			Amal Roy
			</div>
			<div className={'person_detail'}>
			Kottayam
			</div>
		</div>
		
		<div className={'person'}>
			<img src={ anmolKarn} alt={'face'}></img>
			<div className={'person_name'}>
			Anmol Karn
			</div>
			<div className={'person_detail'}>
			Pune
			</div>
		</div>
		
		<div className={'person'}>
			<img src={ anu} alt={'face'}></img>
			<div className={'person_name'}>
			Anu Bansal
			</div>
			<div className={'person_detail'}>
			Chandigarh
			</div>
		</div>
		
		<div className={'person'}>
			<img src={ arpit} alt={'face'}></img>
			<div className={'person_name'}>
			Arpit Agrawal
			</div>
			<div className={'person_detail'}>
			Indore
			</div>
		</div>
		
		<div className={'person'}>
			<img src={ avantika} alt={'face'}></img>
			<div className={'person_name'}>
			Avantika Kulshreshtha
			</div>
			<div className={'person_detail'}>
			Indore
			</div>
		</div>
		
		<div className={'person'}>
			<img src={ ayon} alt={'face'}></img>
			<div className={'person_name'}>
			Ayon Roy
			</div>
			<div className={'person_detail'}>
			Delhi
			</div>
		</div>

		<div className={'person'}>
			<img src={ bahvesh} alt={'face'}></img>
			<div className={'person_name'}>
			Bhavesh Gupta
			</div>
			<div className={'person_detail'}>
			Hisar
			</div>
		</div>

		<div className={'person'}>
			<img src={ harshit} alt={'face'}></img>
			<div className={'person_name'}>
			Harshit Singh
			</div>
			<div className={'person_detail'}>
			Ranchi
			</div>
		</div>

		<div className={'person'}>
			<img src={ malik} alt={'face'}></img>
			<div className={'person_name'}>
			Ishaan Malik 
			</div>
			<div className={'person_detail'}>
			Gurgaon 
			</div>
		</div>

		<div className={'person'}>
			<img src={ kasee} alt={'face'}></img>
			<div className={'person_name'}>
			Kasee Nadh Reddy Bojja 
			</div>
			<div className={'person_detail'}>
			Tirupathi 
			</div>
		</div>

		<div className={'person'}>
			<img src={ kastubh} alt={'face'}></img>
			<div className={'person_name'}>
			Kaustubh Prabhu
			</div>
			<div className={'person_detail'}>
			Kolhapur
			</div>
		</div>

		<div className={'person'}>
			<img src={ devani} alt={'face'}></img>
			<div className={'person_name'}>
			Mayank Devnani
			</div>
			<div className={'person_detail'}>
			Jaipur
			</div>
		</div>

		<div className={'person'}>
			<img src={ mayank} alt={'face'}></img>
			<div className={'person_name'}>
			Mayank pandey
			</div>
			<div className={'person_detail'}>
			Dehradun
			</div>
		</div>

		<div className={'person'}>
			<img src={ nitish} alt={'face'}></img>
			<div className={'person_name'}>
			Nitish Bhardwaj
			</div>
			<div className={'person_detail'}>
			Delhi
			</div>
		</div>

		<div className={'person'}>
			<img src={ pankaj} alt={'face'}></img>
			<div className={'person_name'}>
			Pankaj bagariya
			</div>
			<div className={'person_detail'}>
			Bikaner
			</div>
		</div>

		<div className={'person'}>
			<img src={ neema} alt={'face'}></img>
			<div className={'person_name'}>
			Priyansh neema
			</div>
			<div className={'person_detail'}>
			Indore 
			</div>
		</div>

		<div className={'person'}>
			<img src={ rohitPessa} alt={'face'}></img>
			<div className={'person_name'}>
			Rohit Bhargav Peesa
			</div>
			<div className={'person_detail'}>
			Amaravati
			</div>
		</div>

		<div className={'person'}>
			<img src={ saksham} alt={'face'}></img>
			<div className={'person_name'}>
			Saksham Taneja
			</div>
			<div className={'person_detail'}>
			Jaipur
			</div>
		</div>

		<div className={'person'}>
			<img src={ sakshi} alt={'face'}></img>
			<div className={'person_name'}>
			Sakshi Gupta
			</div>
			<div className={'person_detail'}>
			Greater Noida
			</div>
		</div>

		<div className={'person'}>
			<img src={ bunny} alt={'face'}></img>
			<div className={'person_name'}>
			Sai Kiran Kumar Reddy Vaddi
			</div>
			<div className={'person_detail'}>
			Ongole, Andhra Pradesh
			</div>
		</div>

		<div className={'person'}>
			<img src={ shubham} alt={'face'}></img>
			<div className={'person_name'}>
			Shubham Kumar
			</div>
			<div className={'person_detail'}>
			Chandigarh
			</div>
		</div>

		<div className={'person'}>
			<img src={ vipin} alt={'face'}></img>
			<div className={'person_name'}>
			Vipin Joshi
			</div>
			<div className={'person_detail'}>
			Delhi
			</div>
		</div>


	</section>
	
	</>
)
export default Team;
