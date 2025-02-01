import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import bag1 from '../images/d_cut_png/IMG-20250117-WA0030-removebg-preview.png';
import bag2 from '../images/d_cut_png/IMG-20250117-WA0031-removebg-preview.png';
import bag3 from '../images/d_cut_png/IMG-20250117-WA0034-removebg-preview (1).png';
import bag4 from '../images/d_cut_png/IMG-20250117-WA0034-removebg-preview.png';
import bag5 from '../images/d_cut_png/IMG-20250117-WA0034-removebg.png';
import bag6 from '../images/d_cut_png/IMG-20250117-WA0036-removebg-preview.png';
import bag7 from '../images/d_cut_png/IMG-20250117-WA0038-removebg-preview.png';
import bag8 from '../images/d_cut_png/IMG-20250117-WA0039-removebg-preview (1).png';
import bag9 from '../images/d_cut_png/IMG-20250117-WA0039-removebg-preview.png';
import bag10 from '../images/d_cut_png/IMG-20250117-WA0040-removebg-preview.png';
import bag11 from '../images/d_cut_png/IMG-20250117-WA0041-removebg-preview.png';
import bag12 from '../images/d_cut_png/IMG-20250117-WA0042-removebg-preview.png';
import bag13 from '../images/d_cut_png/IMG-20250117-WA0043-removebg-preview.png';
import bag14 from '../images/d_cut_png/IMG-20250117-WA0044-removebg-preview.png';
import bag15 from '../images/d_cut_png/IMG-20250117-WA0045-removebg-preview.png';
import bag16 from '../images/d_cut_png/IMG-20250117-WA0046.jpg';
import bag17 from '../images/d_cut_png/IMG-20250117-WA0047-removebg-preview.png';
import bag18 from '../images/d_cut_png/IMG-20250117-WA0048-removebg-preview.png';
import bag19 from '../images/d_cut_png/IMG-20250117-WA0049-removebg-preview.png';
import bag20 from '../images/d_cut_png/IMG-20250117-WA0050.jpg';

import ScrollToTop from '../components/ScrollToTop';

const DemoProductCalendar = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images_1 = [bag1, bag2, bag3, bag4];
    const images_2 = [bag5, bag6, bag7, bag8];
    const images_3 = [bag9, bag10, bag11, bag12];
    const images_4 = [bag13, bag14, bag15, bag16];
    const images_5 = [bag17, bag18, bag19, bag20];

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
                        <h1>D - Cut Collections</h1>
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
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-10" onClick={closeImage}>
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
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-10" onClick={closeImage}>
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
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-10" onClick={closeImage}>
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
                            {images_4.map((image, index) => (
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
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-10" onClick={closeImage}>
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
                            {images_5.map((image, index) => (
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
                            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-10" onClick={closeImage}>
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

export default DemoProductCalendar;
