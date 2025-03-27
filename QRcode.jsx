import React, { useState } from 'react';
export const QRcode = () => {
 const [img, setImg]=useState('');
 const [qrData, setQrData]=useState('');
 const [qrSize, setQrSize]=useState('');
 const generateQR=function() {
if (qrData && qrSize) {
const generatedQrCodeUrl=`https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrData)}&size=${qrSize}x${qrSize}`;
setImg(generatedQrCodeUrl);
 } else {
alert('Please enter both data and size for the QR code.');
 }
 };
 const downloadQR = function() {
if (img) {
const link=document.createElement('a');
 link.href=img;
 link.download='qrcode.png';
 document.body.appendChild(link);
 link.click();
 document.body.removeChild(link);
} else {
 alert('Please generate the QR code first.');
 }
 };
return (
 <div className="app-container">
<h1>QR Code Generator</h1>
{img && <img src={img} className="qr-image" alt="Generated QR Code" />}
<div>
<label htmlFor="datainput">Data for QR Code:</label>
 <input type="text" id="datainput" placeholder="Enter data" value={qrData} onChange={function(e) { setQrData(e.target.value); }}
 />
<label htmlFor="sizeinput">QR Code Size (e.g., 150):</label>
 <input type="text"id="sizeinput"placeholder="Enter size"value={qrSize} onChange={function(e) { setQrSize(e.target.value); }}
 />
 <button className='Generate' onClick={generateQR}>Generate QR Code</button>
<button className='Download' onClick={downloadQR}>Download QR Code</button>
 </div>
 </div>
  );
};





