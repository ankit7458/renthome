// src/components/Aboutus.js
// import React from "react";
import Footer from './Footer';
import React, { useEffect } from 'react'; //reload the page 

function Policy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <div className="about">
            <div className="heading">
                <h1>Privacy Policy</h1>
            </div>
            <div>
                <p>
                This Privacy policy is subject to the terms of the Site Policy (User agreement) of 99acres. This policy is effective from the date and time a user registers with 99acres by filling up the Registration form and accepting the terms and conditions laid out in the Site Policy.<br></br>In order to provide a personalised browsing experience, 99acres may collect personal information from you. Additionally some of our websites may require you to complete a registration form or seek some information from you. When you let us have your preferences, we will be able to deliver or allow you to access the most relevant information that meets your end.<br></br>To extend this personalized experience 99acres may track the IP address of a user's computer and save certain information on your system in the form of cookies. A user has the option of accepting or declining the cookies of this website by changing the settings of your browser <br></br>The personal information provided by the users to 99acres will not be provided to third parties without previous consent of the user concerned. Information of a general nature may however be revealed to external parties<br></br>Every effort will be made to keep the information provided by users in a safe manner, the information will be displayed on the website will be done so only after obtaining consent from the users. Any user browsing the site generally is not required to disclose his identity or provide any information about him/her, it is only at the time of registration you will be required to furnish the details in the registration form.<br></br> A full user always has the option of not providing the information which is not mandatory. You are solely responsible for maintaining confidentiality of the User password and user identification and all activities and transmission performed by the User through his user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or documents for making such transactions and IEIL assumes no responsibility or liability for their improper use of information relating to such usage of credit cards / debit cards used by the subscriber online / off-line. <br></br> 99acres shall in order to provide seamless video upload and streaming services to users, utilize 3rd party services such as You-tube API Services and shall not pull any metadata of the video provided by the user. We suggest you check up the Google Privacy Policy at (http://www.google.com/policies/privacy) to help you understand what data Google holds about you and how they process it.<br></br> IEIL provides you the ability to keep your personal information accurate and up-to-date. If at any time you would like to a) rectify, update, correct or delete your personal information; b) obtain confirmation on whether or not your personal information is processed by it; c) access your personal information or exercise your right to data portability; or d) exercise your right to restrict the continuing disclosure of your personal information to any third party by IEIL in certain circumstances, you are requested to contact us at feedback@99acres.com. We will require you to provide a valid proof of your identity, in order to ensure that your rights are respected.<br></br> You agree that IEIL may use personal information about you to improve its marketing and promotional efforts, to analyze site usage, improve the Site's content and product offerings, and customise the Site's content, layout, and services. These uses improve the Site and better tailor it to meet your needs, so as to provide you with a smooth, efficient, safe and customised experience while using the Site.<br></br> You agree that IEIL may use your personal information to contact you and deliver information to you that, in some cases, are targeted to your interests, such as targeted banner advertisements, administrative notices, product offerings, and communications relevant to your use of the Site. By accepting the User Agreement and Privacy Policy, you expressly agree to receive this information. If you do not wish to receive these communications, we encourage you to opt out of the receipt of certain communications in your profile. You may make changes to your profile at any time, if you wish to delete your account on 99acres.com, you may do so by writing an email to feedback@99acres.com or by using the settings available in your account. It is the belief of IEIL that privacy of a person can be best guaranteed by working in conjunction with the Law enforcement authorities.<br></br> All IEIL websites including 99acres fully comply with all Indian Laws applicable. IEIL has always cooperated with all law enforcement inquires. IEIL may disclose all or part of your personal details in response to a request from the law enforcement authorities or in a case of bonafide requirement to prevent an imminent breach of the law
                </p>
            </div>
        </div>    
      <Footer />
    </div>
  );
}

export default Policy;
