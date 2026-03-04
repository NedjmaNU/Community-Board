import './App.css';
import Card from './components/Card';

const App = () => {

  return (
    <div className="App">
      <h1>Food & Activities in DC & NOVA</h1>
      <h2>District of Columbia & Northern Virginia</h2>
        <div className="cards-wrapper">
          <Card //this is a prop(?) forgot the name tbh. this basically loads what is built in Card.jsx 
            imgSrc="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqLvYndd8TptokQCz_PbeXzT36NbZksy2pDNKQuI9DECWfKIj-hSmH0Su2w3jybawuFv9V22Vew6gNIS7PoixaHbHdyN5ulda4iN-1nReGUb_JrlBwtQGekOJSgZ6ytyVR5jzAo6Q=w289-h312-n-k-no"
            imgAlt="Louisiana Style Beignets"
            title="Ben'Yays"
            description="Old Town Alexandria, VA"
            buttonText="visit site"
            link="https://mybeignets.com/"
          />
          <Card 
            imgSrc="https://i.redd.it/in-case-you-were-confused-like-me-surfside-taco-stand-and-v0-2mssj32kzwad1.jpg?width=844&format=pjpg&auto=webp&s=bcf1be0bd71187863ccd765d3b00f67f9f14ea5d"
            imgAlt="Taco Stand"
            title="Surfside Taco Stand"
            description="N St Northwest, DC"
            buttonText="visit site"
            link="https://surfsidedc.com/dupont-menu/"
          />
          <Card 
            imgSrc="https://lh3.googleusercontent.com/gps-cs-s/AHVAweqwspu44UcDFOsHz3nY5_ttLcPDohxRUXWggNM3dJOtQtnRRY9CGTMHfv_lt2u7CZWlcVcJcu02Tf8ec5n5DnOYc2TkzdRKpiR4x1KP9VfoezHMTVFBv5JWxu16JS7OtnHFOQjcjw=w270-h312-n-k-no"
            imgAlt="The Great Falls"
            title="Great Falls Park"
            description="McLean, VA"
            buttonText="visit site"
            link="https://www.nps.gov/grfa/index.htm"
          />
          <Card 
            imgSrc="https://georgetowner.com/wp-content/uploads/2022/05/USE_IMG_6537Cropped-scaled.jpeg"
            imgAlt="Georgetown Market"
            title="Georgetown Flea Market"
            description="35th St Northwest, DC"
            buttonText="visit site"
            link="http://www.georgetownfleamarket.com/"
          />
          <Card 
            imgSrc="https://static.where-e.com/United_States/Virginia/Fairfax_County/Welcome-Back-Japa-Nese-Cafe_4bfc91019d6d399a8e445d849d100f62.jpg"
            imgAlt="pancakes outside of Okaeri"
            title="Okaeri Japanese Cafe"
            description="Centreville, VA"
            buttonText="visit site"
            link="https://www.okaerijapanesecafe.com/"
          />
          <Card 
            imgSrc="https://images.squarespace-cdn.com/content/v1/62015f66f840ef671da14ae7/4278095f-ade0-48d5-b8cf-d7bca439c5c6/Wharf+DC.JPG"
            imgAlt="Campire at the Wharf"
            title="The Wharf DC"
            description="Maine Ave Southwest, DC"
            buttonText="visit site"
            link="https://www.wharfdc.com/"
          />
          <Card 
            imgSrc="https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/fairfax/Tysons_349_Tysons_Corner_Center_97732789-F8AA-8B08-8601665F24037678-9772f240d02507f_9773a567-be00-7f53-b8755f43f3a14af0.jpg"
            imgAlt="Tysons Corner"
            title="Tysons Corner"
            description="McLean, VA"
            buttonText="visit site"
            link="https://www.tysonscornercenter.com/"
          />
          <Card 
            imgSrc="https://georgetowner.com/wp-content/uploads/2021/11/Georges-1024x768.jpg"
            imgAlt="George's building"
            title="George's"
            description="28th St Northwest, DC"
            buttonText="visit site"
            link="https://georgesdc.com/"
          />
          <Card 
            imgSrc="https://kfoodinus.com/wp-content/uploads/2020/11/122029625_1570866883121822_4024284921954584937_n.jpg"
            imgAlt="sandwich inside restaurant"
            title="Bebop Grill"
            description="Fairfax, VA"
            buttonText="visit site"
            link="http://bebopkoreanmexicangrill.com/"
          />
          <Card 
            imgSrc="https://assets.simpleviewinc.com/simpleview/image/upload/crm/fairfax/ABP-BotanicalGarden_9050B3F9-C139-38A6-CF53BD4A7E39044B-9050a9f2b12bfd7_9050bdc8-c94c-2b82-97bfb58d3802dc29.jpg"
            imgAlt="plants inside botanical garden"
            title="US Botanic Garden"
            description="Maryland Ave Southwest, DC"
            buttonText="visit site"
            link="https://www.usbg.gov/"
          />
        </div>
    </div>
  )
}

export default App