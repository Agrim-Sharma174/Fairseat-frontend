"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, X, QrCode } from 'lucide-react';
import { Fira_Code, Montserrat, Raleway } from 'next/font/google';
import { BrowserQRCodeReader } from '@zxing/browser';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function QRScanner() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanning, setScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | {
    valid: boolean;
    data?: {
      ticketId: string;
      eventId: string;
      eventName: string;
      attendeeName: string;
      timestamp: string;
    };
    message?: string;
  }>(null);
  
  const codeReader = useRef<BrowserQRCodeReader | null>(null);
  const controlsRef = useRef<{ stop: () => void } | null>(null);

  useEffect(() => {
    // Initialize QR code reader
    codeReader.current = new BrowserQRCodeReader();
    
    return () => {
      // Clean up when component unmounts
      if (controlsRef.current) {
        controlsRef.current.stop();
      }
    };
  }, []);

  const startScanner = async () => {
    if (!codeReader.current || !videoRef.current) return;
    
    try {
      setScanning(true);
      setScanResult(null);
      
      // Request camera permission
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setHasPermission(true);
      
      // Start scanning
      const controls = await codeReader.current.decodeFromVideoDevice(
        undefined,
        videoRef.current,
        (result, error) => {
          if (result) {
            // Handle successful scan
            try {
              const ticketData = JSON.parse(result.getText());
              
              // Simulate ticket validation
              // In a real app, you would verify this with your backend
              setTimeout(() => {
                setScanResult({
                  valid: true,
                  data: {
                    ticketId: ticketData.ticketId || "T12345",
                    eventId: ticketData.eventId || "E789",
                    eventName: ticketData.eventName || "Neon Nights Festival",
                    attendeeName: ticketData.attendeeName || "Rahul Sharma",
                    timestamp: new Date().toISOString(),
                  }
                });
                setScanning(false);
                
                // Reset scanner after a few seconds
                setTimeout(() => {
                  setScanResult(null);
                }, 5000);
              }, 1500);
            } catch (e) {
              setScanResult({
                valid: false,
                message: "Invalid QR code format"
              });
              setScanning(false);
            }
            
            // Stop scanning after result
            if (controlsRef.current) {
              controlsRef.current.stop();
            }
          }
          
          if (error && !(error instanceof TypeError)) {
            // Ignore TypeError as it's thrown when scanning is reset
            console.error("QR Scanner error:", error);
          }
        }
      );
      
      // Save controls for cleanup
      controlsRef.current = controls;
      
    } catch (err) {
      console.error("Failed to start scanner:", err);
      setHasPermission(false);
      setScanning(false);
    }
  };

  const stopScanner = () => {
    if (controlsRef.current) {
      controlsRef.current.stop();
      setScanning(false);
    }
  };

  const handleGoBack = () => {
    stopScanner();
    router.back();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button 
            onClick={handleGoBack}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span className={`${montserrat.className}`}>Back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
              <span className={`${firaCode.className} font-bold text-white text-xs`}>FS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full mx-auto">
          <h1 className={`${montserrat.className} text-2xl font-bold text-center mb-6`}>
            Scan Ticket QR Code
          </h1>
          
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl overflow-hidden mb-6">
            {/* Scanner Area */}
            <div className="relative aspect-square w-full">
              {hasPermission === false && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 p-6 text-center">
                  <QrCode size={48} className="text-gray-500 mb-4" />
                  <p className={`${raleway.className} text-gray-300 mb-2`}>Camera access denied</p>
                  <p className="text-sm text-gray-400 mb-4">Please allow camera access to scan QR codes</p>
                  <button
                    onClick={startScanner}
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              )}
              
              {scanResult && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 p-6 text-center">
                  {scanResult.valid ? (
                    <>
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                        <Check size={32} className="text-green-400" />
                      </div>
                      <h2 className={`${montserrat.className} text-xl font-semibold text-green-400 mb-2`}>
                        Valid Ticket
                      </h2>
                      <div className="bg-gray-800 rounded-xl p-4 w-full mb-4">
                        <div className="mb-3">
                          <p className="text-sm text-gray-400">Event</p>
                          <p className={`${raleway.className} font-medium`}>{scanResult.data?.eventName}</p>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-gray-400">Attendee</p>
                          <p className={`${raleway.className} font-medium`}>{scanResult.data?.attendeeName}</p>
                        </div>
                        <div className="mb-3">
                          <p className="text-sm text-gray-400">Ticket ID</p>
                          <p className={`${firaCode.className} text-sm`}>{scanResult.data?.ticketId}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Scanned at</p>
                          <p className={`${firaCode.className} text-sm`}>
                            {scanResult.data?.timestamp ? new Date(scanResult.data.timestamp).toLocaleString() : ''}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => setScanResult(null)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Scan Another
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-4">
                        <X size={32} className="text-red-400" />
                      </div>
                      <h2 className={`${montserrat.className} text-xl font-semibold text-red-400 mb-2`}>
                        Invalid Ticket
                      </h2>
                      <p className="text-gray-300 mb-6">{scanResult.message || "This ticket is not valid"}</p>
                      <button
                        onClick={() => setScanResult(null)}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
                      >
                        Try Again
                      </button>
                    </>
                  )}
                </div>
              )}
              
              {/* Scanner Overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 border-2 border-cyan-500/30"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-500"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-cyan-500"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-cyan-500"></div>
                
                {/* Scanning animation */}
                {scanning && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-cyan-500 animate-[scan_2s_ease-in-out_infinite]"></div>
                )}
              </div>
              
              {/* Video element for QR scanning */}
              <video 
                ref={videoRef} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Controls */}
          <div className="flex justify-center">
            {!scanning ? (
              <button
                onClick={startScanner}
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 text-white px-6 py-3 rounded-xl transition-all"
              >
                <QrCode size={20} />
                <span className={`${firaCode.className}`}>Start Scanning</span>
              </button>
            ) : (
              <button
                onClick={stopScanner}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl transition-all"
              >
                <X size={20} />
                <span className={`${firaCode.className}`}>Stop Scanning</span>
              </button>
            )}
          </div>
          
          <div className="mt-8 text-center">
            <p className={`${raleway.className} text-sm text-gray-400 mb-2`}>
              Point your camera at a FairSeat ticket QR code
            </p>
            <p className="text-xs text-gray-500">
              Make sure the QR code is well-lit and centered in the frame
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
