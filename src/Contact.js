import React, { useState } from 'react'


const Contact = () => {
  return (
    <>
      
      <div className="my-5 text-white">
        <h1 className="text-center">Contact</h1>
      </div>

      <div className="contact my-5">
        <h1 className="text-center">Let's Get in Touch !!</h1>
      </div>

      <div className="social-link my-5">
      <ul class="links list-unstyled d-flex container justify-content-around">
            <li>
                <ul class=" icon d-flex list-unstyled container mt-5">
                    <li><a href="https://www.linkedin.com/in/v-sidharth-406841172/"><i class="fab fa-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/Sidharthvarier1"><i class="fab fa-twitter ml-4"></i></a></li>
                    <li><a href="https://www.facebook.com/sidharth.varier.1"><i class="fab fa-facebook-f ml-4"></i></a></li>
                    <li><a href="#"><i class="fab fa-instagram ml-4"></i></a></li>
                    <li><a href="https://github.com/sidharthvarier"><i class="fab fa-github ml-4"></i></a></li>
                </ul>
            </li>
        </ul>
      </div>
      
    </>
  )
}

export default Contact;