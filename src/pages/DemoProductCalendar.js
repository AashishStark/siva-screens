import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import axios from 'axios';
import bag1 from '../images/d_cut_png/bag0.png';
import bag2 from '../images/d_cut_png/bag1.png';
import bag3 from '../images/d_cut_png/bag2.png';
import bag4 from '../images/d_cut_png/bag3.png';
import bag5 from '../images/d_cut_png/bag4.png';
import bag6 from '../images/d_cut_png/bag5.png';
import bag7 from '../images/d_cut_png/bag6.png';
import bag8 from '../images/d_cut_png/bag7.png';
import bag9 from '../images/d_cut_png/bag8.png';
import bag10 from '../images/d_cut_png/bag9.png';
import bag11 from '../images/d_cut_png/bag10.png';
import bag12 from '../images/d_cut_png/bag11.png';
import bag13 from '../images/d_cut_png/bag12.png';
import bag14 from '../images/d_cut_png/bag13.png';
import bag15 from '../images/d_cut_png/bag14.png';
import bag16 from '../images/d_cut_png/bag15.png';
import bag17 from '../images/d_cut_png/bag16.png';
import bag18 from '../images/d_cut_png/bag17.png';
import bag19 from '../images/d_cut_png/bag18.png';
import bag20 from '../images/d_cut_png/bag19.png';
import bag21 from '../images/d_cut_png/bag20.png';
import bag22 from '../images/d_cut_png/bag21.png';
import bag23 from '../images/d_cut_png/bag22.png';
import bag24 from '../images/d_cut_png/bag23.png';
import bag25 from '../images/d_cut_png/bag24.png';
import bag26 from '../images/d_cut_png/bag25.png';
import bag27 from '../images/d_cut_png/bag26.png';
import bag28 from '../images/d_cut_png/bag27.png';
import bag29 from '../images/d_cut_png/bag28.png';
import bag30 from '../images/d_cut_png/bag29.png';
import bag31 from '../images/d_cut_png/bag30.png';
import bag32 from '../images/d_cut_png/bag31.png';
import bag33 from '../images/d_cut_png/bag34.png';
import bag34 from '../images/d_cut_png/bag35.png';
import bag35 from '../images/d_cut_png/bag36.png';
import bag36 from '../images/d_cut_png/bag37.png';
import bag37 from '../images/d_cut_png/bag38.png';
import bag38 from '../images/d_cut_png/bag39.png';
import bag39 from '../images/d_cut_png/bag40.png';
import bag40 from '../images/d_cut_png/bag41.png';

import ScrollToTop from '../components/ScrollToTop';

const DemoProductCalendar = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const images_9 = [bag33, bag34, bag35, bag36];
    const images_10 = [bag37, bag38, bag39, bag40];
    const images_1 = [bag1, bag2, bag3, bag4];
    const images_2 = [bag5, bag6, bag7, bag8];
    const images_3 = [bag9, bag10, bag11, bag12];
    const images_4 = [bag13, bag14, bag15, bag16];
    const images_5 = [bag17, bag18, bag19, bag20];
    const images_6 = [bag21, bag22, bag23, bag24];
    const images_7 = [bag25, bag26, bag27, bag28];
    const images_8 = [bag29, bag30, bag31, bag32];

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
                        <h1>BOPP Woven Bags Collections</h1>
                    </div>
                </div>

                <div className="flex items-center justify-center bg-gray-100 w-full h-[75vh]">
                    <div className="card-container bg-green-300 w-full max-w-8xl rounded-3xl shadow-2xl">
                        <div className="flex space-x-24">
                            {images_9.map((image, index) => (
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
                            {images_10.map((image, index) => (
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
                            {images_6.map((image, index) => (
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
                            {images_7.map((image, index) => (
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
                            {images_8.map((image, index) => (
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

export default DemoProductCalendar;
