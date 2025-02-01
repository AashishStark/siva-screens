import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import {useDocTitle} from '../components/CustomHook';
import axios from 'axios';
// import emailjs from 'emailjs-com';
import img from '../images/design.svg'; 
import bag1 from '../images/schl_labels/labels_1.png';
import bag2 from '../images/schl_labels/labels_2.png';
import bag3 from '../images/schl_labels/labels_3.png';
import bag4 from '../images/schl_labels/labels_4.png';
import bag5 from '../images/schl_labels/labels_5.png';
import bag6 from '../images/schl_labels/labels_6.png';
import bag7 from '../images/schl_labels/labels_7.png';
import bag8 from '../images/schl_labels/labels_8.png';
import bag9 from '../images/schl_labels/labels_9.png';
import bag10 from '../images/schl_labels/labels_10.png';
import bag11 from '../images/schl_labels/labels_11.png';
import bag12 from '../images/schl_labels/labels_12.png';


import './DemoProject.css'
import Notiflix from 'notiflix';
import ScrollToTop from '../components/ScrollToTop';

const DemoProductBags = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images_1 = [bag1, bag2, bag3, bag4];
    const images_2 = [bag5, bag6, bag7, bag8];
    const images_3 = [bag9, bag10, bag11, bag12];
    // const images_4 = [bag13, bag14, bag15, bag16];
    // const images_5 = [bag17, bag18, bag19, bag20];
    // const images_6 = [bag21, bag22, bag23, bag24];

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const closeImage = () => {
        setSelectedImage(null);
    };

    return (
        <>
            <ScrollToTop>
                <div>
                    <NavBar />
                </div>
                <div className="flex items-center justify-center bg-gray-100 min-h-[30vh] m-0">
                    <div className="collName bg-teal-500 w-full max-w-4xl p-16 mt-16 rounded-3xl shadow-2xl">
                        <h1>School Label Collections</h1>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-gray-100 w-full h-[75vh]">
                    <div className="card-container bg-green-300 w-full max-w-8xl rounded-3xl shadow-2xl">
                        <div className="flex space-x-24">
                            {images_1.map((image, index) => (
                                <div key={index} className="card bg-white rounded-xl shadow-lg overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className={`img3 object-cover rounded-t ${selectedImage === image ? 'scale-100' : 'scale-[0.8]'} transition duration-300 ease-in-out ${selectedImage && selectedImage !== image ? 'opacity-50 blur-sm' : ''}`}
                                        onClick={() => handleImageClick(image)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* If an image is clicked, display it in a larger view */}
                        {selectedImage && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20 z-10" onClick={closeImage}>
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    // className="max-w-[80%] max-h-[80%] object-contain"
                                    className="max-w-[80%] max-h-[80%] object-contain transition-all duration-500 ease-in-out"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-center bg-gray-100 w-full h-[75vh]">
                    <div className="card-container bg-green-300 w-full max-w-8xl rounded-3xl shadow-2xl">
                        <div className="flex space-x-24">
                            {images_2.map((image, index) => (
                                <div key={index} className="card bg-white rounded-xl shadow-lg overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className={`img3 object-cover rounded-t ${selectedImage === image ? 'scale-100' : 'scale-[0.8]'} transition duration-300 ease-in-out ${selectedImage && selectedImage !== image ? 'opacity-50 blur-sm' : ''}`}
                                        onClick={() => handleImageClick(image)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* If an image is clicked, display it in a larger view */}
                        {selectedImage && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20 z-10" onClick={closeImage}>
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    // className="max-w-[80%] max-h-[80%] object-contain"
                                    className="max-w-[80%] max-h-[80%] object-contain transition-all duration-500 ease-in-out"
                                />
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex items-center justify-center bg-gray-100 w-full h-[75vh]">
                    <div className="card-container bg-green-300 w-full max-w-8xl rounded-3xl shadow-2xl">
                        <div className="flex space-x-24">
                            {images_3.map((image, index) => (
                                <div key={index} className="card bg-white rounded-xl shadow-lg overflow-hidden">
                                    <img
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        className={`img3 object-cover rounded-t ${selectedImage === image ? 'scale-100' : 'scale-[0.8]'} transition duration-300 ease-in-out ${selectedImage && selectedImage !== image ? 'opacity-50 blur-sm' : ''}`}
                                        onClick={() => handleImageClick(image)}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* If an image is clicked, display it in a larger view */}
                        {selectedImage && (
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-20 z-10" onClick={closeImage}>
                                <img
                                    src={selectedImage}
                                    alt="Selected"
                                    // className="max-w-[80%] max-h-[80%] object-contain"
                                    className="max-w-[80%] max-h-[80%] object-contain transition-all duration-500 ease-in-out"
                                />
                            </div>
                        )}
                    </div>
                </div>

                

            </ScrollToTop>
        </>
    );
};

export default DemoProductBags;
