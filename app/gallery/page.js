// "use client";
// import { useState } from "react";

// export default function Gallery() {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const images = [
//     "/images/gallery/bus1.jpeg",
//     "/images/gallery/bus2.jpeg",
//     "/images/gallery/bus3.jpeg",
//     "/images/gallery/bus4.jpeg",
//     "/images/gallery/bus5.jpeg",
//     "/images/gallery/bus6.jpeg",
//     "/images/gallery/bus7.jpeg",
//     "/images/gallery/bus8.jpeg",
//     "/images/gallery/bus9.jpeg",
//     "/images/gallery/bus10.jpeg",
//     "/images/gallery/bus11.jpeg",
//     "/images/gallery/bus12.jpeg",
//     "/images/gallery/bus13.jpeg",
//     "/images/gallery/bus14.jpeg",
//     "/images/gallery/bus15.jpeg",
//     "/images/gallery/bus16.jpeg",
//     "/images/gallery/bus17.jpeg",
//     "/images/gallery/bus18.jpeg",
//     "/images/gallery/bus19.jpeg",
//     "/images/gallery/bus20.jpeg",
//     "/images/gallery/bus21.jpeg",
//     "/images/gallery/bus22.jpeg",
//     "/images/gallery/bus23.jpeg",
//     "/images/gallery/bus24.jpeg",
//     "/images/gallery/bus25.jpeg",
//     "/images/gallery/bus26.jpeg",
//     "/images/gallery/bus27.jpeg",
//     "/images/gallery/bus28.jpeg",
//     "/images/gallery/bus29.jpeg",
//     "/images/gallery/bus30.jpeg"
//   ];

//   return (
//     <div className="container my-5">
//       <h2 className="text-center mb-4 text-primary">Our Gallery</h2>
//       <div className="row">
//         {images.map((image, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="gallery-image-box shadow-sm" onClick={() => setSelectedImage(image)}>
//               <img src={image} alt={`Gallery Image ${index + 1}`} className="img-fluid rounded fixed-size" />
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedImage && (
//         <div className="popup" onClick={() => setSelectedImage(null)}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
//             <div className="popup-box">
//               <img src={selectedImage} alt="Selected" className="popup-image" />
//             </div>
//           </div>
//         </div>
//       )}

//       <style jsx>{`
//         .gallery-image-box {
//           overflow: hidden;
//           transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//           cursor: pointer;
//         }

//         .gallery-image-box:hover {
//           transform: scale(1.05);
//           box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
//         }

//         .img-fluid {
//           transition: transform 0.3s ease-in-out;
//           width: 100%;
//           height: 250px;
//           object-fit: cover;
//         }

//         .gallery-image-box:hover .img-fluid {
//           transform: scale(1.1);
//         }

//         .popup {
//           position: fixed;
//           top: 90px;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           background-color: rgba(0, 0, 0, 0.8);
//           display: flex;
//           justify-content: center;
//           align-items: flex-start;
//           padding-top: 50px;
//           z-index: 1000;
//         }

//         .popup-content {
//           position: relative;
//           width: 500px;
//           height: 500px;
//         }

//         .popup-box {
//           padding: 20px;
//           margin-bottom: 20px;
//           background-color: white;
//           border-radius: 8px;
//         }

//         .popup-image {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           border-radius: 8px;
//         }

//         .close {
//           position: absolute;
//           top: 5px;
//           right: 10px;
//           color: black;
//           font-size: 24px;
//           font-weight: bold;
//           cursor: pointer;
//         }

//         .close:hover {
//           color: #ff5050;
//         }
//       `}</style>
//     </div>
//   );
// }


"use client";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "/images/gallery/bus1.jpeg",
    "/images/gallery/bus2.jpeg",
    "/images/gallery/bus3.jpeg",
    "/images/gallery/bus4.jpeg",
    "/images/gallery/bus5.jpeg",
    "/images/gallery/bus6.jpeg",
    "/images/gallery/bus7.jpeg",
    "/images/gallery/bus8.jpeg",
    "/images/gallery/bus9.jpeg",
    "/images/gallery/bus10.jpeg",
    "/images/gallery/bus11.jpeg",
    "/images/gallery/bus12.jpeg",
    "/images/gallery/bus13.jpeg",
    "/images/gallery/bus14.jpeg",
    "/images/gallery/bus15.jpeg",
    "/images/gallery/bus16.jpeg",
    "/images/gallery/bus17.jpeg",
    "/images/gallery/bus18.jpeg",
    "/images/gallery/bus19.jpeg",
    "/images/gallery/bus20.jpeg",
    "/images/gallery/bus21.jpeg",
    "/images/gallery/bus22.jpeg",
    "/images/gallery/bus23.jpeg",
    "/images/gallery/bus24.jpeg",
    "/images/gallery/bus25.jpeg",
    "/images/gallery/bus26.jpeg",
    "/images/gallery/bus27.jpeg",
    "/images/gallery/bus28.jpeg",
    "/images/gallery/bus7.jpeg",
    "/images/gallery/bus12.jpeg"
  ];

  return (
    <div className="container my-5" style={{ paddingTop: "30px" }}>
      <h2 className="text-center mb-4 text-primary mt-5">Our Gallery</h2>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="gallery-image-box shadow-sm" onClick={() => setSelectedImage(image)}>
              <img src={image} alt={`Gallery Image ${index + 1}`} className="img-fluid rounded fixed-size" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={() => setSelectedImage(null)}>&times;</span>
            <div className="popup-box">
              <img src={selectedImage} alt="Selected" className="popup-image" />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-image-box {
          overflow: hidden;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
          cursor: pointer;
          border: 5px solid rgb(243, 243, 243);
          border-radius: 8px;
        }

        .gallery-image-box:hover {
          transform: scale(1.05);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
        }

        .img-fluid {
          transition: transform 0.3s ease-in-out;
          width: 100%;
          height: 250px;
          object-fit: cover;
          padding: 5px;
        }

        .gallery-image-box:hover .img-fluid {
          transform: scale(1.1);
        }

        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          position: relative;
          width: 50%;  /* Set width to 50% of the display */
          height: 60%; /* Set height to 60% of the display */
        }

        .popup-box {
          padding: 20px;
          margin-bottom: 20px;
          background-color: white;
          border-radius: 8px;
          height: 100%;  /* Make sure the content fills the popup height */
        }

        .popup-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          color: black;
          font-size: 30px;
          font-weight: bold;
          cursor: pointer;
        }

        .close:hover {
          color: #ff5050;
        }
      `}</style>
    </div>
  );
}
