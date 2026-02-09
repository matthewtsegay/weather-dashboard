import React from 'react';
import '../styles/weather-icons.css';

interface WeatherIconProps {
    code: string;
    className?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ code, className = "" }) => {
    // Map API codes to icon types
    const getIconType = (code: string) => {
        const id = code.substring(0, 2);
        const day = code.endsWith('d');

        switch (id) {
            case '01': return day ? 'sunny' : 'moon';
            case '02': return day ? 'cloudy-day' : 'cloudy-night';
            case '03': return 'cloudy';
            case '04': return 'broken-clouds';
            case '09': return 'shower-rain';
            case '10': return day ? 'rain-day' : 'rain-night';
            case '11': return 'thunderstorm';
            case '13': return 'snow';
            case '50': return 'mist';
            default: return 'sunny';
        }
    };

    const type = getIconType(code);

    const icons = {
        sunny: (
            <svg className="weather-svg sunny" viewBox="0 0 64 64">
                <circle className="sun-core" cx="32" cy="32" r="14" fill="#FFD700" />
                <g className="sun-rays">
                    <line x1="32" y1="10" x2="32" y2="4" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                    <line x1="32" y1="54" x2="32" y2="60" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                    <line x1="54" y1="32" x2="60" y2="32" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                    <line x1="10" y1="32" x2="4" y2="32" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                    <line x1="47.5" y1="16.5" x2="51.8" y2="12.2" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                    <line x1="16.5" y1="47.5" x2="12.2" y2="51.8" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                    <line x1="47.5" y1="47.5" x2="51.8" y2="51.8" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                    <line x1="16.5" y1="16.5" x2="12.2" y2="12.2" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" />
                </g>
            </svg>
        ),
        moon: (
            <svg className="weather-svg moon" viewBox="0 0 64 64">
                <path d="M48 28c-2 0-4 .5-6 1.5-3-5-9-8-15-6s-10 7-10 13c0 6 5 11 11 11h20c5.5 0 10-4.5 10-10S53.5 28 48 28z" fill="#E0E0E0" opacity="0.4" />
                <path d="M25 18c0-8 6-15 14-16-4 0-8 2-11 5-5 5-5 13 0 18 3-2 5-5 5-8-3-2-6-1-8 1z" fill="#F4F6F0" />
            </svg>
        ),
        'cloudy-day': (
            <svg className="weather-svg cloudy" viewBox="0 0 64 64">
                <circle className="sun-behind" cx="40" cy="20" r="10" fill="#FFD700" />
                <path className="cloud-body" d="M46 48H18c-4.4 0-8-3.6-8-8s3.6-8 8-8c0-4.4 3.6-8 8-8 2.5 0 4.8 1.2 6.3 3 .6-3.9 4-7 8.1-7 4.5 0 8.2 3.6 8.3 8.1 3.2.7 5.7 3.6 5.7 6.9 0 4.4-3.6 8-8 8z" fill="#FFFFFF" filter="url(#cloud-shadow)" />
            </svg>
        ),
        'cloudy-night': (
            <svg className="weather-svg cloudy-night" viewBox="0 0 64 64">
                <path className="moon-behind" d="M38 12c0-5 3-9 7-11-2 0-4 1-5 2-4 3-4 8 0 11 2-1 3-3 3-5-3-1-4 1-5 3z" fill="#F4F6F0" />
                <path className="cloud-body" d="M46 48H18c-4.4 0-8-3.6-8-8s3.6-8 8-8c0-4.4 3.6-8 8-8 2.5 0 4.8 1.2 6.3 3 .6-3.9 4-7 8.1-7 4.5 0 8.2 3.6 8.3 8.1 3.2.7 5.7 3.6 5.7 6.9 0 4.4-3.6 8-8 8z" fill="#FFFFFF" filter="url(#cloud-shadow)" />
            </svg>
        ),
        cloudy: (
            <svg className="weather-svg cloudy" viewBox="0 0 64 64">
                <path className="cloud-body" d="M46 48H18c-4.4 0-8-3.6-8-8s3.6-8 8-8c0-4.4 3.6-8 8-8 2.5 0 4.8 1.2 6.3 3 .6-3.9 4-7 8.1-7 4.5 0 8.2 3.6 8.3 8.1 3.2.7 5.7 3.6 5.7 6.9 0 4.4-3.6 8-8 8z" fill="#FFFFFF" filter="url(#cloud-shadow)" />
            </svg>
        ),
        'broken-clouds': (
            <svg className="weather-svg broken-clouds" viewBox="0 0 64 64">
                <path className="cloud-back" d="M52 28H24c-3.3 0-6 2.7-6 6s2.7 6 6 6h28c3.3 0 6-2.7 6-6s-2.7-6-6-6z" fill="#B0BEC5" />
                <path className="cloud-front" d="M40 48H12c-3.3 0-6-2.7-6-6s2.7-6 6-6c0-3.3 2.7-6 6-6 1.9 0 3.6.9 4.7 2.3.5-2.9 3-5.3 6.1-5.3 3.4 0 6.2 2.7 6.2 6.1 2.4.5 4.3 2.7 4.3 5.2 0 3.3-2.7 6-6 6z" fill="#FFFFFF" />
            </svg>
        ),
        'shower-rain': (
            <svg className="weather-svg rain" viewBox="0 0 64 64">
                <path className="cloud-body-grey" d="M46 38H18c-4.4 0-8-3.6-8-8s3.6-8 8-8c0-4.4 3.6-8 8-8 2.5 0 4.8 1.2 6.3 3 .6-3.9 4-7 8.1-7 4.5 0 8.2 3.6 8.3 8.1 3.2.7 5.7 3.6 5.7 6.9 0 4.4-3.6 8-8 8z" fill="#B0BEC5" />
                <g className="rain-drops">
                    <line x1="24" y1="42" x2="24" y2="50" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                    <line x1="32" y1="42" x2="32" y2="54" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                    <line x1="40" y1="42" x2="40" y2="48" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                </g>
            </svg>
        ),
        'rain-day': (
            <svg className="weather-svg rain-day" viewBox="0 0 64 64">
                <circle className="sun-behind" cx="40" cy="20" r="10" fill="#FFD700" />
                <path className="cloud-body-grey" d="M42 40H18c-3.3 0-6-2.7-6-6s2.7-6 6-6c0-3.3 2.7-6 6-6 1.9 0 3.6.9 4.7 2.3.5-2.9 3-5.3 6.1-5.3 3.4 0 6.2 2.7 6.2 6.1 2.4.5 4.3 2.7 4.3 5.2 0 3.3-2.7 6-6 6z" fill="#B0BEC5" />
                <g className="rain-drops">
                    <line x1="22" y1="44" x2="20" y2="50" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                    <line x1="30" y1="44" x2="28" y2="54" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                    <line x1="38" y1="44" x2="36" y2="48" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                </g>
            </svg>
        ),
        'rain-night': (
            <svg className="weather-svg rain-night" viewBox="0 0 64 64">
                <path className="moon-behind" d="M38 12c0-5 3-9 7-11-2 0-4 1-5 2-4 3-4 8 0 11 2-1 3-3 3-5-3-1-4 1-5 3z" fill="#F4F6F0" />
                <path className="cloud-body-grey" d="M42 40H18c-3.3 0-6-2.7-6-6s2.7-6 6-6c0-3.3 2.7-6 6-6 1.9 0 3.6.9 4.7 2.3.5-2.9 3-5.3 6.1-5.3 3.4 0 6.2 2.7 6.2 6.1 2.4.5 4.3 2.7 4.3 5.2 0 3.3-2.7 6-6 6z" fill="#CFD8DC" />
                <g className="rain-drops">
                    <line x1="22" y1="44" x2="20" y2="50" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                    <line x1="30" y1="44" x2="28" y2="54" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                    <line x1="38" y1="44" x2="36" y2="48" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" />
                </g>
            </svg>
        ),
        thunderstorm: (
            <svg className="weather-svg thunderstorm" viewBox="0 0 64 64">
                <path className="cloud-body-dark" d="M46 38H18c-4.4 0-8-3.6-8-8s3.6-8 8-8c0-4.4 3.6-8 8-8 2.5 0 4.8 1.2 6.3 3 .6-3.9 4-7 8.1-7 4.5 0 8.2 3.6 8.3 8.1 3.2.7 5.7 3.6 5.7 6.9 0 4.4-3.6 8-8 8z" fill="#78909C" />
                <polygon className="lightning" points="26,36 22,46 28,46 24,56 34,44 28,44" fill="#FFEB3B" stroke="#FBC02D" strokeWidth="1" />
            </svg>
        ),
        snow: (
            <svg className="weather-svg snow" viewBox="0 0 64 64">
                <path className="cloud-body" d="M46 38H18c-4.4 0-8-3.6-8-8s3.6-8 8-8c0-4.4 3.6-8 8-8 2.5 0 4.8 1.2 6.3 3 .6-3.9 4-7 8.1-7 4.5 0 8.2 3.6 8.3 8.1 3.2.7 5.7 3.6 5.7 6.9 0 4.4-3.6 8-8 8z" fill="#FFFFFF" />
                <g className="snow-flakes">
                    <text x="20" y="50" fill="#B3E5FC" fontSize="12">❄</text>
                    <text x="32" y="54" fill="#B3E5FC" fontSize="10">❄</text>
                    <text x="42" y="48" fill="#B3E5FC" fontSize="12">❄</text>
                </g>
            </svg>
        ),
        mist: (
            <svg className="weather-svg mist" viewBox="0 0 64 64">
                <line x1="16" y1="24" x2="48" y2="24" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                <line x1="12" y1="32" x2="52" y2="32" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                <line x1="20" y1="40" x2="44" y2="40" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
            </svg>
        ),
    };

    return (
        <div className={`weather-icon-container ${className}`}>
            {icons[type as keyof typeof icons]}
        </div>
    );
};

export default WeatherIcon;
