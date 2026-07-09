"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isLocating, setIsLocating] = useState(false);

  const shareLocation = () => {
    try {
      setIsLocating(true);
      if (typeof navigator !== 'undefined' && "geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setIsLocating(false);
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const mapLink = `https://maps.google.com/?q=${lat},${lng}`;
            const message = encodeURIComponent(`Hi, I found Yoona! I am currently at this location: ${mapLink}`);
            window.location.href = `https://wa.me/918921812117?text=${message}`;
          },
          (error) => {
            setIsLocating(false);
            alert("Could not get automatic location (please ensure Location Services are enabled). Opening WhatsApp so you can share your location manually!");
            const fallbackMessage = encodeURIComponent(`Hi, I found Yoona! I am at... (Please attach your current location here)`);
            window.location.href = `https://wa.me/918921812117?text=${fallbackMessage}`;
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
      } else {
        throw new Error("Geolocation not supported");
      }
    } catch (e) {
      setIsLocating(false);
      alert("Automatic location not supported on this device/browser. Opening WhatsApp so you can share it manually!");
      const fallbackMessage = encodeURIComponent(`Hi, I found Yoona! I am at... (Please attach your current location here)`);
      window.location.href = `https://wa.me/918921812117?text=${fallbackMessage}`;
    }
  };

  return (
    <main className="container">
      {/* Hero Section */}
      <header className="glass-card text-center animate-in" style={{ animationDelay: '0.1s' }}>
        <div style={{ position: 'relative', width: '160px', height: '160px', margin: '0 auto 1.5rem auto' }}>
          <Image
            src="/yoona_find/yoona.jpeg"
            alt="Yoona the cat"
            fill
            priority
            style={{ objectFit: 'cover', borderRadius: '50%', border: '6px solid var(--surface)', boxShadow: 'var(--shadow-sm)' }}
          />
        </div>
        <h1 className="font-bold tracking-tight" style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>
          Hi, I'm Yoona! 🐾
        </h1>
        <p className="text-muted" style={{ fontSize: '1.05rem' }}>
          If you are reading this, I might be lost. Please help me get back to my family!
        </p>
        <div className="reward-badge">
          You will be rewarded! ✨
        </div>
      </header>

      {/* Action Buttons */}
      <section className="animate-in" style={{ animationDelay: '0.2s', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

        <a href="tel:8921812117" className="btn btn-primary urgent">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Call Owner (Primary)
        </a>

        {/* Location Share Button */}
        <button onClick={shareLocation} className="btn btn-secondary" disabled={isLocating} style={{ border: '2px solid var(--primary)', color: 'var(--foreground)' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          {isLocating ? "Requesting Location..." : "Share Location via WhatsApp"}
        </button>
        <a href="https://wa.me/918921812117" className="btn btn-secondary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          WhatsApp Owner
        </a>

        {/* Alternate Numbers - Stacked for full visibility */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.5rem' }}>
          <p className="text-sm font-bold text-muted text-center" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>Alternative Numbers</p>
          <a href="tel:6282772167" className="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call: 6282772167
          </a>
          <a href="tel:8075391710" className="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Call: 8075391710
          </a>
        </div>

        <a href="mailto:annam0273@gmail.com" className="btn btn-outline" style={{ marginTop: '0.5rem' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          Email: annam0273@gmail.com
        </a>
      </section>

      {/* Info Card */}
      <section className="glass-card animate-in" style={{ animationDelay: '0.3s', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h2 className="text-lg font-bold" style={{ paddingBottom: '0.75rem', borderBottom: '2px dashed var(--surface-border)', color: 'var(--primary-hover)' }}>
          About Me & Details
        </h2>

        <div>
          <h3 className="text-sm font-bold text-muted tracking-wide" style={{ textTransform: 'uppercase', marginBottom: '0.25rem' }}>Medical & Diet</h3>
          <p>I am fully vaccinated and everything. I am an indoor-only cat. I like treats of me-o and I usually eat dry food and wet food from whiskas.</p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-muted tracking-wide" style={{ textTransform: 'uppercase', marginBottom: '0.25rem' }}>Behavior</h3>
          <p>I am friendly but easily spooked. Please don't chase me, just sit quietly and I might come to you.</p>
        </div>

        <div>
          <h3 className="text-sm font-bold text-muted tracking-wide" style={{ textTransform: 'uppercase', marginBottom: '0.25rem' }}>Veterinarian</h3>
          <p>Quilon Pet Clinic</p>
          <a href="tel:7736890548" style={{ color: 'var(--primary-hover)', fontWeight: 'bold', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.25rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            7736890548
          </a>
        </div>

        <div>
          <h3 className="text-sm font-bold text-muted tracking-wide" style={{ textTransform: 'uppercase', marginBottom: '0.25rem' }}>Home Address</h3>
          <p>Thodiyil veedu, Mevaram, 691020</p>
          <a href="https://maps.app.goo.gl/Zwur3zBVCuAZADc98?g_st=ac" target="_blank" rel="noreferrer" className="btn btn-secondary" style={{ padding: '0.75rem', fontSize: '0.9rem', justifyContent: 'center', marginTop: '0.75rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            View on Google Maps
          </a>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="glass-card animate-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-lg font-bold" style={{ paddingBottom: '0.75rem', borderBottom: '2px dashed var(--surface-border)', color: 'var(--primary-hover)' }}>
          Photos of Yoona
        </h2>
        <div className="gallery">
          <div className="gallery-img">
            <Image src="/yoona_find/yoona.jpeg" alt="Yoona" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
            <Image src="/yoona_find/yoona1.jpeg" alt="Yoona playing" fill style={{ objectFit: 'cover' }} />
          </div>
          <div className="gallery-img">
            <Image src="/yoona_find/yoona2.jpg" alt="Yoona sleeping" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>
    </main>
  );
}
