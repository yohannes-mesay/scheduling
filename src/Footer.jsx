import React from "react";
import logo from "./assets/logo.svg"; // Replace with the path to your logo

function Footer() {
  return (
    <footer className="bg-blue-50 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <img src={logo} alt="Appoint Logo" className="w-12 mb-4" />
            <h3 className="text-xl font-bold">Appoint</h3>
            <p>
              Simplifying your booking experience with Seamless Appointments
            </p>
          </div>

          <div className="w-full lg:w-3/4 flex flex-wrap justify-between">
            <div className="w-1/3 lg:w-auto mb-6 lg:mb-0 max-sm:font-xs">
              <h4 className="font-semibold mb-4">Company</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 lg:w-auto mb-6 lg:mb-0 max-sm:font-xs">
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Papers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press Conferences
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 lg:w-auto mb-6 lg:mb-0 max-sm:font-xs">
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Data Processing
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 flex justify-between items-center border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">
            © 2024 Appoint Inc. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.064 4.388 22.944 10.125 24v-8.437H7.078v-3.49h3.047V9.825c0-3.018 1.791-4.692 4.533-4.692 1.312 0 2.686.235 2.686.235v2.95H15.65c-1.47 0-1.93.916-1.93 1.858v2.215h3.313l-.53 3.49H13.72V24C19.457 22.944 24 18.064 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.392-1.833.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.724-.951.555-2.005.959-3.127 1.184-.897-.959-2.178-1.557-3.594-1.557-2.719 0-4.92 2.209-4.92 4.917 0 .39.045.765.127 1.124-4.088-.205-7.719-2.165-10.148-5.144-.426.722-.666 1.561-.666 2.475 0 1.71.869 3.214 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.376 4.604 3.417-1.68 1.316-3.809 2.102-6.115 2.102-.39 0-.779-.023-1.17-.067 2.179 1.393 4.768 2.209 7.557 2.209 9.054 0 14.001-7.496 14.001-13.986 0-.209 0-.42-.015-.63.961-.695 1.8-1.562 2.462-2.548l-.047-.02z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.615 3.184C20.44 3.623 21 4.473 21 5.528c0 2.81.003 5.62-.002 8.431-.002.817-.119 1.608-.573 2.311-.53.85-1.275 1.306-2.208 1.376-.79.057-1.587.06-2.381.065-.724.005-1.45.007-2.175.007-.799 0-1.598-.002-2.397-.008-.79-.005-1.582-.008-2.372-.064-.93-.07-1.675-.528-2.204-1.377-.454-.702-.571-1.493-.573-2.311-.005-2.811-.002-5.621-.002-8.431 0-1.055.56-1.905 1.384-2.344 1.15-.605 2.42-.674 3.658-.676h4.372c1.239.002 2.508.071 3.659.676zM10 8.84v6.32l5.535-3.164L10 8.841z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
