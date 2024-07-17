import { Icons } from "@/app/components/icons";
import Image from 'next/image'
import visa from '@/app/public/image/payments/visa.png';
import mastercard from '@/app/public/image/payments/mastercard.png';
import paypal from '@/app/public/image/payments/paypal.png';
import apple from '@/app/public/image/payments/applepay.png';
import google from '@/app/public/image/payments/googlepay.png';

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-8 pb-6">
      <div className="bg-black text-white py-8 w-[1240px] h-[177px] mx-auto rounded-xl">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-2xl font-bold">STAY UP TO DATE ABOUT<br></br> OUR LATEST OFFERS</h2>
            <div className="flex flex-col">
              <div className="flex items-center bg-gray-100 rounded-full w-[349px] h-[48px] px-4">
                <Icons.Gmail className="mr-2" />
                <input type="email" placeholder="Enter your email address" className="bg-gray-100 outline-none flex-grow text-black" />
              </div>
              <button className="bg-white text-black px-4 py-2 rounded-full mt-8">
                Subscribe to Newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="flex justify-between">
          <div className="w-full mb-8 ">
            <h2 className="text-lg font-bold">JWC.CO</h2>
            <p className="mt-2">We have clothes that suits your style <br></br>and which you're proud to wear.<br></br> From women to men.</p>
            <div className="flex mt-4 space-x-2">
              <Icons.Twiiter></Icons.Twiiter>
              <Icons.Facebook></Icons.Facebook>
              <Icons.Instargram></Icons.Instargram>
              <Icons.Github></Icons.Github>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="w-1/5">
              <h3 className="font-bold">COMPANY</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#">About</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Works</a></li>
                <li><a href="#">Career</a></li>
              </ul>
            </div>
            <div className="w-1/5">
              <h3 className="font-bold">HELP</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="w-1/5">
              <h3 className="font-bold">FAQ</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#">Account</a></li>
                <li><a href="#">Manage Deliveries</a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Payments</a></li>
              </ul>
            </div>
            <div className="w-1/5">
              <h3 className="font-bold">RESOURCES</h3>
              <ul className="mt-2 space-y-2">
                <li><a href="#">Free eBooks</a></li>
                <li><a href="#">Development Tutorial</a></li>
                <li><a href="#">How-to Blog</a></li>
                <li><a href="#">YouTube Playlist</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 p-8">
          <div className="flex justify-between items-center">
            <p>JWC.CO © 2000-2023, All Rights Reserved</p>
            <div className="flex space-x-2">
              <Image src={visa} width={46.61} height={30.03} alt="Visa" className="h-8" />
              <Image src={mastercard} width={46.61} height={30.03} alt="mastercard" className="h-8" />
              <Image src={paypal} width={46.61} height={30.03} alt="paypal" className="h-8" />
              <Image src={apple} width={46.61} height={30.03} alt="applepay" className="h-8" />
              <Image src={google} width={46.61} height={30.03} alt="googlepay" className="h-8" />

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
