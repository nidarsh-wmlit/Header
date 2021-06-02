import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'

export default function Home() {
  return(
    <>
    <div><Header/></div>
    <div className="image">
      <img src = "https://res.cloudinary.com/mejuri-com/image/upload/c_scale,f_auto,q_60,w_640/v1622484375/homepage/hero/June%202021/SpringCampaign_HomepageHero_Desktop-Left_4" width="90%" height="90%"></img>
     
     
      <div class="caption center">Finest Jewellery</div>
      </div>
    </>
  )
}
